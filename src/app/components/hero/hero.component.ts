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

  readonly binaryDrops = Array.from({ length: 65 }, (_, index) => ({
    value: Array.from({ length: 8 + (index % 10) }, (__, digit) =>
      (index * 7 + digit * 3) % 2 ? '1' : '0'
    ).join(''),
    left: (index * 37 + 7) % 100,
    delay: -((index * 0.73) % 8),
    duration: 4.5 + ((index * 1.17) % 4),
    drift: ((index * 19) % 70) - 35,
    opacity: 0.2 + ((index % 5) * 0.055)
  }));

  downloadResume() {
    if (this.data.resumeUrl) {
      window.open(this.data.resumeUrl, '_blank');
    }
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
