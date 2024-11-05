import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './components/list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './components/detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './directives/border-card.directive';
import { ColorTypePokemonPipe } from './pipes/color-type-pokemon.pipe';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './components/pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './components/edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './components/add-pokemon/add-pokemon.component';

const PokemonRoutes: Routes = [
  {
    path: 'edit/pokemon/:id',
    component: EditPokemonComponent
  },
  {
    path: 'pokemon/add',
    component: AddPokemonComponent
  },
  {
    path: 'pokemon/:id',
    component: DetailPokemonComponent 
  },
  {
    path: 'pokemons',
    component: ListPokemonComponent
  }
];

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    ColorTypePokemonPipe,
    PokemonFormComponent,
    EditPokemonComponent,
    AddPokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(PokemonRoutes)
  ],
  providers: [
    PokemonService
  ]
})

export class PokemonModule {}