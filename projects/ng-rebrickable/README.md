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
import { withDebugging } from "ng-rebrickable/features/debugging";

bootstrapApplication(AppComponent, {
  providers: [
    provideRebrickable("your-rebrickable-api-key", /* Optional */ withDebugging()),
  ],
});
```

- There are 2 optional caching methods
  - `withLocalStorageCache()` - cache will be handled with localStorage
  - `withIndexedDBCache()` - cache will be handled with IndexedDB
  
  ```typescript
  import { provideRebrickable } from "ng-rebrickable";
  import { AppComponent } from "./app.component";
  import { withLocalStorageCache } from "ng-rebrickable/features/localstorage";
  
  bootstrapApplication(AppComponent, {
    providers: [
      provideRebrickable("your-rebrickable-api-key", withLocalStorageCache()),
    ],
  });

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
    ordering: [
      { type: 'DESC', fields: 'field-1' },
      { type: 'ASC', fields: 'field-2' },
    ]
  });
}
```
