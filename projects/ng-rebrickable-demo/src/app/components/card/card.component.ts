import { Component, input, model } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [JsonPipe],
})
export class CardComponent {
  readonly title = input.required<string>();
  readonly data = input.required<unknown>();
  readonly display = model<boolean>();

  toggle(value?: boolean): void {
    if (value !== null && value !== undefined) {
      this.display.set(value);
      return;
    }
    this.display.update((value) => !value);
  }
}
