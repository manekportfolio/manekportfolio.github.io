
import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  once?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const ScrollReveal = ({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  once = true,
  onMouseEnter,
  onMouseLeave,
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const intersected = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let revealClass = 'reveal-down';
    if (direction === 'up') revealClass = 'reveal-down';
    if (direction === 'left') revealClass = 'reveal-left';
    if (direction === 'right') revealClass = 'reveal-right';

    element.style.transitionDelay = `${delay}ms`;
    element.classList.add(revealClass);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (once ? !intersected.current : true)) {
            setTimeout(() => {
              element.classList.add('reveal-visible');
              if (once) intersected.current = true;
            }, 100);
          } else if (!entry.isIntersecting && !once) {
            element.classList.remove('reveal-visible');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay, direction, once]);

  return (
    <div 
      ref={ref} 
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
