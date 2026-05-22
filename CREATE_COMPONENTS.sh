#!/bin/bash

# About Component
cat > /home/claude/portfolio/src/app/components/about/about.component.ts << 'EOF'
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
EOF

cat > /home/claude/portfolio/src/app/components/about/about.component.html << 'EOF'
<section id="about" class="section about">
  <div class="container">
    <h2 class="section-title">About Me</h2>
    <div class="about-content">
      <p>{{ data.bio }}</p>
    </div>
  </div>
</section>
EOF

cat > /home/claude/portfolio/src/app/components/about/about.component.css << 'EOF'
.about-content {
  max-width: 900px;
  margin: 0 auto;
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.8;
  white-space: pre-line;
}
EOF

# Experience Component
cat > /home/claude/portfolio/src/app/components/experience/experience.component.ts << 'EOF'
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA } from '../../data/portfolio.config';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  @Input() experiences = PORTFOLIO_DATA.experience;
}
EOF

cat > /home/claude/portfolio/src/app/components/experience/experience.component.html << 'EOF'
<section id="experience" class="section experience">
  <div class="container">
    <h2 class="section-title">Professional Journey</h2>
    <div class="timeline">
      <div *ngFor="let exp of experiences" class="timeline-item">
        <div class="timeline-dot" [class.current]="exp.current"></div>
        <div class="timeline-content">
          <div class="period">{{ exp.period }}</div>
          <h3 class="title">{{ exp.title }}</h3>
          <div class="company">{{ exp.company }}</div>
          <p class="description">{{ exp.description }}</p>
        </div>
      </div>
    </div>
  </div>
</section>
EOF

cat > /home/claude/portfolio/src/app/components/experience/experience.component.css << 'EOF'
.timeline {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--border-color);
}

.timeline-item {
  position: relative;
  padding-left: 3rem;
  margin-bottom: 3rem;
}

.timeline-dot {
  position: absolute;
  left: -6px;
  top: 0;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--bg-card);
  border: 2px solid var(--primary-color);
}

.timeline-dot.current {
  background: var(--primary-color);
  box-shadow: 0 0 15px rgba(61, 217, 179, 0.5);
}

.timeline-content {
  background: var(--bg-card);
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid var(--border-color);
}

.period {
  color: var(--primary-color);
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.title {
  font-size: 1.3rem;
  margin-bottom: 0.3rem;
}

.company {
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.description {
  color: var(--text-secondary);
  line-height: 1.6;
}
EOF

echo "Components created successfully!"
