import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './common/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactboxComponent } from './pages/contact/contactbox/contactbox.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptorService } from './auth-interceptor-service.service';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ContactboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthInterceptorService,{
    provide: HTTP_INTERCEPTORS,
    useFactory: function(injector: Injector) {
      return new AuthInterceptorService(injector);
    },
    multi: true,
    deps: [Router]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
