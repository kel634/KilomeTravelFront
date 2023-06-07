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
import { RentReturn } from '../shared/interfaces/RentReturn';

@Component({
  selector: 'app-rent-order-return-dialog',
  templateUrl: './rent-order-return-dialog.component.html',
  styleUrls: ['./rent-order-return-dialog.component.css']
})
export class RentOrderReturnDialogComponent {
  private readonly _rentService = inject(RentService);

  constructor(
    public dialogRef: MatDialogRef<RentOrderReturnDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RentReturn,
  ) {
    data = data || {};
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
