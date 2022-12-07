import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  constructor(private productService: ProductsService) {}
  today = new Date();
  products :any[]=[];

  ngOnInit(): void {
    this.productList();
  }

  productList(){
    this.productService.getProducts().subscribe((res:any)=>{ this.products=res})
  }

  suppProduct(id:number){
    this.productService.deleteProduct(id).subscribe((res:any)=>{
      console.log('product deleted !');
      this.ngOnInit();
    });
  }
}
