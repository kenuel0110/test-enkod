import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainComponent } from './components/main/main.component';
import { CreateNewComponent } from './components/create-new/create-new.component';
import { EmptyPage } from './components/empty-route/empty-route.component';

export const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    data: { title: 'Список городов' }
  },
  {
    path: 'new',
    component: CreateNewComponent,
    data: { title: 'Создание города' }
  },
  {
    path: '', redirectTo: 'main', pathMatch: 'full'
  },
  {
    path: '**',
    component: EmptyPage,
    data: { title: '404' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
