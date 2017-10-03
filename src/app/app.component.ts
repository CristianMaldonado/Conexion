import { Component } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import { BackendService } from './backend-service/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ BackendService ]
})
export class AppComponent {

  public logIn;
  public add;
  public out;

  constructor(private backend: BackendService) {

   }

   /*obtenerRespuesta(){
    this.backend.getResponse().subscribe(
      result => {
        this.posts = result;
        console.log(this.posts);
      }
      )
   }
  

   obtenerRequest(param: string){
    this.backend.getRequest(param).subscribe(
      request => {
        this.req = request.mensaje;
        console.log(this.req);
        console.log(this.req.mensaje);
      }
    );
   }*/

   executeLogIn(){
    this.backend.sessionInit().subscribe(
      res => {
        this.logIn = res;
        console.log(this.logIn);
      }
    );
  } 
   executeAddObject(){
     this.backend.sendObject().subscribe(
      res => {
        this.add = res;
        console.log(this.add);
      }
     );
   }
   
   executeLogOut(){
    this.backend.sessionClose().subscribe(
     res => {
       this.out = res;
       console.log(this.out);
     }
    );
  }

}
