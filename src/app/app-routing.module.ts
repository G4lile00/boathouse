import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GlobalComponent } from './pages/global/global.component';
import { GlobalModule } from './pages/global/global.module';
import { CompanyComponent } from './pages/global/modules/company/company.component';
import { HomeComponent } from './pages/global/modules/home/home.component';
import { LocationsComponent } from './pages/global/modules/locations/locations.component';
import { UsersComponent } from './pages/global/modules/users/users.component';
import { UserComponent } from './pages/global/modules/user/user.component';

import { LoginComponent } from './pages/login/login.component';
import { UsuarioAutenticadoGuard } from './services/guards/usuario-autenticado.guard';
import { LocationComponent } from './pages/global/modules/location/location.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    component: GlobalComponent,
    canActivate: [UsuarioAutenticadoGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'user', component: UsersComponent },
      { path: 'user/edit', component: UserComponent },
      { path: 'company', component: CompanyComponent },
      { path: 'location', component: LocationsComponent },
      { path: 'location/:id', component: LocationComponent },
    ],
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
