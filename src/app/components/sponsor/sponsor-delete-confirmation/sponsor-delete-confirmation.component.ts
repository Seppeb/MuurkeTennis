import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-sponsor-delete-confirmation',
  templateUrl: './sponsor-delete-confirmation.component.html',
  styleUrls: ['./sponsor-delete-confirmation.component.css']
})
export class SponsorDeleteConfirmationComponent {

  constructor(public dialogRef: MatDialogRef<SponsorDeleteConfirmationComponent>) { }
  public confirmMessage:string;
}
