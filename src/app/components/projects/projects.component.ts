import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA } from '../../data/portfolio.config';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  @Input() projects = PORTFOLIO_DATA.projects;
}
