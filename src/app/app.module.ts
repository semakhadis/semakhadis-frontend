import { APP_NAV } from './app.nav'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'
import { environment } from '../environments/environment'
import { ServiceWorkerModule } from '@angular/service-worker'

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(APP_NAV),
        ServiceWorkerModule.register('/ngsw-worker.js', {
            enabled: environment.production,
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
