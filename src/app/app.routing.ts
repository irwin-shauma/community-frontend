import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'primeng/api';
import { LogoutComponent } from './components/logout/logout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminGuard } from './guard/admin.guard';
import { NonAdminGuard } from './guard/non-admin.guard';
import { NotFoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  {
    path: 'home',
    canLoad: [AdminGuard],
    component: NavbarComponent,
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'article',
    canLoad: [AdminGuard],
    component: NavbarComponent,
    loadChildren: () =>
      import('./pages/article/article.module').then((m) => m.ArticleModule),
  },
  {
    path: 'payment',
    canLoad: [AdminGuard],
    component: NavbarComponent,
    loadChildren: () =>
      import('./pages/payment/payment.module').then((m) => m.PaymentModule),
  },
  {
    path: 'users',
    canLoad: [AdminGuard],
    component: NavbarComponent,
    loadChildren: () =>
      import('./pages/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'events',
    canLoad: [AdminGuard],
    component: NavbarComponent,
    loadChildren: () =>
      import('./pages/event/event.module').then((m) => m.EventModule),
  },
  {
    path: 'threads',
    canLoad: [AdminGuard],
    component: NavbarComponent,
    loadChildren: () =>
      import('./pages/thread/thread.module').then((m) => m.ThreadModule),
  },
  {
    path: 'roles',
    canLoad: [AdminGuard],
    component: NavbarComponent,
    loadChildren: () =>
      import('./pages/role/role.module').then((m) => m.RoleModule),
  },
  {
    path: 'event-types',
    canLoad: [AdminGuard],
    component: NavbarComponent,
    loadChildren: () =>
      import('./pages/eventtype/eventtype.module').then(
        (m) => m.EventTypeModule
      ),
  },
  {
    path: 'threadtypes',
    canLoad: [AdminGuard],
    component: NavbarComponent,
    loadChildren: () =>
      import('./pages/threadtype/threadtype.module').then(
        (m) => m.ThreadTypeModule
      ),
  },
  {
    path: 'profiles',
    component: NavbarComponent,
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'premium-types',
    canLoad: [AdminGuard],
    component: NavbarComponent,
    loadChildren: () =>
      import('./pages/premium-type/premium-type.module').then(
        (m) => m.PremiumTypeModule
      ),
  },
  {
    path: 'threads-main',
    component: NavbarComponent,
    loadChildren: () =>
      import('./pages/threadmember/thread-member.module').then(
        (m) => m.ThreadMemberModule
      ),
  },
  {
    path: 'premiums',
    component: NavbarComponent,
    loadChildren: () =>
      import('./pages/premium/premium.module').then((m) => m.PremiumModule),
  },
  {
    path: 'article-members',
    component: NavbarComponent,
    loadChildren: () =>
      import('./pages/articlemember/article-member.module').then(
        (m) => m.ArticleMemberModule
      ),
  },
  {
    path: 'event-members',
    component: NavbarComponent,
    loadChildren: () =>
      import('./pages/eventmember/event-member.module').then(
        (m) => m.EventMemberModule
      ),
  },
  {
    path: 'event-payment-histories',
    canLoad: [AdminGuard],
    component: NavbarComponent,
    loadChildren: () =>
      import('./pages/event-payment-history/event-payment-history.module').then(
        (m) => m.EventPaymentHistoryModule
      ),
  },
  {
    path: 'premium-payment-histories',
    canLoad: [AdminGuard],
    component: NavbarComponent,
    loadChildren: () =>
      import(
        './pages/premium-payment-history/premium-payment-history.module'
      ).then((m) => m.PremiumPaymentHistoryModule),
  },
  {
    path: '',
    redirectTo: '/threads-main',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SharedModule],
  exports: [RouterModule],
})
export class AppRouting { }
