import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  createProduct(data: any) {
    return this.http.post('http://localhost:3000/products', data);
  }

  getProducts() {
    return this.http.get('http://localhost:3000/products');
  }

  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }

  getProduct(id:number){
    return this.http.get('http://localhost:3000/products/'+id);
  }

  updateProduct(id:number,data:any){
    return this.http.put('http://localhost:3000/products/'+id,data);
  }
}
