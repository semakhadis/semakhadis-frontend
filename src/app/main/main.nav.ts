import { Routes } from '@angular/router'

export const MAIN_NAV: Routes = [
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
    }
];
