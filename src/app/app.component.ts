import { Component } from '@angular/core'

@Component({
    selector: 'v-root',
    template: `
        <v-progress-bar></v-progress-bar>
        
        <router-outlet></router-outlet>
    `,
})
export class AppComponent {

}
