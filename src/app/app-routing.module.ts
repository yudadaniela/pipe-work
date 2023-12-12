import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',  
  loadChildren:()=>import('./show-table-user/show-table-user.module').then((m)=>m.ShowTableUserModule)},
//    {
//     path:'**',
//     redirectTo:'show'  
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
