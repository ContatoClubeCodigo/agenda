import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component'
import { CarteiraClientesComponent } from '../agenda/carteira-clientes/carteira-clientes.component'
import { ContatosClientesComponent } from '../agenda/contatos-clientes/contatos-clientes.component'
import { HomeComponent } from '../home/home.component'

const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
      path: '',
      component: LayoutComponent,
      children: [
        { path: 'carteira-clientes', component: CarteiraClientesComponent },
        { path: 'contatos-clientes', component: ContatosClientesComponent },
        { path: 'home', component: HomeComponent } 

      ]

    }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
