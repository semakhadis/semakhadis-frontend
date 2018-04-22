import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { ADMIN_NAV } from 'App/admin/admin.nav'
import { SharedModule } from 'App/_shared/_shared.module'
import { BaseAdminComponent } from 'Admin/base-admin.component'
import { MainAdminComponent } from 'Admin/c/main-donation/main-admin.component'

@NgModule({
    declarations: [
        MainAdminComponent,
        BaseAdminComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        SharedModule,
        RouterModule.forChild(ADMIN_NAV)
    ]
})
export class AdminModule {}
