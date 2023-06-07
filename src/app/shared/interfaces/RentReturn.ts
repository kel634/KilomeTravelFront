export interface RentReturn {
  id: number;
  rentOrderId: number;
  returnTime: Date;
  fuelPenalty: string;
  damagePenalty: string;
  damageDescription: string;
}