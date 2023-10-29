import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { IgxGridModule, IgxListModule, IgxAvatarModule, IgxChipsModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxSelectModule, IgxInputGroupModule, IgxDropDownModule, IgxDialogModule, IgxTabsModule, IgxAccordionModule, IgxExpansionPanelModule, IgxCheckboxModule, IgxNavbarModule, IgxNavigationDrawerModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { ClientsComponent } from './clients/clients.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { AppointmentComponent } from '../scheduling/appointment/appointment.component';
import { TasksComponent } from './tasks/tasks.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    ClientsComponent,
    ClientProfileComponent,
    AppointmentComponent,
    TasksComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    IgxCategoryChartModule,
    IgxGridModule,
    IgxListModule,
    IgxAvatarModule,
    IgxChipsModule,
    FormsModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxToggleModule,
    IgxIconModule,
    IgxSelectModule,
    IgxInputGroupModule,
    IgxDropDownModule,
    IgxDialogModule,
    IgxTabsModule,
    IgxAccordionModule,
    IgxExpansionPanelModule,
    IgxCheckboxModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule
  ]
})
export class MainModule {
}
