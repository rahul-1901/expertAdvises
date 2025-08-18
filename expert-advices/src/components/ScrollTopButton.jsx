import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react'; // Or use any icon you like

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 cursor-pointer right-6 z-50 p-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 shadow-lg transition"
      >
        <ArrowUp size={20} />
      </button>
    )
  );
};

export default ScrollTopButton;
