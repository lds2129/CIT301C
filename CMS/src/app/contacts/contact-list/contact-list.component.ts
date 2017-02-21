import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contact';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent implements OnInit {
  contacts: Contact[]=[];
  @Output() contactSelected = new EventEmitter<Contact>();
  contact = new Contact('Bro. Kim','James Janghwan Kim','kim15012@byui.edu','605-877-5844','assets/JamesKim.jpg', 'group');
  constructor() { }

  ngOnInit() {
  }
  onSelected(contact: Contact){
      this.contactSelected.emit(contact);
  }
}
