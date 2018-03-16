import { Routes } from '@angular/router'
import { BaseFaqComponent } from 'FAQ/base-faq.component'
import { MainFaqComponent } from 'FAQ/components/main-faq/main-faq.component'

export const FAQ_NAV: Routes = [
    {
        path: '',
        component : BaseFaqComponent,
        children: [
            {
                path: '',
                component: MainFaqComponent
            }
        ]
    }
]
