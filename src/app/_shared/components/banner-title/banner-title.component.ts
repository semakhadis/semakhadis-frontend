import { Component, Input } from '@angular/core'

@Component({
    selector: 'v-banner-title',
    template: `
        <section class="sh-banner-title">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <h1 class="section-title pull-left">{{ title }}</h1>
                        <div class="clearfix"></div>
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
