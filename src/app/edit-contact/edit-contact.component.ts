import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contacts/contact.model';
import { phoneTypes } from '../contacts/contact.model';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactsService } from '../contacts/contacts.service';
import { RestrictedWordsValidator } from '../validators/RestrictedWordsValidator';
import { DateValueAccessorDirective } from '../accessor/date-value-accessor.directive';
import { ProfileIconSelectorComponent } from "../profile-icon-selector/profile-icon-selector.component";

@Component({
  imports: [CommonModule, FormsModule, RestrictedWordsValidator, DateValueAccessorDirective, ProfileIconSelectorComponent],
  standalone: true,
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css'],
})
export class EditContactComponent implements OnInit {


  phoneTypes = phoneTypes;
  contact: Contact = {
    id: '',
    icon: '',
    firstName: '',
    lastName: '',
    personal: false,
    dateOfBirth: null,
    favoritesRanking: 0,
    phones: [{
      phoneNumber: '',
      phoneType: '',
    }],
    address: {
      streetAddress: '',
      city: '',
      state: '',
      postalCode: '',
      addressType: '',
    },
    notes: '',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactSvc: ContactsService
  ) { }

  ngOnInit() {
    const contactId = this.route.snapshot.params['id'];
    console.log('Contact ID: ', contactId);
    if (!contactId) return;
    return this.contactSvc.getContact(contactId).subscribe((c: any) => {
      if (c) this.contact = c;
    });
  }

  saveContact(form: NgForm) {
    form.value.id = this.contact.id;
    console.log('Contact saved: ', this.contact);
    this.contactSvc
      .saveContact(this.contact)
      .subscribe((c) => this.router.navigate(['/contacts']));
  }

  addPhone() {
    this.contact.phones.push({
      phoneNumber: '',
      phoneType: '',
    });
  }

}
