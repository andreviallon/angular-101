import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';

import { SummaryPipe } from './summary.pipe';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorComponent } from './author/author.component';
import { AuthorsService } from './authors.service';
import { PersonComponent } from './person/person.component';
import { PersonService } from './person.service';
import { FilmComponent } from './film/film.component';
import { FilmService } from './film.service';
import { CarComponent } from './car/car.component';
import { CarsService } from './cars.service';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './github-followers.service';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorComponent,
    PersonComponent,
    FilmComponent,
    CarComponent,
    SummaryPipe,
    TitleCasePipe,
    PanelComponent,
    LikeComponent,
    DirectivesComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    PostsComponent,
    NavbarComponent,
    GithubFollowersComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'followers/:username',
        component: GithubProfileComponent
      },
      {
        path: 'followers',
        component: GithubFollowersComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [
    CoursesService,
    AuthorsService,
    PersonService,
    FilmService,
    CarsService,
    PostService,
    GithubFollowersService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
