import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { SharedModule } from 'App/_shared/_shared.module'
import { BrowserModule } from '@angular/platform-browser'
import { ServiceWorkerModule } from '@angular/service-worker'

import { FaqModule } from 'FAQ/faq.module'
import { AppComponent } from 'App/app.component'
import { AboutModule } from 'About/about.module'
import { HadithModule } from 'Hadith/hadith.module'
import { LandingModule } from 'Landing/landing.module'
import { DonationModule } from 'Donation/donation.module'
import { ContactDeveloperModule } from 'ContactDeveloper/contact-developer.module'

import { APP_NAV } from 'App/app.nav'
import { environment } from 'Environments/environment'

@NgModule({
    declarations: [ AppComponent ],
    imports: [
        FaqModule,
        AboutModule,
        HadithModule,
        LandingModule,
        DonationModule,
        ContactDeveloperModule,

        SharedModule,
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(APP_NAV),
        ServiceWorkerModule.register('/ngsw-worker.js', {
            enabled: environment.production,
        }),
    ],
    providers: [],
    bootstrap: [ AppComponent ],
})
export class AppModule {
}
