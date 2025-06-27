
import { useState } from 'react';
import SplashCursor from '../components/SplashCursor';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Fun from '../components/Fun';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ChatModal from '../components/ChatModal';

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatPrompt, setChatPrompt] = useState('');

  const handleChatOpen = (prompt: string) => {
    setChatPrompt(prompt);
    setIsChatOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SplashCursor />
      <Header />
      <main className="relative z-10">
        <Hero onChatOpen={handleChatOpen} />
        <About />
        <Projects />
        <Skills />
        <Fun />
        <Contact />
      </main>
      <Footer />
      <ChatModal 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
        prompt={chatPrompt}
      />
    </div>
  );
};

export default Index;
