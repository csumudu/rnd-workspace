import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Post } from '../models/index';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private getPost$: Observable<Post[]>;

  constructor(private http: HttpClient) {}

  getPost(): Observable<Post[]> {
    if (!this.getPost$) {
      this.getPost$ = this.http
        .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
        .pipe(
          map((obj: any[]): any => {
            return obj.map((t) => new Post().initialize(t));
          }),
          shareReplay()
        );
    }
    return this.getPost$;
  }
}
