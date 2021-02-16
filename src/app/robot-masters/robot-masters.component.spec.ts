import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotMastersComponent } from './robot-masters.component';

describe('RobotMastersComponent', () => {
  let component: RobotMastersComponent;
  let fixture: ComponentFixture<RobotMastersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotMastersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotMastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
