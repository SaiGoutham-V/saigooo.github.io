
'use client';
import { useEffect, useRef } from 'react';

function SplashCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let mouseX = 0;
    let mouseY = 0;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
      color: string;
    }> = [];

    const colors = [
      'rgba(147, 51, 234, 0.6)', // purple
      'rgba(59, 130, 246, 0.6)', // blue
      'rgba(16, 185, 129, 0.6)', // emerald
      'rgba(236, 72, 153, 0.6)', // pink
    ];

    function createParticle(x: number, y: number) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 3 + 1;
      const life = Math.random() * 60 + 30;
      
      return {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life,
        maxLife: life,
        size: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)]
      };
    }

    function updateParticles() {
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.98; // friction
        particle.vy *= 0.98;
        particle.life--;
        
        if (particle.life <= 0) {
          particles.splice(i, 1);
        }
      }
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        const alpha = particle.life / particle.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * alpha, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
    }

    function animate() {
      updateParticles();
      drawParticles();
      requestAnimationFrame(animate);
    }

    function handleMouseMove(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      const newMouseX = e.clientX - rect.left;
      const newMouseY = e.clientY - rect.top;
      
      // Create particles when mouse moves
      if (Math.abs(newMouseX - mouseX) > 2 || Math.abs(newMouseY - mouseY) > 2) {
        for (let i = 0; i < 3; i++) {
          particles.push(createParticle(newMouseX, newMouseY));
        }
      }
      
      mouseX = newMouseX;
      mouseY = newMouseY;
    }

    function handleClick(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Create splash effect on click
      for (let i = 0; i < 15; i++) {
        particles.push(createParticle(x, y));
      }
    }

    function resizeCanvas() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    window.addEventListener('resize', resizeCanvas);
    
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1,
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100vw',
          height: '100vh',
          display: 'block',
        }}
      />
    </div>
  );
}

export default SplashCursor;
