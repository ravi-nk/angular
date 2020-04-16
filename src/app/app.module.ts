import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanYourVisitComponent } from './plan-your-visit/plan-your-visit.component';




@NgModule({
  declarations: [
    AppComponent,
   routingComponent,
   PlanYourVisitComponent
   
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
