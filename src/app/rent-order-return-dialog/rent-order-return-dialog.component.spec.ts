import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentOrderReturnDialogComponent } from './rent-order-return-dialog.component';

describe('RentOrderReturnDialogComponent', () => {
  let component: RentOrderReturnDialogComponent;
  let fixture: ComponentFixture<RentOrderReturnDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentOrderReturnDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentOrderReturnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
