import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './pages/contact.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContactComponent,
      }
    ])
  ]
})
export class ContactModule { }
