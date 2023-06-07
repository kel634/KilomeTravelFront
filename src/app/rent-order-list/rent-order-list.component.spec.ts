import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentOrderListComponent } from './rent-order-list.component';

describe('RentOrderListComponent', () => {
  let component: RentOrderListComponent;
  let fixture: ComponentFixture<RentOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentOrderListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
