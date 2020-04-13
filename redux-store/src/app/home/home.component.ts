import { Component,OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { GetItems } from '../store/actions';
import { Product } from '../product/product.component';
import { NgRedux, select } from '@angular-redux/store';
import { InitialState } from '../store/reducer';

import { Observable } from 'rxjs';
import { FoodService } from '../food.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,AfterViewInit  {

  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;

  map: google.maps.Map;
  lat = 40.730610;
  lng = -73.935242;

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 8,
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });

  constructor(
    private ngRedux: NgRedux<InitialState>,
    private foodService: FoodService
  ) {}

  @select('items') items: Observable<Array<Product>>;

  banners = [
    {
      src:
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=850&q=80',
      alt: 'A tasty treat'
    },
    {
      src:
        'https://images.unsplash.com/photo-1504113888839-1c8eb50233d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=850&q=80',
      alt: 'Chocolate covered pancakes'
    },
    {
      src:
        'https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=850&q=80',
      alt: 'Burger and fries'
    },
    {
      src:
        'https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=850&q=80',
      alt: 'Get ready to slice'
    }
  ];



  ngOnInit() {

    this.foodService.getAll();

  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, 
    this.mapOptions);
    this.marker.setMap(this.map);
  }

   ngAfterViewInit() {
    this.mapInitializer();

  }

}
