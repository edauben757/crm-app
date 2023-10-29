import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunicationAppComponent } from './communication.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConversationComponent } from './conversation/conversation.component';
import { EmailComponent } from './email/email.component';
import { NotificationComponent } from './notification/notification.component';
import { CallComponent } from './call/call.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [{ path: '', component: CommunicationAppComponent, children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
  , { path: 'dashboard', component: DashboardComponent, data: { text: 'Dashboard' } }
  , { path: 'conversation', component: ConversationComponent, data: { text: 'Conversations' } }
  , { path: 'email', component: EmailComponent, data: { text: 'Email' } }
  , { path: 'notification', component: NotificationComponent, data: { text: 'Mobile Notifications' } }
  , { path: 'call', component: CallComponent, data: { text: 'Call' } }, { path: 'settings'
  , component: SettingsComponent, data: { text: 'Communications Settings' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunicationsAppRoutingModule {
}
