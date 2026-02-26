import { Routes } from '@angular/router';
import { CustomersPageComponent } from './features/customers/pages/customers-page/customers-page.component';
import { DashboardPageComponent } from './features/dashboard/pages/dashboard-page/dashboard-page.component';
import { LeadsPageComponent } from './features/leads/pages/leads-page/leads-page.component';
import { OpportunitiesPageComponent } from './features/opportunities/pages/opportunities-page/opportunities-page.component';
import { ReportsPageComponent } from './features/reports/pages/reports-page/reports-page.component';
import { SettingsPageComponent } from './features/settings/pages/settings-page/settings-page.component';
import { TasksPageComponent } from './features/tasks/pages/tasks-page/tasks-page.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', component: DashboardPageComponent },
      { path: 'clientes', component: CustomersPageComponent },
      { path: 'leads', component: LeadsPageComponent },
      { path: 'oportunidades', component: OpportunitiesPageComponent },
      { path: 'tarefas', component: TasksPageComponent },
      { path: 'relatorios', component: ReportsPageComponent },
      { path: 'configuracoes', component: SettingsPageComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];
