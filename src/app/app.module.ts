import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AuthHttpInterceptor, AuthModule } from "@auth0/auth0-angular";
import { AmplifyAuthenticatorModule } from "@aws-amplify/ui-angular";

//add module comment-page
import { CommentPageModule } from "./comment-page/comment-page.module";
import { ProductPageComponent } from "./product-page/product-page.component";
import { AuthComponent } from "./auth/auth.component";
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [AppComponent, ProductPageComponent, AuthComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommentPageModule,
    AmplifyAuthenticatorModule,
    FormsModule,
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthHttpInterceptor,
    //   multi: true,
    // },
    {
      provide: Window,
      useValue: window,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
