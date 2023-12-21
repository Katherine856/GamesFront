import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Router } from '@angular/router';
import { GameInfo } from 'src/app/tools/models/GameInfo';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent {

  idGame: number | any; //Id del juego
  game?: GameInfo; //Información del juego

  constructor(private activateRoute: ActivatedRoute, private service: ServiceService, private router: Router){}

  ngOnInit(): void {
    this.idGame = this.activateRoute.snapshot.paramMap.get('id'); //Obtener el id del juego
    this.getGame(); 
  }

  //Método que obtiene la información del juego
  getGame() {
    this.service.getGame(this.idGame).subscribe(data => {
      this.game = data;
    })
  }

  return(){
    this.router.navigate(['/']);
  }
}
