import { Component } from '@angular/core'

@Component({
    selector: 'v-progress-bar',
    template: `
        <ng-progress [showSpinner]="false" [color]="'#2eb8ab'" [thick]="true" [ease]="'linear'"></ng-progress>
    `
})
export class ProgressBarComponent {
}
