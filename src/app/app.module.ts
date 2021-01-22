import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ThreadService } from './thread.service';
import { CommentService } from'./comment.service';

import { AgmCoreModule } from '@agm/core';
import { OneThreadComponent } from './one-thread/one-thread.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    OneThreadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDeLJL9E8qPjdUQj7QTSxZkiQKBIBLOo-I'
    })
  ],
  providers: [ThreadService, CommentService, BlogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
