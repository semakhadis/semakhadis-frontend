import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { SharedModule } from 'App/_shared/_shared.module'
import { CONTACT_DEVELOPER_NAV } from 'ContactDeveloper/contact-developer.nav'
import { BaseContactDeveloperComponent } from 'ContactDeveloper/base-contact-developer.component'
import { MainContactDeveloperComponent } from 'ContactDeveloper/c/main-contact-developer/main-contact-developer.component'

@NgModule({
    declarations: [BaseContactDeveloperComponent, MainContactDeveloperComponent],
    imports: [RouterModule, CommonModule, SharedModule, RouterModule.forChild(CONTACT_DEVELOPER_NAV)]
})
export class ContactDeveloperModule {}
