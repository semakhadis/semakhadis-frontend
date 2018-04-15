import { Component, Input } from '@angular/core'

@Component({
    selector: 'v-hadith-related',
    templateUrl: 'hadith-related.component.html',
    styleUrls: ['hadith-related.component.scss']
})
export class HadithUserAlsoReadComponent {
    @Input() title: String
    @Input() hadiths: Object
}
