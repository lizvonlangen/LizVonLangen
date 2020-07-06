import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ValidateISBNService } from './isbn-validate.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'isbn-validation-app';
  FormController: FormControl;


  constructor(private isbnService: ValidateISBNService) {

    this.FormController = new FormControl('', [
      Validators.required,
      this.isbnService.isbnValidator()
    ]);
  
}

}
