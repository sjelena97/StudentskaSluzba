import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SluzbaSidebarComponent } from './sluzba-sidebar.component';

describe('SluzbaSidebarComponent', () => {
  let component: SluzbaSidebarComponent;
  let fixture: ComponentFixture<SluzbaSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SluzbaSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SluzbaSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
