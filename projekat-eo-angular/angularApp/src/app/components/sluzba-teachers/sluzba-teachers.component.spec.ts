import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SluzbaTeachersComponent } from './sluzba-teachers.component';

describe('SluzbaTeachersComponent', () => {
  let component: SluzbaTeachersComponent;
  let fixture: ComponentFixture<SluzbaTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SluzbaTeachersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SluzbaTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
