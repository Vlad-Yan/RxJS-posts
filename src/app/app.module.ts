import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ModalModule} from "./modal/modal.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
