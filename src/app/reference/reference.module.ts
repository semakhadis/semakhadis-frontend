import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { REFERENCE_NAV } from 'App/reference/reference.nav'
import { FetchReferencesResolver } from 'Reference/r/fetch-references.resolver'

import { BaseReferenceComponent } from 'Reference/base-reference.component'
import { MainReferenceComponent } from 'Reference/c/main-reference/main-reference.component'
import { ReferenceItemComponent } from 'Reference/c/reference-item/reference-item.component'


@NgModule({
    providers: [
        FetchReferencesResolver
    ],
    declarations: [
        BaseReferenceComponent,
        ReferenceItemComponent,
        MainReferenceComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        RouterModule.forChild(REFERENCE_NAV)
    ]
})
export class ReferenceModule {
}
