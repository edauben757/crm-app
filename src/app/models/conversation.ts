export interface Conversation {
  id: number;
  created_at: Date;
  from: string;
  message: string;
  received: string;
  officeId: string;
  type: string;
}
