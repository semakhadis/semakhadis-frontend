import { NgModule } from '@angular/core'
import { ABOUT_NAV } from 'About/about.nav'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { BaseAboutComponent } from 'About/base-about.component'
import { MainAboutComponent } from 'About/c/main-about/main-about.component'

@NgModule({
    declarations: [
        MainAboutComponent,
        BaseAboutComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        RouterModule.forChild(ABOUT_NAV)
    ]
})
export class AboutModule {
}
