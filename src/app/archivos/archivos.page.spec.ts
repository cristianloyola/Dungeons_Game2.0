import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivosPage } from './archivos.page';

describe('ArchivosPage', () => {
  let component: ArchivosPage;
  let fixture: ComponentFixture<ArchivosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
