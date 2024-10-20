import { Routes } from '@angular/router';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';

export const routes: Routes = [
    { path: '', component: ProductoListaComponent },
    { path: 'producto/:id', component: ProductoDetalleComponent }
];
