import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  { path: 'about-me', component: AboutMeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: '', redirectTo: '/about-me', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
