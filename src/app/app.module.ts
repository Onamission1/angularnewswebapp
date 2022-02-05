import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// for HttpClient import:
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

import { NewsapiservicesService } from './service/newsapiservices.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { AppRoutingModule } from './app-routing.module';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnewsComponent,
    BusinessnewsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LoadingBarHttpClientModule,
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
