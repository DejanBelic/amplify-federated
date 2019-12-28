import {Component} from '@angular/core';
import {Auth} from 'aws-amplify';
import {CognitoHostedUIIdentityProvider} from '@aws-amplify/auth/lib-esm/types';
import { AmplifyService } from 'aws-amplify-angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'amp-aws-task';
  codeField = false;
  constructor(private router: Router) {
  }

  // facebook() {
  //   Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Facebook });
  // }
  //
  // register(f) {
  //   const { username } = f;
  //   const { password } = f;
  //   Auth.signUp({ username, password})
  //     .then(data => {
  //       if (data) {
  //         this.codeField = true;
  //       }
  //     })
  //     .catch(err => console.log(err));
  // }
  //
  // confirm(f) {
  //   const { username } = f;
  //   const { code } = f;
  //   Auth.confirmSignUp(username, code, {
  //     forceAliasCreation: true
  //   }).then(data => {
  //
  //   })
  //     .catch(err => console.log(err));
  // }

}
