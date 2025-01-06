import { CommonModule } from '@angular/common';
import { Component, forwardRef } from '@angular/core';
import { profileIconNames } from './profile-icon-name';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'profile-icon-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-icon-selector.component.html',
  styleUrl: './profile-icon-selector.component.css',
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ProfileIconSelectorComponent), multi: true }],
})
export class ProfileIconSelectorComponent implements ControlValueAccessor {

  profileIcons = profileIconNames;
  showAllIcons: boolean = true;
  selectedIcon!: string | null;
  onChange!: Function;
  onTouched!: Function;

  writeValue(icon: string | null): void {
    this.selectedIcon = icon;
    if (icon && icon !== '') {
      this.showAllIcons = false;
    } else {
      this.showAllIcons = true;
    }
  }

  registerOnChange(fn: Function): void {
    this.onChange = (icon: string) => fn(icon);
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  selectIcon(icon: string) {
    this.showAllIcons = false;
    this.selectedIcon = icon;
    this.onChange(icon);
    this.onTouched();
    console.log('Selected Icon: ', icon);
  }

}
