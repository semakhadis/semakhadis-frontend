import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { NgProgressModule } from 'ngx-progressbar'
import { NavbarComponent } from 'Components/navbar/navbar.component'
import { ProgressBarComponent } from 'Components/progress-bar/progress-bar.component'

const sharedComponent = [
    NavbarComponent,
    ProgressBarComponent
]

@NgModule({
    exports: [ ...sharedComponent ],
    declarations: [ ...sharedComponent ],
    imports: [
        FormsModule,
        RouterModule,
        CommonModule,
        NgProgressModule
    ]
})
export class SharedModule {
}
