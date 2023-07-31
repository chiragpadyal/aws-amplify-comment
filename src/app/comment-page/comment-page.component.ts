import { DOCUMENT } from "@angular/common";
import {
  ChangeDetectorRef,
  Component,
  HostListener,
  Inject,
} from "@angular/core";
// import { AuthService } from "@auth0/auth0-angular";
import { filter, map, take } from "rxjs";
import { CommentsService } from "../comments.service";
import { Page } from "../models/Page.model";
import { User } from "../models/User.model";
import { Comment } from "../models/Comments.model";
import { APIService } from "../API.service";
import { AuthenticatorService } from "@aws-amplify/ui-angular";
import { Auth } from "aws-amplify";
import { Hub } from "aws-amplify";
@Component({
  selector: "app-comment-page",
  templateUrl: "./comment-page.component.html",
  styleUrls: ["./comment-page.component.css"],
})
export class CommentPageComponent {
  // TODO: Remove user header
  // TODO: Add stoper when not authenticated
  comments: any = [];
  title = "RapidComment";
  threadId = "1";
  pageNo: number = 0;
  totalPage: number = 1;
  currentPage: number = 0;
  receivedData: Comment = new Comment();
  isLoadingNewComments: boolean = false;
  formFields: any = {
    signUp: {
      name: {
        label: "Username",
        placeholder: "Enter your username",
        required: true,
      },
    },
  };

  constructor(
    @Inject(DOCUMENT) public document: Document,
    // public auth: AuthService,
    private commentsService: APIService,
    private cd: ChangeDetectorRef,
    public authenticator: AuthenticatorService
  ) {}

  // services = {

  //   async handleSignUp(formData: Record<string, any>) {
  //     let { username, password, attributes } = formData;
  //     // custom username
  //     username = username.toLowerCase();
  //     attributes.email = attributes.email.toLowerCase();

  //     // custom attributes
  //     new APIService().CreateComment

  //     return Auth.signUp({
  //       username,
  //       password,
  //       attributes,
  //       autoSignIn: {
  //         enabled: true,
  //       },
  //     });
  //   },
  // };

  printUser() {
    console.log(this.authenticator.user);
  }
  ngOnInit(): void {
    // Get all comments where parent is null

    this.commentsService
      .ListComments({ parentId: { attributeExists: false } })
      .then((evt) => {
        this.comments = evt.items;
        console.log(evt.items);
        this.cd.detectChanges();
      });

    this.commentsService.OnCreateCommentListener().subscribe((evt) => {
      console.log("listen");
      const data = (evt as any).value.data.onCreateComment;
      console.log(data);
      if (data.parentId == null) {
        this.comments = [data, ...this.comments];
      } else {
        // silent reload angular
        // window.location.reload();

        // @ts-ignore
        this.comments.forEach((comment: any) => {
          if (comment.id === data.parentId) {
            if (!comment.children.items) {
              comment.children.items = [];
            }
            comment.children.items = [data, ...comment.children.items];
            return true;
          }
        });
      }

      // this.cd.detectChanges();
    });
  }

  nextPage() {}

  /**
   * Add new comment to the top of the list
   * @param data - data received from comment-form component
   */
  receiveData(data: Comment) {
    this.receivedData = data;
    this.comments.unshift(data);
    this.cd.detectChanges();
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      !this.isLoadingNewComments
    ) {
      // Load Your Data Here
      this.nextPage();
    }
  }
}
