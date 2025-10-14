import React, { useState, useEffect } from 'react';

// Simule les données que vous utilisez
const portfolioData = {
  name: "Mon Portfolio",
};

// Simule les références de section pour le défilement
const sectionRefs = {
  home: React.createRef<HTMLDivElement>(),
  projects: React.createRef<HTMLDivElement>(),
  skills: React.createRef<HTMLDivElement>(),
  about: React.createRef<HTMLDivElement>(),
  contact: React.createRef<HTMLDivElement>(),
  cv: React.createRef<HTMLDivElement>(),
};

// Le composant Header responsive
const ResponsiveHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Fonction pour fermer le menu lorsque la taille de la fenêtre change
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Bloque le défilement du corps lorsque le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);


 

  const scrollToSection = (section: keyof typeof sectionRefs) => {
  const targetRef = sectionRefs[section];
  if (targetRef.current) {
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  setActiveSection(section);
  setIsMenuOpen(false);
};


  const navLinks = ['home', 'projects', 'skills', 'about', 'contact', 'cv'];

  const renderNavLinks = (isMobile = false) => navLinks.map((section) => (
    <button
      key={section}
      onClick={() => scrollToSection(section as keyof typeof sectionRefs)}
      className={`capitalize transition-colors duration-300 ${isMobile ? 'text-3xl py-4' : 'text-lg'} ${
        activeSection === section
          ? 'text-cyan-400'
          : 'text-gray-300 hover:text-cyan-400'
      }`}
    >
      {section === 'home' ? 'Accueil' : section === 'projects' ? 'Projets' : section === 'skills' ? 'Compétences' : section === 'about' ? 'À propos' : section === 'contact' ? 'Contact' : 'CV'}
    </button>
  ));

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm fixed top-0 w-full z-30 transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-cyan-400">
          {portfolioData.name}
        </h1>

        {/* Navigation pour les grands écrans */}
        <nav className="hidden md:flex space-x-6">
          {renderNavLinks()}
        </nav>

        {/* Bouton Hamburger pour les petits écrans */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-cyan-400 focus:outline-none z-50 relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile en plein écran */}
      <div className={`fixed inset-0 bg-gray-900 z-40 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          {renderNavLinks(true)}
        </nav>
      </div>
    </header>
  );
};

export default ResponsiveHeader;