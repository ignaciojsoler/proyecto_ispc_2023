import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrecuentesComponent } from './frecuentes.component';

describe('FrecuentesComponent', () => {
  let component: FrecuentesComponent;
  let fixture: ComponentFixture<FrecuentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrecuentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrecuentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
