import { ViewportScroller } from "@angular/common";
import { Component, Input, OnInit, ChangeDetectorRef } from "@angular/core";
// import { AuthService } from "@auth0/auth0-angular";
import { map, take } from "rxjs";
import { CommentsService } from "src/app/comments.service";
import { CommentMeta, Vote } from "src/app/models/CommentMeta.model";
import { Comment } from "src/app/models/Comments.model";

import { Page } from "../../models/Page.model";
import { User } from "../../models/User.model";
import { APIService, ListCommentsQuery } from "src/app/API.service";

@Component({
  selector: "app-comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.css"],
})
export class CommentsComponent implements OnInit {
  @Input()
  comments: any = {};
  @Input()
  totalPage: number = 1;
  @Input()
  currentPage: number = 0;

  isLast: boolean = false;

  voteData = Vote;
  threadId: String = "";

  @Input()
  replyTo: String = "";

  receivedData: any = {};

  commentMessage: String = "";
  hasCancelButton: boolean = false;
  hasCancelButtonForReply: boolean = false;

  likeState: boolean = false;
  dislikeState: boolean = false;

  constructor(
    private commentService: APIService,
    private viewportScroller: ViewportScroller,
    private commentsService: CommentsService,
    private cd: ChangeDetectorRef // private auth: AuthService
  ) {}

  handleCancle() {
    console.log("handle from comp");
  }

  handleSubmit() {
    console.log("handle from comp");
  }

  scrollToElement(id: string): void {
    this.viewportScroller.scrollToAnchor(`${id}`);
  }

  ngOnInit(): void {
    this.updateLikeDislikeState();
  }

  nextReply(comments: Comment) {
    // let thread = localStorage.getItem("threadId");
    // if (comments.children.length >= 2 && thread) {
    //   this.commentsService
    //     .getRepliesByThreadByPage(thread, comments, this.currentPage + 1)
    //     .subscribe({
    //       next: (data: Page) => {
    //         this.comments.children.push(...data.comments[0].children);
    //         this.totalPage = data.totalPages;
    //         this.currentPage = data.currentPage;
    //         this.isLast = data.totalPages - 1 <= data.currentPage;
    //         console.log(
    //           `Current page: ${data.currentPage} Total page: ${
    //             data.totalPages - 1
    //           } Last: ${this.isLast}`
    //         );
    //         this.cd.detectChanges();
    //       },
    //       error: () => {},
    //     });
    // }
  }

  vote(comment: any, vote: Vote) {
    if (vote == Vote.LIKE) {
      if (!this.likeState) this.comments.likes += 1;
      else this.comments.likes -= 1;
      if (this.dislikeState) this.comments.dislikes -= 1;
      this.likeState = !this.likeState;
      this.dislikeState = false;
    }
    if (vote == Vote.DISLIKE) {
      if (!this.dislikeState) this.comments.dislikes += 1;
      else this.comments.dislikes -= 1;
      if (this.likeState) this.comments.likes -= 1;
      this.dislikeState = !this.dislikeState;
      this.likeState = false;
    }
    this.commentService
      .ListReactions({
        commentVoteId: {
          eq: comment.id,
        },
      })
      .then((evt) => {
        console.log(evt);
        if (evt.items.length == 0) {
          console.log("no vote");
          this.commentService
            .CreateReaction({
              vote: vote,
              commentVoteId: comment.id,
            })
            .then((evt) => {
              console.log("voted");
            });
        } else {
          console.log("voted aws");
          this.commentService
            .UpdateReaction({
              id: evt?.items[0]?.id ?? "",
              vote: vote,
              commentVoteId: comment.id,
            })
            .then((evt) => {
              console.log("vote updated");
            });
        }
      })
      .then(() => {
        console.log("update comment");
        console.log(
          "likes: " +
            this.comments.likes +
            " dislikes: " +
            this.comments.dislikes
        );
        // this.commentService.GetComment(comment.id).then((evt) => {
        this.commentService.UpdateComment({
          id: comment.id,
          likes: this.comments.likes,
          dislikes: this.comments.dislikes,
        });
        // });
      });
  }

  /**
   * Add new comment to the list of comments
   * @param data - data received from comment-form component
   */
  receiveData(data: any) {
    // this.receivedData = data;
    // console.log(this.comments.children.length);
    // this.comments.children.unshift(this.receivedData);
    // this.hasCancelButtonForReply = false;
    this.cd.detectChanges();
  }

  updateLikeDislikeState() {
    if (this.likeState) {
    } else if (this.dislikeState) {
    } else {
      //   if (this.comments.vote?.[0]?.vote == 0) {
      //     this.likeState = false;
      //     this.dislikeState = true;
      //   }
      //   if (this.comments.vote?.[0]?.vote == 1) {
      //     this.likeState = true;
      //     this.dislikeState = false;
      //   }
      // }

      this.comments.vote.items?.forEach((element: any) => {
        console.log(element);
        if (element.vote == 0) {
          console.log("dislike");
          this.likeState = false;
          this.dislikeState = true;
        }
        if (element.vote == 1) {
          console.log("like");

          this.likeState = true;
          this.dislikeState = false;
        }
      });
    }
  }
}
