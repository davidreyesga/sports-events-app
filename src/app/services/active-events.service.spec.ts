import { TestBed } from '@angular/core/testing';

import { ActiveEventsService } from './active-events.service';

describe('ActiveEventsService', () => {
  let service: ActiveEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
