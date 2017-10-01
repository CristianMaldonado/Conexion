import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class BackendService {

    constructor(private http: Http){  }

    getResponse(){
        return this.http.
        //get("https://jsonplaceholder.typicode.com/posts").
        get("http://localhost:8080/project/flow.flowc?flowActionName=salida").
        map(res => res.json());
    }
}