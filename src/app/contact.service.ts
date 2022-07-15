import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, tap } from 'rxjs';
import { contactDto } from './contact.model';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private contactValue: number = 0;
  private contactValueUpdate = new Subject<number>();

  contactInformation: contactDto[] = [
    { FullName: 'Seamorgh', ID: 1, Mobile: '02122050495' },
  ];
  // private contactValue: number = 0;
  // private contactValueUpdate = new Subject<number>();
   contactList$ = new BehaviorSubject<contactDto[]>(
    this.contactInformation
  );
  currentContactList$ = this.contactList$.asObservable();
  constructor() {}

  setContactList(contact: contactDto) {
    this.contactList$.next([...this.contactList$.value, contact]);
  }

  updateContactsListAfterDelete(contactsList: contactDto[]) {
    this.emptyContactsList();
    this.contactList$.next([...this.contactList$.value, ...contactsList]);
  }

  emptyContactsList() {
    this.contactList$.value.splice(0, this.contactList$.value.length);
  }

  changeContact(sendValue: number) {
    let value = sendValue;
    this.contactValue = value;
    this.contactValueUpdate.next(this.contactValue);
    console.log(sendValue);
  }

  changeContactCountListener() {
    return this.contactValueUpdate.asObservable();
  }
}
