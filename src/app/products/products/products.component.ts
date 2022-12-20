import { Component } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  
  constructor(private dataService: ProductDataService){}
  products: Observable<any> = new Observable;


  ngOnInit() {
    this.products = this.dataService.getAllProducts()
  }

  
}
