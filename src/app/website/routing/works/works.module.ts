import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksComponent } from './pages/works/works.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared/shared.module';



@NgModule({
  declarations: [WorksComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: WorksComponent
      }
    ])
  ]
})
export class WorksModule { }
