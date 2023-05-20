import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPrestadorComponent } from './datos-prestador.component';

describe('DatosPrestadorComponent', () => {
  let component: DatosPrestadorComponent;
  let fixture: ComponentFixture<DatosPrestadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosPrestadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosPrestadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
