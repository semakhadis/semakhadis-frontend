import { Routes } from '@angular/router'

export const DONATION_NAV: Routes = [
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
    }
]
