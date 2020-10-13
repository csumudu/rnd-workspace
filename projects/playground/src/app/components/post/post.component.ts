import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Observable } from 'rxjs';
import { Post } from '../../models';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post$: Observable<Post[]>;

  constructor(private service: CoursesService) {}

  ngOnInit(): void {
    this.post$ = this.service.getPost();
  }

  getAgain(): void {
    this.service.getPost().subscribe(console.log);
  }
}
