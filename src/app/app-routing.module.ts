import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { NewAuthorComponent } from './admin/new-author/new-author.component';
import { NewBookComponent } from './admin/new-book/new-book.component';
import { NewGenreComponent } from './admin/new-genre/new-genre.component';
import { GenresComponent } from './genres/genres.component';
import { SpecificGenreComponent } from './genres/specific-genre/specific-genre.component';
import { AuthorsComponent } from './authors/authors.component';
import { SpecificAuthorComponent } from './authors/specific-author/specific-author.component';
import { SpecificBookComponent } from './specific-book/specific-book.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { EditBookComponent } from './admin/edit-book/edit-book.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'newAuthor', component: NewAuthorComponent, canActivate: [RoleGuard]},
  {path: 'newBook', component: NewBookComponent, canActivate: [RoleGuard]},
  {path: 'newGenre', component: NewGenreComponent, canActivate: [RoleGuard]},
  {path: 'genres', component: GenresComponent, canActivate: [AuthGuard]},
  {path: 'genres/:id', component: SpecificGenreComponent, canActivate: [AuthGuard]},
  {path: 'authors', component: AuthorsComponent, canActivate: [AuthGuard]},
  {path: 'authors/:id', component: SpecificAuthorComponent, canActivate: [AuthGuard]},
  {path: 'books/:bookId/:authorId', component: SpecificBookComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
