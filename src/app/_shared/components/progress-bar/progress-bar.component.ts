import { Component } from '@angular/core'

@Component({
    selector: 'v-progress-bar',
    template: `
        <ng-progress
            [color]="'red'"
            [thick]="true"
            [ease]="'linear'"
            [showSpinner]="false"
        ></ng-progress>
    `
})
export class ProgressBarComponent {
}
