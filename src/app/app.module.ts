import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IconsModule } from './icons/icons.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { DataService } from './shared/services/data.service';
import { ArtistCardComponent } from './components/artist-card/artist-card.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistCardComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IconsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
