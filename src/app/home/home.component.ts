import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router) {}
  onCategorySelected(categoryId: number): void {
    // Navigate to the products component with the category as a query parameter
    this.router.navigate(['/products'], {
      queryParams: { category: categoryId },
    });
  }
}
