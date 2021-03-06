import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { DataService } from './data.service';
// import { AsyncPipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule, routing, FormsModule, BrowserAnimationsModule
  ],
  providers: [appRoutingProviders, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
