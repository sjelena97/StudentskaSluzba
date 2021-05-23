import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SluzbaCourseDetailsComponent } from './sluzba-course-details.component';

describe('SluzbaCourseDetailsComponent', () => {
  let component: SluzbaCourseDetailsComponent;
  let fixture: ComponentFixture<SluzbaCourseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SluzbaCourseDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SluzbaCourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
