import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { VideoComponent } from './components/video/video.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './/services/auth.service';
import { ErrorService } from './/services/error.service';
import { ProfileComponent } from './components/profile/profile.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { UserModalComponent } from './components/user-modal/user-modal.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interseptors/token.interceptor';
import { AuthInterceptor } from './interseptors/auth.interceptor';


import {ToasterModule, ToasterService} from '../../node_modules/angular5-toaster/dist/angular5-toaster';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ArchiveComponent,
    VideoComponent,
    LoginComponent,
    ProfileComponent,
    UserManagementComponent,
    UserModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToasterModule,
  ],
  providers: [AuthService, ErrorService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi   : true,
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi   : true,
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
