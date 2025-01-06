import { Directive, ElementRef, forwardRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: 'input([type=date])[ngModel], input([type=date])[formControl], input([type=date])[formControlName]',
  standalone: true,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateValueAccessorDirective),
    multi: true
  }]
})
export class DateValueAccessorDirective implements ControlValueAccessor {

  constructor(private ele: ElementRef) { }

  @HostListener('input', ['$event.target.valueAsDate']) private onChange!: Function;
  @HostListener('blur', []) private onTouched!: Function;

  writeValue(value: any): void {
    if (value instanceof Date) {
      this.ele.nativeElement.value = value.toISOString().split('T')[0];
    }
  }

  registerOnChange(fn: Function): void {
    this.onChange = (valueAsDate: Date) => { fn(valueAsDate); };
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

}
