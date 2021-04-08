import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchnotesComponent } from './patchnotes.component';

describe('PatchnotesComponent', () => {
  let component: PatchnotesComponent;
  let fixture: ComponentFixture<PatchnotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatchnotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatchnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
