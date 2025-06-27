
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"],
      icon: "🎨"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"],
      icon: "⚙️"
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
      icon: "☁️"
    },
    {
      title: "AI & ML",
      skills: ["TensorFlow", "PyTorch", "OpenAI API", "Hugging Face", "Langchain"],
      icon: "🤖"
    }
  ];

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill}
                      className="group/skill bg-white/5 hover:bg-white/10 rounded-lg p-3 border border-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer"
                    >
                      <div className="text-white/80 group-hover/skill:text-white text-sm font-medium text-center">
                        {skill}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
