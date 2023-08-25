import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatureCardsComponent } from './nature-cards.component';

describe('NatureCardsComponent', () => {
  let component: NatureCardsComponent;
  let fixture: ComponentFixture<NatureCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NatureCardsComponent]
    });
    fixture = TestBed.createComponent(NatureCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
