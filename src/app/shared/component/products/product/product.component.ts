import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iprodcut } from 'src/app/shared/model/products';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _productsService: ProductsService,
    private _router : Router
  ) { }
  prodId !: number;
  prodObj !: Iprodcut;
  ngOnInit(): void {
    this._route.params
      .subscribe((params: Params) => {
        this.prodId = +params['productId'];
        this.prodObj = this._productsService.getProduct(this.prodId)
      })
  }

  goToEditProduct() {
    this._router.navigate(['/products', this.prodId, 'edit'], {
      queryParamsHandling : "preserve"
    })
  }

}
