import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MangaService } from './../manga.service';

@Component({
  selector: 'app-manga-details',
  templateUrl: './manga-details.component.html',
  // styleUrls: ['./manga-details.component.css']
})
export class MangaDetailsComponent implements OnInit {

  manga :any; 
  constructor ( private MangaService : MangaService, private route : ActivatedRoute) {

  }

 
  getMangaById(id: number) {
    this.manga = this.MangaService.fetchById(id); 
  }


  ngOnInit(): void {
    this.route.params.subscribe (params => {
      const mangaId = +params['id'];
      this.getMangaById(mangaId-1);
    })
  }


}
