import { Routes } from '@angular/router'

export const FAQ_NAV: Routes = [
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
    }
];
