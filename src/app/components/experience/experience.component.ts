import { AfterViewInit, Component, ElementRef, HostListener, Input, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA } from '../../data/portfolio.config';
import { FloatInDirective } from '../../directives/float-in.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, FloatInDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements AfterViewInit, OnDestroy {
  @Input() experiences = PORTFOLIO_DATA.experience;

  @ViewChildren('stackTrigger') stackTriggers!: QueryList<ElementRef<HTMLElement>>;

  activeIndex = 0;
  private frameId?: number;

  ngAfterViewInit(): void {
    this.updateActiveCard();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (this.frameId !== undefined) return;

    this.frameId = requestAnimationFrame(() => {
      this.frameId = undefined;
      this.updateActiveCard();
    });
  }

  ngOnDestroy(): void {
    if (this.frameId !== undefined) cancelAnimationFrame(this.frameId);
  }

  private updateActiveCard(): void {
    const triggerLine = Math.min(190, window.innerHeight * .28);
    let nextIndex = 0;

    this.stackTriggers?.forEach((trigger, index) => {
      if (trigger.nativeElement.getBoundingClientRect().top <= triggerLine) nextIndex = index;
    });

    this.activeIndex = nextIndex;
  }
}
