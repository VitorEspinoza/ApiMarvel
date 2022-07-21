import { ProfileComponent } from './profile/profile.component';
import { CharacterBySerieIdComponent } from './character-by-serie-id/character-by-serie-id.component';
import { AllSeriesComponent } from './all-series/all-series.component';
import { AllComicsComponent } from './all-comics/all-comics.component';
import { AllCharactersComponent } from './all-characters/all-characters.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'characters',component:AllCharactersComponent},
  {path:'comics',component:AllComicsComponent},
  {path:'series',component:AllSeriesComponent},
  {path:'characters-by-serie-id', component: CharacterBySerieIdComponent},
  {path:'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
