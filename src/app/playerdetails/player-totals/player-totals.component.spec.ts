import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTotalsComponent } from './player-totals.component';

describe('PlayerTotalsComponent', () => {
  let component: PlayerTotalsComponent;
  let fixture: ComponentFixture<PlayerTotalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerTotalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerTotalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
