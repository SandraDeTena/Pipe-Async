import { Injectable } from '@angular/core';

//Para importar los métodos para hacer las peticiones
import { HttpClient } from '@angular/common/http';

const URL_BASE = 'https://rickandmortyapi.com/api/character/'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  getCharacter(n: number) {
    return this.httpClient.get('${URL_BASE}${n}');
  }
  //Método para recuperar todos
  // getAll(): Promise<[]> {
  //   return this.httpClient.get<[]>('https://jsonplaceholder.typicode.com/posts').toPromise();
  // }
}
