import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { LANDING_NAV } from 'Landing/landing.nav'

import { BaseLandingComponent } from 'Landing/base-landing.component'
import { HeroSearchComponent } from 'Landing/c/hero-search/hero-search.component'
import { DownloadAppComponent } from 'Landing/c/download-app/download-app.component'
import { MainLandingComponent } from 'Landing/c/main-landing/main-landing.component'

@NgModule({
    declarations: [
        HeroSearchComponent,
        MainLandingComponent,
        BaseLandingComponent,
        DownloadAppComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        RouterModule.forChild(LANDING_NAV),
    ]
})
export class LandingModule {
}
