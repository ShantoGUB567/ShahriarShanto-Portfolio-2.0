import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA, Project } from '../../data/portfolio.config';
import { FloatInDirective } from '../../directives/float-in.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FloatInDirective],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css', './projects.redesign.css']
})
export class ProjectsComponent {
  @Input() projects = PORTFOLIO_DATA.projects;
  
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  
  selectedProject: Project | null = null;
  currentProjectIndex = 0;
  private scrollFrame?: number;
  
  // Drag to scroll properties
  isDraggingActive = false;
  startX = 0;
  startY = 0;
  scrollLeft = 0;
  hasMoved = false;

  onDragStart(e: MouseEvent) {
    // Only drag with left click
    if (e.button !== 0) return;
    this.isDraggingActive = true;
    this.startX = e.clientX;
    this.startY = e.clientY;
    this.scrollLeft = this.scrollContainer.nativeElement.scrollLeft;
    this.hasMoved = false;
    
    this.scrollContainer.nativeElement.style.cursor = 'grabbing';
    this.scrollContainer.nativeElement.style.scrollSnapType = 'none';
    this.scrollContainer.nativeElement.classList.add('dragging');
  }

  onDragMove(e: MouseEvent) {
    if (!this.isDraggingActive) return;
    const dx = e.clientX - this.startX;
    const dy = e.clientY - this.startY;
    
    // If the movement is more than 8px, we treat it as a drag/scroll action
    if (Math.abs(dx) > 8 || Math.abs(dy) > 8) {
      this.hasMoved = true;
    }
    
    e.preventDefault();
    this.scrollContainer.nativeElement.scrollLeft = this.scrollLeft - dx;
  }

  onDragEnd(e: MouseEvent) {
    if (!this.isDraggingActive) return;
    this.isDraggingActive = false;
    this.scrollContainer.nativeElement.style.cursor = 'grab';
    this.scrollContainer.nativeElement.style.scrollSnapType = 'x mandatory';
    this.scrollContainer.nativeElement.classList.remove('dragging');
    
    // Reset hasMoved with a tiny delay to let the click event fire first
    setTimeout(() => {
      this.hasMoved = false;
    }, 50);
  }

  openProject(project: Project, e: Event) {
    // If it was a drag action, do not open details
    if (this.hasMoved) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeProject() {
    this.selectedProject = null;
    document.body.style.overflow = '';
  }

  scrollProjects(direction: -1 | 1) {
    const container = this.scrollContainer.nativeElement as HTMLElement;
    this.currentProjectIndex = (this.currentProjectIndex + direction + this.projects.length) % this.projects.length;
    const cards = Array.from(container.querySelectorAll<HTMLElement>('.project-card'));
    const target = cards[this.currentProjectIndex];
    if (target) container.scrollTo({ left: target.offsetLeft - container.offsetLeft, behavior: 'smooth' });
  }

  onProjectScroll() {
    if (this.scrollFrame !== undefined) return;

    this.scrollFrame = requestAnimationFrame(() => {
      this.scrollFrame = undefined;
      const container = this.scrollContainer.nativeElement as HTMLElement;
      const cards = Array.from(container.querySelectorAll<HTMLElement>('.project-card'));
      const containerLeft = container.getBoundingClientRect().left;
      let nearestDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card, index) => {
        const distance = Math.abs(card.getBoundingClientRect().left - containerLeft);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          this.currentProjectIndex = index;
        }
      });
    });
  }

  getProjectPlatforms(project: Project): string[] {
    if (!project.links) return ['Case study'];

    const platforms: string[] = [];
    if (project.links.playStore || project.links.openTesting) platforms.push('Android');
    if (project.links.appStore || project.links.testFlight || project.links.testFlightCustomer || project.links.testFlightDriver || project.links.testFlightClient || project.links.testFlightConductor) platforms.push('iOS');
    if (project.links.live) platforms.push('Web');
    if (project.links.github) platforms.push('Source');
    return platforms.slice(0, 3);
  }

  getProjectType(project: Project): string {
    const technologies = project.technologies ?? [];
    if (technologies.some(tech => /AI|Gemini|ML/i.test(tech))) return 'AI-powered product';
    if (technologies.some(tech => /Angular|HTML|CSS|JavaScript/i.test(tech))) return 'Web platform';
    if (technologies.some(tech => /Flutter|Dart/i.test(tech))) return 'Mobile application';
    return 'Digital product';
  }

  getProjectLinkCount(project: Project): number {
    return project.links ? Object.values(project.links).filter(Boolean).length : 0;
  }
}
