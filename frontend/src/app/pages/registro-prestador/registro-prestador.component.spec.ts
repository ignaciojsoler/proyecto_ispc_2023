import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPrestadorComponent } from './registro-prestador.component';

describe('RegistroPrestadorComponent', () => {
  let component: RegistroPrestadorComponent;
  let fixture: ComponentFixture<RegistroPrestadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroPrestadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroPrestadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
