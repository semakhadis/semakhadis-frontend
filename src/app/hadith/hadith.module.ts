import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { HADITH_NAV } from 'Hadith/hadith.nav'
import { BaseHadithComponent } from 'Hadith/base-hadith.component'
import { MainHadithComponent } from 'Hadith/c/main-hadith/main-hadith.component'

@NgModule({
    declarations: [
        BaseHadithComponent,
        MainHadithComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        RouterModule.forChild(HADITH_NAV)
    ]
})
export class HadithModule {
}
