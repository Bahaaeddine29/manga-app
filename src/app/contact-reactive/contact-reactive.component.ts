import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.css']
})
export class ContactReactiveComponent {

 

  public form: FormGroup = new FormGroup ({
    username: new FormControl (''), 
    password: new FormControl (''), 
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('')

  });

  onSubmit() {
    if (this.form.valid) {
      console.log('Formulaire valide');
      this.form.reset();
      } 
  }
}
