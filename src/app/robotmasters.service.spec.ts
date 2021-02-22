import { TestBed } from '@angular/core/testing';

import { RobotmastersService } from './robotmasters.service';

describe('RobotmastersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RobotmastersService = TestBed.get(RobotmastersService);
    expect(service).toBeTruthy();
  });
});
