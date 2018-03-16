import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class AuthUserService {

    private static base_url: string = ''

    constructor(private http: HttpClient) {
        AuthUserService.base_url = ''
    }

}
