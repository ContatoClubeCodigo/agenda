import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteiraClientesComponent } from './carteira-clientes.component';

describe('CarteiraClientesComponent', () => {
  let component: CarteiraClientesComponent;
  let fixture: ComponentFixture<CarteiraClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteiraClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteiraClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
