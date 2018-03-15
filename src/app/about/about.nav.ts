import { Routes } from '@angular/router'

export const ABOUT_NAV: Routes = [
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
    }
]
