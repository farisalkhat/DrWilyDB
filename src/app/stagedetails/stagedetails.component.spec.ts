import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StagedetailsComponent } from './stagedetails.component';

describe('StagedetailsComponent', () => {
  let component: StagedetailsComponent;
  let fixture: ComponentFixture<StagedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StagedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StagedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
