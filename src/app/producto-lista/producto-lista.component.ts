import { Component } from '@angular/core';
import { ProductoService } from '../producto.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto-lista',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './producto-lista.component.html',
  styleUrl: './producto-lista.component.css'
})
export class ProductoListaComponent {
  productos: any[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productos = this.productoService.getProductos();
  }

}
