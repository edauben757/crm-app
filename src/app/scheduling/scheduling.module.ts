import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulingAppRoutingModule } from './scheduling-routing.module';
import { SchedulingAppComponent } from './scheduling.component';
import { IgxInputGroupModule, IgxNavigationDrawerModule, IgxTabsModule, IgxListModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxNavbarModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SchedulingAppComponent
  ],
  imports: [
    CommonModule,
    SchedulingAppRoutingModule,
    IgxInputGroupModule,
    FormsModule,
    IgxNavigationDrawerModule,
    IgxTabsModule,
    IgxListModule,
    IgxAvatarModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxIconModule,
    IgxNavbarModule
  ]
})
export class SchedulingAppModule {
}
