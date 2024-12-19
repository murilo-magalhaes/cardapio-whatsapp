'use client';

import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';

const ScrollToTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  const checkScrollTop = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, []);

  return (
    <>
      {showButton && (
        <Button
          icon={PrimeIcons.ARROW_UP}
          className="btn btn-yellow btn-sm w-3rem h-3rem"
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '50px',
            left: '30px',
            zIndex: 1000,
          }}
        />
      )}
    </>
  );
};

export default ScrollToTopButton;
