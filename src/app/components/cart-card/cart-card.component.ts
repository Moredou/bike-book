import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
    selector:'cart-card',
    templateUrl:'./cart-card.component.html',
    styleUrls:['./cart-card.component.scss']
})

export class CartCardComponent implements OnInit{

    @Input() item;
    constructor(){

    }

    ngOnInit(){

    }
}