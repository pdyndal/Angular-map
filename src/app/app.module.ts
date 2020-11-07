import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopBarMapAndInfoComponent } from './top-bar-map-and-info/top-bar-map-and-info.component';
import { MapContainerComponent } from './map-container/map-container.component';
import { SideMapAdditionalDataComponent } from './side-map-additional-data/side-map-additional-data.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarMapAndInfoComponent,
    MapContainerComponent,
    SideMapAdditionalDataComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }