import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from 'src/app/service/product/product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: Product = new Product(null, 'No Product');
  productId = null;
  constructor(private productService: ProductService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      if (params.id) {
        this.productService.getProduct(params.id).subscribe((product: Product) => {
          this.product = product;
        });
      }
    });
  }

}
