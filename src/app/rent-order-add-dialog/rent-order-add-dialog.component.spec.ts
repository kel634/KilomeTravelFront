import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentOrderAddDialogComponent } from './rent-order-add-dialog.component';

describe('RentOrderAddDialogComponent', () => {
  let component: RentOrderAddDialogComponent;
  let fixture: ComponentFixture<RentOrderAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentOrderAddDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentOrderAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
