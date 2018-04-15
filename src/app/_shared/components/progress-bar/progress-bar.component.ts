import { Component } from '@angular/core'

@Component({
    selector: 'v-progress-bar',
    template: `
        <ng-progress
            [color]="'#f4e8b8'"
            [thick]="true"
            [ease]="'linear'"
            [showSpinner]="false"
        ></ng-progress>
    `
})
export class ProgressBarComponent {}
