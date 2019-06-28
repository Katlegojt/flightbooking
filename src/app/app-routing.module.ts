import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LandingComponent } from './landing/landing.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { Trip2Component } from './trip2/trip2.component';

const routes: Routes = [{ path: '', component: LandingComponent },
 {path: 'menu', component: MenuComponent,
  children: [{ path: 'home', component: HomeComponent },{path: 'destinations', component:DestinationsComponent},
{path:'tripdetails', component:TripDetailsComponent},{path:'trip2', component:Trip2Component}]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
