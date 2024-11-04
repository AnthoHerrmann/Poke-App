import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../../../../Poke-BD/mock-pokemon-list';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrl: './detail-pokemon.component.scss'
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  currentPkmn: Pokemon | undefined;
  pokemonId: string | null;
  
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.pokemonList = POKEMONS;
    this.pokemonId = this.route.snapshot.paramMap.get('id');
    
    if (this.pokemonId) {
      this.currentPkmn = this.pokemonList.find(pokemon => pokemon.id == Number(this.pokemonId));
    }
  }
}
