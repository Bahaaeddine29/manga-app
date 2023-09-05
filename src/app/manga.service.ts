import { Injectable } from '@angular/core';
import { MANGAS } from './mock-mangas-list';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  constructor() { }

  fetchAllManga () {
    return MANGAS; 
  }

  fetchById (id: number) {
    return MANGAS[id];
  }




}
