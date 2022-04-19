import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//module routing
import { PagesRoutingModule } from './pages-routing.module';
//pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
@NgModule({
  declarations: [HomeComponent, DetailsComponent],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
