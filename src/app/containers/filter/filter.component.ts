import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
    selector:'bike-filter',
    templateUrl:'./filter.component.html',
    styleUrls:['./filter.component.scss']
})

export class FilterComponent {
    @Output() selectedFilter = new EventEmitter;
    constructor(){

    }
    
    filterType(value){
        this.selectedFilter.emit(value);
    }

}