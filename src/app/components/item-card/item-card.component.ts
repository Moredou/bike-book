import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
    selector:'item-card',
    templateUrl:'./item-card.component.html',
    styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnChanges {
    @Input() bike;
    @Output() selctedBike = new EventEmitter;

    ngOnChanges(){

    }

    addToCart(value){
        this.selctedBike.emit(value);
    }
    
}
