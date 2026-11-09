import { Routes } from '@angular/router';

import { NotFound } from './error-routing/not-found/not-found';
import { UncaughtError } from './error-routing/error/uncaught-error';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientiComponent } from './clienti/clienti.component';
import { OrdiniComponent } from './ordini/ordini.component';
import { MagazzinoComponent } from './magazzino/magazzino.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'error', component: UncaughtError },
  { path: 'dashboard', component: DashboardComponent, data: { text: 'Dashboard' } },
  { path: 'clienti', component: ClientiComponent, data: { text: 'Clienti' } },
  { path: 'ordini', component: OrdiniComponent, data: { text: 'Ordini' } },
  { path: 'magazzino', component: MagazzinoComponent, data: { text: 'Magazzino' } },
  { path: '**', component: NotFound } // must always be last
];
