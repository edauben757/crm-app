import { Component, OnInit } from '@angular/core';
import { Email } from '../../models/email';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  public emailsGetInboxEmails!: Email[];
  public emailsGetSentEmails!: Email[];

  constructor(
    private emailService: EmailService
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.emailService.getGetInboxEmails().subscribe(data => this.emailsGetInboxEmails = data);
    this.emailService.getGetSentEmails().subscribe(data => this.emailsGetSentEmails = data);
  }
}
