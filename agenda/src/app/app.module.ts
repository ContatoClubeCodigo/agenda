import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { AppComponent } from './app.component'; 
import { Routes, RouterModule } from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http';  
import { AuthService } from '../services/auth.service';
import { SimpleNotificationsModule } from 'angular2-notifications';  
import { NoopAnimationsModule } from '@angular/platform-browser/animations';   
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import {MatInputModule} from '@angular/material/input'

/* páginas */
import { HomeComponent } from './home/home.component';  
import { WelcomeComponent } from './welcome/welcome.component';
import { LayoutComponent } from './layout/layout.component'; 
import { ContatosClientesComponent } from './agenda/contatos-clientes/contatos-clientes.component';
import { CarteiraClientesComponent } from './agenda/carteira-clientes/carteira-clientes.component';

/* modules das páginas */
import { ContatosClientesModule } from './agenda/contatos-clientes/contatos-clientes.module';
import { CarteiraClientesModule } from './agenda/carteira-clientes/carteira-clientes.module';   

import { MatDialogModule } from '@angular/material/dialog'; 
import { SocialButtonsComponent } from './social-buttons/social-buttons.component'; 
import { NewUserComponent } from './security/new-user/new-user.component';
import { LoginComponent } from './security/login/login.component';
import { MenuComponent } from './menu/menu.component';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';


const routes_: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
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
  },
  {
      path        : 'app',
      loadChildren: './app-routing/app-routing/app-routing.module#AppRoutingModule'
  }
];

@NgModule({

  declarations: [ 
     
    MenuComponent, SocialButtonsComponent,
    LayoutComponent,
    AppComponent, 
    

  ],
  imports: [  

    FormsModule, ReactiveFormsModule, MatFormFieldModule,  MatInputModule,
    BrowserModule,  
    ReactiveFormsModule,
    CommonModule, 
    HttpClientModule, 
    NoopAnimationsModule,
    MatDialogModule,
    MatIconModule,
    FontAwesomeModule,
    MatSelectModule, MatTableModule, MatPaginatorModule,

    [RouterModule.forRoot(routes_)],
    [RouterModule.forRoot(appRoutes)], 
    SimpleNotificationsModule.forRoot(),

    
  ],
  providers: [AuthService],
  exports:   [],
  bootstrap: [AppComponent]
})

export class AppModule { }
