
const Fun = () => {
  const funFacts = [
    {
      emoji: "🎸",
      title: "Music Producer",
      description: "I create electronic music in my spare time and have released tracks on Spotify!"
    },
    {
      emoji: "🏔️",
      title: "Mountain Climber",
      description: "Conquered 12 peaks above 14,000 feet. Coding and climbing both require problem-solving!"
    },
    {
      emoji: "🍕",
      title: "Pizza Perfectionist",
      description: "I make sourdough pizza from scratch. The fermentation process is like debugging - it takes patience!"
    },
    {
      emoji: "📚",
      title: "Sci-Fi Enthusiast",
      description: "Currently reading through Isaac Asimov's Foundation series. The future is now!"
    }
  ];

  return (
    <section id="fun" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Fun Facts About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {funFacts.map((fact, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-200 mt-1">
                    {fact.emoji}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {fact.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {fact.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-white/60 italic">
              "Life is too short to be serious all the time. Let's build amazing things and have fun doing it!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fun;
