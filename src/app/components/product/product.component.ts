import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: any = { productId: 1, productName: "Bardak", categoryId: 1, unitPrice: 1 }
  product1: any = { productId: 2, productName: "laptop", categoryId: 1, unitPrice: 1 }
  product2: any = { productId: 3, productName: "mouse", categoryId: 1, unitPrice: 1 }
  product3: any = { productId: 4, productName: "keyboard", categoryId: 1, unitPrice: 1 }
  product4: any = { productId: 5, productName: "camera", categoryId: 1, unitPrice: 1 }

  products = [this.product, this.product1, this.product2, this.product3, this.product4]

  constructor() { }

  ngOnInit(): void {
  }

}
