import {Component, OnInit} from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {AppState} from '../store';
import {ProductActions} from '../product.actions';
import {AuthService} from "../auth/auth.service";
import {AdminService} from "../admin/admin.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loggedIn: boolean;

  constructor(private productActions: ProductActions, private ngRedux: NgRedux<AppState>, private authService: AuthService, private adminService: AdminService) {
  }

  ngOnInit() {
    this.ngRedux.select(state => state.products).subscribe(res => {
      this.loggedIn = res.isLoggedIn;
    });
  }

  onLogoutClick() {
    this.authService.logout();
    this.adminService.logout();
    this.productActions.setLoggedIn(false);
    this.productActions.setAdmin(false);
  }
}
