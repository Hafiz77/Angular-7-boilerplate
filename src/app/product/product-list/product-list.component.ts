import { Product } from './../product';
import { ProductService } from '../../service/product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  searchText = '';
  colors = ['CYAN', 'GREEN', 'YELLOW'];
  myColor = '';
  config: any;
  constructor(
    private productService: ProductService
  ) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.products.length
    };
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  ngOnInit() {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

}
