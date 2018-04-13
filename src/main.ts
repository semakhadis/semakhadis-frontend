import { hmrBootstrap } from './hmr'
import { AppModule } from './app/app.module'
import { enableProdMode } from '@angular/core'
import { environment } from './environments/environment'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

if (environment.production) {
    enableProdMode()
}

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule, {
    preserveWhitespaces: false
})

if (environment.hmr) {
    if (module[ 'hot' ]) {
        hmrBootstrap(module, bootstrap)
    } else {
        console.error('HMR is not enabled for webpack-dev-server!')
        console.log('Are you using the --hmr flag for ng serve?')
    }
} else {
    bootstrap()
}
