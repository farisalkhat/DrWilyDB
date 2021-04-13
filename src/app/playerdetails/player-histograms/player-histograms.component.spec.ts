import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerHistogramsComponent } from './player-histograms.component';

describe('PlayerHistogramsComponent', () => {
  let component: PlayerHistogramsComponent;
  let fixture: ComponentFixture<PlayerHistogramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerHistogramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerHistogramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
