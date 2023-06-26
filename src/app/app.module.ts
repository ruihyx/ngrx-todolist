import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TodoitemComponent } from './components/todoitem/todoitem.component';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './ngrx/todo.reducers';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './ngrx/todo.effects';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent, 
    TodoitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({todos: todoReducer}),
    EffectsModule.forRoot([TodoEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
