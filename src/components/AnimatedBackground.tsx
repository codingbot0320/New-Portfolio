import { useEffect, useState } from 'react';
import { Code, Zap, Sparkles, Star, Circle } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
  icon: JSX.Element;
  delay: number;
  duration: number;
}

const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  const icons = [
    <Code className="w-4 h-4 text-primary/40" />,
    <Zap className="w-4 h-4 text-purple/40" />,
    <Sparkles className="w-3 h-3 text-primary/30" />,
    <Star className="w-3 h-3 text-purple/30" />,
    <Circle className="w-2 h-2 text-primary/50" />,
  ];

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 12; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: 100,
          icon: icons[Math.floor(Math.random() * icons.length)],
          delay: Math.random() * 10,
          duration: 15 + Math.random() * 10,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
    const interval = setInterval(generateParticles, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute particle opacity-30"
          style={{
            left: `${particle.x}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        >
          {particle.icon}
        </div>
      ))}
    </div>
  );
};

export default AnimatedBackground;