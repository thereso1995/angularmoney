import { EditUserComponent } from './user/edit-user/edit-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { AddUserComponent } from './user/add-user/add-user.component';

import { DefaultComponent } from './layout/default/default.component';




import { ConnexionComponent } from './pages/connexion/connexion.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';



const routes: Routes = [
  
{path:'',component:DefaultComponent,
  children:[
    {path:'dashboard',component:DashboardComponent}

  ]
},
  {path:'login',component:ConnexionComponent},
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
