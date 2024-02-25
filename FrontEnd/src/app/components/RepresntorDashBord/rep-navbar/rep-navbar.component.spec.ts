import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepNavbarComponent } from './rep-navbar.component';

describe('RepNavbarComponent', () => {
  let component: RepNavbarComponent;
  let fixture: ComponentFixture<RepNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepNavbarComponent]
    });
    fixture = TestBed.createComponent(RepNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
