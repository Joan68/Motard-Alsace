import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBaladeComponent } from './add-balade.component';

describe('AddBaladeComponent', () => {
  let component: AddBaladeComponent;
  let fixture: ComponentFixture<AddBaladeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBaladeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBaladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
