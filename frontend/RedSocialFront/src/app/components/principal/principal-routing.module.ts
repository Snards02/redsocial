import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard as guard } from '../../services/auth.guard';
import { PrincipalComponent } from './principal.component';

const routes: Routes = [
  {
    path: '', component: PrincipalComponent,
    children: [
      { path: 'inicio', loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioModule), canActivate: [guard] },
      { path: 'perfil', loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilModule), canActivate: [guard] },
      { path: 'mispost', loadChildren: () => import('../mypost/mypost.module').then(m => m.MypostModule), canActivate: [guard] }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
