import { NgModule } from '@angular/core'
import { AUTH_NAV } from 'App/auth/auth.nav'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { SharedModule } from 'App/_shared/_shared.module'
import { BaseAuthComponent } from 'Auth/base-auth.component'
import { LoginComponent } from 'Auth/c/login/login.component'
import { ForgotPasswordComponent } from 'Auth/c/forgot-password/forgot-password.component'

@NgModule({
    declarations: [
        LoginComponent,
        BaseAuthComponent,
        ForgotPasswordComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        SharedModule,
        RouterModule.forChild(AUTH_NAV)
    ]
})
export class AuthModule {
}
