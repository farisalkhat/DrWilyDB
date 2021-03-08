import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSeriesComponent } from './player-series.component';

describe('PlayerSeriesComponent', () => {
  let component: PlayerSeriesComponent;
  let fixture: ComponentFixture<PlayerSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
