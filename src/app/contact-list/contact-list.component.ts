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
  contactsList: contactDto[] = [];

  constructor(private contactService:ContactService

  ) { }
  ngAfterViewInit(): void {
    this.Contacts.push(new contactDto({ FullName: 'Seamorgh', ID: 1, Mobile: '02122050495' }));
    //TODO: Set contactService value with this.Contacts.length
  }

  ngOnInit(): void {
this.contactService.currentContactList$.subscribe(x=>this.contactsList=x)

  }
  Contacts: contactDto[] = [];


  addRow(contact: contactDto) {
    this.Contacts.push(contact);
    //TODO: Set contactService value with this.Contacts.length

  }
  deleteRow(contact: contactDto) {
    
    for (let i = 0; i <= this.contactsList.length - 1; i++) {
      if (this.contactsList[i].ID === contact.ID) {
        this.contactsList.splice(i, 1);
      }
    }
    this.contactsList = [...this.contactsList];
         this.contactService.updateContactsListAfterDelete(this.contactsList);
         
      //TODO: Set contactService value with this.Contacts.length
  
    }
}
