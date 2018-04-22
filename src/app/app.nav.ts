import { Routes } from '@angular/router'
import { Error404Component } from 'Components/404/404.component'
import { FooterComponent } from 'Components/footer/footer.component'
import { NavbarComponent } from 'Components/navbar/navbar.component'
import { ContactUsComponent } from 'Components/contact-us/contact-us.component'

export const APP_NAV: Routes = [
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule'
    },
    {
        path: '',
        component: NavbarComponent,
        children: [
            {
                path: '',
                component: FooterComponent,
                children: [
                    {
                        path: '',
                        loadChildren: './landing/landing.module#LandingModule'
                    },
                    {
                        path: 'about',
                        loadChildren: './about/about.module#AboutModule'
                    },
                    {
                        path: 'contact-developer',
                        loadChildren:
                            './contact-developer/contact-developer.module#ContactDeveloperModule'
                    },
                    {
                        path: 'donation',
                        loadChildren: './donation/donation.module#DonationModule'
                    },
                    {
                        path: 'reference',
                        loadChildren: './reference/reference.module#ReferenceModule'
                    },
                    {
                        path: 'hadith',
                        loadChildren: './hadith/hadith.module#HadithModule'
                    },
                    {
                        path: 'kitab',
                        loadChildren: './kitab/kitab.module#KitabModule'
                    },
                ]
            },
            {
                path: 'contact-us',
                component: ContactUsComponent
            }
        ]
    },
    {
        path: '404',
        component: Error404Component,
    },
    { path: '**', redirectTo: '/404' },
]
