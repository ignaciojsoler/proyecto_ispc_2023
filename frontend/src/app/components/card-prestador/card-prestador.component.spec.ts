import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPrestadorComponent } from './card-prestador.component';

describe('CardPrestadorComponent', () => {
  let component: CardPrestadorComponent;
  let fixture: ComponentFixture<CardPrestadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPrestadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPrestadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
