import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SponsorComponent } from './components/sponsor/sponsor.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ParticipantListComponent } from './components/participant/participant-list/participant-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'sponsor', component: SponsorComponent},
  { path: 'participant', component: ParticipantListComponent},
  { path: '**', component: NotfoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
