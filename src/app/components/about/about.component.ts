import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA } from '../../data/portfolio.config';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  @Input() data = PORTFOLIO_DATA.personalInfo;
}
