import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunicationsAppRoutingModule } from './communication-routing.module';
import { CommunicationAppComponent } from './communication.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IgxInputGroupModule, IgxNavigationDrawerModule, IgxTabsModule, IgxListModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxNavbarModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { ConversationComponent } from './conversation/conversation.component';
import { EmailComponent } from './email/email.component';
import { NotificationComponent } from './notification/notification.component';
import { CallComponent } from './call/call.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    CommunicationAppComponent,
    DashboardComponent,
    ConversationComponent,
    EmailComponent,
    NotificationComponent,
    CallComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    CommunicationsAppRoutingModule,
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
export class CommunicationAppModule {
}
