import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
    selector:'popup-dialog',
    templateUrl:'./popup.component.html',
    styleUrls:['./popup.component.scss']
})

export class PopupComponent implements OnInit{

    @Input() message:string = 'hello';
    constructor(){

    }

    ngOnInit(){

    }
}