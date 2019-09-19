import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartCardComponent } from './cart-card.component';

@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[
        CartCardComponent
    ],
    providers:[

    ],
    exports:[
        CartCardComponent
    ]
})

export class CartCardModule{

}