import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  products= [
    { "id": 1, "nomProduit": "test1", "description": "produit 11111111","quantite":5,"prix":200 },
    { "id": 2, "nomProduit": "test2", "description": "produit 22222222","quantite":15,"prix":400 },
    { "id": 3, "nomProduit": "test3", "description": "produit 3333333333","quantite":35,"prix":2200 },
    { "id": 4, "nomProduit": "test4", "description": "produit 444444444","quantite":55,"prix":8800 },];

}