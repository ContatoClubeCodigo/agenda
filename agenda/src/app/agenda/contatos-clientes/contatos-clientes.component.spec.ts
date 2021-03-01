import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosClientesComponent } from './contatos-clientes.component';

describe('ContatosClientesComponent', () => {
  let component: ContatosClientesComponent;
  let fixture: ComponentFixture<ContatosClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatosClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatosClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
