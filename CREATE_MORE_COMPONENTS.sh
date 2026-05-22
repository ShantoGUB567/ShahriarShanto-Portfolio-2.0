#!/bin/bash

# Projects Component
cat > /home/claude/portfolio/src/app/components/projects/projects.component.ts << 'EOF'
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
EOF

cat > /home/claude/portfolio/src/app/components/projects/projects.component.html << 'EOF'
<section id="projects" class="section projects">
  <div class="container">
    <h2 class="section-title">Featured Projects</h2>
    <p class="section-subtitle">Turning complex ideas into functional realities</p>
    
    <div class="projects-grid">
      <div *ngFor="let project of projects" class="project-card">
        <div class="project-image">
          <img [src]="project.image" [alt]="project.title">
          <div class="project-overlay">
            <a *ngIf="project.link" [href]="project.link" target="_blank" class="project-link">
              View Project →
            </a>
          </div>
        </div>
        <div class="project-content">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div *ngIf="project.technologies" class="tech-tags">
            <span *ngFor="let tech of project.technologies" class="tag">{{ tech }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
EOF

cat > /home/claude/portfolio/src/app/components/projects/projects.component.css << 'EOF'
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--bg-card);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.project-image {
  position: relative;
  height: 200px;
  background: var(--bg-secondary);
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-link {
  background: var(--primary-color);
  color: var(--bg-primary);
  padding: 0.7rem 1.5rem;
  border-radius: 5px;
  font-weight: 600;
}

.project-content {
  padding: 1.5rem;
}

.project-content h3 {
  margin-bottom: 0.8rem;
  font-size: 1.3rem;
}

.project-content p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: rgba(61, 217, 179, 0.1);
  color: var(--primary-color);
  padding: 0.3rem 0.8rem;
  border-radius: 5px;
  font-size: 0.85rem;
}
EOF

# Education Component
cat > /home/claude/portfolio/src/app/components/education/education.component.ts << 'EOF'
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA } from '../../data/portfolio.config';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  @Input() education = PORTFOLIO_DATA.education;
}
EOF

cat > /home/claude/portfolio/src/app/components/education/education.component.html << 'EOF'
<section id="education" class="section education">
  <div class="container">
    <h2 class="section-title">Academic Foundation</h2>
    <div class="education-grid">
      <div *ngFor="let edu of education" class="edu-card">
        <div class="edu-header">
          <h3>{{ edu.degree }}</h3>
          <span class="period">{{ edu.period }}</span>
        </div>
        <p class="institution">{{ edu.institution }}</p>
        <p *ngIf="edu.gpa" class="gpa">{{ edu.gpa }}</p>
      </div>
    </div>
  </div>
</section>
EOF

cat > /home/claude/portfolio/src/app/components/education/education.component.css << 'EOF'
.education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.edu-card {
  background: var(--bg-card);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
}

.edu-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 1rem;
}

.edu-header h3 {
  font-size: 1.2rem;
}

.period {
  background: rgba(61, 217, 179, 0.1);
  color: var(--primary-color);
  padding: 0.3rem 0.8rem;
  border-radius: 5px;
  font-size: 0.85rem;
  white-space: nowrap;
}

.institution {
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
}

.gpa {
  color: var(--primary-color);
  font-weight: 600;
}
EOF

echo "More components created!"
