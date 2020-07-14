import { TestBed } from '@angular/core/testing';

import { AuthMessagesService } from './auth-messages.service';

describe('AuthMessagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthMessagesService = TestBed.get(AuthMessagesService);
    expect(service).toBeTruthy();
  });
});
