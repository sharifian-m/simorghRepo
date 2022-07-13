import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { contactDto } from '../contact.model';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor(protected fb: FormBuilder) { }
  
    
  ngOnInit(): void {
  }

  myForm = this.fb.group({
    ID: [],
    FullName: [],
    Mobile: [],
  })
  submit() {
    let contact = new contactDto();

    contact.ID = Number(this.myForm.value.ID);
    contact.FullName = this.myForm.value.FullName;
    contact.Mobile = this.myForm.value.Mobile;
   //TODO: اطلاعات فرم در قابل یک آبجکت 
   //    event  با استفاده از 
   //    به کامپوننت  لیست ارسال گردد

    this.myForm.reset();

  }
}
