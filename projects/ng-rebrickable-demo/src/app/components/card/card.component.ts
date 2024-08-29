import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  title: string = '';

  @Input()
  data: unknown;

  @Input()
  set displayed(value: boolean) {
    this.toggle(value);
  }

  readonly display = signal(false);

  toggle(value?: boolean): void {
    if (value !== null && value !== undefined) {
      this.display.set(value);
      return;
    }
    this.display.set(!this.display());
  }
}
