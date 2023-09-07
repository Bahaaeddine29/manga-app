import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { MangaListComponent } from './manga-list/manga-list.component';
import { MangaDetailsComponent } from './manga-details/manga-details.component';
import { Error404Component } from './error404/error404.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    MangaListComponent,
    MangaDetailsComponent,
    Error404Component,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    UserDetailComponent,
    ContactComponent,
    ContactReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule, 
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
