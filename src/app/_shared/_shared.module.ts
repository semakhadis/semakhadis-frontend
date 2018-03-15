import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

const sharedComponent = [];

@NgModule({
    exports: [...sharedComponent],
    declarations: [...sharedComponent],
    imports: [
        FormsModule,
        RouterModule,
        CommonModule,
    ]
})
export class SharedModule {
}
