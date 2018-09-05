import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-playlist-tab',
  templateUrl: './playlist-tab.component.html',
  styleUrls: ['./playlist-tab.component.css']
})
export class PlaylistTabComponent implements OnInit {

  channelVdeo: any[];

  constructor(private httpClient: HttpClient) { }

  getVideoList(){
    const req = this.httpClient.post('http://nadeo.iqmedialabs.com/v1/channels/activeVideoList/', { //http://192.168.1.36:3000/v1/user
    channel_id:2
   })
     .subscribe(
       res => {
        this.channelVdeo = res as [any];
         console.log(res);
       },
       err => {
         console.log(err);
         console.log("Error occured");
       }
     );
  }

  ngOnInit() {
  }

}
