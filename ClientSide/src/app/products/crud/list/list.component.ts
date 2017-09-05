import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../../../services/product.service/product.service";
import {Product} from "../../product";
import {AuthService} from "../../../../services/auth.service";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit,OnDestroy{

  products: Product[] = new Array;

  constructor(private flashMessage:FlashMessagesService,private productService:ProductService,private authService: AuthService) {

  }

  ngOnInit() {

    const path = "products/list";

    console.log('list comp ng oninit');
    this.authService.httpGet(path).subscribe(data => {
      if(data.success){

        this.products = this.productService.pasreJasonProductList({data});

        console.log('list comp',this.products);
        this.flashMessage.show('Success to bring the products from DB ', {cssClass: 'alert-success', timeout: 5000});

      } else {
        console.log("im here!!")

      }
    });

  this.ngOnDestroy();
  }



ngOnDestroy(){
    this.products = [];
}




}
