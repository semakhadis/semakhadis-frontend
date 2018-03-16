import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { NavbarComponent } from 'Components/navbar/navbar.component'

const sharedComponent = [
    NavbarComponent,
]

@NgModule({
    exports: [ ...sharedComponent ],
    declarations: [ ...sharedComponent ],
    imports: [
        FormsModule,
        RouterModule,
        CommonModule,
    ]
})
export class SharedModule {
}
