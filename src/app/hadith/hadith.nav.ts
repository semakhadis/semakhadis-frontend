import { Routes } from '@angular/router'
import { BaseHadithComponent } from 'Hadith/base-hadith.component'
import { HadithItemComponent } from 'Hadith/c/hadith-item/hadith-item.component'
import { MainHadithComponent } from 'Hadith/c/main-hadith/main-hadith.component'
import { FetchHadithResolver } from 'hadith/resolvers/fetch-hadiths.resolver'

export const HADITH_NAV: Routes = [
    {
        path: '',
        component : BaseHadithComponent,
        children: [
            {
                path: '',
                component: MainHadithComponent,
                resolve: { hadiths: FetchHadithResolver }
            }, {
                path: ':slug',
                component: HadithItemComponent
            }
        ]
    }
]
