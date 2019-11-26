import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first, map } from 'rxjs/operators';

import { AlertService } from '../../services/alert.service';
import { ContactService } from '../../services/contact.service';



@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService,
    private alertService: AlertService
  ) {
    // redirect to home if already logged in
    if (this.contactService.currentUserValue) {
      this.router.navigate([this.route.snapshot.queryParams['returnUrl'] || '/dashboard']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  async onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    } else {
      console.log("deu pau....");
      this.alertService.error("form invalido  :(");
      this.loading = false;
    }

    this.loading = true;
    console.log("contactService");
    (await this.contactService.login(this.f.username.value, this.f.password.value))

    if (this.contactService.currentUser) {
      this.router.navigate(['dashboard']);
      this.loading = false;

    } else {
      console.log("deu pau....");
      this.alertService.error("Houve algum erro  :(");
      this.loading = false;
    }

  }
}
