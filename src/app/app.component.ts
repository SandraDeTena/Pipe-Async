import { Component } from '@angular/core';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesAsync';

  //AsyncPipe
  promPost: Promise<any[]>;

  constructor(private PostsService: PostsService) {

    this.promPost = this.PostsService.getAll();
  }

  ngOnInit() { }
}




