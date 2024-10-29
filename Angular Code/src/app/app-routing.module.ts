import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TextProcessorComponent } from './text-processor/text-processor.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path: "textProcessor", component: TextProcessorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
