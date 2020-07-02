import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComputersComponent } from './components/computers/computers.component';
import { ComputersDetailComponent } from './components/computers-detail/computers-detail.component';
import { AddComputerComponent } from './components/add-computer/add-computer.component';
import { EditComputerComponent } from './components/edit-computer/edit-computer.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    ComputersComponent,
    ComputersDetailComponent,
    AddComputerComponent,
    EditComputerComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
