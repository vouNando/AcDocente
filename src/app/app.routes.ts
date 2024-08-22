import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { NosotrosComponent } from './page/nosotros/nosotros.component';
import { ProductosComponent } from './page/productos/productos.component'
import { Error404Component } from './page/error404/error404.component';
import { ProductoComponent } from './page/producto/producto.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'producto/:id', component: ProductoComponent },
    { path: 'nosotros', component: NosotrosComponent },
  
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: Error404Component }
];
