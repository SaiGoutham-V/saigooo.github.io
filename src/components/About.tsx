
const About = () => {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-white/80 leading-relaxed">
                I'm a passionate developer who believes in the power of technology to solve real problems. 
                With over 5 years of experience in full-stack development, I specialize in creating 
                scalable web applications that users love.
              </p>
              
              <p className="text-lg text-white/80 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
                or sharing knowledge with the developer community through blogs and talks.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                {['React', 'TypeScript', 'Node.js', 'Python', 'AWS'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <div className="text-8xl animate-float">
                  💻
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
