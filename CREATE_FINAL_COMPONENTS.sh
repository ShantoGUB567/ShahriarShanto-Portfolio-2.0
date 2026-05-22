#!/bin/bash

# Tech Stack Component
cat > /home/claude/portfolio/src/app/components/tech-stack/tech-stack.component.ts << 'EOF'
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA } from '../../data/portfolio.config';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.css'
})
export class TechStackComponent {
  @Input() techStack = PORTFOLIO_DATA.techStack;
}
EOF

cat > /home/claude/portfolio/src/app/components/tech-stack/tech-stack.component.html << 'EOF'
<section id="skills" class="section tech-stack">
  <div class="container">
    <h2 class="section-title">Technical Arsenal</h2>
    <div class="stack-grid">
      <div *ngFor="let stack of techStack" class="stack-card">
        <div class="stack-icon">{{ stack.icon }}</div>
        <h3>{{ stack.category }}</h3>
        <div class="technologies">
          <span *ngFor="let tech of stack.technologies" class="tech-badge">{{ tech }}</span>
        </div>
      </div>
    </div>
  </div>
</section>
EOF

cat > /home/claude/portfolio/src/app/components/tech-stack/tech-stack.component.css << 'EOF'
.stack-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.stack-card {
  background: var(--bg-card);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  text-align: center;
  transition: transform 0.3s ease;
}

.stack-card:hover {
  transform: translateY(-5px);
  border-color: var(--primary-color);
}

.stack-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.stack-card h3 {
  margin-bottom: 1.5rem;
  color: var(--primary-color);
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.tech-badge {
  background: var(--bg-secondary);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 0.9rem;
  color: var(--text-secondary);
}
EOF

# Achievements Component
cat > /home/claude/portfolio/src/app/components/achievements/achievements.component.ts << 'EOF'
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA } from '../../data/portfolio.config';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css'
})
export class AchievementsComponent {
  @Input() achievements = PORTFOLIO_DATA.achievements;
}
EOF

cat > /home/claude/portfolio/src/app/components/achievements/achievements.component.html << 'EOF'
<section id="leadership" class="section achievements">
  <div class="container">
    <h2 class="section-title">Beyond the Code</h2>
    <div class="achievements-grid">
      <div *ngFor="let achievement of achievements" class="achievement-card">
        <div class="achievement-icon">{{ achievement.icon }}</div>
        <div class="achievement-content">
          <h3>{{ achievement.title }}</h3>
          <p class="organization">{{ achievement.organization }}</p>
          <p class="description">{{ achievement.description }}</p>
        </div>
      </div>
    </div>
  </div>
</section>
EOF

cat > /home/claude/portfolio/src/app/components/achievements/achievements.component.css << 'EOF'
.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.achievement-card {
  background: var(--bg-card);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  display: flex;
  gap: 1.5rem;
}

.achievement-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.achievement-content h3 {
  margin-bottom: 0.5rem;
}

.organization {
  color: var(--primary-color);
  margin-bottom: 0.8rem;
  font-weight: 600;
}

.description {
  color: var(--text-secondary);
  line-height: 1.6;
}
EOF

# Contact Component
cat > /home/claude/portfolio/src/app/components/contact/contact.component.ts << 'EOF'
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA } from '../../data/portfolio.config';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @Input() contact = PORTFOLIO_DATA.contact;
}
EOF

cat > /home/claude/portfolio/src/app/components/contact/contact.component.html << 'EOF'
<section id="contact" class="section contact">
  <div class="container">
    <h2 class="section-title">Let's Connect</h2>
    <p class="section-subtitle">Have a project in mind or just want to discuss the future of AI and Flutter? Feel free to reach out!</p>
    
    <div class="contact-content">
      <div class="contact-info-grid">
        <div class="contact-box">
          <div class="contact-icon">📧</div>
          <h4>Email</h4>
          <a [href]="'mailto:' + contact.email">{{ contact.email }}</a>
        </div>
        
        <div class="contact-box">
          <div class="contact-icon">📱</div>
          <h4>Phone</h4>
          <a [href]="'tel:' + contact.phone">{{ contact.phone }}</a>
        </div>
        
        <div class="contact-box">
          <div class="contact-icon">📍</div>
          <h4>Location</h4>
          <p>{{ contact.location }}</p>
        </div>
      </div>
      
      <button class="cta-button">START A PROJECT</button>
    </div>
  </div>
</section>
EOF

cat > /home/claude/portfolio/src/app/components/contact/contact.component.css << 'EOF'
.contact-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.contact-info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.contact-box {
  background: var(--bg-card);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
}

.contact-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.contact-box h4 {
  margin-bottom: 0.5rem;
  color: var(--primary-color);
}

.contact-box a {
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

.contact-box a:hover {
  color: var(--primary-color);
}

.cta-button {
  background: var(--primary-color);
  color: var(--bg-primary);
  padding: 1rem 3rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background: #2bc59d;
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(61, 217, 179, 0.3);
}
EOF

echo "Final components created!"
