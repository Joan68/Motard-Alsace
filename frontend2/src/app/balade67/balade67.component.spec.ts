import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Balade67Component } from './balade67.component';

describe('Balade67Component', () => {
  let component: Balade67Component;
  let fixture: ComponentFixture<Balade67Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Balade67Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Balade67Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
