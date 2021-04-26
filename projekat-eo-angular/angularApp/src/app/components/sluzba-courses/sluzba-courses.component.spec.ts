import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SluzbaCoursesComponent } from './sluzba-courses.component';

describe('SluzbaCoursesComponent', () => {
  let component: SluzbaCoursesComponent;
  let fixture: ComponentFixture<SluzbaCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SluzbaCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SluzbaCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
