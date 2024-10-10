import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PicsRoutingModule } from './pics-routing.module';
import { PicComponent } from './pages/pic/pic.component';
import { PicCreateComponent } from './pages/pic-create/pic-create.component';
import { PicDetailComponent } from './pages/pic-detail/pic-detail.component';
import { PicListComponent } from './pages/pic-list/pic-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PicComponent,
    PicCreateComponent,
    PicDetailComponent,
    PicListComponent
  ],
  imports: [
    CommonModule,
    PicsRoutingModule,
    SharedModule
  ]
})
export class PicsModule { }
