import { Component } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'

@Component({
    selector: 'v-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.scss']
})
export class NavbarComponent {
    currentRoute: string
    isResolving: boolean

    constructor(private router: Router) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.isResolving = false
                this.currentRoute = router.url
            }
        })
    }

}
