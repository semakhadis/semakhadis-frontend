import { Routes } from '@angular/router'
import { BaseHadithComponent } from 'Hadith/base-hadith.component'
import { MainHadithComponent } from 'Hadith/c/main-hadith/main-hadith.component'

export const HADITH_NAV: Routes = [
    {
        path: '',
        component : BaseHadithComponent,
        children: [
            {
                path: '',
                component: MainHadithComponent
            }
        ]
    }
]
