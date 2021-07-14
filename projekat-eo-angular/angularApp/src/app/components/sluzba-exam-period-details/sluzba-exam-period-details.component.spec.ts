import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SluzbaExamPeriodDetailsComponent } from './sluzba-exam-period-details.component';

describe('SluzbaExamPeriodDetailsComponent', () => {
  let component: SluzbaExamPeriodDetailsComponent;
  let fixture: ComponentFixture<SluzbaExamPeriodDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SluzbaExamPeriodDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SluzbaExamPeriodDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
