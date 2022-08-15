import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { LayerBasemapComponent } from './pages/tutorials/layer-basemap/layer-basemap.component';
import { LayerGroupComponent } from './pages/tutorials/layer-group/layer-group.component';
import { StartGuideComponent } from './pages/tutorials/start-guide/start-guide.component';

const routes: Routes = [
  { path: "index", component: IndexComponent },
  { path: "tutorials/start-guide", component: StartGuideComponent },
  { path: "tutorials/layer-group", component: LayerGroupComponent },
  { path: "tutorials/layer-basemap", component: LayerBasemapComponent },
  { path: '', redirectTo: 'index', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
