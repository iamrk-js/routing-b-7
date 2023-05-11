import { Injectable } from '@angular/core';
import { Iprodcut } from '../model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // api call for Products 

  productsArray : Array<Iprodcut> =[
    {
      pname : "Samsung M31",
      pid : 1,
      pstatus : "In Progress",
      canReturn : 1
    },
    {
      pname : "Iphone",
      pid : 2,
      pstatus : "Dispatched",
      canReturn : 1
    },
    {
      pname : "Macbook",
      pid : 3,
      pstatus : "Delivered",
      canReturn : 0
    }
  ]
  constructor() { }

  getAllProducts() : Array<Iprodcut>{
    return this.productsArray
  }

  getProduct(id : number): Iprodcut{
    return this.productsArray.find(prod => prod.pid === id)!
  }

  updateProd(prodObj : Iprodcut){
    this.productsArray.forEach(prod => {
      if(prodObj.pid === prod.pid){
        prod.pname = prodObj.pname;
        prod.pstatus = prodObj.pstatus;
      }
    })
  }
}
