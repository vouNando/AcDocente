import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { NosotrosComponent } from './page/nosotros/nosotros.component';
import { ProductosComponent } from './page/productos/productos.component'
import { Error404Component } from './page/error404/error404.component';
import { ProductoComponent } from './page/producto/producto.component';
import { LoginComponent } from './page/login/login.component';
import { TodosComponent } from './page/todos/todos.component';
import { permissionsGuard } from './guards/permissions.guard';
import { canActivate,redirectUnauthorizedTo } from '@angular/fire/auth-guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'productos', component: ProductosComponent, ...canActivate(() => redirectUnauthorizedTo(['login']) ) },
    { path: 'producto/:id', component: ProductoComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'login', component: LoginComponent },
    { path: 'todos', component: TodosComponent, canActivate: [permissionsGuard] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: Error404Component }
];
