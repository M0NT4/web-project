import { Component } from '@angular/core';

import { AuthService } from '@app/shared/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  user:any;
  constructor(private authService: AuthService) {
    this.authService.getUser().subscribe(user=>this.user=user);
  }

}
