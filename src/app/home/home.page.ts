import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public pokemons: any;

  constructor(protected http: HttpClient) {}

  ngOnInit(){

    var url: string = "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";

    this.http.get(url).subscribe( (data: any)=>{

      console.log(data);

      

      this.pokemons = data.pokemon;


    }, (error: any)=>{
      console.error(JSON.stringify(error));
    })
  }

}
