import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Sponsor } from '../models/sponser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Participant } from '../models/participant';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  participantCollection: AngularFirestoreCollection<Participant>;
  participants: Observable<Participant[]>
  participant: AngularFirestoreDocument<Participant>;

  constructor(public afs: AngularFirestore) {

    this.participantCollection = this.afs.collection('users');

    this.participants = this.participantCollection.valueChanges();
  //     this.participants = this.participantCollection.snapshotChanges().pipe(map(changes => {
  //       return changes.map( a=> {
  //         const data = a.payload.doc.data() as Participant
  //         data.id = a.payload.doc.id;
  //         return data;
  //       })
  //     }))
   }

   getParticipants() {
     return this.participants;
   }

   addSponsor(sponsor: Sponsor) {
     this.participantCollection.add(sponsor)
   }

  //  deleteSponsor(sponsor: Sponsor) {
  //     this.participantCollection = this.afs.doc(`participant/${sponsor.id}`)
  //     this.participant.delete();
  //  }

   updateSponsor(sponsor:Sponsor) {
    this.participant = this.afs.doc(`sponsors/${sponsor.id}`)
    this.participant.update(sponsor);
   }



}
