import { RentalItemType } from "./RentalItemType";

export interface RentalItem {
  id: number;
  name: string;
  rentalItemType: RentalItemType;
  pricePerDay: number;
}