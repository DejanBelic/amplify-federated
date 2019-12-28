import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f) {
    const { username } = f;
    const { password } = f;

    Auth.signIn(username, password)
      .then(user => {
        if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
          const { requiredAttributes } = user.challengeParam; // the array of required attributes, e.g ['email', 'phone_number']
          Auth.completeNewPassword(
            user,               // the Cognito User Object
            newPassword,       // the new password
            // OPTIONAL, the required attributes
            {
              email: 'xxxx@example.com',
              phone_number: '1234567890'
            }
          ).then(user => {
            // at this time the user is logged in if no MFA required
            console.log(user);
          }).catch(e => {
            console.log(e);
          });
        } else {
          console.log(user, 'user');
        }
      }).catch(e => {
      console.log(e);
    });
  }
}
