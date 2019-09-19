import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RentalListComponent } from './containers/rental-list/rental-list.component';
import { FilterComponent } from './containers/filter/filter.component';

import { BikeRentalService } from './core/services/bikerental.service';

import { ItemCardModule } from './components/item-card/item-card.module';
import { CartCardModule } from './components/cart-card/cart-card.module';
import { PopupModule } from './components/popup/popup.module';

@NgModule({
  declarations: [
    AppComponent,
    RentalListComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ItemCardModule,
    CartCardModule,
    PopupModule,
  ],
  providers: [BikeRentalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
