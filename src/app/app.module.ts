import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

// import { PostsComponent } from './posts/posts.component'; // component
// import { PostsService } from './posts.service'; // provider service

/* Define routes
const routes = [
    {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full'
    },
    {
        path: 'posts',
        component: PostsComponent
    }
];
*/

@NgModule({
  declarations: [
    AppComponent,
    // PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // RouterModule.forRoot(routes)
  ],
  providers: [], // [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
