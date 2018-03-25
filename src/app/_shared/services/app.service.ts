import { Injectable } from '@angular/core'
import { environment } from 'environments/environment'

@Injectable()
export class AppService {

    constructor() {
        (<any>window).app = environment
    }

}
