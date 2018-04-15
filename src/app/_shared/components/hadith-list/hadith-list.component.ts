import { Component, Input } from '@angular/core'

@Component({
    selector: 'v-hadith-list',
    templateUrl: 'hadith-list.component.html',
    styleUrls: ['hadith-list.component.scss']
})
export class HadithListComponent {
    @Input() hadiths: Object
}
