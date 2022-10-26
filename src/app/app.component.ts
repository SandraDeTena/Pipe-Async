import { Component, VERSION, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subscription, of } from 'rxjs';
import { PostsService } from './services/posts.service';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = 'Angular' + VERSION.major;

  title = 'pipesAsync';

  //currencyPipe => Se encarga de formatear(y por tanto de mostrar) tema de precios, por ejemplo en una tienda porque tiene un precio especifico.
  precio: number;

  //DecimalPipe
  numero: number;

  //DatePipe
  fechaActual: Date;

  //PercentPipe => Convertir un número que a priori no es un porcentaje convertirlo a %.
  numAleatorio: number;

  //JSONPipe =>Obtener de un objeto un poco más complejo una representación de string.
  estudiante: any;

  //LowerCase | UpperCase | TitleCase => Para modificación de textos, en Mayúsculas, en minusculas, o en Capital case
  texto: string;

  //SlicePipe =>Si trabajamos con Array(colección)coger sólo ciertos elementos.
  animales: string[];
  minimo: number;
  maximo: number;

  //AsyncPipe => Esto nos permite resolver una promesa dentro de nuestro HTML
  prom: Promise<string>;
  //Me va a devolver todas las promesas de la página de: https://jsonplaceholder.typicode.com/guide/
  promPosts: Promise<any[]>;


  constructor(private PostsService: PostsService) {

    //currentyPipe
    this.precio = 198.87;

    //DecimalPipe
    this.numero = 3.8819200430;

    //DatePipe
    this.fechaActual = new Date();

    //PercentPipe
    this.numAleatorio = Math.random();

    //JSONPipe =>Obtener de un objeto un poco más complejo una representación de string.
    this.estudiante = {
      nombre: 'Roberto',
      apellidos: 'López',
      notas: [3.5, 4.8, 7, 8.3]
    }

    //LowerCase | UpperCase | TitleCas
    this.texto = 'En un lugar de la Mancha';

    //SlicePipe 
    this.animales = ['Perro', 'Gato', 'Pájaro', 'Monos', 'Tortuga', 'Caballos'];
    this.minimo = 0;
    this.maximo = this.animales.length;

    //AsyncPipe => Esto nos permite resolver una promesa dentro de nuestro HTML
    this.prom = new Promise((resolve, reject) => {
      setTimeout(() => resolve('Se resuelve la promesa pasados 4 seg.'), 4000)
    });

    this.promPosts = this.PostsService.getAll();

  }


  ngOnInit() {
    //CRONOMETRO
    setInterval(() => this.fechaActual = new Date(), 1000);
  }

}