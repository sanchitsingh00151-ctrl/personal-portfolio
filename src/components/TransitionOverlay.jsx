import React, { useEffect, useRef } from 'react';
import './TransitionOverlay.css';

/**
 * Minato Flying Thunder God (Hiraishin) Transition Overlay
 * Preserves the exact canvas seal animation and Kunai visual
 */
export default function TransitionOverlay({ isActive }) {
  const canvasRef = useRef(null);
  const animFrameIdRef = useRef(null);

  useEffect(() => {
    if (!isActive || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);
    const centerX = width / 2;
    const centerY = height / 2;
    const baseRadius = Math.min(width, height) * 0.09;

    const outerGlyphs = ['飛', '雷', '神', '術', '式', '封', '印', '瞬', '身', '時', '空', '結', '界'];
    const innerGlyphs = ['忍', '愛', '之', '劍', '飛', '雷', '神', '封', '印', '式'];

    let startTime = 0;

    function drawSealText(radius, glyphs, rotation, progress) {
      const count = glyphs.length;
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotation + progress * 0.35);
      ctx.fillStyle = `rgba(255, 229, 196, ${0.32 + progress * 0.6})`;
      ctx.font = `${Math.max(18, radius * 0.065)}px serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (let i = 0; i < count; i += 1) {
        const angle = (Math.PI * 2 * i) / count;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle + Math.PI / 2);
        ctx.fillText(glyphs[i], 0, 0);
        ctx.restore();
      }
      ctx.restore();
    }

    function frame(now) {
      if (!startTime) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / 1050, 1);

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(5, 2, 1, 0.65)';
      ctx.fillRect(0, 0, width, height);

      // Concentric Expanding Rings
      for (let index = 0; index < 3; index += 1) {
        const ringProgress = Math.max(0, progress - index * 0.12) / (1 - index * 0.12);
        const clamped = Math.min(ringProgress, 1);
        if (clamped <= 0) continue;

        const radius = baseRadius + clamped * (baseRadius * (3 + index * 1.2));
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 214, 161, ${0.65 - index * 0.12})`;
        ctx.lineWidth = 1.5 + index * 0.7;
        ctx.stroke();
      }

      // Radiating Rays
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.strokeStyle = `rgba(255, 224, 188, ${progress * 0.7})`;
      ctx.lineWidth = 1.4;

      for (let i = 0; i < 16; i += 1) {
        const angle = (Math.PI * 2 * i) / 16 + progress * 0.35;
        const start = baseRadius * 0.9;
        const end = baseRadius * (1.8 + progress * 2.7);

        ctx.beginPath();
        ctx.moveTo(Math.cos(angle) * start, Math.sin(angle) * start);
        ctx.lineTo(Math.cos(angle) * end, Math.sin(angle) * end);
        ctx.stroke();
      }
      ctx.restore();

      // Rotating Japanese Kanji Seal Texts
      drawSealText(baseRadius * (1.8 + progress * 1.8), outerGlyphs, 0.15, progress);
      drawSealText(baseRadius * (1.12 + progress * 1.08), innerGlyphs, -0.35, progress);

      if (progress < 1) {
        animFrameIdRef.current = requestAnimationFrame(frame);
      }
    }

    animFrameIdRef.current = requestAnimationFrame(frame);

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [isActive]);

  return (
    <div className={`transition-overlay ${isActive ? 'is-active' : ''}`} aria-hidden="true">
      <canvas ref={canvasRef} className="transition-canvas" />
      <div className="transition-core">
        <img
          className="kunai"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Kunai_yondaime.svg/3840px-Kunai_yondaime.svg.png"
          alt="Minato Namikaze Flying Thunder God Kunai"
        />
        <div className="seal-ring seal-ring-one"></div>
        <div className="seal-ring seal-ring-two"></div>
        <div className="seal-ring seal-ring-three"></div>
        <div className="seal-text-ring seal-text-ring-one">飛 雷 神 術 式 封 印 瞬 身 時 空 結 界</div>
        <div className="seal-text-ring seal-text-ring-two">忍 愛 之 劍 飛 雷 神 封 印 式</div>
        <div className="seal-mark seal-mark-one"></div>
        <div className="seal-mark seal-mark-two"></div>
        <div className="seal-mark seal-mark-three"></div>
      </div>
    </div>
  );
}
