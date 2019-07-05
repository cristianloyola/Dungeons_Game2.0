import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabs8Page } from './tabs8.page';

describe('Tabs8Page', () => {
  let component: Tabs8Page;
  let fixture: ComponentFixture<Tabs8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tabs8Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tabs8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
