import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { MangaListComponent } from './manga-list/manga-list.component';

const routes: Routes = [
  { path: '', component: HomeComponentComponent}, 
  { path: 'mangas', component: MangaListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
