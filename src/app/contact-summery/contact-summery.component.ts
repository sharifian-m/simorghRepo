import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-summery',
  templateUrl: './contact-summery.component.html',
  styleUrls: ['./contact-summery.component.css']
})
export class ContactSummeryComponent implements OnInit {

  constructor(private contactservice:ContactService

  ) { }
  CountOfContacts: number = 0;
  ngOnInit(): void {
this.contactservice.currentContactList$.subscribe(x=>this.CountOfContacts=x.length)
    // TODO: Set value with subscribe contactService
    //this.CountOfContacts = value;
  }
}
