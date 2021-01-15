import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe}  from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = [];
  termino: string;

  constructor( private activateRoute: ActivatedRoute,
               private _heroesService: HeroesService,
               private _router: Router 
               ) { 


  }

  ngOnInit(): void {

    this.activateRoute.params.subscribe( params => {
      //console.log(params['termino']); 
      this.termino= params['termino'],
      this.heroes = this._heroesService.buscarHeroe( params['termino'] );
      console.log(this.heroes);

    })

  }

  getHeroe (idx:number){
    // console.log(idx);
    this._router.navigate( ['/heroe', idx] );
  }

}
