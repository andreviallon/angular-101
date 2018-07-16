import { AbstractControl } from '@angular/forms';

export class PasswordValidator {
  static passwordShouldMatch(control: AbstractControl) {
    const newPassword = control.get('newPassword');
    const confirmPassword = control.get('confirmPassword');

    if (newPassword !== confirmPassword) {
      return { passwordShouldMatch: true };
    } else {
      return null;
    }

  }
}
