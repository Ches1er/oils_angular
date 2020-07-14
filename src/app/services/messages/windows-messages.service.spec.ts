import { TestBed } from '@angular/core/testing';

import { WindowsMessagesService } from './windows-messages.service';

describe('WindowsMessagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WindowsMessagesService = TestBed.get(WindowsMessagesService);
    expect(service).toBeTruthy();
  });
});
