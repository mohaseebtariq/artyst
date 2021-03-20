import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsModule } from './icons/icons.module';
import { DataService } from './shared/services/data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IconsModule,
    AppRoutingModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
