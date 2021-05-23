import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SluzbaEnrollmentsComponent } from './sluzba-enrollments.component';

describe('SluzbaEnrollmentsComponent', () => {
  let component: SluzbaEnrollmentsComponent;
  let fixture: ComponentFixture<SluzbaEnrollmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SluzbaEnrollmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SluzbaEnrollmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
