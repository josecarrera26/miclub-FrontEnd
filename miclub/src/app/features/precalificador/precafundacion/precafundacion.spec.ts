import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Precafundacion } from './precafundacion';

describe('Precafundacion', () => {
  let component: Precafundacion;
  let fixture: ComponentFixture<Precafundacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Precafundacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Precafundacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
