import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../utils/producto';
import * as productoData from '../../../../public/json/productoData.json';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  productos: Producto[] = (productoData as any).default;
  idProductoSemana: number = 1;

  constructor() { }

  ngOnInit() { 
    console.log(productoData);
  }
}
