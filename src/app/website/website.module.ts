import { AdminAuthGuard } from './guards/admin-auth.guard';
import { AdminGuestGuard } from './guards/admin-guest.guard';
import { RouterModule, CanLoad } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([

      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./routing/home/home.module')
          .then(module => module.HomeModule)
      },
      {
        path: 'admin/auth',
        loadChildren: () => import('./routing/admin-auth/admin-auth.module')
          .then(module => module.AdminAuthModule),
        canLoad: [AdminGuestGuard],
        canActivate: [AdminGuestGuard]
      },
      {
        path: 'admin',
        loadChildren: () => import('./routing/admin/admin.module')
          .then(module => module.AdminModule),
        canLoad: [AdminAuthGuard],
        canActivate: [AdminAuthGuard]

      },
      {
        path: 'works',
        loadChildren: () => import('./routing/works/works.module')
          .then(module => module.WorksModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./routing/contact/contact.module')
          .then(module => module.ContactModule)
      },
      {
        path: '**',
        loadChildren: () => import('./routing/not-found/not-found.module')
          .then(module => module.NotFoundModule)
      },
    ])

  ],
  providers: [AdminGuestGuard]
})
export class WebsiteModule { }
