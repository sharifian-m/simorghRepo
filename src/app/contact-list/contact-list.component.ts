import { contactDto } from './../contact.model';
import { Component, Injectable, OnInit, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactService } from '../contact.service';
//  @Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, AfterViewInit {


  constructor(

  ) { }
  ngAfterViewInit(): void {
    this.Contacts.push(new contactDto({ FullName: 'Seamorgh', ID: 1, Mobile: '02122050495' }));
    //TODO: Set contactService value with this.Contacts.length
  }

  ngOnInit(): void {


  }
  Contacts: contactDto[] = [];


  addRow(contact: contactDto) {
    this.Contacts.push(contact);
    //TODO: Set contactService value with this.Contacts.length

  }
  deleteRow(contact: contactDto) {
    this.Contacts = this.Contacts.filter(x => x.ID != contact.ID);
    //TODO: Set contactService value with this.Contacts.length

  }
}
