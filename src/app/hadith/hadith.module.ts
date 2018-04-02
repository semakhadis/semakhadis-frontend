import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { NgxEditorModule } from 'ngx-editor'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { HADITH_NAV } from 'Hadith/hadith.nav'
import { SharedModule } from 'App/_shared/_shared.module'
import { FetchHadithsResolver } from 'Hadith/r/fetch-hadiths.resolver'

import { BaseHadithComponent } from 'Hadith/base-hadith.component'
import { HadithItemComponent } from 'Hadith/c/hadith-item/hadith-item.component'
import { MainHadithComponent } from 'Hadith/c/main-hadith/main-hadith.component'
import { CreateHadithComponent } from 'Hadith/c/create-hadith/create-hadith.component'
import { FooterReportComponent } from 'Hadith/c/footer-report/footer-report.component'

@NgModule({
    providers: [
        FetchHadithsResolver
    ],
    declarations: [
        BaseHadithComponent,
        MainHadithComponent,
        HadithItemComponent,
        FooterReportComponent,
        CreateHadithComponent,
    ],
    imports: [
        FormsModule,
        SharedModule,
        RouterModule,
        CommonModule,
        NgxEditorModule,
        RouterModule.forChild(HADITH_NAV)
    ]
})
export class HadithModule {
}
