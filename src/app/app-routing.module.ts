import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { renderMode: 'client' }
  },
  {
    path: 'content/:id',
    component: ContentComponent,
    data: { renderMode: 'client' }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

