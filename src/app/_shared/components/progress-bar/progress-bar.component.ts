import { Component } from '@angular/core'

@Component({
    selector: 'v-progress-bar',
    template: `
        <ng-progress [showSpinner]="false" [color]="'#f4e8b8'" [thick]="true" [ease]="'linear'"></ng-progress>
    `
})
export class ProgressBarComponent {}
