import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { StartGuideComponent } from './pages/tutorials/start-guide/start-guide.component';

const routes: Routes = [
  { path: "index", component: IndexComponent },
  { path: "tutorials/start-guide", component: StartGuideComponent },
  { path: '', redirectTo: 'index', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
