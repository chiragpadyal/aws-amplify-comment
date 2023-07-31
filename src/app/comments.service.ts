import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Comment } from "./models/Comments.model";
import { User } from "./models/User.model";
import { Page } from "./models/Page.model";
import { CommentMeta } from "./models/CommentMeta.model";

@Injectable({
  providedIn: "root",
})
export class CommentsService {
  private urlApi: String = "http://localhost:8060/api/comment-service/";

  constructor(private http: HttpClient) {}

  /**
   * Get all comments by thread id
   *
   * @param threadId
   * @returns Comment[]
   */
  getCommentsByThread(threadId: String): Observable<Comment[]> {
    return this.http.get<Comment[]>(
      `${this.urlApi}threads/${threadId}/comments`
    );
  }

  /**
   * Get all comments by thread id and page number
   *
   * @param threadId
   * @param pageno
   * @param user
   * @returns  Page
   */
  getCommentsByThreadByPage(
    threadId: String,
    pageno: number
  ): Observable<Page> {
    return this.http.get<Page>(
      `${this.urlApi}threads/${threadId}/comments/${pageno}`
    );
  }

  /**
   * Create a new comment
   *
   * @param comment
   * @param threadId
   * @returns Comment
   */
  createComments(comment: Comment, threadId: String): Observable<Comment> {
    return this.http.post<Comment>(
      `${this.urlApi}threads/${threadId}/comments`,
      comment
    );
  }

  /**
   * Get all replies by thread id and comment id
   *
   * @param threadId
   * @param commentId
   * @param pageno
   * @returns  Page
   */
  getRepliesByThreadByPage(
    threadId: String,
    commentId: Comment,
    pageno: number
  ): Observable<Page> {
    return this.http.get<Page>(
      `${this.urlApi}threads/${threadId}/comments/reply/${commentId.id}/${pageno}`
    );
  }

  /**
   * Get User id by google token
   *
   * @param googleToken
   * @returns
   */
  getUser(googleToken: string): Observable<User> {
    return this.http.post<User>(
      `http://localhost:8060/api/admin/users/getUser`,
      {
        user_id: googleToken,
      }
    );
  }

  /**
   * Post a vote to a comment
   *
   * @param threadId
   * @param commentMeta
   * @returns
   */
  voteComment(
    threadId: String,
    commentMeta: CommentMeta
  ): Observable<CommentMeta> {
    return this.http.post<CommentMeta>(
      `${this.urlApi}threads/${threadId}/comments/meta`,
      commentMeta
    );
  }
}
