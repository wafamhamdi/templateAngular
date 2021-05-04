import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should return model invalid when form is empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

 it('should validate email input as required', () => {
     const email = component.loginForm.controls.email
     expect(email.valid).toBeFalsy();
     expect(email.errors.required).toBeTruthy();
   });
 
  it('should validate password input as required', () => {
     const password = component.loginForm.controls.password;
 
     expect(password.valid).toBeFalsy();
     expect(password.errors.required).toBeTruthy();
   });
 
  it('should validate email format correctly', () => {
     const email = component.loginForm.controls.email;
     email.setValue('test@test.com');
     const errors = email.errors || {};
 
     expect(email.valid).toBeTruthy();
     expect(errors.required).toBeFalsy();
     expect(errors.pattern).toBeFalsy();
   });
 
   it('should render email validation message when formControl is submitted and invalid', () => {
     const elements: HTMLElement = fixture.nativeElement;
     expect(elements.querySelector('#email-error')).toBeFalsy();
 
     elements.querySelector('button').click();
 
     fixture.detectChanges();
     expect(elements.querySelector('#email-error')).toBeTruthy();
     expect(elements.querySelector('#email-error').textContent).toContain(
       'Please enter a valid email.'
     );
   });
 
  it('should render password validation message when formControl is submitted and invalid', () => {
     const elements: HTMLElement = fixture.nativeElement;
     expect(elements.querySelector('#password-error')).toBeFalsy();
     elements.querySelector('button').click();
     fixture.detectChanges();
     expect(elements.querySelector('#password-error')).toBeTruthy();
     expect(elements.querySelector('#password-error').textContent).toContain(
       'Please enter a valid password.'
     );
   });
});
