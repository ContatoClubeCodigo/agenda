import { Component, OnInit } from '@angular/core'; 
import { ApiUsersService } from '../../../services/api-users.service'; 
import {MatDialog} from '@angular/material/dialog';
import { ContatosEditarComponent } from './editar/contatos-editar.component'; 


@Component({
  selector: 'app-contatos-clientes',
  templateUrl: './contatos-clientes.component.html',
  styleUrls: ['./contatos-clientes.component.css']
})
export class ContatosClientesComponent implements OnInit {

  public users: any[] = [

    { 'id': 0, 
      'name': 'Julio Fazenda',
      'office': 'Senior Analist',
      'articles': 38,
      'followers': 980,
      'rating':8.9,
      'photo': 'Velazquez.jpg' 
    },

    { 'id': 1, 
      'name': 'Jasmine Spencer',
      'office': 'Pleno Journalist',
      'articles': 22,
      'followers': 700,
      'rating':7.3,
      'photo': 'alice.jpg' 
    },

    { 'id': 2, 
      'name': 'Andrew Simon',
      'office': 'Junior Journalist',
      'articles': 13,
      'followers': 600,
      'rating':5.9,
      'photo': 'Boyle.jpg' 
    },     

  ];
  



  constructor(private apiUsersService: ApiUsersService,
              public dialog: MatDialog) { }

  ngOnInit(): void {

      this.Get(); 
  }
 
 
  Get() {

    let _input = {
        id_Usuario: 0,
        Rota: 'Users/Get'
    }

    return this.apiUsersService.Send(_input).subscribe(data => { 
       
      

    }, error => {});
  
  }

  EditDialog(item: any) { 
  
        const _data  = { 
            type: 'Editar',  
            data: item
        };  
        const dialogRef = this.dialog.open(ContatosEditarComponent, {    
            data: _data
        });

        dialogRef.afterClosed().subscribe(result => {               
                
            if (result === undefined ) {
                

            } else { 

            }  

        });
      

  }

}
