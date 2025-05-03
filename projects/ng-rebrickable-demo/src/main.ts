import { provideHttpClient, withFetch, withInterceptors } from "@angular/common/http";
import { catApiInterceptor } from "./app/interceptors/cat-api.interceptor";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideRebrickable } from "ng-rebrickable";
import { provideRouter } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { provideExperimentalZonelessChangeDetection } from "@angular/core";
import { withDebugging } from "ng-rebrickable/features/debugging";
import { withLocalStorageCache } from "ng-rebrickable/features/localstorage";

bootstrapApplication(AppComponent, {
  providers: [
    provideRebrickable("c6020fdf7a33ea947e71d88448ea923d", withDebugging(), withLocalStorageCache()),
    provideHttpClient(withInterceptors([catApiInterceptor]), withFetch()),
    provideExperimentalZonelessChangeDetection(),
    provideRouter([{ path: "", loadChildren: () => import("./app/containers/preview/preview.routes") }]),
  ],
}).catch((err) => console.error(err));
