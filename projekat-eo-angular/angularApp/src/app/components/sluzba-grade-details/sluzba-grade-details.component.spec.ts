import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SluzbaGradeDetailsComponent } from './sluzba-grade-details.component';

describe('SluzbaGradeDetailsComponent', () => {
  let component: SluzbaGradeDetailsComponent;
  let fixture: ComponentFixture<SluzbaGradeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SluzbaGradeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SluzbaGradeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
