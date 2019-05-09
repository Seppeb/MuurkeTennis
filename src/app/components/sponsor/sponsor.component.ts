import { Component, OnInit } from '@angular/core';
import { SponsorService } from '../../services/sponsor.service';
import { Sponsor } from 'src/app/models/sponser';
import { MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import { AddSponsorComponent } from '../add-sponsor/add-sponsor.component';
import { SponsorUpdateComponent } from '../sponsor-update/sponsor-update.component';
import { SponsorDeleteConfirmationComponent } from './sponsor-delete-confirmation/sponsor-delete-confirmation.component';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent implements OnInit {
  sponsors: Sponsor[];
  constructor(private sponsorService: SponsorService, private diaglog: MatDialog) { }

  ngOnInit() {
    this.sponsorService.getSponsors().subscribe(sponsors => {
      this.sponsors = sponsors;
      console.log(this.sponsors)
    });
  }
  

  dialogRef: MatDialogRef<SponsorDeleteConfirmationComponent>;
  openConfirmationDialog(sponsor:Sponsor) {
    this.dialogRef = this.diaglog.open(SponsorDeleteConfirmationComponent, {
      disableClose: false
    });
    this.dialogRef.componentInstance.confirmMessage = "Are you sure you want to delete?"
    this.dialogRef.afterClosed().subscribe( r=> {
      if(r) {
        this.deleteSponsor(sponsor);
      }
      this.dialogRef = null;
    });
  }

  deleteSponsor(sponser: Sponsor) {
    this.sponsorService.deleteSponsor(sponser);
  }

  updateSponsor(sponser: Sponsor) {
    this.sponsorService.updateSponsor(sponser);
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.diaglog.open(AddSponsorComponent)
  }
  onUpdate(sponsor: Sponsor) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.diaglog.open(SponsorUpdateComponent, {
      data: sponsor
    })
  }
}
