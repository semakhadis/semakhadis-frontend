import { Component } from '@angular/core'

@Component({
    selector: 'v-hadith-search',
    template: `
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Keratan Hadis">
            <button class="btn btn-secondary" type="button">Semak</button>
        </div>
    `,
    styleUrls: ['hadith-search.component.scss']
})
export class HadithSearchComponent {}
