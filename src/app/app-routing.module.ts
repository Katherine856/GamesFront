import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GamePageComponent } from './pages/game-page/game-page.component';

//Definimos las rutas que tendra muestras aplicación
const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'game/:id', component: GamePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
