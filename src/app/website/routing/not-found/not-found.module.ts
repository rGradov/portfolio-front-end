import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SharedModule } from '../shared/shared/shared.module';



@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '**',
        component: NotFoundPageComponent
      }
    ])
  ]
})
export class NotFoundModule { }
