import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string; // Add color property
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const particleCount = 50; // 50 for more atoms
    const initialParticles: Particle[] = [];
    
    // Realistic atom colors (hydrogen, oxygen, carbon, nitrogen, etc.)
    const atomColors = [
      '#FF6B6B', // Red (oxygen-like)
      '#4ECDC4', // Cyan (nitrogen-like)
      '#45B7D1', // Blue (hydrogen-like)
      '#96CEB4', // Green (carbon-like)
      '#FFEAA7', // Yellow (sulfur-like)
      '#DDA0DD', // Purple (phosphorus-like)
      '#F4A460', // Brown (iron-like)
      '#87CEEB', // Sky blue (helium-like)
      '#FFB6C1', // Light pink (lithium-like)
      '#98D8C8', // Mint (beryllium-like)
      '#F7DC6F', // Gold (gold-like)
      '#85C1E2', // Light blue (copper-like)
    ];
    
    for (let i = 0; i < particleCount; i++) {
      initialParticles.push({
        id: i,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 2, // Slightly smaller range: 2-7px for better performance with more particles
        speedX: (Math.random() - 0.5) * 0.4, // Slightly faster for more dynamic movement
        speedY: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.3 + 0.4, // Higher opacity: 0.4-0.7 for better visibility
        color: atomColors[Math.floor(Math.random() * atomColors.length)]
      });
    }
    
    setParticles(initialParticles);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Update particle position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }

        // Calculate distance from mouse
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Mouse interaction - particles are attracted to cursor
        if (distance < 250) { // Increased interaction radius: 250px for more dramatic effect
          const force = (250 - distance) / 250;
          particle.x += (dx / distance) * force * 2.5; // Slightly reduced force for performance
          particle.y += (dy / distance) * force * 2.5;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color; // Use individual particle color
        ctx.fill();
        
        // Add glow effect
        ctx.shadowBlur = 8; // Slightly reduced for performance with more particles
        ctx.shadowColor = particle.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw connections between nearby particles
        particles.forEach((otherParticle) => {
          if (particle.id === otherParticle.id) return;
          
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) { // Increased connection distance: 150px instead of 100px
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            
            // Create gradient for connection lines
            const gradient = ctx.createLinearGradient(
              particle.x, particle.y, 
              otherParticle.x, otherParticle.y
            );
            gradient.addColorStop(0, particle.color + '40'); // Add transparency
            gradient.addColorStop(1, otherParticle.color + '40');
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1; // Thicker connection lines
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particles, mousePosition]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/10" />
    </div>
  );
}
