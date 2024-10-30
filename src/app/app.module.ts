import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorderCardDirective } from './directives/border-card.directive';
import { ColorTypePokemonPipe } from './pipes/color-type-pokemon.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BorderCardDirective,
    ColorTypePokemonPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
