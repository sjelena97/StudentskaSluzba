import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SluzbaNotFoundPageComponent } from './sluzba-not-found-page.component';

describe('SluzbaNotFoundPageComponent', () => {
  let component: SluzbaNotFoundPageComponent;
  let fixture: ComponentFixture<SluzbaNotFoundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SluzbaNotFoundPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SluzbaNotFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
