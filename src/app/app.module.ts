import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreateBugComponent } from './create-bug/create-bug.component';
import { GetBugComponent } from './get-bug/get-bug.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { UpdateBugComponent } from './update-bug/update-bug.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent }, //default, Home page
  { path: 'create', component: CreateBugComponent },
  { path: 'get', component: GetBugComponent },
  { path: 'update', component: UpdateBugComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'help', component: ContactUsComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateBugComponent,
    GetBugComponent,
    HomeComponent,
    FooterComponent,
    UpdateBugComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  ),
    BrowserModule, FormsModule, HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
