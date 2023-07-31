import { Component } from "@angular/core";
import { Amplify } from "aws-amplify";
import { AuthenticatorService } from "@aws-amplify/ui-angular";
import awsExports from "../../aws-exports";
@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"],
})
export class AuthComponent {
  formFields: any = [
    {
      type: "email",
      label: "Custom email Label",
      placeholder: "custom email placeholder",
      required: true,
    },
    {
      type: "password",
      label: "Custom Password Label",
      placeholder: "custom password placeholder",
      required: true,
    },
    {
      type: "phone_number",
      label: "Custom Phone Label",
      placeholder: "custom Phone placeholder",
      required: false,
    },
  ];

  constructor(public authenticator: AuthenticatorService) {
    Amplify.configure(awsExports);
  }
}
