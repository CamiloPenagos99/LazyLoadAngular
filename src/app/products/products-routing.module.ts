import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListarComponent } from './pages/listar/listar.component';
import { ProductoComponent } from './pages/producto/producto.component';

const routes: Routes = [
  { path: '',
    children: [
      {path: 'agregar', component: AgregarComponent},
      {path: 'listar', component: ListarComponent },
      {path: 'producto', component: ProductoComponent},
      {path: '**', redirectTo: 'agregar'},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
