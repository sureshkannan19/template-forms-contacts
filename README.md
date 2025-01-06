**Forms two types: **

- Template driven
- Reactive form

# **Directives: **

- **(ngSubmit)** : Form submit
- **[(ngModel)]** : Two way binding, where () is template to component and [] is component to template
- **ngForm** : Part of FormModule, where form properties such as valid, dirty, touched used to validate/process `<input>` elements data.
- **Template driven form**: Where **#contactForm** is template variable where **ngForm** directive is assigned to it, to validate the form properties, same goes for **ngModel**
- **ngForm template variable binding:**

```
<form (ngSubmit)="saveContact(contactForm)" #contactForm="ngForm">
```

- **ngModel template variable binding:**

```
<input required minLength=3 [(ngModel)]="firstName" #firstName="ngModel" name="firstName">
```

- **ngModelGroup** : Group the form input elements
- *ngFor & *ngIf - Structural directives
  <br>
- **Form Erros:** If multiple validation is present, access specific errors through {templateVariable.errors}

```
<input required minlength="3" [(ngModel)]="firstName" #firstName="ngModel" name="firstName">
<em *ngIf="firstName.errors?.['required'] && firstName.touched">Please enter a first name</em>
<em *ngIf="firstName.errors?.['minlength'] && firstName.touched">Name must be at least 3 characters.</em>
```

- **ngStyle:** Accepts only {} object

**Dynamically switch/change classNames:**

- [class.test]="booleanExpression"
```
<div [class.strikethrough]="product.discount > 0"> 
```
- **ngClass:** Accepts space seperated or arrays(list of class values), and also append/implement existing value if present in class property of that html elements.

```
 [ngClass]="getDiscountedClasses(product)"
  getDiscountedClasses(product: IProduct) {
    if (product.discount > 0) return ['strikethrough'];
    else return [];
  }

```
**ControlValueAccessor: **
```
providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ProfileIconSelectorComponent), multi: true }],
```