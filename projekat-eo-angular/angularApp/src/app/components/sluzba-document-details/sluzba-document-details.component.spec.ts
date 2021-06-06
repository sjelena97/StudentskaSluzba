import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SluzbaDocumentDetailsComponent } from './sluzba-document-details.component';

describe('SluzbaDocumentDetailsComponent', () => {
  let component: SluzbaDocumentDetailsComponent;
  let fixture: ComponentFixture<SluzbaDocumentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SluzbaDocumentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SluzbaDocumentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
