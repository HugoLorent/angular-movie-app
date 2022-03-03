import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { Comment } from '../types/comment';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css'],
})
export class AddCommentComponent implements OnInit {
  commentForm: FormGroup | any;

  constructor(
    private formBuilder: FormBuilder,
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.commentForm = this.formBuilder.group({
      rating: ['', Validators.required],
      text: ['', Validators.required],
    });
  }

  addComment() {
    const idMovie = Number(this.route.snapshot.paramMap.get('id'));
    const formValue = this.commentForm.value;
    const comment = new Comment();

    comment.rating = formValue['rating'];
    comment.text = formValue['text'];

    this.movieService.postComment(comment, idMovie).subscribe({
      next: (comment) => {
        console.log(comment);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
