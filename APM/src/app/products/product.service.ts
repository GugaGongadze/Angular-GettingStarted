import { Injectable } from '@angular/core';
import { IProduct } from './product';

@Injectable()

export class ProductService {

    getProducts(): IProduct[] {
        return [
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
            },
            {
                'productId': 5,
                'productName': 'Hammer',
                'productCode': 'TBX-0048',
                'releaseDate': 'May 21, 2016',
                'description': 'Curved claw steel hammer',
                'price': 8.9,
                'starRating': 4.8,
                'imageUrl': 'http://i.ebayimg.com/00/s/MTE3NFgxMjE2/z/lKAAAOSwv0tU5zOP/$_32.JPG'
            },
            {
                'productId': 8,
                'productName': 'Saw',
                'productCode': 'TBX-0022',
                'releaseDate': 'May 15, 2016',
                'description': '15-inch steel blade hand saw',
                'price': 11.55,
                'starRating': 3.7,
                // tslint:disable-next-line:max-line-length
                'imageUrl': 'https://2ecffd01e1ab3e9383f0-07db7b9624bbdf022e3b5395236d5cf8.ssl.cf4.rackcdn.com/Product-800x800/d3ad9d67-60c4-471b-ac59-82b581ed86bd.jpg'
            },
            {
                'productId': 10,
                'productName': 'Video Game Controller',
                'productCode': 'GMG-0042',
                'releaseDate': 'October 15, 2015',
                'description': 'Standard two-button video game controller',
                'price': 35.95,
                'starRating': 4.6,
                'imageUrl': 'https://images10.newegg.com/NeweggImage/ProductImageCompressAll300/26-105-766-10.jpg'
            }
        ];
    }
 }
