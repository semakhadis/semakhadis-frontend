import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { SharedModule } from 'App/_shared/_shared.module'
import { BrowserModule } from '@angular/platform-browser'
import { ServiceWorkerModule } from '@angular/service-worker'
import { LocationStrategy, PathLocationStrategy } from '@angular/common'

import { APP_NAV } from 'App/app.nav'
import { environment } from 'Environments/environment'

import { AppComponent } from 'App/app.component'
import { BabService } from 'Services/bab.service'
import { ApiService } from 'Services/api.service'
import { AppService } from 'Services/app.service'
import { AuthService } from 'Services/auth.service'
import { HadithService } from 'Services/hadith.service'
import { SearchService } from 'Services/search.service'
import { DonationService } from 'Services/donation.service'
import { AuthUserService } from 'Services/auth-user.service'
import { ReferenceService } from 'Services/reference.service'

@NgModule({
    declarations: [ AppComponent ],
    imports: [
        SharedModule,
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(APP_NAV),
        ServiceWorkerModule.register('/ngsw-worker.js', {
            enabled: environment.production,
        }),
    ],
    providers: [
        AppService,
        ApiService,
        BabService,
        AuthService,
        HadithService,
        SearchService,
        AuthUserService,
        DonationService,
        ReferenceService,
        { provide: LocationStrategy, useClass: PathLocationStrategy },
    ],
    bootstrap: [ AppComponent ],
})
export class AppModule {
}
