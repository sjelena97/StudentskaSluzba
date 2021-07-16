import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SluzbaGradesComponent } from './sluzba-grades.component';

describe('SluzbaGradesComponent', () => {
  let component: SluzbaGradesComponent;
  let fixture: ComponentFixture<SluzbaGradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SluzbaGradesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SluzbaGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
