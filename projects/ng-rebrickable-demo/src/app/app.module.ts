import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CatService } from './cat.service';
import { CatApiInterceptor } from './interceptors/cat-api.interceptor';
import { RebrickableModule } from 'ng-rebrickable';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    RebrickableModule.forRoot({
      apiKey: 'c6020fdf7a33ea947e71d88448ea923d',
      debug: true,
    }),
    ComponentsModule,
    RouterModule.forRoot([
      { path: '', loadChildren: () => import('./containers/preview/preview.module').then((m) => m.PreviewModule) },
    ]),
  ],
  providers: [
    CatService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CatApiInterceptor,
      multi: true,
    },
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class AppModule {}
