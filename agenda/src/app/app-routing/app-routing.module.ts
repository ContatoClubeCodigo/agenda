import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router'; 
import { CarteiraClientesComponent } from '../agenda/carteira-clientes/carteira-clientes.component';
import { ContatosClientesComponent } from '../agenda/contatos-clientes/contatos-clientes.component';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { LayoutComponent } from '../layout/layout.component';
import { LoginComponent } from '../security/login/login.component';
import { NewUserComponent } from '../security/new-user/new-user.component';
import { WelcomeComponent } from '../welcome/welcome.component';
 
 
const routes_: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [

      { path: 'login',              component: LoginComponent },
      { path: 'new-user',           component: NewUserComponent },
      { path: 'welcome',            component: WelcomeComponent },
      { path: 'home',               component: HomeComponent } ,
      { path: 'app',                component: AppComponent } ,
      { path: 'layout',             component: LayoutComponent },

      { path: 'carteira-clientes',  component: CarteiraClientesComponent },
      { path: 'contatos-clientes',  component: ContatosClientesComponent },   

    ]

  }
]

const appRoutes: Routes = [
  {
    path        : 'agenda',
    loadChildren: './carteira-clientes/carteira-clientes/carteira-clientes.module#CarteiraClientesModule'
  },
  {
      path        : 'agenda',
      loadChildren: './contatos-clientes/contatos-clientes/contatos-clientes.module#ContatosClientesModule'
  },
  {
      path        : 'app',
      loadChildren: './social-buttons/social-buttons/social-buttons.module#SocialButtonsModule'
  }
];

@NgModule({

  declarations: [ 
    AppComponent,
    LayoutComponent
  ],
  imports: [ 
    [RouterModule.forRoot(appRoutes)],
  ],
  providers: [],
  exports:   [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
