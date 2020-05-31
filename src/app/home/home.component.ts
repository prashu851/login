import { Component, OnInit ,Injectable} from '@angular/core';
import { Home } from './home';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
@Injectable()
export class HomeComponent {
  ngOnInit() {
    this.getFrames();
  }
constructor(
    private httpClient : HttpClient
    ) {}
resp=[];
frames=[];
getFrames(){
  this.httpClient.get("http://localhost:3000/frames")
  .subscribe((resp: [Home]) => {
    this.resp=resp;
    this.frames=resp;
})
}
}
