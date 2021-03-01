import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { AppComponent } from './app.component'; 
import { Routes, RouterModule } from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http';  
import { AuthService } from '../services/auth.service';
import { SimpleNotificationsModule } from 'angular2-notifications';  
import { NoopAnimationsModule } from '@angular/platform-browser/animations';   
import {MatIconModule} from '@angular/material/icon';

/* páginas */
import { HomeComponent } from './home/home.component';  
import { WelcomeComponent } from './welcome/welcome.component';
import { LayoutComponent } from './layout/layout.component'; 
import { ContatosClientesComponent } from './agenda/contatos-clientes/contatos-clientes.component';
import { CarteiraClientesComponent } from './agenda/carteira-clientes/carteira-clientes.component';

/* modules das páginas */
import { ContatosClientesModule } from './agenda/contatos-clientes/contatos-clientes.module';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

const routes_: Routes = [

  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      
      { path: 'welcome',  component: WelcomeComponent },
      { path: 'home',     component: HomeComponent } ,
      { path: 'app',      component: AppComponent } ,
      { path: 'layout',   component: LayoutComponent },

      { path: 'carteira-clientes', component: CarteiraClientesComponent },
      { path: 'contatos-clientes', component: ContatosClientesComponent },

    ]

  }
]

     
const appRoutes: Routes = [
  {
      path        : 'agenda',
      loadChildren: './contatos-clientes/contatos-clientes/contatos-clientes.module#ContatosClientesModule'
  } 
];

@NgModule({

  declarations: [ 
    
    LayoutComponent,
    AppComponent, 
    WelcomeComponent

  ],
  imports: [ 
    [RouterModule.forRoot(routes_)],
    [RouterModule.forRoot(appRoutes)],

    SimpleNotificationsModule.forRoot(),

    BrowserModule,   
    HttpClientModule, 
    NoopAnimationsModule,
    MatDialogModule,
    MatIconModule
    
  ],
  providers: [AuthService],
  exports:   [],
  bootstrap: [AppComponent]
})

export class AppModule { }
