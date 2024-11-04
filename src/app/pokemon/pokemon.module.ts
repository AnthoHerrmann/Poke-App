import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './components/list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './components/detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './directives/border-card.directive';
import { ColorTypePokemonPipe } from './pipes/color-type-pokemon.pipe';
import { PokemonService } from './pokemon.service';

const PokemonRoutes: Routes = [
  {
    path: 'pokemons',
    component: ListPokemonComponent
  },
  {
    path: 'pokemon/:id',
    component: DetailPokemonComponent 
  }
];

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    ColorTypePokemonPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PokemonRoutes)
  ],
  providers: [
    PokemonService
  ]
})

export class PokemonModule {}