import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA } from '../../data/portfolio.config';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  @Input() data = PORTFOLIO_DATA.personalInfo;
  @Input() socials = PORTFOLIO_DATA.socials;
  @Input() contact = PORTFOLIO_DATA.contact;

  downloadResume() {
    if (this.data.resumeUrl) {
      window.open(this.data.resumeUrl, '_blank');
    }
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
