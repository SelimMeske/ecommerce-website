import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BackendComponent } from './backend/backend.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MiniSliderComponent } from './mini-slider/mini-slider.component';
import { BigSliderComponent } from './big-slider/big-slider.component';
import { CategoryHomeSectionComponent } from './category-home-section/category-home-section.component';
import { TrendingHomeSectionComponent } from './trending-home-section/trending-home-section.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { TrustSectionComponent } from './trust-section/trust-section.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BackendComponent,
    NavigationComponent,
    MiniSliderComponent,
    BigSliderComponent,
    CategoryHomeSectionComponent,
    TrendingHomeSectionComponent,
    ProductCardComponent,
    NewsletterComponent,
    TrustSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
