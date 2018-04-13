import { Routes } from '@angular/router'
import { NavbarComponent } from 'Components/navbar/navbar.component'
import { ContactUsComponent } from 'Components/contact-us/contact-us.component'

export const APP_NAV: Routes = [
    {
        path: '',
        component: NavbarComponent,
        children: [
            {
                path: '',
                loadChildren: './landing/landing.module#LandingModule',
            }, {
                path: 'about',
                loadChildren: './about/about.module#AboutModule',
            }, {
                path: 'contact-developer',
                loadChildren: './contact-developer/contact-developer.module#ContactDeveloperModule',
            }, {
                path: 'donation',
                loadChildren: './donation/donation.module#DonationModule',
            }, {
                path: 'faq',
                loadChildren: './faq/faq.module#FaqModule',
            }, {
                path: 'reference',
                loadChildren: './reference/reference.module#ReferenceModule',
            }, {
                path: 'hadith',
                loadChildren: './hadith/hadith.module#HadithModule',
            }, {
                path: 'kitab',
                loadChildren: './kitab/kitab.module#KitabModule',
            }, {
                path: 'contact-us',
                component: ContactUsComponent,
            },
            { path: '**', redirectTo: '/404' },
        ]
    }
];

/*
export const MAIN_ROUTES: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule',
        canActivate: [ RedirectIfAuthGuard ],
    },
    {
        path: '',
        component: NavSideBarComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: './external/external.module#ExternalModule',
                canActivate: [ AuthGuard, ExternalUserGuard ],
            },
            {
                path: 'internal',
                loadChildren: './internal/internal.module#InternalDashboardModule',
                canActivate: [ AuthGuard, InternalUserGuard ],
            },
            {
                path: 'setting',
                loadChildren: './setting/setting.module#SettingModule',
                canActivate: [ AuthGuard ],
            },
            {
                path: 'repository',
                loadChildren: './repository/repository.module#RepositoryModule',
                canActivate: [ AuthGuard ]
            },
            {
                path: 'support',
                loadChildren: './support/support.module#SupportModule',
                canActivate: [ AuthGuard ]
            },
            {
                path: 'user',
                loadChildren: './user/user.module#UserModule',
                canActivate: [AuthGuard],
            },
            {
                path: 'company',
                loadChildren: './company/company.module#CompanyModule',
                canActivate: [AuthGuard],
            },
            {
                path: 'message',
                loadChildren: './message/message.module#MessageModule',
                canActivate: [ AuthGuard ]
            },
            {
                path: 'notification',
                loadChildren: './notification/notification.module#NotificationModule',
                canActivate: [ AuthGuard ]
            },
            {
                path: 'service',
                loadChildren: './service/service.module#ServiceModule',
                canActivate: [ AuthGuard ]
            },
            {
                path: 'access-control',
                loadChildren: './access-control/access-control.module#AccessControlModule',
                canActivate: [ AuthGuard ]
            },
            {
                path: 'admin',
                loadChildren: './admin/admin.module#AdminModule',
                canActivate: [ AuthGuard ]
            }, {
                path: 'vendor',
                loadChildren: './vendor/vendor.module#VendorModule',
                canActivate: [ AuthGuard ]
            },
            { path: 'feedback', component: FeedbackComponent },
        ]
    },
    { path: '**', redirectTo: '/404' },
    { path: '404', component: NotFoundComponent }
];*/
