import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  constructor(private productService: ProductsService) {}
  ngOnInit() {}

  productForm = new FormGroup({
    nomProduit: new FormControl(''),
    description: new FormControl(''),
    quantite: new FormControl(''),
    prix: new FormControl('')
  })


  onSubmitFormGroupe() {
    console.log(this.productForm.value);
    const nouveauProduit = {
      id: this.productService.products.length,
      nomProduit: this.productForm.value.nomProduit || '',
      description: this.productForm.value.description || '',
      quantite: this.productForm.value.quantite || 0,
      prix: this.productForm.value.prix || 0,
    };
    console.log(nouveauProduit);
    this.productService.products.push(nouveauProduit);
  }
}
