import 'Helpers/rxjs.compose'
import { Component } from '@angular/core'

@Component({
    selector: 'v-root',
    template: `
        <v-progress-bar></v-progress-bar>
        <router-outlet></router-outlet>
        <ng2-toasty position="top-right"></ng2-toasty>
    `
})
export class AppComponent {}
