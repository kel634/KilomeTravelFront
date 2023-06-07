import { Component, OnInit, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatRadioChange } from '@angular/material/radio'
import { FormControl } from '@angular/forms';
import { RentOrder } from '../shared/interfaces/RentOrder';
import { map, startWith } from 'rxjs/operators';
import { RentalItemType } from '../shared/interfaces/RentalItemType';
import { RentService } from '../services/rent.service';
import { RentalItem } from '../shared/interfaces/RentalItem';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rent-order-add-dialog',
  templateUrl: './rent-order-add-dialog.component.html',
  styleUrls: ['./rent-order-add-dialog.component.css'],
})
export class RentOrderAddDialogComponent implements OnInit {

  rentalItemControl = new FormControl<string | RentalItem>('');

  private readonly _rentService = inject(RentService);

  protected rentalItemTypes: RentalItemType[] = [];

  protected selectedRentalItemTypeId: number | null = null;

  protected rentalItems: RentalItem[] = [];

  protected filteredRentalItems: Observable<RentalItem[]>;

  protected priceEuro: number = 0;
  protected priceUsd: number = 0;
  protected priceRon: number = 0;

  constructor(
    public dialogRef: MatDialogRef<RentOrderAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RentOrder,
  ) {
    data = data || {};
    this._rentService.getRentalItemTypes().subscribe(types => {
      this.rentalItemTypes = types;
    });
  }

  ngOnInit() {
    
  }

  private _filter(value: string): RentalItem[] {
    const filterValue = value.toLowerCase();

    return this.rentalItems.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  selectedRentalItemTypeChange($event: MatRadioChange) {
    if (this.selectedRentalItemTypeId !== null) {
      
      this._rentService.getRentalItems(this.selectedRentalItemTypeId).subscribe(items => {
        this.rentalItems = items;

        this.filteredRentalItems = this.rentalItemControl.valueChanges.pipe(
          startWith(''),
          map(value => {
            const name = typeof value === 'string' ? value : value?.name;
            return name ? this._filter(name as string) : this.rentalItems.slice();
          }),
        );
      });
    }
  }

  displayFn(item: RentalItem): string {
    return item && item.name ? item.name : '';
  }

  setRentalItem(item: RentalItem) {
    this.data.rentalItemId = item.id;

    // show prices
    this._rentService.getExchangeRates().subscribe(rates => {
      this.priceEuro = item.pricePerDay;
      this.priceRon = item.pricePerDay * rates.data.RON;
      this.priceUsd = item.pricePerDay * rates.data.USD;
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
