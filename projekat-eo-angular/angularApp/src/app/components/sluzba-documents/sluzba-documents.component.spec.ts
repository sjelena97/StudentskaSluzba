import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SluzbaDocumentsComponent } from './sluzba-documents.component';

describe('SluzbaDocumentsComponent', () => {
  let component: SluzbaDocumentsComponent;
  let fixture: ComponentFixture<SluzbaDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SluzbaDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SluzbaDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
