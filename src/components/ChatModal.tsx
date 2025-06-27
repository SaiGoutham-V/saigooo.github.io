
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  prompt: string;
}

const ChatModal = ({ isOpen, onClose, prompt }: ChatModalProps) => {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');

  // Generate initial AI response based on prompt type
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      let initialMessage = '';
      
      switch (prompt) {
        case 'recruiter':
          initialMessage = "Hi there! 👋 I see you're interested in my technical background. I'm a full-stack developer with 5+ years of experience specializing in React, TypeScript, and Node.js. I've built scalable applications serving 100k+ users and have experience with cloud architecture on AWS. What specific aspects of my background would you like to know more about?";
          break;
        case 'developer':
          initialMessage = "Hey fellow dev! 🚀 Great to meet another person in the code trenches. I'm passionate about clean architecture, performance optimization, and developer experience. I believe in writing code that's not just functional but maintainable and enjoyable to work with. I'm always exploring new tech - currently diving deep into AI/ML integration. What's your favorite tech stack or what challenging problem are you working on?";
          break;
        case 'friend':
          initialMessage = "Hey! 😊 So nice of you to check out what I've been up to! Lately I've been really excited about this AI-powered analytics project that uses machine learning to help businesses understand their data better. It's been a fun challenge combining my love for problem-solving with cutting-edge tech. I've also been learning to make sourdough pizza - turns out debugging code and perfecting fermentation have more in common than you'd think! What brings you here today?";
          break;
        default:
          initialMessage = "Hello! 👋 I'm Alex's AI assistant. I can tell you about Alex's work, skills, and projects. What would you like to know?";
      }
      
      setMessages([{ role: 'assistant', content: initialMessage }]);
    }
  }, [isOpen, prompt, messages.length]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    
    const userMessage = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);
    
    // Simulate AI response - in a real app, this would call an API
    setTimeout(() => {
      const responses = [
        "That's a great question! Based on my experience with similar projects, I'd recommend focusing on scalability from the start. Have you considered using a microservices architecture?",
        "Interesting! I've actually worked on something similar. The key challenge we faced was optimizing database queries for real-time updates. We ended up using Redis for caching and saw a 60% performance improvement.",
        "I love your curiosity! That's exactly the kind of problem-solving mindset that excites me. In my recent project, we tackled this by implementing a custom webhook system that handled async processing.",
        "Thanks for asking! I'm always happy to dive deeper into the technical details. One approach that worked well for us was using TypeScript's advanced types to catch errors at compile time.",
        "That's exactly what I was hoping you'd ask about! The project I'm most proud of involved building a real-time collaboration feature similar to Google Docs, but for data visualization."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { role: 'assistant', content: randomResponse }]);
      setIsLoading(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] bg-black/90 border border-white/20 text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">
            Chat with Alex 🤖
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col h-[60vh]">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-4 p-4 bg-white/5 rounded-lg mb-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.role === 'user'
                      ? 'bg-purple-500 text-white ml-4'
                      : 'bg-white/10 text-white mr-4 border border-white/20'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/10 text-white mr-4 border border-white/20 p-3 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Input */}
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-purple-400 focus:outline-none"
              disabled={isLoading}
            />
            <Button
              onClick={handleSendMessage}
              disabled={isLoading || !inputValue.trim()}
              className="bg-purple-500 hover:bg-purple-600 text-white px-6"
            >
              Send
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatModal;
