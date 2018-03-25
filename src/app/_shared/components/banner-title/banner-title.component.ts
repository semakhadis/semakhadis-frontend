import { Component, Input } from '@angular/core'

@Component({
    selector: 'v-banner-title',
    template: `
        <section class="sh-banner-title">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <h1 class="section-title">{{ title }}</h1>
                    </div>
                </div>
            </div>
        </section>
    `,
    styleUrls: ['banner-title.component.scss']
})
export class BannerTitleComponent {
    @Input() title: String
}
