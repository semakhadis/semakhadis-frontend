import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { NavbarComponent } from 'Components/navbar/navbar.component'
import { BannerTitleComponent } from 'Components/banner-title/banner-title.component'
import { HadithSearchComponent } from 'Components/hadith-search/hadith-search.component'

const sharedComponent = [NavbarComponent, HadithSearchComponent, BannerTitleComponent]

@NgModule({
    exports: [...sharedComponent],
    declarations: [...sharedComponent],
    imports: [FormsModule, RouterModule, CommonModule]
})
export class SharedModule {}
