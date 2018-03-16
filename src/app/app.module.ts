import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { SharedModule } from 'App/_shared/_shared.module'
import { BrowserModule } from '@angular/platform-browser'
import { ServiceWorkerModule } from '@angular/service-worker'
import { LocationStrategy, PathLocationStrategy } from '@angular/common'

import { AppComponent } from 'App/app.component'

import { APP_NAV } from 'App/app.nav'
import { environment } from 'Environments/environment'

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
        { provide: LocationStrategy, useClass: PathLocationStrategy },
    ],
    bootstrap: [ AppComponent ],
})
export class AppModule {
}
