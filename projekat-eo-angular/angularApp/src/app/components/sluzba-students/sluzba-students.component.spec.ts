import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SluzbaStudentsComponent } from './sluzba-students.component';

describe('SluzbaStudentsComponent', () => {
  let component: SluzbaStudentsComponent;
  let fixture: ComponentFixture<SluzbaStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SluzbaStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SluzbaStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
