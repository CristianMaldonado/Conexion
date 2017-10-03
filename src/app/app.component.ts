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

  public posts;
  public req;
  public algo;

  constructor(private backend: BackendService) {

   }

   obtenerRespuesta(){
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
   }

   executeAddObject(){
     this.backend.sendObject().subscribe(
      res => {
        this.algo = res;
        console.log(this.algo);
      }
     );
   }

}
