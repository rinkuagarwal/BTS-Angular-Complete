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
const appRoutes: Routes = [
  { path: '', component: HomeComponent }, //default, Home page
  { path: 'create', component: CreateBugComponent },
  { path: 'get', component: GetBugComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateBugComponent,
    GetBugComponent,
    HomeComponent,
    FooterComponent
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
