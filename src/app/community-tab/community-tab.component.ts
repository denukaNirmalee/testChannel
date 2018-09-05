import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-community-tab',
  templateUrl: './community-tab.component.html',
  styleUrls: ['./community-tab.component.css']
})
export class CommunityTabComponent implements OnInit {

  arrChannel: [any];
  
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(`http://nadeo.iqmedialabs.com/v1/channels/displayAllVerifiedChannels`).subscribe(
      data => {
          this.arrChannel = data as [any];
          //console.log(this.arrChannel[1]);
      }
      
    );
  }

}
