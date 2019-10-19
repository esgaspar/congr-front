import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit, OnDestroy {
  addForm;
  contact = this.contactClear();
  public subscribes = { add: null, edit: null, contact: null };

  constructor(public service: ContactService, private formBuilder: FormBuilder,
  ) {
    this.contact = this.contactClear();
    this.createForm();
  }

  ngOnDestroy(): void {
    // this.subscribes.add.unsubscribe();
    // this.subscribes.add.unsubscribe();
    // this.subscribes.contact.unsubscribe();
  }

  ngOnInit(): void {
    this.subscribes.contact = new Observable<any>();
  }

  public contactClear() {
    return { _id: null, firstName: '', lastName: '', sexGender: '' };
  }

  createForm() {

    this.subscribes.contact = this.service.contact.subscribe(data => {
      if (data && data._id) {
        this.contact = data;
        this.addForm = {
          lastName: data.lastName,
          firstName: data.firstName};
      } else {
        this.addForm ={
          lastName: '',
          firstName: '',
      }
    }});
  };

 async add(contact) {
    this.contact.firstName = contact.firstName;
    this.contact.lastName = contact.lastName;

    if (this.contact.sexGender === '') {
      this.contact.sexGender = 'M';
    }

    if (this.contact._id) {
      this.subscribes.edit = (await (this.service.update(this.contact))).subscribe((reponse) => {
      });
    } else {
      this.subscribes.add = (await this.service.add(this.contact)).subscribe((reponse) => {
        this.service.contactList.unshift(reponse);
      });
    }
    this.contact = this.contactClear();
    this.service.updateContact(this.contactClear());
    this.addForm.reset();

  }

}
