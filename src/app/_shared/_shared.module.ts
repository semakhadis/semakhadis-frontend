import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { NgProgressModule } from 'ngx-progressbar'
import { NavbarComponent } from 'Components/navbar/navbar.component'
import { DownloadAppComponent } from 'Components/download-app/download-app.component'
import { ProgressBarComponent } from 'Components/progress-bar/progress-bar.component'
import { BannerTitleComponent } from 'Components/banner-title/banner-title.component'
import { HadithSearchComponent } from 'Components/hadith-search/hadith-search.component'
import { ChapterWidgetComponent } from 'Components/chapter-widget/chapter-widget.component'

const sharedComponent = [
    NavbarComponent,
    DownloadAppComponent,
    ProgressBarComponent,
    BannerTitleComponent,
    HadithSearchComponent,
    ChapterWidgetComponent,
]

@NgModule({
    exports: [ ...sharedComponent ],
    declarations: [ ...sharedComponent ],
    imports: [
        FormsModule,
        RouterModule,
        CommonModule,
        NgProgressModule,
    ]
})
export class SharedModule {
}
