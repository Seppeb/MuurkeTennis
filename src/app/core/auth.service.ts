import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';

import { switchMap} from 'rxjs/operators'
import { auth } from 'firebase';



interface User { 
  uid: string;
  email: string;
  photoURL?: string;
  displayName?:string;
  favoriteColor?: String;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user : Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) { 
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if(user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
        } else {
          return of(null)
        }
      })
    )
  }

  googleLogin() {
    const provider = new auth.GoogleAuthProvider()
    return this.oAuthLogin(provider);
  }
  
  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
    .then((credentials) => {
      this.updateUserData(credentials.user)
    })
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }
    return userRef.set(data, { merge: true})
  }

  signOut() { 
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);

    })
  }

}
