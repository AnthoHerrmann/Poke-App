import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../../pokemon.service';
import { Pokemon } from '../../models/pokemon.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrl: './pokemon-form.component.scss'
})
export class PokemonFormComponent implements OnInit {

  @Input() pokemon: Pokemon;
  typePokemonList: string[];

  constructor(private pokemonService: PokemonService, private router: Router) {}
  
  ngOnInit(): void {
    this.typePokemonList = this.pokemonService.getPokemonTypeList();
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string): void {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    if(isChecked) {
      this.pokemon.types.push(type);
    } else {
      const indexType: number = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(indexType, 1);
    }
  }

  isTypesValid(type: string): boolean {
    if(this.pokemon.types.length <= 1 && this.hasType(type)) {
      return false;
    } else if (this.pokemon.types.length >= 2 && !this.hasType(type)) {
      return false;
    }
    return true;
  }

  onSubmit() {
    this.router.navigate(['/pokemon/', this.pokemon.id]);
  }
}
