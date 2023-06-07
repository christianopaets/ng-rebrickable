# NgRebrickable

NgRebrickable is a TypeScript library to use [Rebrickable API](https://rebrickable.com/api/v3/docs) for Angular

## Installation

Use `npm` or `yarn` to install in your project

```bash
 npm install ng-rebrickable
```

or

```bash
yarn add ng-rebrickable
```

## Usage

- Add module to your app module

```typescript
import {RebrickableModule} from 'ng-rebrickable';

@NgModule({
  imports: [
    RebrickableModule.forRoot({
      apiKey: 'your-rebrickable-api-key', // mandatory
      debug: true, // optional (need to change console level to verbose)
    })
  ]
})
export class AppModule {
}
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


