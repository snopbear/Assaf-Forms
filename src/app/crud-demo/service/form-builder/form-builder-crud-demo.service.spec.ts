/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormBuilderCrudDemoService } from './form-builder-crud-demo.service';

describe('Service: FormBuilderCrudDemo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormBuilderCrudDemoService]
    });
  });

  it('should ...', inject([FormBuilderCrudDemoService], (service: FormBuilderCrudDemoService) => {
    expect(service).toBeTruthy();
  }));
});
