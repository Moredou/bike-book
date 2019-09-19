import { Component, OnInit } from '@angular/core';

import { BikeRentalService } from '../../core/services/bikerental.service';

@Component({
    selector:'rental-list',
    templateUrl:'./rental-list.component.html',
    styleUrls:['./rental-list.component.scss']
})

export class RentalListComponent implements OnInit{

    rentalBikes;
    originData;
    showCartList:boolean = false;
    cartList = [];
    popupMessage = "Add to Cart Success.";
    showPopup :boolean = false;
    constructor(
        private bikeRentalService : BikeRentalService
    ){
        this.cartList = JSON.parse(localStorage.getItem('shoppping-cart'));
        if(this.cartList ==null){
            this.cartList = [];
        }
    }

    ngOnInit(){
        this.getRentalBikes();
    }

    getRentalBikes(){
        this.bikeRentalService.getBikes().subscribe(
            res=>{
                this.rentalBikes = res.products;
                this.originData =JSON.parse(JSON.stringify(this.rentalBikes)) ;
                console.log(this.rentalBikes)
            })
    }

    onSelctedBike(evt){
        // console.log(this.cartList.length);
        this.showPopup = true;

        setTimeout(()=>{
            this.showPopup = false;
        }, 1000);
        console.log(this.cartList.some(el => el.id == evt.id));
        if(!this.cartList.some(el => el.id == evt.id)){
            evt.quantity = 1;
            this.cartList.push(evt);
            localStorage.setItem('shoppping-cart',JSON.stringify(this.cartList));
            }else{
                this.cartList.map((item)=>{
                    if(item.id==evt.id){
                        item.quantity ++;
                    }
                })
                localStorage.setItem('shoppping-cart',JSON.stringify(this.cartList));
            }
            
    }
        

    onSelectedFilter(evt){
        switch(evt){
            case "all" :
                this.getRentalBikes();
                break;
            case "bike":
                this.filterRentalBike('bike');
                break;
            case "addon":
                this.filterRentalBike('addon');
                break;
            case "accessory":
                this.filterRentalBike('accessory');
                break;
            case 'asc': 
                this.filterPrice('asc');
                break;
            case 'desc':
                this.filterPrice('desc');
                break;
            default:
                this.getRentalBikes();
        }
        
    }

    filterRentalBike(type){
        this.rentalBikes = this.originData.filter(bike=>bike.product_type==type);
    }

    filterPrice(value){
        if(value=="asc"){
            this.rentalBikes = this.originData.sort((a, b)=>a.price - b.price);
        }else{
            this.rentalBikes = this.originData.sort((a, b)=>b.price - a.price);
        }
    }

    showCartInfo(){
        this.showCartList = true;
        // console.log(this.cartList);
        this.cartList = JSON.parse(localStorage.getItem('shoppping-cart'));
        if(this.cartList == null){
            this.cartList =[];
        }
        console.log(this.cartList)

    }

    hiddenCartInfo(){
        this.showCartList = false;
    }

    caculateItemQty(){
        return this.cartList.reduce((acc,cur)=>acc + cur.quantity,0);
    }

    
}