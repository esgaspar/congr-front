import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { first, map } from 'rxjs/operators';

import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'cong-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService,
    private authService: AuthenticationService
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = '/';

    this.authService.currentUser.subscribe(user => {
      if (this.authService.currentUserValue) {
        this.router.navigate(['/dashboard']);
      } else {
        this.alertService.error("Usuario ou senha invalidos", true);
        this.router.navigate(['/']);
      }
      this.loading = false;
    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  async onSubmit() {
    this.submitted = true;
    this.loading = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.alertService.error("Usuario ou senha inconsistentes");
      this.loading = false;
      return;
    }

    await this.authService.login(this.f.username.value, this.f.password.value);
  }
}