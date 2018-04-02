import { Routes } from '@angular/router'
import { FetchReferencesResolver } from 'Reference/r/fetch-references.resolver'

import { BaseReferenceComponent } from 'Reference/base-reference.component'
import { MainReferenceComponent } from 'Reference/c/main-reference/main-reference.component'
import { ReferenceItemComponent } from 'Reference/c/reference-item/reference-item.component'

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
