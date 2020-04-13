import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { InitialState } from '../store/reducer';
import { Product } from '../product/product.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private ngRedux: NgRedux<InitialState>) {
    this.ngRedux
      .select<Array<Product>>('cart')
      .subscribe((items: Array<Product>) => {
        this.cart = items;
        console.log("catr iss",this.cart);
      });
  }
  cart: Array<Product>;

  
  ngOnInit() {
  
  }

}
