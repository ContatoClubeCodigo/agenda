import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule} from '@angular/material/icon';

import { RouterModule, Routes } from '@angular/router';     
import { CarteiraClientesComponent } from './carteira-clientes.component'; 
     
     
const routes: Routes = [
    {
        path     : '**',
        component: CarteiraClientesComponent 
    }
];

 
@NgModule({
    declarations: [
        CarteiraClientesComponent 
    ],
    imports     : [
   
        BrowserModule,
        CommonModule,
        MatIconModule,
        RouterModule.forChild(routes) 
    ],
    providers   : [ 
        { provide:  MatDialogRef }  
    ],
    entryComponents: [ ]

})
export class CarteiraClientesModule
{
}