import { RentalItem } from "./RentalItem";

export interface RentOrder {
  id: number;
  rentalItemId: number;
  reservationTime: Date;
  customerName: string;
  customerPhoneNumber: string;
}
