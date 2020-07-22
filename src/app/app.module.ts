import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainComponent} from './pages/main/main.component'
import { FiltersComponent } from './pages/filters/filters.component';
import { ProductsComponent } from './pages/products/products.component';
import { FeaturedComponent } from './pages/featured/featured.component';
import { Ng5SliderModule } from 'ng5-slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgImageSliderModule } from 'ng-image-slider';
import { TrabajaComponent } from './pages/trabaja/trabaja.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FiltersComponent,
    ProductsComponent,
    FeaturedComponent,
    TrabajaComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    FlexLayoutModule,
    Ng5SliderModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
