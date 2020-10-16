import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss'],
})
export class ComponentOneComponent implements OnInit {
  constructor(private http: HttpClient) {}
  movie$: Observable<any>;

  ngOnInit(): void {
    this.movie$ = this.http
      .get('https://yts.mx/api/v2/list_movies.json?limit=1')
      .pipe(
        map((res: any) => {
          const [m] = res.data.movies;
          return m;
        }),
        tap(console.log)
      );
  }
}
