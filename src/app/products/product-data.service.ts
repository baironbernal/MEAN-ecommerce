import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http$: HttpClient) { }

  getAllProducts() {
    return this.http$.get('/assets/products.json')
  }
}
