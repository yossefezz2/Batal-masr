import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRepresntorComponent } from './add-represntor.component';

describe('AddRepresntorComponent', () => {
  let component: AddRepresntorComponent;
  let fixture: ComponentFixture<AddRepresntorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRepresntorComponent]
    });
    fixture = TestBed.createComponent(AddRepresntorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
