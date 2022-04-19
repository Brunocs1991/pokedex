import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//module routing
import { PagesRoutingModule } from './pages-routing.module';
//pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [HomeComponent, DetailsComponent],
  imports: [CommonModule, PagesRoutingModule, SharedModule],
})
export class PagesModule {}
