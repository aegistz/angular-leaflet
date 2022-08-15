import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { IndexComponent } from './pages/index/index.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { StartGuideComponent } from './pages/tutorials/start-guide/start-guide.component';
import { LayerGroupComponent } from './pages/tutorials/layer-group/layer-group.component';
import { LayerBasemapComponent } from './pages/tutorials/layer-basemap/layer-basemap.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    IndexComponent,
    GetStartedComponent,
    HeaderComponent,
    FooterComponent,
    StartGuideComponent,
    LayerGroupComponent,
    LayerBasemapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
