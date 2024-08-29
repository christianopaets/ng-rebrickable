# NgRebrickable

NgRebrickable is a TypeScript library to use [Rebrickable API](https://rebrickable.com/api/v3/docs) for Angular

## Installation

Use your favourite package manager to install in your project

```bash
 npm install ng-rebrickable
 yarn add ng-rebrickable
 pnpm add ng-rebrickable
```

## Usage

- Provide into your application

```typescript
import { provideRebrickable } from "ng-rebrickable";
import { AppComponent } from "./app.component";

bootstrapApplication(AppComponent, {
  providers: [
    provideRebrickable({
      apiKey: "your-rebrickable-api-key", // mandatory
      debug: true, // optional (need to change console level to verbose)
    }),
  ],
});
```

- Use service anywhere in your app

```typescript
import {Component} from '@angular/core';

@Component({...})
export class AppComponent {

  constructor(private readonly rebrickableService: RebrickableService) {
  }

  colors$ = this.rebrickableService.colors({
    page: 1,
    page_size: 10,
    ordering: {
      type: 'DESC',
      fields: ['array of fields']
    }
  });
}
```
