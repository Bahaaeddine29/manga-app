import { Component, OnInit } from '@angular/core';
import { Manga } from '../entities';
import { MANGAS } from '../mock-mangas-list';

@Component({
  selector: 'app-manga-list',
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.css']
})
export class MangaListComponent implements OnInit {

  mangas: Manga[] = [];

  constructor() {}

  ngOnInit(): void {
    this.mangas = MANGAS; // Utilisez les données importées
  }
}
