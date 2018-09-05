import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-embed-videos',
  templateUrl: './embed-videos.component.html',
  styleUrls: ['./embed-videos.component.css']
})
export class EmbedVideosComponent implements OnInit {

  title = "Video List";
  someItem = "<h1>Hi there</h1>"

  videoList = [
    {
     name: "Item 1",
     slug: "item-1",
     embed: `1hyjLD7pk10`,
    },
    {
     name: "Item 2",
     slug: "item-2",
     embed: `b9gnX62ZMTU`,
    },
    {
     name: "Item 3",
     slug: "item-3",
     embed: `YkvqLNcJz3Y`,
    }
]

constructor(private sanitizer: DomSanitizer) {}


  ngOnInit() {
  }

  getEmbedUrl(item){
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + item.embed + '?ecver=2')
  }

}
