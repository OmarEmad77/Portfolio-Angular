import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
goToGmail(){
  window.location.href = "mailto:Omare4189&#64;gmail.com";
  console.log("clicked");

}
}
