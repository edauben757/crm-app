import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchedulingAppComponent } from './scheduling.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { AppointmentComponent } from './appointment/appointment.component';

const routes: Routes = [{ path: '', component: SchedulingAppComponent, children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
  , { path: 'dashboard', component: DashboardComponent, data: { text: 'Dashboard' } }
  , { path: 'appointment', component: AppointmentComponent, data: { text: 'Appointment' } }
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulingAppRoutingModule {
}
