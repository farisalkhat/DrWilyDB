import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MatchesComponent } from './matches/matches.component';
import { RobotMastersComponent } from './robot-masters/robot-masters.component';
import { PlayersComponent } from './players/players.component';
import { SubmitComponent } from './submit/submit.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { NavigationComponent } from './navigation/navigation.component';
import {TokenInterceptorService} from './token-interceptor.service';
import { StagesComponent } from './stages/stages.component';
import { MatchdetailsComponent } from './matchdetails/matchdetails.component';
import { StagedetailsComponent } from './stagedetails/stagedetails.component';
import { GameformComponent } from './submit/gameform/gameform.component';
import { PlayerdataComponent } from './submit/gameform/playerdata/playerdata.component';
import { PlayerdetailsComponent } from './playerdetails/playerdetails.component';
import { PlayerMatchesComponent } from './playerdetails/player-matches/player-matches.component';
import { PlayerSeriesComponent } from './playerdetails/player-series/player-series.component';
import { PlayerRobotmastersComponent } from './playerdetails/player-robotmasters/player-robotmasters.component';
import { PlayerPeersComponent } from './playerdetails/player-peers/player-peers.component';
import { PlayerTotalsComponent } from './playerdetails/player-totals/player-totals.component';
import { PlayerhomeComponent } from './playerdetails/playerhome/playerhome.component';
import { RobotmasterDetailsComponent } from './robotmaster-details/robotmaster-details.component';
import { SeriesdataComponent } from './submit/gameform/seriesdata/seriesdata.component'
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    MatchesComponent,
    RobotMastersComponent,
    PlayersComponent,
    SubmitComponent,
    NavigationComponent,
    StagesComponent,
    MatchdetailsComponent,
    StagedetailsComponent,
    GameformComponent,
    PlayerdataComponent,
    PlayerdetailsComponent,
    PlayerMatchesComponent,
    PlayerSeriesComponent,
    PlayerRobotmastersComponent,
    PlayerPeersComponent,
    PlayerTotalsComponent,
    PlayerhomeComponent,
    RobotmasterDetailsComponent,
    SeriesdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule

  ],
  providers: [AuthService,AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
