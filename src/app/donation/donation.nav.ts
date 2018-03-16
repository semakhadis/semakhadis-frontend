import { Routes } from '@angular/router'
import { BaseDonationComponent } from 'Donation/base-donation.component'
import { MainDonationComponent } from 'Donation/c/main-donation/main-donation.component'

export const DONATION_NAV: Routes = [
    {
        path: '',
        component : BaseDonationComponent,
        children: [
            {
                path: '',
                component: MainDonationComponent
            }
        ]
    }
]
