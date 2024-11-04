import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrl: './detail-pokemon.component.scss'
})
export class DetailPokemonComponent implements OnInit {

  currentPkmn: Pokemon | undefined;
  
  constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService) {}

  ngOnInit(): void {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    
    if (pokemonId) {
      this.currentPkmn = this.pokemonService.getPokemonById(Number(pokemonId));
    }
  }

  goToPokemonList() {
    this.router.navigate(['/pokemons']);
  }

  goToEditPokemon(pokemon: Pokemon): void {
    this.router.navigate(['/edit/pokemon/', pokemon.id]);
  }
}
