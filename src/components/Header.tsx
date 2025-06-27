
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/20 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">
            Portfolio
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Projects', 'Skills', 'Fun', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {item}
              </button>
            ))}
          </div>
          
          <div className="md:hidden">
            <button className="text-white p-2">
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className="block w-full h-0.5 bg-white mb-1"></span>
                <span className="block w-full h-0.5 bg-white mb-1"></span>
                <span className="block w-full h-0.5 bg-white"></span>
              </div>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
