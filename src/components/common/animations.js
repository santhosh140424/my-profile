import { useState, useEffect, useRef } from "react";
import './animations.css';

function useInView(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

function FadeIn({ children, delay = 0 }) {
  const ref = useRef();
  const visible = useInView(ref);
  return (
    <div ref={ref} className={`fade-in ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

export { FadeIn, useInView };