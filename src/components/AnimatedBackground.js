import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

// RPG horizontal aurora animation
const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
`;

const GradientOverlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(90deg, #1a1208 0%, #3e2a13 40%, #ffd700 100%);
  opacity: 0.24;
  background-size: 300% 100%;
  animation: ${gradientMove} 24s linear infinite;
  z-index: 0;
`;

const Canvas = styled.canvas`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 1;
`;

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 2;
        this.speedX = Math.random() * 1.8 + 0.7; // horizontal movement
        this.speedY = Math.random() * 0.3 - 0.15;
        this.opacity = Math.random() * 0.4 + 0.2;
        // gold horizontal glow
        this.color = `rgba(255, 215, 80, ${this.opacity})`;
        this.glow = Math.random() > 0.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.ellipse(this.x, this.y, this.size * 2.5, this.size, 0, 0, Math.PI * 2);
        ctx.shadowColor = this.glow ? 'rgba(255, 215, 80, 0.8)' : 'rgba(110,75,35,0.17)';
        ctx.shadowBlur = this.glow ? 22 : 8;
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
      }
    }

    const init = () => {
      resizeCanvas();
      particles = [];
      for (let i = 0; i < 36; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      // Draw horizontal gold lines
      particles.forEach((particle, index) => {
        for (let j = index + 1; j < particles.length; j++) {
          const dy = Math.abs(particle.y - particles[j].y);
          const dx = Math.abs(particle.x - particles[j].x);
          if (dy < 20 && dx < 220) {
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 215, 80, ${0.07 * (1 - dx/220)})`;
            ctx.lineWidth = 2;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.shadowColor = 'rgba(255, 215, 80, 0.19)';
            ctx.shadowBlur = 5;
            ctx.stroke();
            ctx.restore();
          }
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();
    window.addEventListener('resize', init);
    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <BackgroundContainer>
      <GradientOverlay />
      <Canvas ref={canvasRef} />
    </BackgroundContainer>
  );
};

export default AnimatedBackground;
