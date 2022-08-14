import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { IndexComponent } from './pages/index/index.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    IndexComponent,
    GetStartedComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
