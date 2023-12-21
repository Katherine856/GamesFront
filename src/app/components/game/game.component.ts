import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  @Input() game!: any;

  constructor(private router: Router){ }

  seeMore(){
    this.router.navigate(['/game/', this.game.gameID]);
  }
}
