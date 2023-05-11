import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iprodcut, Tpstatus } from 'src/app/shared/model/products';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  prodId !: number;
  prodObj !: Iprodcut;
  canEditProd !: number;
  constructor(
    private _router : Router,
    private _route : ActivatedRoute,
    private _productsService : ProductsService
    ) { }

  ngOnInit(): void {
    this._route.params
          .subscribe((params : Params) => {
            this.prodId = +params['productId'];
            this.prodObj = this._productsService.getProduct(this.prodId)
          })

    this._route.queryParams
            .subscribe((qp : Params) => {
              console.log(qp)
              this.canEditProd = +qp['canEdit']
            })
  }
  updateProd(pname : HTMLInputElement, pstatus : HTMLSelectElement ){
    let obj : Iprodcut = {
      pname : pname.value,
      pstatus : pstatus.value as Tpstatus,
      pid : this.prodId,
      canReturn : this.prodObj.canReturn
    }
    this._productsService.updateProd(obj);
    this._router.navigate(["/products", this.prodId])
  }
}
