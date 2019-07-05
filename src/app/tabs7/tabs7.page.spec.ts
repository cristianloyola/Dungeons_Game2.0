import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabs7Page } from './tabs7.page';

describe('Tabs7Page', () => {
  let component: Tabs7Page;
  let fixture: ComponentFixture<Tabs7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tabs7Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tabs7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
