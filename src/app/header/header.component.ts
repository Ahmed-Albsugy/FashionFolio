import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    CommonModule,
  ],
})
export class HeaderComponent implements OnInit {
  isAuthenticated$: boolean = false;
  firstName$: Observable<string>;
  user$: Observable<User> | undefined;

  isHandset$!: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {
    this.isAuthenticated$ = this.authService.isAuthenticated$;
    this.firstName$ = this.authService.user$.pipe(
      map((user) => user?.firstName || 'Profile')
    );
  }

  ngOnInit() {
    this.authService.user$.subscribe((user) => {
      this.isAuthenticated$ = !!user;
      this.user$ = user;
    });
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map((result) => result.matches),
      shareReplay()
    );
  }

  goHome() {
    this.router.navigate(['/']);
  }

  goContact() {
    this.router.navigate(['/contact']);
  }
  goSignUp() {
    this.router.navigate(['/sign-up']);
  }
  goLogin() {
    this.router.navigate(['/log-in']);
  }
  goCart() {
    this.router.navigate(['/cart']);
  }
  goProducts() {
    this.router.navigate(['/our-product']);
  }
  goFavorites() {
    this.router.navigate(['/dashboard']);
  }
  onLogout() {
    this.authService.logout();
  }
}
