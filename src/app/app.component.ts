import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/Http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  lista = [{name: "pepe", age: "12"}, {name: "lucas", age: "23"}];
  constructor(private http: Http){  }

  ngOnInit(): void {
    this.http.get("http://localhost:8080/project/flow.flowc?flowActionName=salida").
    toPromise().then(r => r.json()).then(r => this.lista = r);
  }
}
