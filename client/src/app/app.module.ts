import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DuelComponent } from './duel/duel.component';
import { InspectComponent } from './inspect/inspect.component';
import { LinkButtonComponent } from './Components/link-button/link-button.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { TextInputComponent } from './Components/text-input/text-input.component';
import { UserService } from 'src/user.service';
import { CardComponent } from './Components/card/card.component';
import { WinBannerComponent } from './Components/win-banner/win-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    DuelComponent,
    InspectComponent,
    NavbarComponent,
    LinkButtonComponent,
    HomeComponent,
    TextInputComponent,
    CardComponent,
    WinBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
