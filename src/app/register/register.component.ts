import { Component, OnInit } from '@angular/core';
import {Auth} from 'aws-amplify';
import {CognitoHostedUIIdentityProvider} from '@aws-amplify/auth/lib-esm/types';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  codeField = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  facebook() {
    Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Facebook });
  }

  register(f) {
    const { username } = f;
    const { password } = f;
    Auth.signUp({ username, password})
      .then(data => {
        if (data) {
          this.codeField = true;
        }
      })
      .catch(err => console.log(err));
  }

  confirm(f) {
    const { username } = f;
    const { code } = f;
    Auth.confirmSignUp(username, code, {
      forceAliasCreation: true
    }).then(data => {
        this.router.navigateByUrl('login')
    })
      .catch(err => console.log(err));
  }
}
