import { NgModule, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowTableUserComponent } from './show-table-user.component';
import { RouterModule } from "@angular/router";
import { RandomDatePipe } from '../pipes/random-date.pipe';



@NgModule({
  declarations: [
    ShowTableUserComponent,
    RandomDatePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'', component:ShowTableUserComponent}
    ])
  ],
  exports:[
    ShowTableUserComponent
  ]
})
export class ShowTableUserModule { }
