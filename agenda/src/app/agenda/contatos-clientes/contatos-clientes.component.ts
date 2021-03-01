import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-contatos-clientes',
  templateUrl: './contatos-clientes.component.html',
  styleUrls: ['./contatos-clientes.component.css']
})
export class ContatosClientesComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

  }
 

}
