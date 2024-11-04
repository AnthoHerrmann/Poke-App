import { Component } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { POKEMONS } from '../../../../Poke-BD/mock-pokemon-list';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.scss'
})
export class ListPokemonComponent {
  pokemonList: Pokemon[] = POKEMONS;
}
