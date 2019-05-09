import { Component, OnInit } from '@angular/core';
import { SponsorService} from '../../services/sponsor.service';
import { Sponsor} from '../../models/sponser';

import { MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-sponsor',
  templateUrl: './add-sponsor.component.html',
  styleUrls: ['./add-sponsor.component.css']
})
export class AddSponsorComponent implements OnInit {

  sponsor: Sponsor = { 
    name: '',
    description: '',
    amount: null,
  }

  constructor(private sponsorService: SponsorService, private dialogRef: MatDialogRef<AddSponsorComponent>) {
   }

  ngOnInit() {
  }
  onSubmit() {
    if(this.sponsor.name != '' && this.sponsor.description != '') {
      this.sponsorService.addSponsor(this.sponsor);
      this.dialogRef.close();
    }
  }
  onClose() {
    this.dialogRef.close();
  }
  

}
