import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Sponsor } from '../models/sponser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SponsorService {

  sponsorCollection: AngularFirestoreCollection<Sponsor>;
  sponsors: Observable<Sponsor[]>
  sponsorDoc: AngularFirestoreDocument<Sponsor>;

  constructor(public afs: AngularFirestore) {

    this.sponsorCollection = this.afs.collection('sponsors')
      this.sponsors = this.sponsorCollection.snapshotChanges().pipe(map(changes => {
        return changes.map( a=> {
          const data = a.payload.doc.data() as Sponsor
          data.id = a.payload.doc.id;
          return data;
        })
      }))
  }

   getSponsors() {
     return this.sponsors;
   }

   addSponsor(sponsor: Sponsor) {
     this.sponsorCollection.add(sponsor)
   }

   deleteSponsor(sponsor: Sponsor) {
      this.sponsorDoc = this.afs.doc(`sponsors/${sponsor.id}`)
      this.sponsorDoc.delete();
   }

   updateSponsor(sponsor:Sponsor) {
    this.sponsorDoc = this.afs.doc(`sponsors/${sponsor.id}`)
    this.sponsorDoc.update(sponsor);
   }



}


