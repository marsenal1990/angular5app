import { TestBed, inject } from '@angular/core/testing';

import { ItemDetailResolverService } from './item-detail-resolver.service';

describe('ItemDetailResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemDetailResolverService]
    });
  });

  it('should be created', inject([ItemDetailResolverService], (service: ItemDetailResolverService) => {
    expect(service).toBeTruthy();
  }));
});
