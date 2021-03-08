import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerhomeComponent } from './playerhome.component';

describe('PlayerhomeComponent', () => {
  let component: PlayerhomeComponent;
  let fixture: ComponentFixture<PlayerhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
