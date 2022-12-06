import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() id!: number;
  @Input() nomProduit!: string;
  @Input() description!: string;
  status: boolean = false;
  statut: string = 'non vérifier';
  isAuth = false;

  constructor() {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  ngOnInit(): void {
    if (this.status) {
      this.statut = 'vérifier';
    } else {
      this.statut = 'non vérifier';
    }
  }

  changeStatus() {
    this.status = !this.status;
    this.ngOnInit();
  }
}
