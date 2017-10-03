import { Injectable } from "@angular/core";
import { Http, Response, Headers,RequestOptions, Jsonp  } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { JsonObject } from "../bean/bean.object";
import { Header } from "../bean/bean.header";
import { Data } from "../bean/bean.data";

@Injectable()
export class BackendService {

    public url: string= "http://localhost:9080/EBSchemaManager/client_data";
    
    objecto: JsonObject = new JsonObject(new Header(), new Data("00000120"));

    constructor(private http: Http){  }

    getResponse(){
        return this.http.
        //get("https://jsonplaceholder.typicode.com/posts").
        get("http://localhost:9080/project/f.flowc?flowActionName=salida").
        map(res => res.json());
    }

    getRequest(param: string){
      
        return this.http.
        post("http://localhost:9080/project/completo.flowc?flowActionName=prueba&entrada="+ param,this.objecto).
        map(res => res.json());
    }

    sendObject() {   
        //convierte el objeto javascript a json     
        let body = JSON.stringify( this.objecto );            
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log(body);
        return this.http.post(this.url, body, options).map(res => res.json());
    }
}