import { Component } from '@angular/core'

@Component({
    selector: 'v-navbar',
    template: `
        <ul>
            <li><a routerLinkActive="active" routerLink="/" [routerLinkActiveOptions]="{ exact: true }">Landing</a></li>
            <li><a routerLinkActive="active" routerLink="/about">About</a></li>
            <li><a routerLinkActive="active" routerLink="/contact-developer">Contact Developer</a></li>
            <li><a routerLinkActive="active" routerLink="/donation">Donation</a></li>
            <li><a routerLinkActive="active" routerLink="/faq">Faq</a></li>
            <li><a routerLinkActive="active" routerLink="/hadith">Hadith</a></li>
        </ul>

        <router-outlet></router-outlet>
    `,
    styles: [ `
        .active {
            color: green;
        }
    `]
})
export class NavbarComponent {

}
