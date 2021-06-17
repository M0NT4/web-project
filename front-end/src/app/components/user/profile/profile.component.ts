import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/shared/services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent  {

  user:any;
  constructor(private authService: AuthService) {
    this.authService.getUser().subscribe(user=>this.user=user);
  }


}
