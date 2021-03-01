import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';

import { RouterModule, Routes } from '@angular/router';    
import { ContatosClientesComponent } from './contatos-clientes.component';
import { ContatosEditarComponent } from './editar/contatos-editar.component';
 
     
     
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
        MatIconModule
    ],
    providers   : [ 
        { provide:  MatDialogRef }  
    ],
    entryComponents: [ ContatosEditarComponent ]

})
export class ContatosClientesModule
{
}