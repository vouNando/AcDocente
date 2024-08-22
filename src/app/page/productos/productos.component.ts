import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../utils/producto';
import { Router } from '@angular/router';
import * as productoData from '../../../../public/json/productoData.json';
import { Renderer2 } from '@angular/core'; // Importa Renderer2

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'] // Corrige "styleUrl" a "styleUrls"
})
export class ProductosComponent {
  productos: Producto[] = (productoData as any).default;

  constructor(private router: Router, private renderer: Renderer2) { } // Añade Renderer2 al constructor

  ngOnInit(): void { }

  onClickButton1(): void {
    console.log(this.productos);
  }

  onClickProducto(producto: Producto): void {
    this.router.navigate(['/producto', producto.id]);
  }

  onHoverCard(event: MouseEvent): void {
    const fila = (event.target as HTMLElement).closest('.fila-cards');
    this.renderer.setStyle(fila, 'animation-play-state', 'paused');
  }

  onLeaveCard(event: MouseEvent): void {
    const fila = (event.target as HTMLElement).closest('.fila-cards');
    this.renderer.setStyle(fila, 'animation-play-state', 'running');
  }
}
