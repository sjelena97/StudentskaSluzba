import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SluzbaExamsComponent } from './sluzba-exams.component';

describe('SluzbaExamsComponent', () => {
  let component: SluzbaExamsComponent;
  let fixture: ComponentFixture<SluzbaExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SluzbaExamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SluzbaExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
