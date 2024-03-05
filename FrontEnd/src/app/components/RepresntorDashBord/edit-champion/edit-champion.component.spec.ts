import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChampionComponent } from './edit-champion.component';

describe('EditChampionComponent', () => {
  let component: EditChampionComponent;
  let fixture: ComponentFixture<EditChampionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditChampionComponent]
    });
    fixture = TestBed.createComponent(EditChampionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
