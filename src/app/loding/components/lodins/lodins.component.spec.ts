import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LodinsComponent } from './lodins.component';

describe('LodinsComponent', () => {
  let component: LodinsComponent;
  let fixture: ComponentFixture<LodinsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LodinsComponent]
    });
    fixture = TestBed.createComponent(LodinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
