import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './directives/border-card.directive';
import { ColorTypePokemonPipe } from './pipes/color-type-pokemon.pipe';

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
  ]
})

export class PokemonModule {}