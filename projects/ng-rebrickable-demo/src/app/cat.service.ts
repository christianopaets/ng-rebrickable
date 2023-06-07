import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CatService {

  constructor(private readonly http: HttpClient) {
  }

  fact(): Observable<string> {
    return this.http.get<Record<'fact', string>>('fact')
      .pipe(map(res => res.fact));
  }
}
