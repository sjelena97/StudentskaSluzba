import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SluzbaProfileComponent } from './sluzba-profile.component';

describe('SluzbaProfileComponent', () => {
  let component: SluzbaProfileComponent;
  let fixture: ComponentFixture<SluzbaProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SluzbaProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SluzbaProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
