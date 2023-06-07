import { Component, inject } from '@angular/core';
import { RentService } from '../services/rent.service';
import { RentOrder } from '../shared/interfaces/RentOrder';
import { MatDialog } from '@angular/material/dialog';
import { RentOrderAddDialogComponent } from '../rent-order-add-dialog/rent-order-add-dialog.component';
import { RentReturn } from '../shared/interfaces/RentReturn';

@Component({
  selector: 'app-rent-order-list',
  templateUrl: './rent-order-list.component.html',
  styleUrls: ['./rent-order-list.component.css'],
})
export class RentOrderListComponent {

  private readonly _rentService = inject(RentService);

  protected rentOrders: RentOrder[] = [];

  constructor(public dialog: MatDialog) {
    this._rentService.getRentOrders().subscribe(orders => {
      this.rentOrders = orders;
    });
  }

  protected addNewOrderDialog() {
    const dialogRef = this.dialog.open(RentOrderAddDialogComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe((order) => this.addNewOrder(order));
  }

  private addNewOrder(newOrder: RentOrder) {
    this._rentService.postOrder(newOrder).subscribe(order => {
      this.rentOrders.push(order)
    });
  }

  protected returnOrderDialog(rentOrderId: number) {
    const dialogRef = this.dialog.open(RentOrderAddDialogComponent, {
      data: { rentOrderId },
    });

    dialogRef.afterClosed().subscribe((rentReturn) => this.returnOrder(rentReturn));
  }

  private returnOrder(rentReturn: RentReturn) {
    this._rentService.returnOrder(rentReturn).subscribe(order => {
      this.rentOrders = this.rentOrders.map(o => o.id === order.id ? order : o);
    });
  }
}
