import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
// import { AuthService } from "@auth0/auth0-angular";
import { map, take } from "rxjs";
import { CommentsService } from "../../comments.service";
import { Comment } from "../../models/Comments.model";
import { Reply } from "../../models/Reply.model";
import { User } from "../../models/User.model";
import "quill-emoji/dist/quill-emoji.js";
import {
  APIService,
  CreateCommentInput,
  CreateThreadInput,
} from "src/app/API.service";
import { AuthenticatorService } from "@aws-amplify/ui-angular";

// import { emojis } from "@nutrify/ngx-emoji-mart-picker/ngx-emoji/esm5/data/emojis";

@Component({
  selector: "app-comment-form",
  templateUrl: "./comment-form.component.html",
  styleUrls: ["./comment-form.component.css"],
})
export class CommentFormComponent {
  @Input()
  commentMessage: string = "";

  @Input()
  comment: any = [];

  @Input()
  hasCancelButton: boolean = true;

  @Input()
  hasCancelButtonForReply: boolean = true;

  @Output() dataEvent = new EventEmitter<Comment>();
  @Output() dataEventToComment = new EventEmitter<Comment>();

  //emoji
  modules = {
    "emoji-shortname": true,
    "emoji-toolbar": true,
    toolbar: {
      container: [
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        ["emoji"],
      ],
    },
  };

  commentVal: Comment = new Comment();
  commentSend: any = [];
  userSub: any;
  replyVal: Reply = {
    message: "",
    user: 0,
    thread: "",
    parentComments: {
      id: "",
    },
  };

  @Input()
  buttonVal: string = "Submit";
  constructor(
    private commentService: APIService,
    // private auth: AuthService,
    private cd: ChangeDetectorRef,
    public authenticator: AuthenticatorService
  ) {}

  handleCancle() {
    console.log("handle from form comp");
  }

  // handleSubmit() {
  //   console.log("handle from form comp");
  // }
  submitting: boolean = false;
  handleSubmit() {
    let comment: CreateCommentInput = {
      threadPostsId: "1",
      content: this.commentMessage,
      likes: 0,
      dislikes: 0,
      quality: 0,
      // @ts-ignore
      username: this.authenticator.user.attributes["name"] ?? "Anonymous",
    };
    this.commentService.CreateComment(comment).then((evt) => {
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  handleReply() {
    let comment: CreateCommentInput = {
      threadPostsId: "1",
      content: this.commentMessage,
      parentId: this.comment.id,
      likes: 0,
      dislikes: 0,
      quality: 0,
      // @ts-ignore
      username: this.authenticator.user.attributes["name"] ?? "Anonymous",
    };
    this.commentService.CreateComment(comment).then((evt) => {
      console.log(evt);
      this.cd.detectChanges();
    });
    this.hasCancelButtonForReply = false;
  }

  sendData() {
    this.dataEvent.emit(this.commentSend);
  }

  sendDataToComment() {
    this.dataEventToComment.emit(this.commentSend);
  }

  handleCancel() {
    this.hasCancelButton = false;
  }
}
