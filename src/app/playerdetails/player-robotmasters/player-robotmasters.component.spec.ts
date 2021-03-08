import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerRobotmastersComponent } from './player-robotmasters.component';

describe('PlayerRobotmastersComponent', () => {
  let component: PlayerRobotmastersComponent;
  let fixture: ComponentFixture<PlayerRobotmastersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerRobotmastersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerRobotmastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
