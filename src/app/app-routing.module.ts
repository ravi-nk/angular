import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { MuseumComponent } from './museum/museum.component';
import { MueseumWhatsOnComponent } from './mueseum-whats-on/mueseum-whats-on.component';
import { PlanYourVisitComponent } from './plan-your-visit/plan-your-visit.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'News', component: NewsComponent },
  {path: 'Mueseum', component: MuseumComponent},
  { path: 'Mueseum/whatsOn', component: MueseumWhatsOnComponent },
  {path:'Mueseum/plan-your-visit',component:PlanYourVisitComponent},
  { path: 'Contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
  HomeComponent,
  AboutComponent,
  NewsComponent,
  ContactComponent,
  MuseumComponent,
  MueseumWhatsOnComponent,
  PlanYourVisitComponent
];