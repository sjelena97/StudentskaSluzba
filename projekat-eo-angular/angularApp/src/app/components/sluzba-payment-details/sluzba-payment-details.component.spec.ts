import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SluzbaPaymentDetailsComponent } from './sluzba-payment-details.component';

describe('SluzbaPaymentDetailsComponent', () => {
  let component: SluzbaPaymentDetailsComponent;
  let fixture: ComponentFixture<SluzbaPaymentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SluzbaPaymentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SluzbaPaymentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
