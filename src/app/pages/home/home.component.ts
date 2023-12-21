import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { Game } from 'src/app/tools/models/Game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  games: any;

  constructor(private service: ServiceService){ }

  ngOnInit(): void {
    this.getGames('');
  }

  //Método que trae los juegos por el nombre
  getGames(fetchGame: string) {
    this.service.getGames(fetchGame).subscribe(data => {
      this.games = data;
    })
  }

  //Recupermaos el valor del input del componente header
  search(fetchGame: string){
    this.getGames(fetchGame);
  }
}
