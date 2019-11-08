import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';


@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.components.css']
})

export class ProductListComponent implements OnInit
{
    products: IProduct[]=[];
    onRatingClicked(message:string):void
    {
        this.pageTitle = 'PList:' + message;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy= filterBy.toLowerCase()    
        return this.products.filter((product:IProduct)=> product.productName.toLowerCase().indexOf(filterBy) !== -1);
    }
    toggleImage():void
    {
        this.showImage=!this.showImage;
    } 
    ngOnInit(): void
    {
        this.products=  this.productService.getProducts();
        this.filteredProducts=this.products;
    }

   
    //  private _productService;
    constructor(private productService: ProductService) {
      
       // this._productService=productService;

    }
    pageTitle:string='Product List!!';
    imageWidth: Number=75;
    imageMargin:Number=2;
    showImage: boolean=false;
    //listFiltered:string;
    _listFilter='';
    filteredProducts:IProduct[]=[];
    public get listFilter() : string {
        return this._listFilter;
    }
    
    public set listFilter(value:string) {
       this._listFilter= value;
       this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) :this.products;
    }
    
    
   

    

    
   


   
    
}


