import { Component } from '@angular/core';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesAsync';

  //currencyPipe => Se encarga de formatear(y por tanto de mostrar) tema de precios, por ejemplo en una tienda porque tiene un precio especifico.
  precio: number;

  //AsyncPipe
  // promPost: Promise<any[]>;

  constructor(private PostsService: PostsService) {
    //currentyPipe
    this.precio = 198.87;

    // this.promPost = this.PostsService.getAll();
  }

  ngOnInit() { }
}




