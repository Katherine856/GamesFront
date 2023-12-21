import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../tools/models/Game';
import { GameInfo } from '../tools/models/GameInfo';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url = environment.apiUrl; //Url de la API 

  constructor( private httpClient: HttpClient ) { }

  //Método que permite traer todos los juegos por titulo
  getGames(fetchGame: string): Observable<Game> {
    return this.httpClient.get<Game>(this.url + `games?title=${fetchGame}&limit=10`);
  }

  //Método que permite traer un juego por su id
  getGame(idGame: number): Observable<GameInfo> {
    return this.httpClient.get<GameInfo>(this.url + `games?id=${idGame}`);
  }
  
}
