import { Component } from '@angular/core'

@Component({
    selector: 'v-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.scss']
})
export class NavbarComponent {
    hamburgerIsActive: boolean = false

    toggleHamburger() {
        this.hamburgerIsActive = !this.hamburgerIsActive
    }
}
