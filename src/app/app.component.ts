import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../../Poke-BD/mock-pokemon-list';
import { Pokemon } from './models/pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  ngOnInit(): void {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId: string) {
    const id = Number(pokemonId);
    const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id == Number(pokemonId));
    this.pokemonSelected = pokemon;
    if (pokemon) {
      console.log(`Vous avez demandé le pokémon ${pokemon.name}.`);
    } else {
      console.log(`Vous avez demandé un pokémon qui n'existe pas.`);
    }
    
  }
}
