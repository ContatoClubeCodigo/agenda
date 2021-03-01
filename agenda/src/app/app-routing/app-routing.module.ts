import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CarteiraClientesComponent } from '../agenda/carteira-clientes/carteira-clientes.component';
import { ContatosClientesComponent } from '../agenda/contatos-clientes/contatos-clientes.component';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { LayoutComponent } from '../layout/layout.component';
 
 
const routes_: Routes = [

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

const routes = [
  {
    path: 'app',
    loadChildren: './home/home.module#HomeModule' 
  },
  {
    path: 'agenda/contatos-clientes',
    loadChildren: './home/home.module#HomeModule' 
  } 
];

@NgModule({

  declarations: [ 
    AppComponent,
    LayoutComponent
  ],
  imports: [ 
    [RouterModule.forRoot(routes_)],
  ],
  providers: [],
  exports:   [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
