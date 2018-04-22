import { Routes } from '@angular/router'
import { BaseAdminComponent } from 'Admin/base-admin.component'
import { MainAdminComponent } from 'Admin/c/main-donation/main-admin.component'

export const ADMIN_NAV: Routes = [
    {
        path: '',
        component : BaseAdminComponent,
        children: [
            {
                path: '',
                component: MainAdminComponent
            }
        ]
    }
]
