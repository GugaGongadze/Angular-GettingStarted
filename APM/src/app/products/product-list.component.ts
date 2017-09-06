import { Component } from '@angular/core';

@Component ({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    products: any[] = [
        {
            'productId': 1,
            'productName': 'Leaf Rake',
            'productCode': 'GDN-0011',
            'releaseDate': 'March 19, 2016',
            'description': 'Leaf rake with 48-inch wooden handle.',
            'price': 19.95,
            'starRating': 3.2,
            'imageUrl': 'https://www.beatsons.co.uk/images/faithfull-leaf-rake-fibreglass-shaft-p7564-30639_medium.jpg'
        },
        {
            'productId': 2,
            'productName': 'Garden Cart',
            'productCode': 'GDN-0023',
            'releaseDate': 'March 18, 2016',
            'description': '15 gallon capacity rolling garden cart',
            'price': 32.99,
            'starRating': 4.2,
            // tslint:disable-next-line:max-line-length
            'imageUrl': 'https://2ecffd01e1ab3e9383f0-07db7b9624bbdf022e3b5395236d5cf8.ssl.cf4.rackcdn.com/Product-800x800/4398f5f4-08a3-4025-8241-c6289a9cd9c1.jpg'
        }
    ];
}
