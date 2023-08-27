import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { NewAuthorComponent } from './admin/new-author/new-author.component';
import { NewBookComponent } from './admin/new-book/new-book.component';
import { NewGenreComponent } from './admin/new-genre/new-genre.component';
import { GenresComponent } from './genres/genres.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'newAuthor', component: NewAuthorComponent},
  {path: 'newBook', component: NewBookComponent},
  {path: 'newGenre', component: NewGenreComponent},
  {path: 'genres', component: GenresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
