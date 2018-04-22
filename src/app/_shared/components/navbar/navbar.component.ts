import { Component } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'

@Component({
    selector: 'v-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.scss']
})
export class NavbarComponent {
    currentRoute: string
    hamburgerIsActive: boolean

    constructor(private router: Router) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.currentRoute = router.url
            }
        })
    }

    toggleHamburger = () => {
        this.hamburgerIsActive = !this.hamburgerIsActive
    }

}
