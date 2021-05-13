import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SluzbaStudentComponent } from './sluzba-student.component';

describe('SluzbaStudentComponent', () => {
  let component: SluzbaStudentComponent;
  let fixture: ComponentFixture<SluzbaStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SluzbaStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SluzbaStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
