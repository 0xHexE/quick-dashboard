import { TestBed, inject } from '@angular/core/testing';

import { TitleManagerService } from './title-manager.service';

describe('TitleManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TitleManagerService]
    });
  });

  it('should be created', inject([TitleManagerService], (service: TitleManagerService) => {
    expect(service).toBeTruthy();
  }));
});
