export interface Email {
  id: number;
  created_at: Date;
  from: string;
  body: string;
  received: string;
  officeId: string;
  folder: string;
  to: string;
  subject: string;
}
