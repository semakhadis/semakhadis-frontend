import { Component } from '@angular/core'

@Component({
    template: `
        main kitab component
        <v-banner-title [title]="'Kitab'"></v-banner-title>      
        
        <a class="btn btn-base" routerLink="/kitab/create">Create Kitab</a>
        <a class="btn btn-base" routerLink="/kitab/asdasdasdasd">View Kitab</a>
    `
})
export class MainKitabComponent {}
