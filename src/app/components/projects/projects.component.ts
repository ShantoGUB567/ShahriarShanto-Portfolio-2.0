import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA, Project } from '../../data/portfolio.config';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  @Input() projects = PORTFOLIO_DATA.projects;
  
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  
  selectedProject: Project | null = null;
  
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
}
