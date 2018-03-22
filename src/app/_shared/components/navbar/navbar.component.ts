import { Component } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'

@Component({
    selector: 'v-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.scss']
})
export class NavbarComponent {
    hamburgerIsActive: boolean = false
    currentRoute: string

    /* constructor(private _router: Router) {
        _router.events.subscribe((url: any) => {
            this.currentRoute = _router.url
        })
    } */

    constructor(private router: Router) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.isResolving = false
                this.currentRoute = router.url
            }
        })
    }

    toggleHamburger() {
        this.hamburgerIsActive = !this.hamburgerIsActive
    }

    isIndexRoute() {
        return this.currentRoute === '/'
    }
}
