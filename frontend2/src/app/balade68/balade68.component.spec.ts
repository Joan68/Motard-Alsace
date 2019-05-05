import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Balade68Component } from './balade68.component';

describe('Balade68Component', () => {
  let component: Balade68Component;
  let fixture: ComponentFixture<Balade68Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Balade68Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Balade68Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
