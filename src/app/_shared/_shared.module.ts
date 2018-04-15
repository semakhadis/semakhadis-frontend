import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { NgxCarouselModule } from 'ngx-carousel'
import { TruncatePipe } from 'Pipes/truncate.pipe'
import { NavbarComponent } from 'Components/navbar/navbar.component'
import { FooterComponent } from 'Components/footer/footer.component'
import { DistanceInWordsToNowPipe } from 'Pipes/distance-in-words-to-now.pipe'
import { ContactUsComponent } from 'Components/contact-us/contact-us.component'
import { HadithListComponent } from 'Components/hadith-list/hadith-list.component'
import { DownloadAppComponent } from 'Components/download-app/download-app.component'
import { KitabWidgetComponent } from 'Components/kitab-widget/kitab-widget.component'
import { BannerTitleComponent } from 'Components/banner-title/banner-title.component'
import { CtaVolunteerComponent } from 'Components/cta-volunteer/cta-volunteer.component'
import { HadithWidgetComponent } from 'Components/hadith-widget/hadith-widget.component'
import { HadithSearchComponent } from 'Components/hadith-search/hadith-search.component'
import { ChapterWidgetComponent } from 'Components/chapter-widget/chapter-widget.component'
import { HadithNextPrevComponent } from 'Components/hadith-next-prev/hadith-next-prev.component'
import { HadithUserAlsoReadComponent } from 'Components/hadith-related/hadith-related.component'

const sharedComponent = [
    TruncatePipe,
    NavbarComponent,
    FooterComponent,
    ContactUsComponent,
    HadithListComponent,
    KitabWidgetComponent,
    DownloadAppComponent,
    BannerTitleComponent,
    HadithSearchComponent,
    HadithWidgetComponent,
    CtaVolunteerComponent,
    ChapterWidgetComponent,
    HadithNextPrevComponent,
    DistanceInWordsToNowPipe,
    HadithUserAlsoReadComponent
]

@NgModule({
    exports: [...sharedComponent],
    declarations: [...sharedComponent],
    imports: [FormsModule, RouterModule, CommonModule, NgxCarouselModule]
})
export class SharedModule {}
