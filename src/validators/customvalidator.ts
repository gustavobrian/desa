import {Control} from '@angular/common';

export class EmailValidator {
    static email(control: Control) {
        const emailRegexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        if (control.value !== "" && (control.value.length <= 5 || !emailRegexp.test(control.value))) {
            return { "email": true };
        }

        return null;
    }
}
