import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Common/nav-bar/nav-bar.component';
import { BottomBarComponent } from './Common/bottom-bar/bottom-bar.component';
import { FooterComponent } from './Common/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './Common/error/error.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, BottomBarComponent, FooterComponent, HomeComponent, ErrorComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
