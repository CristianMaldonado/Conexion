import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { BackendService } from './backend-service/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ BackendService ]
})
export class AppComponent {

  public posts;

  constructor(private backend: BackendService) { 

    this.backend.getResponse().subscribe(
            result => {
              this.posts = result;
              console.log(this.posts);
            }
            )
   }
  

}
