import { Component, OnInit, Input } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { InitialState } from '../store/reducer';
import { AddToCart, RemoveFromCart } from '../store/actions';

export interface Product {
  name: string;
  price: number;
  description: string;
  image: string;
}


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private ngRedux: NgRedux<InitialState>) { }
  inCart = false;
  @Input() product: Product;


  addToCart(item: Product) {
    this.ngRedux.dispatch(AddToCart(item));
    this.inCart = true;
  }

  removeFromCart(item: Product) {
    this.ngRedux.dispatch(RemoveFromCart(item));
    this.inCart = false;
  }

  ngOnInit() {
  }

}
