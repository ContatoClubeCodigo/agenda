import { NgModule } from '@angular/core'; 
import { AppComponent } from './app.component';

import { LayoutComponent } from './layout/layout.component';  
import { Routes, RouterModule } from '@angular/router';

import { ContatosClientesComponent } from './agenda/contatos-clientes/contatos-clientes.component';
import { CarteiraClientesComponent } from './agenda/carteira-clientes/carteira-clientes.component';
import { HomeComponent } from './home/home.component';  
import { AuthService } from '../services/auth.service';
 
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
  exports:   [],
  bootstrap: []
})

export class AppsModule { }
