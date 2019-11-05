import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';


@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.components.css']
})

export class ProductListComponent implements OnInit
{
      
    constructor() {
        this.filteredProducts=this.products;
        this.listFilter=  'cart';

    }
    pageTitle:string='Product List!!';
    imageWidth: Number=75;
    imageMargin:Number=2;
    showImage: boolean=false;
    //listFiltered:string;
    _listFilter:string;
    filteredProducts:IProduct[];
    public get listFilter() : string {
        return this._listFilter
    }
    
    public set listFilter(value:string) {
       this._listFilter= value;
       this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) :this.products;
    }
    
    
    products: IProduct[]=[
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2019",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "assets/images/leaf_rake.png"
          },
          {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2019",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
          },
    ];

    toggleImage():void
     {
        this.showImage=!this.showImage;
    }

    ngOnInit():void
    {
        console.log("hi");
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy= filterBy.toLowerCase()    

        return this.products.filter((product:IProduct)=> product.productName.toLowerCase().indexOf(filterBy) !==-1);
    }
}