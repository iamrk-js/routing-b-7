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
      pstatus : "In Progress"
    },
    {
      pname : "Iphone",
      pid : 2,
      pstatus : "Dispatched"
    },
    {
      pname : "Macbook",
      pid : 3,
      pstatus : "Delivered"
    }
  ]
  constructor() { }

  getAllProducts() : Array<Iprodcut>{
    return this.productsArray
  }

  getProduct(id : number): Iprodcut{
    return this.productsArray.find(prod => prod.pid === id)!
  }
}
