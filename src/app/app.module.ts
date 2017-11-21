import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpModule } from '@angular/http';
import { CoinMarketService } from './service/coinMarket.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'watchlist', component: WatchListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WatchListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ng2SmartTableModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [CoinMarketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
