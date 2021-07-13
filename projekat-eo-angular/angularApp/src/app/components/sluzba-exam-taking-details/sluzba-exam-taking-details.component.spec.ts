import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SluzbaExamTakingDetailsComponent } from './sluzba-exam-taking-details.component';

describe('SluzbaExamTakingDetailsComponent', () => {
  let component: SluzbaExamTakingDetailsComponent;
  let fixture: ComponentFixture<SluzbaExamTakingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SluzbaExamTakingDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SluzbaExamTakingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
