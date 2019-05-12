import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { SharesService } from './services/shares.service';
import { AuthEffects } from './store/effects/auth.effects';
import { ShareEffects } from './store/effects/shares.effects';
import { reducers } from './store/app.states';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([AuthEffects, ShareEffects]),
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AuthService, SharesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
