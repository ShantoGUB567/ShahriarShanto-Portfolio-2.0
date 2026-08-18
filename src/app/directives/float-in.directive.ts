import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFloatIn]',
  standalone: true
})
export class FloatInDirective implements AfterViewInit, OnDestroy {
  @Input() floatInDelay = 0;
  @Input() floatInDirection: 'up' | 'left' | 'right' | 'scale' = 'up';

  private observer?: IntersectionObserver;
  private cleanupTimer?: ReturnType<typeof setTimeout>;

  constructor(
    private element: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    const node = this.element.nativeElement;
    const reduceMotion = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || typeof IntersectionObserver === 'undefined') {
      return;
    }

    this.renderer.setStyle(node, 'opacity', '0');
    this.renderer.setStyle(node, 'transform', this.initialTransform());
    this.renderer.setStyle(node, 'transition', 'opacity .72s ease, transform .72s cubic-bezier(.2, .8, .2, 1)');
    this.renderer.setStyle(node, 'will-change', 'opacity, transform');

    this.observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;

      this.observer?.disconnect();
      this.cleanupTimer = setTimeout(() => {
        this.renderer.setStyle(node, 'opacity', '1');
        this.renderer.setStyle(node, 'transform', 'none');

        this.cleanupTimer = setTimeout(() => {
          this.renderer.removeStyle(node, 'opacity');
          this.renderer.removeStyle(node, 'transform');
          this.renderer.removeStyle(node, 'transition');
          this.renderer.removeStyle(node, 'will-change');
        }, 750);
      }, this.floatInDelay);
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.cleanupTimer) clearTimeout(this.cleanupTimer);
  }

  private initialTransform(): string {
    switch (this.floatInDirection) {
      case 'left': return 'translate(-38px, 14px)';
      case 'right': return 'translateX(30px)';
      case 'scale': return 'translateY(16px) scale(.94)';
      default: return 'translateY(32px)';
    }
  }
}
