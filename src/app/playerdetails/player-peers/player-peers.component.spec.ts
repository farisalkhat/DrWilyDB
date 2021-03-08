import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerPeersComponent } from './player-peers.component';

describe('PlayerPeersComponent', () => {
  let component: PlayerPeersComponent;
  let fixture: ComponentFixture<PlayerPeersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerPeersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerPeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
