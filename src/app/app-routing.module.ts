import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomeRiderComponent } from './components/home-rider/home-rider.component';
import { HomeOwnerComponent } from './components/home-owner/home-owner.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'rider-home', component: HomeRiderComponent},
  {path: 'owner-home', component: HomeOwnerComponent},
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
