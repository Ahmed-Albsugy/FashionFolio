import { Component, OnInit, EventEmitter, Output } from '@angular/core';

interface Category {
  id: number;
  name: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  @Output() categorySelected = new EventEmitter<number>();
  categories: Category[] = [
    {
      id: 1,
      name: "Men's Fashion",
      image: 'assets/images/mens-fashion.png',
      description: "Discover the latest trends in men's clothing",
    },
    {
      id: 2,
      name: "Women's Fashion",
      image: 'assets/images/womens-fashion.jpg',
      description: "Explore our collection of women's wear",
    },
    {
      id: 3,
      name: 'Accessories',
      image: 'assets/images/accessories.jpg',
      description: 'Complete your look with our accessories',
    },
    {
      id: 4,
      name: 'Footwear',
      image: 'assets/images/footwear.jpg',
      description: 'Step out in style with our footwear collection',
    },
    {
      id: 5,
      name: 'Electronics',
      image: 'assets/images/electronics.jpg',
      description: 'Browse our latest electronic gadgets',
    },
    {
      id: 6,
      name: 'Home & Living',
      image: 'assets/images/home-living.jpg',
      description: 'Transform your space with our home collection',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onCategoryClick(categoryId: number): void {
    // Handle navigation or other actions when a category is clicked
    this.categorySelected.emit(categoryId);
    console.log(`Category clicked: ${categoryId}`);
  }
}
