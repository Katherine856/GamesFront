import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  constructor(private service: ServiceService){ }

  ngOnInit(): void {
  
    this.service.getGames().subscribe(data => {
      console.log(data);
    })

  }

}
