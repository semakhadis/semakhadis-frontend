import { Routes } from '@angular/router'

export const APP_NAV: Routes = [
    // { path: '', component:  },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
    },
    // {
    //     path: '',
    //     component: NavSideBarComponent,
    //     children: [
    //         {
    //             path: 'dashboard',
    //             loadChildren: './external/external.module#ExternalModule',
    //             canActivate: [ AuthGuard, ExternalUserGuard ],
    //         }
    //     ]
    // },
    { path: '**', redirectTo: '/404' },
    // { path: '404', component: NotFoundComponent }
];
