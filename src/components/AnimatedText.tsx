
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
  variant?: 'reveal' | 'typewriter';
}

const AnimatedText = ({
  text,
  className,
  once = true,
  delay = 0,
  variant = 'reveal',
}: AnimatedTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const intersected = useRef(false);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (once ? !intersected.current : true)) {
            setTimeout(() => {
              setIsVisible(true);
              if (once) intersected.current = true;
            }, delay);
          } else if (!entry.isIntersecting && !once) {
            setIsVisible(false);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );
    
    observer.observe(container);
    
    return () => observer.disconnect();
  }, [delay, once]);
  
  if (variant === 'typewriter') {
    return (
      <div ref={containerRef} className={cn("overflow-hidden", className)}>
        <span 
          className={cn(
            "inline-block",
            isVisible && "animate-typing"
          )}
          style={{
            opacity: isVisible ? 1 : 0,
            maxWidth: isVisible ? '100%' : '0',
            transition: `opacity 0.1s ease-out, max-width ${text.length * 0.06}s cubic-bezier(0.22, 1, 0.36, 1) steps(${text.length})`,
            borderRight: isVisible ? '2px solid' : 'none',
            paddingRight: isVisible ? '4px' : '0',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            display: 'inline-block'
          }}
        >
          {text}
        </span>
      </div>
    );
  }
  
  return (
    <div ref={containerRef} className={cn("overflow-hidden", className)}>
      <div 
        className={cn(
          "relative overflow-hidden",
          isVisible && "after:translate-y-full"
        )}
        style={{
          transitionDelay: `${delay}ms`
        }}
      >
        <span 
          className={cn(
            "inline-block",
            isVisible ? "animate-text-reveal" : "opacity-0 translate-y-full"
          )}
          style={{
            animationDelay: `${delay}ms`,
            animationDuration: "0.8s",
            animationFillMode: "forwards",
            animationTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)"
          }}
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export default AnimatedText;
