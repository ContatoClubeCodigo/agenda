import { Component, OnInit } from '@angular/core'; 
import { ApiUsersService } from '../../../services/api-users.service';  

@Component({
  selector: 'app-carteira-clientes',
  templateUrl: './carteira-clientes.component.html',
  styleUrls: ['./carteira-clientes.component.css']
})
export class CarteiraClientesComponent implements OnInit {
 

  public custumers: Array<any> = [
    { 'id': 0, 
      'name': 'Santander',
      'description': 'O serviço gratuito do Google traduz instantaneamente palavras, frases e páginas da Web entre o inglês e mais de 100 outros idiomas.',
      'num_register': 2980,
      'success': 358,
      'failures': 120,
      'dialed': 470,
      'image': 'santander.png' 
    },

    { 'id': 1, 
      'name': 'Itaú',
      'description': 'O serviço gratuito do Google traduz instantaneamente palavras, frases e páginas da Web entre o inglês e mais de 100 outros idiomas.',
      'num_register': 2980,
      'success': 358,
      'failures': 120,
      'dialed': 470,
      'image': 'itau.jpg'  
    },

    { 'id': 2, 
      'name': 'Bradesco',
      'description': 'O serviço gratuito do Google traduz instantaneamente palavras, frases e páginas da Web entre o inglês e mais de 100 outros idiomas.',
      'num_register': 2980,
      'success': 358,
      'failures': 120,
      'dialed': 470,
      'image': 'bradesco.jpg'   
    },

    { 'id': 2, 
      'name': 'Revista ISTOÉ',
      'description': 'O serviço gratuito do Google traduz instantaneamente palavras, frases e páginas da Web entre o inglês e mais de 100 outros idiomas.',
      'num_register': 2980,
      'success': 358,
      'failures': 120,
      'dialed': 470,
      'image': 'istoe.png'   
    }
  ];
  
  constructor(private apiUsersService: ApiUsersService) { }

  ngOnInit(): void {

    this.Get(); 

  }

   
  Get() {
  
  
  }

}
