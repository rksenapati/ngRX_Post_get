import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function validateFirstLetter(control: AbstractControl) : ValidationErrors | null{
  if (!control.value.toLowerCase().startsWith('x')) {
    return { invalidtext: true };
  }
  return null;
}
