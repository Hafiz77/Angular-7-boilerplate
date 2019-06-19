import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const  products =  [
      {  id:  1,  name:  'Elephant Beautiful Balls.' },
      {  id:  2,  name:  'Sars' },
      {  id:  3,  name:  'Jussipussi' },
      {  id:  4,  name:  'I.beat Blaxx.' },
      {  id:  5,  name:  'Vagisil' },
      {  id:  6,  name:  'Anusol' },
      {  id:  7,  name:  'Ayds' },
      {  id:  8,  name:  'Bata' },
      {  id:  9,  name:  'Apex' },
      {  id:  10,  name:  'Ziels'}
    ];

    return { products };

   }
}
