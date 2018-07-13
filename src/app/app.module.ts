import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

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
    InputFormatDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    AuthorsService,
    PersonService,
    FilmService,
    CarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
