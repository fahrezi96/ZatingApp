import { Component } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  model: any = {};

  constructor(public accountService: AccountService) {}

  login() {
    this.accountService.login(this.model).subscribe({
      next: () => {},
      error: (error) => console.log(error),
    });
  }

  logout() {
    this.accountService.logout();
  }
}
