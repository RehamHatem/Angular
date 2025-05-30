import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Trade Mate',
      image: 'assets/images/trademate.png',
      description: 'Inventory Management App built with Clean Architecture, Repository Pattern, and Cubit.',
      details: [
        'Add and manage products with stock levels and categories.',
        'Register suppliers and customers with full contact details.',
        'Create purchase (in) and sales (out) bills easily.',
        'Track payments, discounts, and taxes in bills.',
        'View product and bill history with detailed reports.'
      ],
      link: 'https://github.com/RehamHatem/trade_mate'
    },
    {
      title: 'BookMe',
      image: 'assets/images/bookme.png',
      description: 'Book shop web application with Firebase, Payment Integration, and Cloudinary.',
      details: [
        'User login (email/Google) using Firebase Authentication.',
        'Product catalog with pagination to reduce Firestore reads.',
        'Cart system with localStorage and Firestore sync.',
        'Test payments using PayPal (no real transactions).',
        'Admin panel for managing products (add/edit/delete).',
        'Secured data access with Firestore rules.'
      ],
      link: 'https://book-me-a6d98.web.app'
    },
    {
      title: 'Movies App',
      image: 'assets/images/movies.jpg',
      description: 'Mobile application using TMDB API with MVVM and Clean Architecture.',
      details: [
        'Fetch popular, upcoming, and top-rated movies.',
        'Display movie details and allow type-based filtering.',
        'Search movies by name and manage watchlists.',
        'Uses Cubit for state management.'
      ],
      link: 'https://github.com/RehamHatem/Movies'
    },
    {
      title: 'GEINIE',
      image: 'assets/images/genie.png',
      description: 'Gallery app with AI image captioning via Flask and Sentence Transformers.',
      details: [
        'Image upload/capture with AI-generated captions.',
        'Semantic search and secure user authentication.',
        'MVVM architecture with Provider for state management.',
        'Integrated with Firebase for storage.'
      ],
      link: 'https://github.com/RehamHatem/GENIE'
    },
    {
      title: 'E-commerce App',
      image: 'assets/images/ecom.png',
      description: 'Shopping mobile application with RESTful APIs and state management.',
      details: [
        'Features categories, brands, products, and cart.',
        'User login, registration, and profile management.',
        'Wishlist functionality and clean architecture.'
      ],
      link: 'https://github.com/RehamHatem/E_Commerce'
    },
    {
      title: 'Education Platform UI',
      image: 'assets/images/ui.png',
      description: 'Responsive UI for an education platform using HTML, CSS, and Bootstrap.',
      details: [
        'Designed a responsive page view for educational content.',
        'Utilized Bootstrap for consistent styling.'
      ],
      link: 'https://rehamhatem.github.io/bootstrab/'
    },
    {
      title: 'AI Models',
      image: 'assets/images/ai.jpg',
      description: 'Machine learning projects showcasing various AI techniques.',
      details: [
        'Text classification model using CNN (Sentiment140 dataset).',
        'Fruit recognition model (Fruit360 dataset).',
        'Text generation using RNN (trained on Wikipedia articles).',
        'Mobile price classification with PSO and LDA (Decision Tree).'
      ],
      link: '#'
    }
  ];
}