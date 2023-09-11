import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule , Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'; 
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { EmailComponent } from './components/email/email.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { EmailbackendService } from './service/emailbackend.service';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const routes : Routes=[
  {
path:"sendEmail",
component:EmailComponent,
pathMatch:"full"
  },
{
  path:'',
 component:HomeComponent,
pathMatch:"full"
}


];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule
    
  ],
  providers: [MatSnackBar,EmailbackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
