import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable({ providedIn: 'root' })
export class ContactService {

  private contactValue: number = 0;
  private contactValueUpdate = new Subject<number>();

  constructor() {

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
