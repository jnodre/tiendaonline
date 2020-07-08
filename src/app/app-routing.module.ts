import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MainComponent} from './pages/main/main.component'
import { FiltersComponent } from './pages/filters/filters.component';
import { ProductsComponent } from './pages/products/products.component';
import { FeaturedComponent } from './pages/featured/featured.component';

const routes: Routes = [
  // { path: 'products',
  //  component: ProductsComponent,
  //  children: [
  //    { path: 'filters', component: FiltersComponent, outlet: "sidebar" }
  //  ] },
  { path: 'categoria/:opcion'
  , component: ProductsComponent 
  },
  { path: ''
  , component: MainComponent 
  },
  // { path: 'searching/:categoria/:subcategoria'
  // , component: ProductsComponent 
  // },
  // { path: 'searching/:categoria'
  // , component: ProductsComponent 
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
