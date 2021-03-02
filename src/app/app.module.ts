import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


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
import { StagedetailsComponent } from './stagedetails/stagedetails.component'

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
    StagedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

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
