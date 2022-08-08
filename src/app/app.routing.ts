import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'primeng/api';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  {
    path: 'home',

    component: NavbarComponent,
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'homes',
    component: NavbarComponent,
    loadChildren: () =>
      import('./pages/homepage/homepage.module').then((m) => m.HomepageModule),
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
    component: NavbarComponent,
    loadChildren: () =>
      import('./pages/article/article.module').then((m) => m.ArticleModule),
  },
  {
    path: 'payment',
    component: NavbarComponent,
    loadChildren: () =>
      import('./pages/payment/payment.module').then((m) => m.PaymentModule),
  },
  {
    path: 'users',
    component: NavbarComponent,
    loadChildren: () =>
      import('./pages/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'events',
    component: NavbarComponent,
    loadChildren: () =>
      import('./pages/event/event.module').then((m) => m.EventModule),
  },
  {
    path: 'threads',
    component: NavbarComponent,
    loadChildren: () =>
      import('./pages/thread/thread.module').then((m) => m.ThreadModule),
  },
  {
    path: 'roles',
    component: NavbarComponent,
    loadChildren: () =>
      import('./pages/role/role.module').then((m) => m.RoleModule),
  },
  {
    path: 'event-types',
    component: NavbarComponent,
    loadChildren: () =>
      import('./pages/eventtype/eventtype.module').then(
        (m) => m.EventTypeModule
      ),
  },
  {
    path: 'threadtypes',
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
    component: NavbarComponent,
    loadChildren: () =>
      import('./pages/event-payment-history/event-payment-history.module').then(
        (m) => m.EventPaymentHistoryModule
      ),
  },
  {
    path: 'premium-payment-histories',
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
