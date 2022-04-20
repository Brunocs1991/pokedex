import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';

@NgModule({
  declarations: [PokeHeaderComponent, PokeSearchComponent, PokeListComponent],
  imports: [CommonModule, RouterModule],
  exports: [PokeHeaderComponent, PokeSearchComponent, PokeListComponent],
})
export class SharedModule {}
