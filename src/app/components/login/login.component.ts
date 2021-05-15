import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(2)]]
    });
  }
  
  get f() { return this.loginForm.controls; }

  // convenience getter for easy access to form fields
  get field() { return this.loginForm.controls; }

  onSubmit() {

      this.submitted = true;
      if (this.loginForm.invalid) {
        return;
    }
    this.router.navigateByUrl('/home');
   
  }
}
