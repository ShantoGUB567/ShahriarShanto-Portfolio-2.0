import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA, Skill } from '../../data/portfolio.config';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.css'
})
export class TechStackComponent {
  @Input() skills: Skill[] = PORTFOLIO_DATA.skills;
  
  activeFilter = 'all';
  
  categories = [
    { id: 'all', label: 'All Stack' },
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Frontend & Web' },
    { id: 'mobile', label: 'Mobile Dev' },
    { id: 'backend', label: 'Backend & BaaS' },
    { id: 'databases', label: 'Databases' },
    { id: 'tools', label: 'DevOps & Tools' }
  ];

  setFilter(category: string) {
    this.activeFilter = category;
  }

  getFilteredSkills(): Skill[] {
    if (this.activeFilter === 'all') {
      return this.skills;
    }
    return this.skills.filter(skill => skill.category === this.activeFilter);
  }

  getDeviconClass(iconType: string): string {
    const mappings: { [key: string]: string } = {
      'c': 'devicon-c-plain colored',
      'cpp': 'devicon-cplusplus-plain colored',
      'java': 'devicon-java-plain colored',
      'python': 'devicon-python-plain colored',
      'dart': 'devicon-dart-plain colored',
      'flutter': 'devicon-flutter-plain colored',
      'go': 'devicon-go-plain colored',
      'angular': 'devicon-angular-plain colored',
      'html': 'devicon-html5-plain colored',
      'css': 'devicon-css3-plain colored',
      'javascript': 'devicon-javascript-plain colored',
      'git': 'devicon-git-plain colored',
      'github': 'devicon-github-original',
      'gitlab': 'devicon-gitlab-plain colored',
      'firebase': 'devicon-firebase-plain colored',
      'supabase': 'devicon-supabase-plain colored',
      'mysql': 'devicon-mysql-plain colored',
      'sqlite': 'devicon-sqlite-plain colored',
      'bash': 'devicon-bash-plain colored',
      'postman': 'devicon-postman-plain colored',
      'vscode': 'devicon-vscode-plain colored',
      'androidstudio': 'devicon-androidstudio-plain colored',
      'xcode': 'devicon-xcode-plain colored'
    };
    return mappings[iconType] || `devicon-${iconType}-plain colored`;
  }
}
