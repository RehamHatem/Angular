import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 
  form = {
    name: '',
    email: '',
    message: ''
  };
  onSubmit() {
    alert('Thank you for your message!');
    this.form = { name: '', email: '', message: '' };
  }
}