import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SluzbaHomeComponent } from './sluzba-home.component';

describe('SluzbaHomeComponent', () => {
  let component: SluzbaHomeComponent;
  let fixture: ComponentFixture<SluzbaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SluzbaHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SluzbaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
