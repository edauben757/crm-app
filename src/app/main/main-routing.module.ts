import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { AppointmentComponent } from '../scheduling/appointment/appointment.component';
import { TasksComponent } from './tasks/tasks.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [{ path: '', component: MainComponent, children: [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { text: 'Home' } },
  { path: 'clients', component: ClientsComponent, data: { text: 'Clients' } },
  { path: 'client-profile', component: ClientProfileComponent, data: { text: 'Client Profile' } },
  { path: 'appointment', component: AppointmentComponent, data: { text: 'Appointments' } },
  { path: 'tasks', component: TasksComponent, data: { text: 'Tasks' } },
  { path: 'settings', component: SettingsComponent, data: { text: 'Settings' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
