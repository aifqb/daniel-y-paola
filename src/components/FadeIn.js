// src/components/FadeIn.js
import React, { useState, useEffect } from 'react';

const FadeIn = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return <div style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s ease-in-out', WebkitTransition: 'opacity 0.5s ease-in-out', MozTransition: 'opacity 0.5s ease-in-out' }}>{children}</div>;
};

export default FadeIn;