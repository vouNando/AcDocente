import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../utils/producto';
import { RouterLink, RouterLinkActive } from '@angular/router';
import * as productoData from '../../../../public/json/productoData.json';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  id: number = 0;
  producto?: Producto;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      console.log(this.id);

      // Find the product by ID
      this.producto = ((productoData as any).default as Producto[])
        .find(producto => producto.id === this.id);
    });
  }
}


