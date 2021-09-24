import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {TokenService} from "../services/token.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserDto} from "../dto-models/user-dto.model";
import {Router} from "@angular/router";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loaded?: boolean
  loginForm = new FormGroup({
    usernName: new FormControl("", [
      Validators.required
    ]),
    password: new FormControl("", [
      Validators.required
    ]),
    rememberMe: new FormControl(""),
    errorMsq: new FormControl(""),
  });

  constructor(private authService: AuthService, private tokenService: TokenService, private router: Router, private app: AppComponent) {
  }

  ngOnInit(): void {
    const userRemember = this.tokenService.getRemember();

    this.loginForm = new FormGroup({
      userName: new FormControl("", [
        Validators.required
      ]),
      password: new FormControl("", [
        Validators.required
      ]),
      rememberMe: new FormControl(""),
      errorMsq: new FormControl(""),
    });
  }

  onSubmit(): void {
    this.authService.login(this.loginForm?.value)
      .subscribe(response => {
          this.tokenService.setToken(response.token);

          let user = new UserDto({
            rememberMe: this.loginForm?.get("rememberMe")?.value,
            userName: response.userName
          });

          this.tokenService.setUser(user);
          this.app.check();
          this.router.navigate(['/home'])
        },
        error => {
          this.loginForm?.get("errorMsq")?.setValue(error.error?.message)
        })
      .add(() => {
        this.loaded = true;
      });
  }

}
