import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgLibraryUiModule} from '../../projects/ng-library-ui/src/lib/ng-library-ui.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgLibraryUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
