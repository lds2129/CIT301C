import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact';
@Component({
  selector: 'app-contact-group-add',
  templateUrl: './contact-group-add.component.html'
})
export class ContactGroupAddComponent implements OnInit {
  @Input() selectedContact : Contact;
  constructor() { }

  ngOnInit() {
  }

}
