import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA } from '../../data/portfolio.config';
import { FloatInDirective } from '../../directives/float-in.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FloatInDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  @Input() data = PORTFOLIO_DATA.personalInfo;

  get bioParagraphs(): string[] {
    return this.data.bio.split(/\n\s*\n/).map(paragraph => paragraph.trim()).filter(Boolean);
  }
}
