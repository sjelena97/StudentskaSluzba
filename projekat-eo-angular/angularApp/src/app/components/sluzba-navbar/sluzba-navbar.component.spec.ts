import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SluzbaNavbarComponent } from './sluzba-navbar.component';

describe('SluzbaNavbarComponent', () => {
  let component: SluzbaNavbarComponent;
  let fixture: ComponentFixture<SluzbaNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SluzbaNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SluzbaNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
