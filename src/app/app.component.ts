import { ContactListComponent } from './contact-list/contact-list.component';
import { contactDto } from './contact.model';
import { Component, ViewChild } from '@angular/core';
// import { ContactService } from './contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'seamorgh-sample';
  /**
   *
   */
   @ViewChild('cmpContactList') contactList:ContactListComponent;
  constructor() {
    
    
  }
  Contact_FormSubmit(contact: contactDto){
//alert(contact.FullName);
 this.contactList.addRow(contact)
  }
}
