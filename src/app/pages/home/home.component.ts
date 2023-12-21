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
  
    this.service.getGames().subscribe(data => {
      console.log(data);
    })

    this.getGames();

  }

  //Método que trae los juegos por el nombre
  getGames() {
    this.service.getGames().subscribe(data => {
      this.games = data;
    })
  }
}
