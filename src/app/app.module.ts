import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing';

import { AppComponent } from './app.component';
import { MaterialModule} from './material';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
   MatGridListModule, MatCardModule, MatMenuModule,MatFormFieldModule,MatInputModule } from '@angular/material';
import { MainDashComponent } from './main-dash/main-dash.component';
import { Base64UploadComponent } from './base64-upload/base64-upload.component';
import { TestFormComponent } from './test-form/test-form.component';
import { FormsModule } from '@angular/forms';
import { EmbedVideosComponent } from './embed-videos/embed-videos.component';
import { GetJsonDataComponent } from './get-json-data/get-json-data.component';
import { PlaylistTabComponent } from './playlist-tab/playlist-tab.component';
import { CommunityTabComponent } from './community-tab/community-tab.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainDashComponent,
    Base64UploadComponent,
    TestFormComponent,
    EmbedVideosComponent,
    GetJsonDataComponent,
    PlaylistTabComponent,
    CommunityTabComponent,
    
   
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MaterialModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    ReactiveFormsModule,
    HttpModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
