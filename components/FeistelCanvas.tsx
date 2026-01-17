
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

    // Styling constants
    const rounds = 8;
    const nodeRadius = 5;
    const bluePrimary = '#3b82f6';
    const cyanAccent = '#22d3ee';
    const slateDark = '#1e293b';

    const drawXOR = (x: number, y: number, size: number, opacity: number, energy: number, time: number) => {
      // Create a pulsing effect that gets more intense with energy (mouse Y)
      const pulse = Math.sin(time * 0.008) * 3 * energy;
      const currentSize = size + pulse;

      ctx.save();
      
      // Active flash/glow effect
      if (opacity > 0.4) {
        ctx.shadowBlur = 15 * (energy + 0.5);
        ctx.shadowColor = cyanAccent;
        
        // Inner ring for emphasis
        ctx.beginPath();
        ctx.arc(x, y, currentSize - 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${opacity * 0.2 * (energy + 0.1)})`;
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(x, y, currentSize, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(34, 211, 238, ${opacity})`;
      ctx.lineWidth = 2 + energy * 2;
      ctx.stroke();
      
      // Cross lines
      ctx.beginPath();
      ctx.moveTo(x - currentSize + 3, y);
      ctx.lineTo(x + currentSize - 3, y);
      ctx.moveTo(x, y - currentSize + 3);
      ctx.lineTo(x, y + currentSize - 3);
      ctx.stroke();
      
      ctx.restore();
      
      // Label XOR with dynamic opacity
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity * (0.6 + energy * 0.4)})`;
      ctx.font = 'bold 9px "Inter"';
      ctx.textAlign = 'center';
      ctx.fillText('⊕ XOR', x, y - size - 10);
    };

    const drawFunctionBox = (x: number, y: number, w: number, h: number, label: string, opacity: number, energy: number, time: number) => {
      ctx.save();
      ctx.translate(x, y);
      
      // Box glow
      ctx.shadowBlur = 10 * energy;
      ctx.shadowColor = bluePrimary;
      
      ctx.fillStyle = `rgba(15, 23, 42, ${opacity * 0.95})`;
      ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
      ctx.lineWidth = 1.5;
      
      ctx.beginPath();
      ctx.roundRect(-w / 2, -h / 2, w, h, 6);
      ctx.fill();
      ctx.stroke();
      
      ctx.shadowBlur = 0;
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.font = 'bold 10px "Inter"';
      ctx.textAlign = 'center';
      ctx.fillText(label, 0, 4);
      
      ctx.restore();
    };

    const drawKey = (x: number, y: number, label: string, opacity: number, energy: number, time: number) => {
      const pulse = Math.sin(time * 0.005) * 2;
      const glowIntensity = (energy + 0.5) * (10 + pulse);
      
      ctx.save();
      ctx.translate(x, y);
      
      // Outer glow ring
      ctx.beginPath();
      ctx.arc(0, 0, 14 + pulse, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(34, 211, 238, ${opacity * 0.1 * (energy + 0.2)})`;
      ctx.fill();

      // Main key circle
      ctx.shadowBlur = glowIntensity;
      ctx.shadowColor = cyanAccent;
      ctx.fillStyle = `rgba(34, 211, 238, ${opacity * 0.8})`;
      ctx.beginPath();
      ctx.arc(0, 0, 10, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.shadowBlur = 0;
      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 9px "Inter"';
      ctx.textAlign = 'center';
      ctx.fillText(label, 0, 3.5);
      
      ctx.restore();
    };

    const render = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const width = Math.min(canvas.width * 0.8, 550);
      const height = canvas.height * 0.65;
      const startX = (canvas.width - width) / 2;
      const startY = (canvas.height - height) / 2 + 30;
      
      const mouseXRatio = mouseRef.current.x / canvas.width;
      const mouseYRatio = mouseRef.current.y / canvas.height;
      
      const activeRoundLimit = mouseXRatio * (rounds + 1);
      const mixingEnergy = mouseYRatio; // 0 to 1

      // 1. Input Section
      const topY = startY - 80;
      const blockWidth = 180;
      const blockHeight = 36;
      
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.4)';
      ctx.setLineDash([5, 5]);
      ctx.strokeRect(canvas.width / 2 - blockWidth / 2, topY, blockWidth, blockHeight);
      ctx.setLineDash([]);
      
      ctx.fillStyle = 'white';
      ctx.font = 'bold 13px "Inter"';
      ctx.textAlign = 'center';
      ctx.fillText('64-BIT PLAINTEXT', canvas.width / 2, topY + 22);

      const leftX = startX + width * 0.25;
      const rightX = startX + width * 0.75;

      // Flow lines
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.4)';
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2 - 40, topY + blockHeight);
      ctx.lineTo(leftX, startY);
      ctx.moveTo(canvas.width / 2 + 40, topY + blockHeight);
      ctx.lineTo(rightX, startY);
      ctx.stroke();

      // 2. Key Schedule Line
      const keyScheduleX = rightX + 120;
      ctx.strokeStyle = 'rgba(34, 211, 238, 0.15)';
      ctx.beginPath();
      ctx.moveTo(keyScheduleX, startY - 20);
      ctx.lineTo(keyScheduleX, startY + height + 20);
      ctx.stroke();

      // 3. Rounds
      for (let i = 0; i <= rounds; i++) {
        const y = startY + (height / rounds) * i;
        const nextY = startY + (height / rounds) * (i + 1);
        
        const distanceToActive = activeRoundLimit - i;
        const opacity = Math.max(0.05, Math.min(1.0, distanceToActive + 0.5));
        const isActive = distanceToActive > -0.5;

        // Data Nodes
        ctx.fillStyle = isActive ? bluePrimary : 'rgba(30, 41, 59, 0.5)';
        ctx.beginPath();
        ctx.arc(leftX, y, nodeRadius, 0, Math.PI * 2);
        ctx.arc(rightX, y, nodeRadius, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.font = 'bold 11px "Inter"';
        ctx.textAlign = 'right';
        ctx.fillText(`L${i}`, leftX - 15, y + 4);
        ctx.textAlign = 'left';
        ctx.fillText(`R${i}`, rightX + 15, y + 4);

        if (i < rounds) {
          const fBoxY = y + (nextY - y) * 0.4;
          const xorY = y + (nextY - y) * 0.75;
          const keyX = keyScheduleX;

          // Cross-swaps
          ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.4})`;
          ctx.beginPath();
          ctx.moveTo(rightX, y);
          ctx.lineTo(leftX, nextY);
          ctx.stroke();

          // Round Key
          drawKey(keyX, fBoxY, `K${i}`, opacity, mixingEnergy, time);
          
          // Connection Lines
          ctx.beginPath();
          ctx.moveTo(keyX - 10, fBoxY);
          ctx.lineTo(rightX - 30, fBoxY);
          ctx.moveTo(rightX, y);
          ctx.lineTo(rightX - 50, fBoxY);
          ctx.stroke();

          drawFunctionBox(rightX - 50, fBoxY, 46, 30, `F(R${i}, K${i})`, opacity, mixingEnergy, time);

          // Flow into XOR from L and F
          ctx.beginPath();
          ctx.moveTo(leftX, y);
          ctx.lineTo(rightX, xorY);
          ctx.moveTo(rightX - 50, fBoxY + 15);
          ctx.lineTo(rightX, xorY);
          ctx.stroke();

          // Animate flow particles specifically leading to XOR when round is active
          if (isActive && opacity > 0.5) {
            const flowT = (time * 0.003 + i * 0.2) % 1;
            
            // From Left Half path
            const plx = leftX + (rightX - leftX) * flowT;
            const ply = y + (xorY - y) * flowT;
            ctx.fillStyle = cyanAccent;
            ctx.beginPath();
            ctx.arc(plx, ply, 2, 0, Math.PI * 2);
            ctx.fill();

            // From F-Function path
            const pfx = (rightX - 50) + (rightX - (rightX - 50)) * flowT;
            const pfy = (fBoxY + 15) + (xorY - (fBoxY + 15)) * flowT;
            ctx.beginPath();
            ctx.arc(pfx, pfy, 2, 0, Math.PI * 2);
            ctx.fill();
          }

          drawXOR(rightX, xorY, 10, opacity, mixingEnergy, time);
          
          // XOR to R(i+1)
          ctx.beginPath();
          ctx.moveTo(rightX, xorY + 10);
          ctx.lineTo(rightX, nextY);
          ctx.stroke();
        }
      }

      // Output Section
      const bottomY = startY + height + 50;
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.4)';
      ctx.setLineDash([3, 3]);
      ctx.strokeRect(canvas.width / 2 - blockWidth / 2, bottomY, blockWidth, blockHeight);
      ctx.setLineDash([]);
      ctx.fillStyle = cyanAccent;
      ctx.fillText('64-BIT CIPHERTEXT', canvas.width / 2, bottomY + 22);

      // Watermark
      ctx.globalAlpha = 0.02;
      ctx.fillStyle = 'white';
      ctx.font = 'bold 140px "Inter"';
      ctx.textAlign = 'center';
      ctx.fillText('FEISTEL', canvas.width / 2, canvas.height / 2 + 50);
      ctx.globalAlpha = 1.0;

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full block" />
      {/* Interactive Legend */}
      <div className="absolute top-24 left-10 text-[10px] text-slate-500 font-mono space-y-2 bg-slate-900/40 p-3 rounded-lg border border-slate-800 backdrop-blur-sm hidden lg:block select-none pointer-events-none">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <span>DATA NODES (Li, Ri)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
          <span>ROUND KEYS (Ki)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 border border-blue-400"></div>
          <span>F-FUNCTION BOX</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full border border-cyan-400"></div>
          <span>XOR OPERATION (⊕)</span>
        </div>
        <div className="mt-4 pt-4 border-t border-slate-800 opacity-60">
          <p>MOUSE X: REVEAL ROUNDS</p>
          <p>MOUSE Y: KEY MIXING PULSE</p>
        </div>
      </div>
    </div>
  );
};

export default FeistelCanvas;
