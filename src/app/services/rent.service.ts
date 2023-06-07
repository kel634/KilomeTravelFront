import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { RentOrder } from '../shared/interfaces/RentOrder';
import { Observable, of } from 'rxjs';
import { tap, pluck, catchError } from 'rxjs/operators';
import { RentalItem } from '../shared/interfaces/RentalItem';
import { RentalItemType } from '../shared/interfaces/RentalItemType';
import { RentReturn } from '../shared/interfaces/RentReturn';
import { ExchangeRates } from '../shared/interfaces/ExchangeRates';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class RentService {
  
  constructor(private http: HttpClient) {}

  getRentalItemTypes(): Observable<RentalItemType[]> {
    return this.http.get<RentalItemType[]>('https://localhost:7062/api/RentalItems/Types').pipe(
      catchError(() => of([]))
    );
  }

  getRentalItems(itemTypeId: number): Observable<RentalItem[]> {
    return this.http.get<RentalItem[]>(`https://localhost:7062/api/RentalItems/type/${itemTypeId}`).pipe(
      catchError(() => of([]))
    );
  }

  getRentOrders(): Observable<RentOrder[]> {
    return this.http.get<RentOrder[]>('https://localhost:7062/api/RentOrders').pipe(
      catchError(() => of([]))
    );
  }

  postOrder(order: RentOrder): Observable<RentOrder> {
    return this.http.post<RentOrder>('https://localhost:7062/api/RentOrders', order);
  }

  returnOrder(rentReturn: RentReturn): Observable<RentOrder> {
    return this.http.post<RentOrder>('https://localhost:7062/api/RentOrders', rentReturn);
  }

  getExchangeRates(): Observable<ExchangeRates> {
    return this.http.get<ExchangeRates>(`https://api.freecurrencyapi.com/v1/latest?apikey=${environment.freecurrencyapikey}&currencies=USD%2CCAD%2CHUF%2CRON&base_currency=EUR`)
  }
}