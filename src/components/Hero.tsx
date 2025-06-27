
import { Button } from '@/components/ui/button';

interface HeroProps {
  onChatOpen: (prompt: string) => void;
}

const Hero = ({ onChatOpen }: HeroProps) => {
  const conversationPrompts = [
    {
      text: "Tech recruiter? Ask about my stack & results",
      prompt: "recruiter",
      icon: "💼"
    },
    {
      text: "Dev? Dive into my code & mindset",
      prompt: "developer",
      icon: "👨‍💻"
    },
    {
      text: "Friend or family? See what I've been working on",
      prompt: "friend",
      icon: "👋"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative z-10 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* AI Avatar */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-blue-600 flex items-center justify-center text-6xl animate-pulse">
            🤖
          </div>
        </div>
        
        {/* Greeting */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Hey, I'm Alex 👋
        </h1>
        
        {/* Intro */}
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          I'm a full-stack developer passionate about creating beautiful, 
          functional experiences that bridge the gap between design and technology.
        </p>
        
        {/* Conversational Prompts */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {conversationPrompts.map((prompt, index) => (
            <Button
              key={index}
              onClick={() => onChatOpen(prompt.prompt)}
              className="group p-6 h-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105"
              variant="ghost"
            >
              <div className="text-center">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {prompt.icon}
                </div>
                <p className="text-white font-medium text-sm leading-relaxed">
                  {prompt.text}
                </p>
              </div>
            </Button>
          ))}
        </div>
        
        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
