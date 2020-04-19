import { ApiService } from './services/api.service';

import { ListUserComponent } from './user/list-user/list-user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DefaultComponent } from './layout/default/default.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { FormConnexionComponent } from './components/form-connexion/form-connexion.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { JwtInterceptor } from './helpers/jwt-interceptor.service';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';











@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    FormConnexionComponent,
    DefaultComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    ListUserComponent,
    AddUserComponent,
    EditUserComponent,
    
    
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [ ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor,  multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
