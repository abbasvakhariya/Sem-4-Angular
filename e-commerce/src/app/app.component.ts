import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { CategoryComponent } from './category/category.component';
import { BestSellerProductComponent } from './best-seller-product/best-seller-product.component';
import { OffersComponent } from './offers/offers.component';
import { FeatureProductComponent } from './feature-product/feature-product.component';
import { MostPopularComponent } from './most-popular/most-popular.component';
import { ArraivalComponent } from './arraival/arraival.component';
import { AdvertaisComponent } from './advertais/advertais.component';
import { PeoplelookingComponent } from './peoplelooking/peoplelooking.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,BannerComponent,CategoryComponent,BestSellerProductComponent,OffersComponent,FeatureProductComponent,MostPopularComponent,ArraivalComponent,AdvertaisComponent,PeoplelookingComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e-commerce';
}
