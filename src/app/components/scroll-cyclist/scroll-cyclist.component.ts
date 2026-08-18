import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scroll-cyclist',
  standalone: true,
  templateUrl: './scroll-cyclist.component.html',
  styleUrl: './scroll-cyclist.component.css'
})
export class ScrollCyclistComponent implements AfterViewInit, OnDestroy {
  @ViewChild('bicycle', { static: true }) bicycle!: ElementRef<HTMLElement>;
  @ViewChild('rearWheel', { static: true }) rearWheel!: ElementRef<SVGGElement>;
  @ViewChild('frontWheel', { static: true }) frontWheel!: ElementRef<SVGGElement>;
  @ViewChild('crank', { static: true }) crank!: ElementRef<SVGGElement>;

  private frameId = 0;
  private lastScrollY = 0;
  private wheelAngle = 0;
  private pendingDelta = 0;

  constructor(private zone: NgZone) {}

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      this.lastScrollY = window.scrollY;
      this.render();
      window.addEventListener('scroll', this.onScroll, { passive: true });
      window.addEventListener('resize', this.onResize, { passive: true });
    });
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onResize);
    cancelAnimationFrame(this.frameId);
  }

  private onScroll = (): void => {
    this.pendingDelta += window.scrollY - this.lastScrollY;
    this.lastScrollY = window.scrollY;
    this.scheduleRender();
  };

  private onResize = (): void => this.scheduleRender();

  private scheduleRender(): void {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(() => {
        this.frameId = 0;
        this.render();
      });
    }
  }

  private render(): void {
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
    const trackTop = 90;
    const trackBottom = Math.max(trackTop, window.innerHeight - 105);
    const y = trackBottom - progress * (trackBottom - trackTop);

    this.wheelAngle += this.pendingDelta * 1.15;
    this.pendingDelta = 0;

    this.bicycle.nativeElement.style.transform = `translate3d(0, ${y}px, 0)`;
    const rotation = `rotate(${this.wheelAngle}deg)`;
    this.rearWheel.nativeElement.style.transform = rotation;
    this.frontWheel.nativeElement.style.transform = rotation;
    this.crank.nativeElement.style.transform = rotation;
  }
}
