import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule} from '@angular/fire';
import { environment } from '../environments/environment'
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireStorageModule} from '@angular/fire/storage';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';


import { SponsorComponent } from './components/sponsor/sponsor.component';
import { SponsorService } from './services/sponsor.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AddSponsorComponent } from './components/add-sponsor/add-sponsor.component';


import { FormsModule} from '@angular/forms';
import { SponsorUpdateComponent } from './components/sponsor-update/sponsor-update.component';
import { SponsorDeleteConfirmationComponent } from './components/sponsor/sponsor-delete-confirmation/sponsor-delete-confirmation.component';
import { ParticipantListComponent } from './components/participant/participant-list/participant-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    HomeComponent,
    LoginComponent,
    SponsorComponent,
    NavbarComponent,
    NotfoundComponent,
    AddSponsorComponent,
    SponsorUpdateComponent,
    SponsorDeleteConfirmationComponent,
    ParticipantListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'MuurkeTennis'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [SponsorService],
  bootstrap: [AppComponent],
  entryComponents: [
    AddSponsorComponent,
    SponsorUpdateComponent,
    SponsorDeleteConfirmationComponent
  ]
})
export class AppModule { }
