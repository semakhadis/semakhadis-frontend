import 'hammerjs'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { NgxCarouselModule } from 'ngx-carousel'
import { NgProgressModule } from 'ngx-progressbar'
import { NavbarComponent } from 'Components/navbar/navbar.component'
import { FooterComponent } from 'Components/footer/footer.component'
import { CtaVolunteerComponent } from 'Components/cta-volunteer/cta-volunteer.component'
import { DownloadAppComponent } from 'Components/download-app/download-app.component'
import { ProgressBarComponent } from 'Components/progress-bar/progress-bar.component'
import { KitabWidgetComponent } from 'Components/kitab-widget/kitab-widget.component'
import { HadithWidgetComponent } from 'Components/hadith-widget/hadith-widget.component'
import { BannerTitleComponent } from 'Components/banner-title/banner-title.component'
import { HadithSearchComponent } from 'Components/hadith-search/hadith-search.component'
import { ChapterWidgetComponent } from 'Components/chapter-widget/chapter-widget.component'

const sharedComponent = [
    NavbarComponent,
    FooterComponent,
    DownloadAppComponent,
    ProgressBarComponent,
    BannerTitleComponent,
    HadithSearchComponent,
    CtaVolunteerComponent,
    KitabWidgetComponent,
    HadithWidgetComponent,
    ChapterWidgetComponent
]

@NgModule({
    exports: [...sharedComponent],
    declarations: [...sharedComponent],
    imports: [
        FormsModule,
        RouterModule,
        CommonModule,
        NgxCarouselModule,
        NgProgressModule
    ]
})
export class SharedModule {}
