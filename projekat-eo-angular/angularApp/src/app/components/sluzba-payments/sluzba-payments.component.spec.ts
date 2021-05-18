import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SluzbaPaymentsComponent } from './sluzba-payments.component';

describe('SluzbaPaymentsComponent', () => {
  let component: SluzbaPaymentsComponent;
  let fixture: ComponentFixture<SluzbaPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SluzbaPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SluzbaPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
