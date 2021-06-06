import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SluzbaStudentDetailsComponent } from './sluzba-student-details.component';

describe('SluzbaStudentDetailsComponent', () => {
  let component: SluzbaStudentDetailsComponent;
  let fixture: ComponentFixture<SluzbaStudentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SluzbaStudentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SluzbaStudentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
