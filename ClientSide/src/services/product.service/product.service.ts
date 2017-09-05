import { Injectable } from '@angular/core';
import {Product} from "../../app/products/product";
import {AuthService} from "../auth.service";

@Injectable()
export class ProductService {

  newProductList : Product[] = new Array;
  product : Product;
  constructor() { }


  pasrseJsonSingleProduct(product){
    product = new Product(product.serialNumber,product.productName,product.productCategory,product.weightable,product.productPrice,product.productManufacturer,product.productStoreID);
    return product;
  }

  pasreJasonProductList(productList){

    let newProduct : Product;
    let i : number =0;
    console.log(productList.data.callback);
    for(let product of productList.data.callback){
      newProduct = this.pasrseJsonSingleProduct(product)
      this.newProductList[i] = newProduct;

      i++;
    }
    return this.newProductList;

  }

  deleteProduct(deleteProduct){

    let i : number =0;
    for(let product of this.newProductList){
      if(product.serial == deleteProduct.serial){
        this.newProductList.splice(i,1);
      }
      i++;
    }


  }



  updateProduct(updateProduct){
    let i : number =0;
    for(let product of this.newProductList){
      if(product.serial == updateProduct.serial){
        this.newProductList[i] = updateProduct;
      }
      i++;
    }
  }

  getProductBySerial(serial:number){

    for(let product of this.newProductList){
      if(product.serial==serial){
        return product;
      }

    }
    return undefined;
  }

  pasreJasonProductListSearch(productList){
    let  list : Product[] = new Array;
    let newProduct : Product;
    let i : number =0;
    console.log(productList.data.callback);
    for(let product of productList.data.callback){
      newProduct = this.pasrseJsonSingleProduct(product)
      list[i] = newProduct;
      i++;
    }
    console.log("in pasreJasonProductListSearch");
    console.log(list);
    return list;
  }

}
