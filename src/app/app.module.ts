import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule }    from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { HomeComponent } from './home/home.component';
import { ArchiveComponent } from './archive/archive.component';
import { VideoComponent } from './video/video.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { ProfileComponent } from './profile/profile.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserModalComponent } from './user-modal/user-modal.component';


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
    AngularFontAwesomeModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
