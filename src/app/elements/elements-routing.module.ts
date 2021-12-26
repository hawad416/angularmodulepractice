import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementsHomeComponent } from './elements-home/elements-home.component';

const routes: Routes = [{ path: '', component: ElementsHomeComponent }];

//real meat and potatos for routing lol
//need to set up a routing rule
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElementsRoutingModule {}
