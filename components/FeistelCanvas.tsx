
import React, { useEffect, useRef } from 'react';

const FeistelCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation constants
    const rounds = 8;
    const padding = 100;
    const nodeRadius = 6;
    const bluePrimary = '#3b82f6';
    const blueSecondary = '#1e40af';
    const slateDark = '#1e293b';

    const drawXOR = (x: number, y: number, size: number) => {
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.strokeStyle = bluePrimary;
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x - size, y);
      ctx.lineTo(x + size, y);
      ctx.moveTo(x, y - size);
      ctx.lineTo(x, y + size);
      ctx.stroke();
    };

    const drawFunctionBox = (x: number, y: number, w: number, h: number, label: string, opacity: number) => {
      ctx.fillStyle = `rgba(30, 41, 59, ${opacity})`;
      ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(x - w / 2, y - h / 2, w, h, 4);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.font = '10px Inter';
      ctx.textAlign = 'center';
      ctx.fillText(label, x, y + 4);
    };

    const render = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const width = Math.min(canvas.width * 0.8, 600);
      const height = canvas.height * 0.7;
      const startX = (canvas.width - width) / 2;
      const startY = (canvas.height - height) / 2 + 50;
      
      const mouseXRatio = mouseRef.current.x / canvas.width;
      const mouseYRatio = mouseRef.current.y / canvas.height;
      
      const activeRound = Math.floor(mouseXRatio * (rounds + 1));
      const drift = Math.sin(time * 0.001) * 10;

      // Draw Connection Lines and Nodes
      for (let i = 0; i <= rounds; i++) {
        const y = startY + (height / rounds) * i;
        const nextY = startY + (height / rounds) * (i + 1);
        const isActive = i <= activeRound;
        const opacity = isActive ? 0.8 : 0.2;

        const leftX = startX + width * 0.25;
        const rightX = startX + width * 0.75;

        // Draw data nodes
        ctx.fillStyle = isActive ? bluePrimary : slateDark;
        ctx.beginPath();
        ctx.arc(leftX, y, nodeRadius, 0, Math.PI * 2);
        ctx.arc(rightX, y, nodeRadius, 0, Math.PI * 2);
        ctx.fill();

        // Labels
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.font = 'bold 12px Inter';
        ctx.textAlign = 'right';
        ctx.fillText(`L${i}`, leftX - 15, y + 5);
        ctx.textAlign = 'left';
        ctx.fillText(`R${i}`, rightX + 15, y + 5);

        if (i < rounds) {
          // Feistel Structure logic visualization
          // L(i+1) = R(i)
          ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
          ctx.beginPath();
          ctx.moveTo(rightX, y);
          ctx.lineTo(leftX, nextY);
          ctx.stroke();

          // R(i+1) = L(i) XOR F(R(i), K(i))
          const fBoxY = y + (nextY - y) * 0.4;
          const xorY = y + (nextY - y) * 0.8;

          // Branch to F
          ctx.beginPath();
          ctx.moveTo(rightX, y);
          ctx.lineTo(rightX - 40, fBoxY);
          ctx.stroke();

          drawFunctionBox(rightX - 40, fBoxY, 40, 25, `F(R${i}, K${i})`, opacity);

          // F output to XOR
          ctx.beginPath();
          ctx.moveTo(rightX - 40, fBoxY + 12);
          ctx.lineTo(rightX, xorY);
          ctx.stroke();

          // L to XOR
          ctx.beginPath();
          ctx.moveTo(leftX, y);
          ctx.lineTo(rightX, xorY);
          ctx.stroke();

          // XOR to R(i+1)
          drawXOR(rightX, xorY, 8);
          ctx.beginPath();
          ctx.moveTo(rightX, xorY + 8);
          ctx.lineTo(rightX, nextY);
          ctx.stroke();
        }
      }

      // Title & Dynamic Tagline
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.font = 'bold 120px Inter';
      ctx.textAlign = 'center';
      ctx.fillText('FEISTEL', canvas.width / 2, canvas.height / 2 + 40);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full block" />;
};

export default FeistelCanvas;
