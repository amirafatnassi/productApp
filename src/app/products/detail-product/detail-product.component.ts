import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {}
  product: any;
  productId: any;
  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    this.product = this.productService.products[this.productId];
  }
}
