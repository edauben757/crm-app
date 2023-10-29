import { Component, OnInit } from '@angular/core';
import { Conversation } from '../../models/conversation';
import { ConversationService } from '../../services/conversation.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {
  public conversationsDataGetConversations!: Conversation[];

  constructor(
    private conversationService: ConversationService
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.conversationService.getGetConversations().subscribe(data => this.conversationsDataGetConversations = data);
  }
}
