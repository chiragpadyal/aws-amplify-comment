import { CommentMeta } from "./CommentMeta.model";
import { Thread } from "./Thread.model";
import { User } from "./User.model";

export class Comment {
  "id": number;
  "threadId": {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  "content": string;
  "parentId": string | null;
  "children": Comment[];
  "likes": number;
  "dislikes": number;
  "owner"?: string | null;
  "vote": any;
  "updatedAt": string;
  "createdAt": string;
  "quality": number;
}
