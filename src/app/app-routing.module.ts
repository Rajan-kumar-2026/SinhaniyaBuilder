import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuilderprofileComponent } from './builderprofile/builderprofile.component';

const routes: Routes = [
  {
    path: '',
    component: BuilderprofileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
