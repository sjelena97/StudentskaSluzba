import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SluzbaUserComponent } from './sluzba-user.component';

describe('SluzbaUserComponent', () => {
  let component: SluzbaUserComponent;
  let fixture: ComponentFixture<SluzbaUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SluzbaUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SluzbaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
