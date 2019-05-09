import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorDeleteConfirmationComponent } from './sponsor-delete-confirmation.component';

describe('SponsorDeleteConfirmationComponent', () => {
  let component: SponsorDeleteConfirmationComponent;
  let fixture: ComponentFixture<SponsorDeleteConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorDeleteConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorDeleteConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
