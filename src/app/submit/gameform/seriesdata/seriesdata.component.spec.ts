import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesdataComponent } from './seriesdata.component';

describe('SeriesdataComponent', () => {
  let component: SeriesdataComponent;
  let fixture: ComponentFixture<SeriesdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
