import { Routes } from '@angular/router'
import { BaseLandingComponent } from 'Landing/base-landing.component'
import { MainLandingComponent } from 'Landing/c/main-landing/main-landing.component'

export const LANDING_NAV: Routes = [
    {
        path: '',
        component : BaseLandingComponent,
        children: [
            {
                path: '',
                component: MainLandingComponent
            }
        ]
    }
]
