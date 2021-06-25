import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SluzbaTeacherDetailsComponent } from './sluzba-teacher-details.component';

describe('SluzbaTeacherDetailsComponent', () => {
  let component: SluzbaTeacherDetailsComponent;
  let fixture: ComponentFixture<SluzbaTeacherDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SluzbaTeacherDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SluzbaTeacherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
