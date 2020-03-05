/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HtmlCheckBoxPutStaticComponent } from './html-check-box-put-static.component';

describe('HtmlCheckBoxPutStaticComponent', () => {
  let component: HtmlCheckBoxPutStaticComponent;
  let fixture: ComponentFixture<HtmlCheckBoxPutStaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlCheckBoxPutStaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlCheckBoxPutStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
