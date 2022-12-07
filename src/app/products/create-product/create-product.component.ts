import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent {
  validForm = false;
  
  constructor(private productService: ProductsService) {}
  ngOnInit() {}

  productForm = new FormGroup({
    nomProduit: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    quantite: new FormControl(0, [
      Validators.required,
      Validators.min(0),
      Validators.max(100),
    ]),
    prix: new FormControl(0, [
      Validators.required,
      Validators.min(0),
      Validators.max(1000),
    ]),
  });

  onSubmitFormGroupe() {
    this.validForm = true;
    if (this.productForm.invalid) {
      return;
    }
    this.productService
      .createProduct(this.productForm.value)
      .subscribe((res: any) => {
        console.log(res);
      });
  }
}
