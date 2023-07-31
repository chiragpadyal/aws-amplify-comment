import { DOCUMENT } from "@angular/common";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  Inject,
  OnInit,
} from "@angular/core";
import { AuthenticatorService } from "@aws-amplify/ui-angular";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
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
    public authenticator: AuthenticatorService
  ) {}
}
