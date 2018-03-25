import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http'
import { ApiService } from 'Services/api.service'

@Injectable()
export class ReferenceService extends ApiService {

    private static base_url: string = ''

    constructor(private http: HttpClient) {
        super()

        ReferenceService.base_url = `${this.base_url}/references`
    }

    fetchReferences = (): Observable<any> => this.http.get(ReferenceService.base_url)

}
