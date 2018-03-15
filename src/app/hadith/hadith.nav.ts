import { Routes } from '@angular/router'

export const HADITH_NAV: Routes = [
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
    }
]
