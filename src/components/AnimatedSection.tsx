import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-in-up' | 'fade-in' | 'scale-in' | 'slide-in-right';
}

export const AnimatedSection = ({
  children,
  className,
  delay = 0,
  animation = 'fade-in-up',
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const animationClass = {
    'fade-in-up': 'animate-fade-in-up',
    'fade-in': 'animate-fade-in',
    'scale-in': 'animate-scale-in',
    'slide-in-right': 'animate-slide-in-right',
  }[animation];

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0',
        isVisible && animationClass,
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
