import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonAccessibleComponent } from './non-accessible.component';

describe('NonAccessibleComponent', () => {
  let component: NonAccessibleComponent;
  let fixture: ComponentFixture<NonAccessibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonAccessibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonAccessibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
