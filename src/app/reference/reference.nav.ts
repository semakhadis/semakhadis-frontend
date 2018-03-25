import { Routes } from '@angular/router'
import { BaseReferenceComponent } from 'App/reference/base-reference.component'
import { MainReferenceComponent } from 'App/reference/components/main-reference/main-reference.component'
import { ReferenceItemComponent } from 'App/reference/components/reference-item/reference-item.component'
import { FetchReferencesResolver } from 'App/reference/resolver/fetch-references.resolver'

export const REFERENCE_NAV: Routes = [
    {
        path: '',
        component : BaseReferenceComponent,
        children: [
            {
                path: '',
                component: MainReferenceComponent,
                resolve : { references: FetchReferencesResolver }
            }, {
                path: ':slug',
                component: ReferenceItemComponent
            }
        ]
    }
]
