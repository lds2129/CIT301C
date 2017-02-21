import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact';
@Component({
  selector: 'app-contact-group',
  templateUrl: './contact-group.component.html'
})
export class ContactGroupComponent implements OnInit {
  @Input() selectedContact : Contact;
  constructor() { }

  ngOnInit() {
  }

}
