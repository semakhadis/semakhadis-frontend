import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class AuthService {

    private static base_url: string = ''

    constructor(private http: HttpClient) {
        AuthService.base_url = ''
    }

}
