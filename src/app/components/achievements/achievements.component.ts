import { Component, Input, ElementRef, ViewChild } from '@angular/core';
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

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  
  isDraggingActive = false;
  startX = 0;
  startY = 0;
  scrollLeft = 0;

  onDragStart(e: MouseEvent) {
    if (e.button !== 0) return;
    this.isDraggingActive = true;
    this.startX = e.clientX;
    this.startY = e.clientY;
    this.scrollLeft = this.scrollContainer.nativeElement.scrollLeft;
    
    this.scrollContainer.nativeElement.style.cursor = 'grabbing';
    this.scrollContainer.nativeElement.style.scrollSnapType = 'none';
    this.scrollContainer.nativeElement.classList.add('dragging');
  }

  onDragMove(e: MouseEvent) {
    if (!this.isDraggingActive) return;
    e.preventDefault();
    const dx = e.clientX - this.startX;
    this.scrollContainer.nativeElement.scrollLeft = this.scrollLeft - dx;
  }

  onDragEnd(e: MouseEvent) {
    if (!this.isDraggingActive) return;
    this.isDraggingActive = false;
    this.scrollContainer.nativeElement.style.cursor = 'grab';
    this.scrollContainer.nativeElement.style.scrollSnapType = 'x mandatory';
    this.scrollContainer.nativeElement.classList.remove('dragging');
  }
}
