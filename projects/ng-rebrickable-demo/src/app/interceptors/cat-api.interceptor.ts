import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export const catApiInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
  const reqClone = req.clone({
    url: `https://catfact.ninja/${req.url}`,
  });
  return next(reqClone);
};
