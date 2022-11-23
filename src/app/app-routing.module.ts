import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // route home to index.html in the root of the project
  { path: 'home', redirectTo: '/index.html', pathMatch: 'full' },
  { path: 'work', loadChildren: () => import('../work/work.module').then(m => m.WorkModule) },
  { path: 'contact', loadChildren: () => import('../contact/contact.module').then(m => m.ContactModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
