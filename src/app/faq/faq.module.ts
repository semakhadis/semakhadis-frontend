import { FAQ_NAV } from 'FAQ/faq.nav'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { SharedModule } from 'App/_shared/_shared.module'
import { BaseFaqComponent } from 'FAQ/base-faq.component'
import { MainFaqComponent } from 'FAQ/components/main-faq/main-faq.component'

@NgModule({
    declarations: [BaseFaqComponent, MainFaqComponent],
    imports: [RouterModule, CommonModule, SharedModule, RouterModule.forChild(FAQ_NAV)]
})
export class FaqModule {}
