import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MainComponent} from './pages/main/main.component'
import { ProductsComponent } from './pages/products/products.component';
import { FeaturedComponent } from './pages/featured/featured.component';
import { FiltersComponent } from './pages/filters/filters.component';

const routes: Routes = [
  // lo que hay en los :algo es el nombre con el que recogo el parametro de la url
  // en este caso paramMap.get('categoria')  está en el products.components.ts
  { path: 'categoria/:categoria'
  , component: ProductsComponent
  },
  { path: 'search/:search'
  , component: FeaturedComponent
  },
  { path: 'categoria/:opcion/:subOpcion'
  , component: ProductsComponent
  },
  { path: ''
  , component: MainComponent
  },
  { path: 'products/:id'
  , component: FiltersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
