import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { CreateInputComponent } from './create-input/create-input.component';

import { UpdateInputComponent } from './update-input/update-input.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    CreateInputComponent,
    UpdateInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
