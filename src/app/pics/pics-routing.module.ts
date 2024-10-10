import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PicComponent } from './pages/pic/pic.component';
import { GuardService } from '../core/services/guard.service';
import { PicCreateComponent } from './pages/pic-create/pic-create.component';
import { PicDetailComponent } from './pages/pic-detail/pic-detail.component';
import { PicListComponent } from './pages/pic-list/pic-list.component';

const routes: Routes = [
  //Index PAGE
  {
    path: 'pic',
    component : PicComponent,
    canActivate: [GuardService]
  },
  //CREATE PAGE
  {
    path: 'pic/create',
    component : PicCreateComponent,
    canActivate: [GuardService]
  },
  //DETAIL PAGE
  {
    path: 'pic/detail/:id',
    component : PicDetailComponent,
    canActivate: [GuardService]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PicsRoutingModule { }
