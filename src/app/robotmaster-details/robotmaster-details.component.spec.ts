import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotmasterDetailsComponent } from './robotmaster-details.component';

describe('RobotmasterDetailsComponent', () => {
  let component: RobotmasterDetailsComponent;
  let fixture: ComponentFixture<RobotmasterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotmasterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotmasterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
