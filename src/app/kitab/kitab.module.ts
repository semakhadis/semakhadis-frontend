import { NgModule } from '@angular/core'
import { KITAB_NAV } from 'App/kitab/kitab.nav'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { SharedModule } from 'App/_shared/_shared.module'
import { BaseKitabComponent } from 'App/kitab/base-kitab.component'
import { KitabItemComponent } from 'App/kitab/components/kitab-item/kitab-item.component'
import { MainKitabComponent } from 'App/kitab/components/main-kitab/main-kitab.component'
import { CreateKitabComponent } from 'App/kitab/components/create-kitab/create-kitab.component'

@NgModule({
    declarations: [
        MainKitabComponent,
        BaseKitabComponent,
        KitabItemComponent,
        CreateKitabComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
        SharedModule,
        RouterModule.forChild(KITAB_NAV) ]
})
export class KitabModule {
}
