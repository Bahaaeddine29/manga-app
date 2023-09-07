import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { MangaListComponent } from './manga-list/manga-list.component';
import { MangaDetailsComponent } from './manga-details/manga-details.component';
import { Error404Component } from './error404/error404.component';
import { UserComponent } from './user/user.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponentComponent}, 
  { path: 'mangas', component: MangaListComponent},
  { path: 'mangas/:id', component: MangaDetailsComponent },
  { path : 'users', component: UserComponent}, 
  { path : 'contact', component: ContactComponent},
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
