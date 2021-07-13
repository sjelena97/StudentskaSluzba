import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SluzbaExamDetailsComponent } from './sluzba-exam-details.component';

describe('SluzbaExamDetailsComponent', () => {
  let component: SluzbaExamDetailsComponent;
  let fixture: ComponentFixture<SluzbaExamDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SluzbaExamDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SluzbaExamDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
