import { Injectable } from '@angular/core';

//Para importar los métodos para hacer las peticiones
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostsService {


  constructor(private httpClient: HttpClient) { }

  //Método para recuperar todos
  getAll(): Promise<any[]> {
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/posts').toPromise();
  }
}
