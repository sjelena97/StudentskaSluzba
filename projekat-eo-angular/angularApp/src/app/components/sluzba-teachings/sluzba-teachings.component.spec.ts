import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SluzbaTeachingsComponent } from './sluzba-teachings.component';

describe('SluzbaTeachingsComponent', () => {
  let component: SluzbaTeachingsComponent;
  let fixture: ComponentFixture<SluzbaTeachingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SluzbaTeachingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SluzbaTeachingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
