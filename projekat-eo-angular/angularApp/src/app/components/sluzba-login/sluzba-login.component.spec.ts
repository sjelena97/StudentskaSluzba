import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SluzbaLoginComponent } from './sluzba-login.component';

describe('SluzbaLoginComponent', () => {
  let component: SluzbaLoginComponent;
  let fixture: ComponentFixture<SluzbaLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SluzbaLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SluzbaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
