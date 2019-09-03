import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

import { environment } from './../environments/environment';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProjectsService {

    myMoneyUrl = `${environment.myMoneyUrl}/categorias`;

    constructor(private http: HttpClient) { }
    /**
     * I did this because its a free service,
     * so the first time can take few seconds to start.
     */
    wakeupMyMoney(): Promise<any> {
        return this.http.get(this.myMoneyUrl)
            .toPromise();
    }

}