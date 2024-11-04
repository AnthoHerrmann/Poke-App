import { Injectable } from '@angular/core';
import { Pokemon } from './models/pokemon.model';
import { POKEMONS } from './mock-pokemon-list';

@Injectable()
export class PokemonService {

  typesList: String[];

  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }

  getPokemonById(pokemonId: number): Pokemon | undefined {
    return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  }

  getPokemonTypeList(): string[] {
    return ['Plante',
            'Feu',
            'Eau',
            'Insecte',
            'Normal',
            'Electrik',
            'Poison',
            'Fée',
            'Vol',
            'Combat',
            'Psy'];
  }
}
