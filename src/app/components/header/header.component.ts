import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;
  
  menuItems = [
    { label: 'Home', link: '#home' },
    { label: 'About', link: '#about' },
    { label: 'Experience', link: '#experience' },
    { label: 'Projects', link: '#projects' },
    { label: 'Skills', link: '#skills' },
    { label: 'Leadership', link: '#leadership' }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(event: Event, link: string) {
    event.preventDefault();
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.isMenuOpen = false;
    }
  }
}
