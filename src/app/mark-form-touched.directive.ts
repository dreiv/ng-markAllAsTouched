import { Directive, HostListener, Self } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Directive({
  selector: 'form[formGroup]'
})
export class MarkFormTouchedDirective {
  @HostListener('submit')
  onSubmit(): void {
    this.container?.control?.markAllAsTouched();
  }

  constructor(@Self() private container: ControlContainer) {}
}
