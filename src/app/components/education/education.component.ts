import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA } from '../../data/portfolio.config';
import { FloatInDirective } from '../../directives/float-in.directive';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, FloatInDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  @Input() education = PORTFOLIO_DATA.education;
}
