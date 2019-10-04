import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';
import { NewtodoModule } from './newtodo/newtodo.module';
import { FormsModule } from '@angular/forms';
import { UsernewComponent } from './usernew/usernew.component';
import { UsernewModule } from './usernew/usernew.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    TodosModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
