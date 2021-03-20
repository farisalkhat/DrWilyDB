import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MatchdetailsComponent } from './matchdetails/matchdetails.component';
import { MatchesComponent } from './matches/matches.component';
import { PlayerMatchesComponent } from './playerdetails/player-matches/player-matches.component';
import { PlayerPeersComponent } from './playerdetails/player-peers/player-peers.component';
import { PlayerRobotmastersComponent } from './playerdetails/player-robotmasters/player-robotmasters.component';
import { PlayerSeriesComponent } from './playerdetails/player-series/player-series.component';
import { PlayerTotalsComponent } from './playerdetails/player-totals/player-totals.component';
import { PlayerdetailsComponent } from './playerdetails/playerdetails.component';
import { PlayerhomeComponent } from './playerdetails/playerhome/playerhome.component';
import { PlayersComponent } from './players/players.component';
import { RegisterComponent } from './register/register.component';
import { RobotMastersComponent } from './robot-masters/robot-masters.component';
import { RobotmasterDetailsComponent } from './robotmaster-details/robotmaster-details.component';
import { StagedetailsComponent } from './stagedetails/stagedetails.component';
import { StagesComponent } from './stages/stages.component';
import { SubmitComponent } from './submit/submit.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'stages',
    component:StagesComponent
  },
  {
    path:'matches',
    component:MatchesComponent
  },
  {
    path:'robot-masters',
    component:RobotMastersComponent
  },
  {
    path:'submit',
    component:SubmitComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'players',
    component:PlayersComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'matches/:matchid',
    component: MatchdetailsComponent
  },
  {
    path:'stages/:name',
    component: StagedetailsComponent
  },
  {
    path:'players/:playername/matches',
    component:PlayerMatchesComponent
  },
  {
    path:'players/:playername/series',
    component:PlayerSeriesComponent
  },
  {
    path:'players/:playername/robotmasters',
    component:PlayerRobotmastersComponent
  },
  {
    path:'players/:playername/peers',
    component:PlayerPeersComponent
  },
  {
    path:'players/:playername/totals',
    component:PlayerTotalsComponent
  },
  {
    path:'players/:playername',
    component:PlayerhomeComponent
  },
  {
    path:'robotmasters/:robotmaster',
    component:RobotmasterDetailsComponent
  },
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }