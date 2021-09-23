import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {TokenService} from "../services/token.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
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

  constructor(private authService: AuthService, private tokenService: TokenService) {
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
            console.log(response.data);
        },
        error => {
          this.loginForm?.get("errorMsq")?.setValue(error?.message)
        })
      .add(() => {
        this.loaded = true;
      });
  }

}
