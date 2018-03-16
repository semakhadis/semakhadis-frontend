import { Routes } from '@angular/router'
import { BaseAboutComponent } from 'About/base-about.component'
import { MainAboutComponent } from 'About/c/main-about/main-about.component'

export const ABOUT_NAV: Routes = [
    {
        path: '',
        component : BaseAboutComponent,
        children: [
            {
                path: '',
                component: MainAboutComponent
            }
        ]
    }
]
