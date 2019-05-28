import { TestBed } from '@angular/core/testing';

import { GravyNgMaterialComponentsService } from './gravy-ng-material-components.service';

describe('GravyNgMaterialComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GravyNgMaterialComponentsService = TestBed.get(GravyNgMaterialComponentsService);
    expect(service).toBeTruthy();
  });
});
