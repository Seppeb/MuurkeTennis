import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { Sponsor } from 'src/app/models/sponser';
import { SponsorService } from 'src/app/services/sponsor.service';
@Component({
  selector: 'app-sponsor-update',
  templateUrl: './sponsor-update.component.html',
  styleUrls: ['./sponsor-update.component.css']
})
export class SponsorUpdateComponent implements OnInit {

  sponsor: Sponsor;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:Sponsor, 
    private dialogRef: MatDialogRef<SponsorUpdateComponent>,
    private sponsorService: SponsorService
    ) { 

  }

  ngOnInit() {
    console.log(this.data);

    this.sponsor = this.data;
  }

  onClose() {
    this.dialogRef.close();
  }
  onSubmit() {
    this.sponsorService.updateSponsor(this.sponsor)
    this.dialogRef.close();
  }

}
