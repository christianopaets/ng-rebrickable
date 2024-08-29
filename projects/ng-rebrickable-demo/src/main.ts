import { CatService } from "./app/cat.service";
import { provideHttpClient, withFetch, withInterceptors } from "@angular/common/http";
import { catApiInterceptor } from "./app/interceptors/cat-api.interceptor";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideRebrickable } from "ng-rebrickable";
import { provideRouter } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { provideExperimentalZonelessChangeDetection } from "@angular/core";

bootstrapApplication(AppComponent, {
  providers: [
    provideRebrickable({
      apiKey: "c6020fdf7a33ea947e71d88448ea923d",
      debug: true,
    }),
    CatService,
    provideHttpClient(withInterceptors([catApiInterceptor]), withFetch()),
    provideExperimentalZonelessChangeDetection(),
    provideRouter([{ path: "", loadChildren: () => import("./app/containers/preview/preview.routes") }]),
  ],
}).catch((err) => console.error(err));
