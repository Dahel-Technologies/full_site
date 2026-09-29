"use client";

import React, { useEffect, useRef, useState } from 'react';

export default function KingfisherHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasesRef = useRef<HTMLCanvasElement[]>([]);
  const [revealed, setRevealed] = useState(false);
  const REVEAL_AT = 4.3;

  useEffect(() => {
    const video = videoRef.current;
    const hero = heroRef.current;
    if (!video || !hero) return;

    const reveal = () => {
      if (hero.classList.contains('is-revealed')) return;
      hero.classList.add('is-revealed');
      setRevealed(true);

      canvasesRef.current.forEach(canvas => {
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const [cx, cy, csize] = (canvas.getAttribute('data-crop') || "0,0,0").split(',').map(Number);
        
        const vw = video.videoWidth;
        const vh = video.videoHeight;
        const sizePx = vw * csize;
        const xPx = vw * cx - sizePx/2;
        const yPx = vh * cy - sizePx/2;

        canvas.width = sizePx;
        canvas.height = sizePx;
        
        try {
          ctx.drawImage(video, xPx, yPx, sizePx, sizePx, 0, 0, sizePx, sizePx);
          canvas.style.opacity = '1';
          if (canvas.nextElementSibling) {
            (canvas.nextElementSibling as HTMLElement).style.opacity = '1';
          }
        } catch(e) {}
      });
    };

    const getPixelColor = () => {
      const tmp = document.createElement('canvas');
      tmp.width = 1; tmp.height = 1;
      const ctx = tmp.getContext('2d');
      if (!ctx) return;
      try {
        const vw = video.videoWidth;
        const vh = video.videoHeight;
        ctx.drawImage(video, vw * 0.94, vh * 0.12, 1, 1, 0, 0, 1, 1);
        const data = ctx.getImageData(0,0,1,1).data;
        const r = data[0], g = data[1], b = data[2];
        
        const toHex = (c: number) => c.toString(16).padStart(2, '0');
        const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
        const darken = (c: number) => Math.max(0, Math.floor(c * 0.955));
        const hexDark = `#${toHex(darken(r))}${toHex(darken(g))}${toHex(darken(b))}`;
        
        hero.style.setProperty('--bg', hex);
        hero.style.setProperty('--ghost', hexDark);
        hero.style.backgroundColor = hex;
      } catch(e) {}
    };

    const handleLoadedData = () => {
      getPixelColor();
      if (video.readyState >= 2 && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        video.currentTime = video.duration || 999;
        hero.style.setProperty('--ease', 'linear');
        hero.querySelectorAll('.rv').forEach((el: any) => el.style.transitionDuration = '0s');
        reveal();
      }
    };

    const handleTimeUpdate = () => {
      if (video.currentTime >= REVEAL_AT) reveal();
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', reveal);
    video.addEventListener('error', reveal);
    const timeout = setTimeout(reveal, 9000);

    video.play().catch(reveal);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', reveal);
      video.removeEventListener('error', reveal);
      clearTimeout(timeout);
    };
  }, []);

  const handleReplay = () => {
    const video = videoRef.current;
    const hero = heroRef.current;
    if (!video || !hero) return;
    hero.classList.remove('is-revealed');
    setRevealed(false);
    canvasesRef.current.forEach(c => {
      if (!c) return;
      c.style.opacity = '0';
      if (c.nextElementSibling) {
        (c.nextElementSibling as HTMLElement).style.opacity = '0';
      }
    });
    video.currentTime = 0;
    video.play().catch(() => {});
  };

  return (
    <div ref={heroRef} className="kingfisher-container" style={{
      '--bg': '#B6C3B0',
      '--paper': '#E3E8DE',
      '--ink': '#10201F',
      '--ink-2': '#2E3D3A',
      '--ink-3': '#4E5E58',
      '--line': 'rgba(16, 32, 31, .14)',
      '--ghost': '#ADBAA7',
      '--orange': '#E8732A',
      '--orange-2': '#F3A15E',
      '--teal': '#0E7C86',
      '--panel': '#0F1D1C',
      '--panel-2': '#172A28',
      '--ease': 'cubic-bezier(.2, .7, .1, 1)'
    } as React.CSSProperties}>
      <style>{`
        .kingfisher-container {
          background: var(--bg);
          color: var(--ink);
          font-family: 'Manrope', system-ui, sans-serif;
          overflow-x: hidden;
          transition: background 0.5s var(--ease);
          position: relative;
          height: 100svh;
          display: flex;
          flex-direction: column;
        }

        .kingfisher-container h1, 
        .kingfisher-container h2, 
        .kingfisher-container h3, 
        .kingfisher-container .serif {
          font-family: 'Instrument Serif', Georgia, serif;
          font-weight: 400;
        }

        .kingfisher-container .mono {
          font-family: 'JetBrains Mono', Consolas, monospace;
          text-transform: uppercase;
        }

        .kf-video {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          object-fit: cover;
          z-index: 1;
        }

        .kf-giant-word {
          position: absolute;
          top: 13vh;
          left: 50%;
          transform: translateX(-50%);
          font-size: clamp(90px, 17vw, 300px);
          font-family: 'Instrument Serif', serif;
          color: var(--ghost);
          mix-blend-mode: darken;
          z-index: 2;
          line-height: 1;
          white-space: nowrap;
          pointer-events: none;
          mask-image: linear-gradient(180deg, #000 0%, #000 38%, rgba(0,0,0,.35) 62%, transparent 86%);
          -webkit-mask-image: linear-gradient(180deg, #000 0%, #000 38%, rgba(0,0,0,.35) 62%, transparent 86%);
        }

        .kf-overlay {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          z-index: 3;
          background: linear-gradient(to right, var(--bg) 0%, var(--bg) 38%, transparent 70%),
                      linear-gradient(to top, var(--bg) 0%, transparent 45%);
          pointer-events: none;
        }

        .kf-ui {
          position: relative;
          z-index: 4;
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 32px 40px;
        }

        .kf-body {
          flex: 1;
          display: flex;
          position: relative;
        }

        .kf-left-copy {
          margin-top: auto;
          margin-bottom: auto;
          max-width: 470px;
          transform: translateY(76px);
        }

        .kf-eyebrow { display: flex; align-items: center; gap: 16px; font-size: 11px; letter-spacing: 0.16em; margin-bottom: 24px; font-weight: 600;}
        .kf-rule { width: 28px; height: 1px; background: var(--line); }

        .kf-left-copy h1 { font-size: clamp(44px, 5vw, 76px); line-height: 0.95; margin-bottom: 24px; color: var(--ink); }
        .kf-left-copy h1 i { color: var(--teal); }

        .kf-lede { font-size: 15px; color: var(--ink-2); margin-bottom: 32px; line-height: 1.5; }

        .kf-right-cluster {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: min(400px, 34vw);
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .kf-trust-row { display: flex; align-items: center; gap: 16px; font-size: 11px; letter-spacing: 0.14em; font-weight: 500; }
        .kf-avatars { display: flex; }
        .kf-avatar { width: 36px; height: 36px; border-radius: 50%; border: 2px solid var(--bg); margin-left: -12px; background: linear-gradient(135deg, var(--paper), #ccc); }
        .kf-avatar:first-child { margin-left: 0; background: linear-gradient(135deg, var(--orange), var(--orange-2)); }
        .kf-avatar:nth-child(2) { background: linear-gradient(135deg, var(--teal), #0A5A62); }
        .kf-avatar:nth-child(3) { background: linear-gradient(135deg, var(--ink), var(--ink-2)); }

        .kf-cards { display: flex; gap: 16px; }
        .kf-card { background: var(--panel); border-radius: 26px; padding: 16px; flex: 1; display: flex; flex-direction: column; gap: 16px; box-shadow: 0 24px 48px rgba(0,0,0,0.15); border: 1px solid var(--panel-2); color: white; }
        .kf-card.offset { transform: translateY(18px); }
        .kf-card-header { font-size: 10px; letter-spacing: 0.16em; color: rgba(255,255,255,0.5); }
        .kf-card-canvas { width: 100%; aspect-ratio: 1; border-radius: 12px; background: radial-gradient(circle at top left, var(--teal), var(--orange)); position: relative; overflow: hidden; }
        .kf-card-canvas canvas { width: 100%; height: 100%; object-fit: cover; opacity: 0; transition: opacity 0.5s var(--ease); }
        .kf-card-canvas .caption { position: absolute; bottom: 0; left: 0; width: 100%; padding: 24px 12px 12px; background: linear-gradient(to top, rgba(0,0,0,0.6), transparent); font-size: 10px; letter-spacing: 0.1em; color: white; opacity: 0; transition: opacity 0.5s var(--ease); }
        .kf-card-stat { font-size: 28px; line-height: 1; }
        .kf-card-dots { display: flex; gap: 4px; }
        .kf-dot { width: 6px; height: 6px; border-radius: 50%; background: rgba(255,255,255,0.2); }
        .kf-dot.active { background: var(--orange); }

        .kf-bottom-strip {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 11px;
          letter-spacing: 0.16em;
          padding-top: 24px;
        }
        .kf-species i { text-transform: none; font-size: 14px; margin-left: 8px; color: var(--ink-2); }
        .kf-location { color: var(--ink-2); }
        .kf-replay-pill { background: rgba(255,255,255,0.3); backdrop-filter: blur(8px); padding: 8px 16px; border-radius: 40px; cursor: pointer; border: 1px solid rgba(255,255,255,0.2); transition: background 0.3s; font-weight: 600; color: var(--ink);}
        .kf-replay-pill:hover { background: rgba(255,255,255,0.5); }

        .rv {
          opacity: 0;
          transform: translateY(18px);
          filter: blur(6px);
          transition: opacity 0.9s var(--ease), transform 0.9s var(--ease), filter 0.9s var(--ease);
        }
        .is-revealed .rv {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0);
        }

        @media (max-width: 900px) {
          .kf-ui { padding: 16px; }
          .kf-giant-word { font-size: 16vw; top: 10vh; max-width: 100%; overflow: hidden; }
          .kf-overlay {
            background: linear-gradient(to top, var(--bg) 0%, var(--bg) 46svh, transparent 100%);
          }
          .kingfisher-container { height: auto; display: block; overflow: hidden; max-width: 100%; width: 100%; }
          .kf-video { height: 100svh; position: sticky; top: 0; }
          .kf-left-copy { transform: translateY(0); margin-top: 46svh; max-width: 100%; padding-bottom: 40px; }
          .kf-right-cluster { position: relative; right: auto; top: auto; transform: none; width: 100%; gap: 32px; padding-bottom: 40px; }
          .kf-card.offset { transform: none; }
          .kf-bottom-strip { flex-direction: column; gap: 16px; text-align: center; }
        }
      `}</style>

      <video 
        ref={videoRef}
        className="kf-video" 
        src="https://thinkingods.com/demos/kingfisher-hero/hero.mp4" 
        muted 
        playsInline 
        preload="auto"
      />
      
      <div className="kf-giant-word rv" style={{'--d': 0} as React.CSSProperties}>King<i>fisher</i></div>
      <div className="kf-overlay" />
      
      <div className="kf-ui">
        {/* Nav spacer since Dahel Navbar is sticky on top */}
        <div style={{ height: '24px' }} />
        
        <div className="kf-body">
          <div className="kf-left-copy rv" style={{'--d': 2} as React.CSSProperties}>
            <div className="kf-eyebrow mono">
              <div className="kf-rule" />
              PRESS COVERAGE
            </div>
            <h1 className="rv" style={{'--d': 3} as React.CSSProperties}>Dahel Technologies in the <i>News</i></h1>
            <p className="kf-lede rv" style={{'--d': 4} as React.CSSProperties}>
              Read about our initiatives, impact, and partnerships across the country as we build the future of technology education.
            </p>
          </div>
          
          <div className="kf-right-cluster">
            <div className="kf-trust-row rv" style={{'--d': 6} as React.CSSProperties}>
              <div className="kf-avatars">
                <div className="kf-avatar" />
                <div className="kf-avatar" />
                <div className="kf-avatar" />
                <div className="kf-avatar" />
              </div>
              Impacting 29k+ learners
            </div>
            <div className="kf-cards">
              <div className="kf-card rv" style={{'--d': 7} as React.CSSProperties}>
                <div className="kf-card-header mono">FOCUS / 01</div>
                <div className="kf-card-canvas">
                  <canvas data-crop="0.555,0.335,0.22" ref={el => { if (el) canvasesRef.current[0] = el; }} />
                  <div className="caption mono">VISION</div>
                </div>
                <div className="kf-card-stat serif">Quizarly</div>
                <div className="kf-card-dots"><div className="kf-dot active" /><div className="kf-dot" /><div className="kf-dot" /></div>
              </div>
              <div className="kf-card offset rv" style={{'--d': 8} as React.CSSProperties}>
                <div className="kf-card-header mono">IMPACT / 02</div>
                <div className="kf-card-canvas">
                  <canvas data-crop="0.43,0.60,0.24" ref={el => { if (el) canvasesRef.current[1] = el; }} />
                  <div className="caption mono">FLIGHT</div>
                </div>
                <div className="kf-card-stat serif">Checkamo</div>
                <div className="kf-card-dots"><div className="kf-dot active" /><div className="kf-dot" /><div className="kf-dot" /></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="kf-bottom-strip rv" style={{'--d': 9} as React.CSSProperties}>
          <div className="kf-species mono">SPECIES 01 <i className="serif">Alcedo atthis</i></div>
          <div className="kf-location mono">GLOBAL · INNOVATION</div>
          <button className="kf-replay-pill mono border-none" onClick={handleReplay}>Replay</button>
        </div>
      </div>
    </div>
  );
}
