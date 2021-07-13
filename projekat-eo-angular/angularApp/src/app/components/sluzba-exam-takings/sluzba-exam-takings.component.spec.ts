import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SluzbaExamTakingsComponent } from './sluzba-exam-takings.component';

describe('SluzbaExamTakingsComponent', () => {
  let component: SluzbaExamTakingsComponent;
  let fixture: ComponentFixture<SluzbaExamTakingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SluzbaExamTakingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SluzbaExamTakingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
