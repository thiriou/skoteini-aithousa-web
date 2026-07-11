/* ============================================================
   σκοτεινή αίθουσα — Shared site styles
   Extracted verbatim from the original inline <style> block.
   ============================================================ */

/* Base Overrides */
body {
  background-color: #0D1321;
  color: #F7F5F1;
}

/* Premium Scrollbar */
::-webkit-scrollbar { width: 8px; height: 8px; }
::-webkit-scrollbar-track { background: #0D1321; }
::-webkit-scrollbar-thumb {
  background: #111A2E;
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover { background: rgba(6,212,109,0.2); }

/* Cinematic Light Gradients */
.cinematic-grid {
  background-image: radial-gradient(rgba(247,245,241,0.03) 1px, transparent 1px);
  background-size: 32px 32px;
}
.projector-glow {
  background: radial-gradient(circle, rgba(6,212,109,0.18) 0%, rgba(216,180,254,0.05) 50%, transparent 100%);
}
.ambient-light-purple {
  background: radial-gradient(circle, rgba(216,180,254,0.12) 0%, transparent 70%);
}
.ambient-light-orange {
  background: radial-gradient(circle, rgba(255,123,47,0.08) 0%, transparent 70%);
}

/* Film Grain Overlay */
.film-grain {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  opacity: 0.02;
  pointer-events: none;
  z-index: 9999;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
}

/* Glowing Cards */
.glowing-card {
  background: #111A2E;
  border: 1px solid rgba(255,255,255,0.04);
  transition: all 0.4s ease;
}
.glowing-card:hover {
  border-color: rgba(6,212,109,0.25);
  box-shadow: 0 0 25px rgba(6,212,109,0.08);
}

/* Gallery scroll-reveal animation */
.gallery-reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.gallery-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
