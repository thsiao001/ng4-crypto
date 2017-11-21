import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {HttpModule} from '@angular/http';
import {CoinMarketService} from './service/coinMarket.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ng2SmartTableModule
  ],
  providers: [CoinMarketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
