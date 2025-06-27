
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            © {currentYear} Alex Portfolio. Built with ❤️ and lots of ☕
          </div>
          
          <div className="flex space-x-6">
            {[
              { name: 'GitHub', emoji: '🐙' },
              { name: 'LinkedIn', emoji: '💼' },
              { name: 'Twitter', emoji: '🐦' },
              { name: 'Email', emoji: '📧' }
            ].map((social) => (
              <a
                key={social.name}
                href="#"
                className="text-white/60 hover:text-white transition-colors duration-200 transform hover:scale-110"
                aria-label={social.name}
              >
                <span className="text-xl">{social.emoji}</span>
              </a>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-6 pt-6 border-t border-white/10">
          <p className="text-white/40 text-xs">
            #AIPortfolio #InnovationInTech #WebDevelopment #ReactDeveloper #FullStack
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
