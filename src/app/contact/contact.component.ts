import { FormsModule, NgForm} from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  
  username : string |any; 
  password : string |any;
  message : string |any;

  onSubmit (form: NgForm ) {

    if (form.valid) {
    if (form.value.username.lenght < 2) {
      this.message ="faux"
    }
    // console.log (form.value); 
     form.resetForm(); // on rajoute ici la fonction reset form afin que le formulaire se vide aprés la validation 
  }
}

}
