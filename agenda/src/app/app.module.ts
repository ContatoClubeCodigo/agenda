import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { LayoutComponent } from './layout/layout.component';  
import { AppRoutingModule } from './app-routing/app-routing.module';

import { ContatosClientesComponent } from './agenda/contatos-clientes/contatos-clientes.component';
import { CarteiraClientesComponent } from './agenda/carteira-clientes/carteira-clientes.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';  
import { AuthService } from './services/auth.service';
import { ApiService } from './services/api.service';


// import { HttpModule } from '@angular/http'; 

@NgModule({
  declarations: [
    AppComponent,
    ContatosClientesComponent,
    CarteiraClientesComponent,
    LayoutComponent,
    HomeComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
