import { Routes } from '@angular/router'
import { BaseContactDeveloperComponent } from 'ContactDeveloper/base-contact-developer.component'
import { MainContactDeveloperComponent } from 'ContactDeveloper/c/main-contact-developer/main-contact-developer.component'

export const CONTACT_DEVELOPER_NAV: Routes = [
    {
        path: '',
        component : BaseContactDeveloperComponent,
        children: [
            {
                path: '',
                component: MainContactDeveloperComponent
            }
        ]
    }
]
