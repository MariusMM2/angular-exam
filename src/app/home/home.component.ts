import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store';
import { AppActions } from '../app.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loggedIn: boolean;

  constructor(private productActions: AppActions, private ngRedux: NgRedux<AppState>) { }

  ngOnInit() {
    this.ngRedux.select(state => state).subscribe(res => {
      this.loggedIn = res.isLoggedIn;   
    })
  }

  onLogoutClick() {
    this.productActions.setLoggedIn(false);
    this.productActions.setAdmin(false);
  }

}
