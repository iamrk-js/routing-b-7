import { Component, OnInit } from '@angular/core';
import { Iprodcut } from '../../model/products';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productsData !: Array<Iprodcut>
  constructor(private _productsService : ProductsService) { }

  ngOnInit(): void {
    this.productsData = this._productsService.getAllProducts()
  }

}
