import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import isIsbnValid from './isbn-validate';


@Injectable({
  providedIn: 'root'
})
export class ValidateISBNService {

  constructor() { }

  isIsbnValid(isbn: string) {
    return isIsbnValid(isbn);
  }

  isbnValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const valid: boolean = this.isIsbnValid(control.value);
      return valid ? null : {'isbn': {value: control.value}};
    };
  }
}