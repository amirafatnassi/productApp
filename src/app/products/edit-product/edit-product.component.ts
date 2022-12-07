import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent {
  product: any;
  productId: any;
  productForm = new FormGroup({
    nomProduit: new FormControl(''),
    description: new FormControl(''),
    quantite: new FormControl(0),
    prix: new FormControl(0),
  });

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.productId = this.route.snapshot.params['id'];
    this.myProduct();
  }

  myProduct() {
    this.productService.getProduct(this.productId).subscribe((res: any) => {
      this.product = res;
      this.productForm.patchValue(res);
    });
  }

  modifierProduct() {
    this.productService
      .updateProduct(this.productId, this.productForm.value)
      .subscribe((res: any) => {
        console.log('product updated !');
        this.ngOnInit();
      });
  }
}
