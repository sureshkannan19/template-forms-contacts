import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[restrictedWords]',
    standalone: true,
    providers: [{ provide: NG_VALIDATORS, useExisting: RestrictedWordsValidator, multi: true }]
})
export class RestrictedWordsValidator implements Validator {
    @Input() restrictedWords: string[] = [];
    validate(control: AbstractControl): null | ValidationErrors {
        if (!control.value) return null;
        console.log('Control value: ', control.value);
        const invalidValues = this.restrictedWords.filter(w => control.value.includes(w));
        return invalidValues.length > 0 ? { restrictedWords: invalidValues.join(',') } : null;
    }
}