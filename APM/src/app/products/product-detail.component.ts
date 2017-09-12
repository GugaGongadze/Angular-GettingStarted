import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = {
      'productId': 1,
      'productName': 'Leaf Rake',
      'productCode': 'GDN-0011',
      'releaseDate': 'March 19, 2016',
      'description': 'Leaf rake with 48-inch wooden handle.',
      'price': 19.95,
      'starRating': 3.2,
      'imageUrl': 'https://www.beatsons.co.uk/images/faithfull-leaf-rake-fibreglass-shaft-p7564-30639_medium.jpg'
    };
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

}
