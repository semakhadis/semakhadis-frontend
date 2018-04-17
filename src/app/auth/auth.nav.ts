import { Routes } from '@angular/router'
import { BaseAuthComponent } from 'Auth/base-auth.component'
import { LoginComponent } from 'Auth/c/login/login.component'
import { ForgotPasswordComponent } from 'Auth/c/forgot-password/forgot-password.component'

export const AUTH_NAV: Routes = [
    {
        path: '',
        component : BaseAuthComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'forgot-password',
                component: ForgotPasswordComponent
            }
        ]
    }
]
