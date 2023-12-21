import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent {

  idGame: any;
  game: any;

  constructor(private activateRoute: ActivatedRoute, private service: ServiceService){}

  ngOnInit(): void {
    this.idGame = this.activateRoute.snapshot.paramMap.get('id'); //Traer el id del juego
    this.getGame();
  }

  getGame() {
    this.service.getGame(this.idGame).subscribe(data => {
      this.game = data;
    })
  }
}
