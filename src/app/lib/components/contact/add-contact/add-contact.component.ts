import { Component, OnInit } from '@angular/core';
import { ListContactComponent } from '../list-contact/list-contact.component';
import {
  FormBuilder
} from '@angular/forms';



import { ContactService } from '../contact.service';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent {
  addForm
  contact = { firstName: "", lastName: "", sexGender: "" };
  constructor(private contactService: ContactService, private formBuilder: FormBuilder,
  ) {
    this.createForm();
  }

  createForm() {
    this.addForm = this.formBuilder.group({
      lastName: '',
      firstName: '',
    });
  }



  add(contact) {
    this.contact.firstName = contact.firstName;
    this.contact.lastName = contact.lastName;
    console.log("add-contact-component");
    console.log(this.contact);

    if (this.contact.sexGender === "") {
      this.contact.sexGender = "M";
    }
    this.contactService.add(this.contact).subscribe((reponse) => {
      this.createForm();
      ListContactComponent.prototype.service.list().subscribe((data: any) => {
        console.log(data);
        ListContactComponent.prototype.contacts = data;
      });
    });
  }
} 
