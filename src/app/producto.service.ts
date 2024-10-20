import { Injectable } from '@angular/core';

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productos = [
      { id: 1, nombre: 'Arroz', descripcion: 'Arroz blanco de grano largo', precio: 20, stock: 100, imagen: 'https://miamarket.pe/assets/uploads/ecc3d0638f2a8c5bf9978884c90e9c68.jpg' },
      { id: 2, nombre: 'Frijoles', descripcion: 'Frijoles negros en bolsa de 1kg', precio: 30, stock: 50, imagen: 'https://plazavea.vteximg.com.br/arquivos/ids/27552455-1000-1000/995418.jpg' },
      { id: 3, nombre: 'Aceite', descripcion: 'Aceite vegetal de 1L', precio: 45, stock: 80, imagen: 'https://metroio.vtexassets.com/arquivos/ids/212206-800-auto?v=637713874921630000&width=800&height=auto&aspect=true' },
      { id: 4, nombre: 'Azúcar', descripcion: 'Azúcar refinada en bolsa de 1kg', precio: 18, stock: 60, imagen: 'https://metroio.vtexassets.com/arquivos/ids/281681-800-auto?v=638179308446000000&width=800&height=auto&aspect=true' },
      { id: 5, nombre: 'Harina', descripcion: 'Harina de trigo en bolsa de 1kg', precio: 22, stock: 75, imagen: 'https://ico.pe/wp-content/uploads/2022/11/harina-sin-preparar-100.jpg' },
      { id: 6, nombre: 'Sal', descripcion: 'Sal de mesa en paquete de 1kg', precio: 10, stock: 150, imagen: 'https://wongfood.vtexassets.com/arquivos/ids/225392-1200-auto?v=636632113620370000&width=1200&height=auto&aspect=true' },

  ];
  constructor() { }

  getProductos() {
    return this.productos;
  }

  getProductoById(id: number) {
    return this.productos.find(producto => producto.id === id);
  }
}
