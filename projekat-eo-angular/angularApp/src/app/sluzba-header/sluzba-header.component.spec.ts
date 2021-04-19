import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SluzbaHeaderComponent } from './sluzba-header.component';

describe('SluzbaHeaderComponent', () => {
  let component: SluzbaHeaderComponent;
  let fixture: ComponentFixture<SluzbaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SluzbaHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SluzbaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
