
import { Card } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "A comprehensive dashboard that uses machine learning to provide insights from complex datasets.",
      tech: ["React", "Python", "TensorFlow", "AWS"],
      image: "🚀",
      status: "Featured"
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management and payment processing.",
      tech: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
      image: "🛒",
      status: "Live"
    },
    {
      title: "Real-time Chat Application",
      description: "Scalable chat application with end-to-end encryption and file sharing capabilities.",
      tech: ["Socket.io", "Node.js", "MongoDB", "React"],
      image: "💬",
      status: "Open Source"
    }
  ];

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:bg-white/10 cursor-pointer"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-200">
                      {project.image}
                    </div>
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30">
                      {project.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/70 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
