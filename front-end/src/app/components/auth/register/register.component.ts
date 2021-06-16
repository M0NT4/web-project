import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';

import { AuthService } from '@app/shared/services';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  selected='Create New Team';
  userForm:any;
  constructor(private router: Router, private authService: AuthService) {}

  passwordsMatchValidator(control: FormControl): ValidationErrors | null {
    const password = control.root.get('password');
    return password && control.value !== password.value
      ? {
          passwordMatch: true,
        }
      : null;
  }
  ngOnInit():void{
    this.userForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      repeatPassword: new FormControl('', [Validators.required, this.passwordsMatchValidator]),
      fullname:new FormControl('', [Validators.required]),
      country:new FormControl('', [Validators.required]),
      teamname:new FormControl('', [Validators.required]),
      teampass:new FormControl('', [Validators.required]),
      teamoption:new FormControl('', [Validators.required]),
    });

  }

  get username(): AbstractControl {
    return this.userForm.get('username')!;
  }

  get email(): AbstractControl {
    return this.userForm.get('email')!;
  }

  get password(): AbstractControl {
    return this.userForm.get('password')!;
  }

  get repeatPassword(): AbstractControl {
    return this.userForm.get('repeatPassword')!;
  }
  get teamname(): AbstractControl {
    return this.userForm.get('teamname')!;
  }
  get teampass(): AbstractControl {
    return this.userForm.get('teampass')!;
  }
  get fullname(): AbstractControl {
    return this.userForm.get('fullname')!;
  }
  get country(): AbstractControl {
    return this.userForm.get('country')!;
  }
  get teamoption(): AbstractControl {
    return this.userForm.get('teamoption')!;
  }
  register(): void {
    console.log("register");
    if (this.userForm.invalid) {
      return;
    }

    const { username,email, password, repeatPassword,fullname,teamname,teampass,country,teamoption } = this.userForm.getRawValue();

    this.authService.register( username,email, password, repeatPassword,fullname,teamname,teampass,country,teamoption).subscribe(data => {
      this.router.navigate(['/']);
    });
  }
}
