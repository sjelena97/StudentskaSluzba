import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SluzbaExamPeriodsComponent } from './sluzba-exam-periods.component';

describe('SluzbaExamPeriodsComponent', () => {
  let component: SluzbaExamPeriodsComponent;
  let fixture: ComponentFixture<SluzbaExamPeriodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SluzbaExamPeriodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SluzbaExamPeriodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
