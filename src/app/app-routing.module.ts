import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [

  {path: '', redirectTo: '/homepage', pathMatch: 'full'},
  {path: 'homepage', component: HomepageComponent},
  {path: 'addcontact', component: AddcontactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
