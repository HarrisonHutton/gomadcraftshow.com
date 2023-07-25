import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { HeroComponent } from './hero/hero.component';

import { AppLayoutComponent } from './@layout2/layout/app.layout.component';


const routes: Routes = [
  { path: '', component: AppLayoutComponent, children: [
    { path: '', component: HeroComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'contact', component: ContactComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
