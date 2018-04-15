import { Routes } from '@angular/router'
import { FetchKitabResolver } from 'App/kitab/resolvers/fetch-kitab.resolver'
import { FetchKitabsResolver } from 'App/kitab/resolvers/fetch-kitabs.resolver'

import { BaseKitabComponent } from 'App/kitab/base-kitab.component'
import { KitabItemComponent } from 'App/kitab/components/kitab-item/kitab-item.component'
import { MainKitabComponent } from 'App/kitab/components/main-kitab/main-kitab.component'
import { CreateKitabComponent } from 'App/kitab/components/create-kitab/create-kitab.component'

export const KITAB_NAV: Routes = [
    {
        path: '',
        component : BaseKitabComponent,
        children: [
            {
                path: '',
                component: MainKitabComponent,
                resolve : { kitabs : FetchKitabsResolver }
            },
            {
                path: 'create',
                component: CreateKitabComponent
            },
            {
                path: ':slug',
                component: KitabItemComponent,
                resolve : { kitab : FetchKitabResolver }
            }
        ]
    }
]
