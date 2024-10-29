import { TestBed } from '@angular/core/testing';

import { BedrockTextProcessingServiceService } from './bedrock-text-processing-service.service';

describe('BedrockTextProcessingServiceService', () => {
  let service: BedrockTextProcessingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BedrockTextProcessingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
