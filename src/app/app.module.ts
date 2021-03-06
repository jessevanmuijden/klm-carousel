import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { CarouselComponent } from './carousel/carousel.component';
import { ArrowsComponent } from './arrows/arrows.component';
import { PinsComponent } from './pins/pins.component';
import { SlideComponent } from './slide/slide.component';

@NgModule({
  declarations: [
    CarouselComponent,
    ArrowsComponent,
    PinsComponent,
    SlideComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [ CarouselComponent ]
})
export class AppModule { }
