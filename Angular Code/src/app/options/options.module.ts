import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextProcessorComponent } from '../text-processor/text-processor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TextProcessorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class OptionsModule { }
