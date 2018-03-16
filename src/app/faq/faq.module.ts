import { FAQ_NAV } from 'FAQ/faq.nav'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { BaseFaqComponent } from 'FAQ/base-faq.component'
import { MainFaqComponent } from 'FAQ/components/main-faq/main-faq.component'

@NgModule({
    declarations: [
        BaseFaqComponent,
        MainFaqComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        RouterModule.forChild(FAQ_NAV)
    ]
})
export class FaqModule {
}
