import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { REFERENCE_NAV } from 'App/reference/reference.nav'
import { BaseReferenceComponent } from './base-reference.component'
import { FetchReferencesResolver } from 'App/reference/resolver/fetch-references.resolver'
import { MainReferenceComponent } from './components/main-reference/main-reference.component'
import { ReferenceItemComponent } from './components/reference-item/reference-item.component'


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
