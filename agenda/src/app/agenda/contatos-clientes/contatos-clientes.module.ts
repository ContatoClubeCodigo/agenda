import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'; 
import { MatDialogRef } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon'; 
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import {MatInputModule} from '@angular/material/input'


import { RouterModule, Routes } from '@angular/router';    
import { ContatosClientesComponent } from './contatos-clientes.component';
import { ContatosEditarComponent } from './editar/contatos-editar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
 
     
     
const routes: Routes = [
    {
        path     : '**',
        component: ContatosClientesComponent 
    }
];

 
@NgModule({
    declarations: [
        ContatosClientesComponent,
        ContatosEditarComponent, 
    ],
    imports     : [
  
        RouterModule.forChild(routes),  
        CommonModule,
        MatIconModule,
        MatSelectModule, 
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule, MatInputModule 
    ],
    providers   : [ 
        { provide:  MatDialogRef } , 
    ],
    entryComponents: [ ContatosEditarComponent ]

})
export class ContatosClientesModule
{
}