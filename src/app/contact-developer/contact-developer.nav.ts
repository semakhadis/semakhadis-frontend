import { Routes } from '@angular/router'

export const ADMIN_NAV: Routes = [
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
    }
];
