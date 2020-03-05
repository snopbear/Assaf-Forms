/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HtmlCheckBoxPutDynamicComponent } from './html-check-box-put-dynamic.component';

describe('HtmlCheckBoxPutDynamicComponent', () => {
  let component: HtmlCheckBoxPutDynamicComponent;
  let fixture: ComponentFixture<HtmlCheckBoxPutDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlCheckBoxPutDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlCheckBoxPutDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
