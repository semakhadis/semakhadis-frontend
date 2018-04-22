import { Component } from '@angular/core'

@Component({
    template: `
        <div style="width: 100%;height: 200px; display: flex; justify-content: center; align-items: 
                    center;flex-direction: column;">
            <h1>404</h1>
        </div>
    `,
    styleUrls: [ '404.component.scss' ]
})
export class Error404Component {
}
