import { Routes } from '@angular/router'
import { FetchHadithsResolver } from 'Hadith/r/fetch-hadiths.resolver'

import { BaseHadithComponent } from 'Hadith/base-hadith.component'
import { HadithItemComponent } from 'Hadith/c/hadith-item/hadith-item.component'
import { MainHadithComponent } from 'Hadith/c/main-hadith/main-hadith.component'
import { CreateHadithComponent } from 'Hadith/c/create-hadith/create-hadith.component'

export const HADITH_NAV: Routes = [
    {
        path: '',
        component: BaseHadithComponent,
        children: [
            {
                path: '',
                component: MainHadithComponent,
                resolve: { hadiths: FetchHadithsResolver }
            },
            {
                path: 'create',
                component: CreateHadithComponent
            },
            {
                path: ':slug',
                component: HadithItemComponent
            },
        ]
    }
]
