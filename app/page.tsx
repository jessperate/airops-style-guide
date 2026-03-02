'use client'

import { useState } from 'react'
import GateScreen from '@/components/GateScreen'
import MachineView from '@/components/MachineView'
import ModeToggle from '@/components/ModeToggle'

type Phase = 'gate' | 'main' | 'machine'

export default function StyleGuidePage() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null)
  const [phase, setPhase] = useState<Phase>('gate')

  if (phase === 'machine') {
    return (
      <>
        <MachineView />
        <ModeToggle mode="machine" onToggle={() => setPhase('main')} />
      </>
    )
  }

  const copyToClipboard = (hexCode: string) => {
    navigator.clipboard.writeText(hexCode)
    setCopiedColor(hexCode)
    setTimeout(() => setCopiedColor(null), 2000)
  }

  return (
    <>
      {phase === 'gate' && (
        <GateScreen
          onHuman={() => setPhase('main')}
          onMachine={() => setPhase('machine')}
        />
      )}

      <style jsx global>{`
        /* ─── LAYOUT ─────────────────────────────────────── */
        .page-grid {
          display: grid;
          grid-template-columns: 240px 1fr;
          min-height: 100vh;
        }

        /* ─── SIDEBAR ────────────────────────────────────── */
        .sidebar {
          position: sticky;
          top: 0;
          height: 100vh;
          overflow-y: auto;
          background: var(--green-600);
          padding: 40px 24px;
          display: flex;
          flex-direction: column;
          gap: 40px;
          border-right: 1px solid #013a1a;
        }

        .sidebar-logo {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
        }

        .logo-text {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--green-100);
        }

        .sidebar-label {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--green-500);
          margin-bottom: 12px;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .sidebar-nav a {
          font-size: 13px;
          color: var(--green-100);
          text-decoration: none;
          padding: 6px 10px;
          transition: background 0.15s, color 0.15s;
          opacity: 0.75;
          letter-spacing: 0.01em;
        }

        .sidebar-nav a:hover,
        .sidebar-nav a:active,
        .sidebar-nav a.active {
          background: rgba(0,255,100,0.08);
          color: var(--interaction);
          opacity: 1;
        }

        .sidebar-footer {
          margin-top: auto;
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--green-500);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          line-height: 1.8;
        }

        /* ─── MAIN CONTENT ───────────────────────────────── */
        .main {
          overflow-x: hidden;
        }

        /* ─── PAGE HERO ──────────────────────────────────── */
        .hero {
          background: var(--green-600);
          padding: 80px 64px 72px;
          border-bottom: 1px solid #013a1a;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          right: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-image: url('/floralia.svg');
          background-size: cover;
          background-position: center;
          opacity: 0.15;
          pointer-events: none;
        }

        .hero-tag {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          background: var(--accent-label);
          color: var(--near-black);
          padding: 6px 12px;
          margin-bottom: 24px;
          border: 1px solid #d4e878;
          border-radius: 5px;
        }

        .hero h1 {
          font-family: var(--font-serif);
          font-size: 64px;
          font-weight: 400;
          line-height: 0.9;
          letter-spacing: -2px;
          color: var(--off-white);
          margin: 0 0 20px 0;
          max-width: 560px;
        }

        .hero h1 em {
          font-style: normal;
          color: var(--interaction);
        }

        .hero-sub {
          font-size: 17px;
          color: var(--green-100);
          max-width: 560px;
          line-height: 1.5;
          opacity: 0.8;
          margin: 0 0 32px 0;
        }

        .hero-download {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-width: 560px;
        }

        .hero-download-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.02em;
          background: var(--interaction);
          color: var(--near-black);
          padding: 14px 24px;
          text-decoration: none;
          transition: all 0.2s;
          border: 1px solid #00ff64;
          width: fit-content;
        }

        .hero-download-btn:hover {
          background: #00ff80;
          transform: translateY(-1px);
        }

        .hero-download-helper {
          font-size: 14px;
          color: var(--green-100);
          opacity: 0.7;
          line-height: 1.5;
        }

        /* ─── SECTIONS ───────────────────────────────────── */
        .section {
          padding: 72px 64px;
          border-bottom: 1px solid var(--stroke-green);
        }

        .section:last-child {
          border-bottom: none;
        }

        .section-header {
          display: flex;
          align-items: baseline;
          gap: 16px;
          margin-bottom: 48px;
        }

        .section-num {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 500;
          color: var(--green-500);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          flex-shrink: 0;
        }

        .section h2 {
          font-family: var(--font-serif);
          font-size: 36px;
          font-weight: 400;
          letter-spacing: -1px;
          line-height: 1;
          color: var(--near-black);
          margin: 0;
        }

        /* ─── COLOR SWATCHES ─────────────────────────────── */
        .color-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 2px;
          margin-bottom: 32px;
        }

        .color-swatch {
          border: 1px solid var(--stroke-green);
          cursor: pointer;
          transition: transform 0.15s, box-shadow 0.15s;
        }

        .color-swatch:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .color-swatch-block {
          height: 80px;
          width: 100%;
        }

        .color-swatch-info {
          padding: 12px;
          background: var(--white);
        }

        .color-name {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--text-primary);
          margin-bottom: 2px;
        }

        .color-hex {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--text-secondary);
        }

        .color-role {
          font-size: 11px;
          color: var(--text-tertiary);
          margin-top: 4px;
        }

        .color-section-label {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--text-secondary);
          margin-bottom: 12px;
          margin-top: 32px;
        }

        .color-section-label:first-child {
          margin-top: 0;
        }

        /* ─── TOAST NOTIFICATION ─────────────────────────── */
        .toast {
          position: fixed;
          bottom: 32px;
          right: 32px;
          background: var(--near-black);
          color: var(--interaction);
          padding: 16px 24px;
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.02em;
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
          z-index: 1000;
          animation: slideIn 0.2s ease-out;
        }

        @keyframes slideIn {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* ─── CODE BLOCK ─────────────────────────────────── */
        .code-block {
          background: var(--near-black);
          border: 1px solid var(--stroke-green);
          padding: 24px 28px;
          font-family: var(--font-mono);
          font-size: 12px;
          line-height: 1.8;
          color: #b6f5c8;
          overflow-x: auto;
          white-space: pre-wrap;
          margin-top: 16px;
        }

        .code-block .cm { color: #5a8f6a; }
        .code-block .cs { color: var(--interaction); }
        .code-block .cv { color: var(--accent-label); }

        .code-label {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
          margin-bottom: 8px;
          margin-top: 32px;
        }

        .code-label:first-child {
          margin-top: 0;
        }

        /* ─── TYPOGRAPHY ─────────────────────────────────── */
        .type-specimen {
          border: 1px solid var(--stroke-green);
          padding: 32px;
          margin-bottom: 2px;
          display: grid;
          grid-template-columns: 1fr 200px;
          align-items: center;
          gap: 24px;
        }

        .type-specimen:hover {
          background: var(--green-50);
        }

        .type-meta {
          text-align: right;
        }

        .type-label {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
          margin-bottom: 4px;
        }

        .type-spec {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-tertiary);
          line-height: 1.6;
        }

        .t-h1-serif { font-family: var(--font-serif); font-size: 96px; font-weight: 400; letter-spacing: -0.02em; line-height: 1.0; color: #001408; }
        .t-h1-sans { font-family: var(--font-sans); font-size: 72px; font-weight: 400; letter-spacing: -0.02em; line-height: 1.0; color: #001408; }
        .t-h2-serif { font-family: var(--font-serif); font-size: 56px; font-weight: 400; letter-spacing: -0.02em; line-height: 1; color: #001408; }
        .t-body-lg { font-family: var(--font-sans); font-size: 24px; font-weight: 400; letter-spacing: 0.02em; line-height: 1.3; color: #002910; }
        .t-body { font-family: var(--font-sans); font-size: 16px; font-weight: 400; line-height: 1.4; letter-spacing: -0.02em; color: #002910; }
        .t-mono { font-family: var(--font-mono); font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.06em; line-height: 1.3; color: #002910; }

        /* ─── COMPONENTS ─────────────────────────────────── */
        .component-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: flex-start;
          margin-bottom: 40px;
        }

        .component-label {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
          margin-bottom: 14px;
          margin-top: 8px;
        }

        .component-label:first-child {
          margin-top: 0;
        }

        .subsection {
          margin-bottom: 48px;
        }

        /* Buttons */
        .btn {
          font-family: var(--font-sans);
          font-size: 20px;
          font-weight: 400;
          padding: 16px 32px;
          border: none;
          cursor: pointer;
          transition: background 0.15s;
          text-decoration: none;
          display: inline-block;
          letter-spacing: 0;
        }

        .btn-primary {
          background: #00ff64;
          color: #002910;
          border-radius: 58px;
        }

        .btn-primary:hover {
          background: #00cc50;
        }

        .btn-secondary {
          background: #eef9f3;
          color: #002910;
          border-radius: 58px;
        }

        .btn-secondary:hover {
          background: #ccffe0;
        }

        .btn-secondary-dark {
          background: rgba(0,0,0,0.3);
          color: #f8fffa;
          border-radius: 58px;
        }

        .btn-secondary-dark:hover {
          background: rgba(0,0,0,0.2);
        }

        .btn-back {
          background: #fee7fd;
          color: #3a092c;
          border-radius: 58px;
        }

        .btn-back:hover {
          background: #ffd3fd;
        }

        .btn-text {
          background: transparent;
          color: #01200d;
          font-size: 18px;
          padding: 0;
        }

        .btn-text-dark {
          background: transparent;
          color: #f8fffa;
          font-size: 18px;
          padding: 0;
        }

        .btn-small {
          background: #fee7fd;
          color: #3a092c;
          font-family: var(--font-mono);
          font-size: 13px;
          text-transform: uppercase;
          border-radius: 8px;
          padding: 8px 16px;
        }

        /* Pills */
        .pill {
          font-family: var(--font-mono);
          font-size: 14px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          line-height: 1.3;
          padding: 8px 16px;
          border: 1px solid;
          border-radius: 5px;
          display: inline-block;
        }

        .pill-green-light { background: #f8fffb; border-color: #008c44; color: #002910; }
        .pill-green { background: #dfeae3; border-color: #008c44; color: #002910; }
        .pill-indigo { background: #e5e5ff; border-color: #1b1b8f; color: #0f0f57; }
        .pill-pink { background: #fee7fd; border-color: #c54b9b; color: #3a092c; }
        .pill-dark { background: #000d05; border-color: transparent; color: #00ff64; }
        .pill-yellow { background: #EEFF8C; border-color: #d4e87a; color: #000d05; }

        /* Cards */
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 2px;
          margin-bottom: 40px;
        }

        .card {
          border: 1px solid var(--stroke-green);
          padding: 28px;
          background: var(--white);
          transition: border-color 0.15s;
        }

        .card:hover { border-color: var(--green-500); }

        .card-dark {
          background: var(--green-600);
          border-color: #013a1a;
        }

        .card-dark .card-title { color: var(--off-white); }
        .card-dark .card-body { color: var(--green-100); opacity: 0.75; }

        .card-accent {
          background: var(--interaction);
          border-color: #00d455;
        }

        .card-accent .card-tag { background: var(--near-black); color: var(--interaction); border-color: transparent; }
        .card-accent .card-title { color: var(--near-black); }
        .card-accent .card-body { color: var(--near-black); opacity: 0.7; }

        .card-tag {
          display: inline-block;
          margin-bottom: 16px;
        }

        .card-title {
          font-family: var(--font-sans);
          font-size: 20px;
          font-weight: 400;
          letter-spacing: -0.5px;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .card-body {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Form inputs */
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          max-width: 360px;
          margin-bottom: 16px;
        }

        .form-label {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
        }

        .form-input {
          padding: 10px 14px;
          font-family: var(--font-sans);
          font-size: 14px;
          color: var(--text-primary);
          background: var(--white);
          border: 1px solid var(--stroke-primary);
          outline: none;
          transition: border-color 0.15s;
          border-radius: 0;
          width: 100%;
        }

        .form-input:focus { border-color: var(--green-500); }
        .form-input::placeholder { color: var(--text-tertiary); }

        .input-hint {
          font-size: 12px;
          color: var(--text-tertiary);
        }

        /* Tables */
        .table-wrapper {
          border: 1px solid var(--stroke-green);
          overflow: hidden;
          margin-bottom: 40px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        thead {
          background: var(--green-50);
          border-bottom: 1px solid var(--stroke-green);
        }

        th {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
          padding: 14px 20px;
          text-align: left;
        }

        td {
          padding: 16px 20px;
          font-size: 13px;
          color: var(--text-primary);
          border-bottom: 1px solid var(--stroke-green);
          vertical-align: top;
        }

        tr:last-child td { border-bottom: none; }
        tr:hover td { background: var(--green-50); }

        td code {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--green-500);
        }

        /* ─── BRAND VOICE ────────────────────────────────── */
        .trait-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 2px;
          margin-bottom: 40px;
        }

        .trait-card {
          border: 1px solid var(--stroke-green);
          padding: 24px;
          background: var(--green-50);
        }

        .trait-word {
          font-family: var(--font-serif);
          font-size: 28px;
          letter-spacing: -1px;
          color: var(--near-black);
          margin-bottom: 8px;
        }

        .trait-desc {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .voice-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
          margin-bottom: 40px;
        }

        .voice-card {
          border: 1px solid var(--stroke-green);
          padding: 28px;
        }

        .voice-card.do { border-top: 3px solid var(--interaction); }
        .voice-card.dont { border-top: 3px solid #ff5996; }

        .voice-card-label {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 16px;
        }

        .voice-card.do .voice-card-label { color: var(--green-500); }
        .voice-card.dont .voice-card-label { color: #ff5996; }

        .voice-example {
          font-size: 14px;
          color: var(--text-primary);
          line-height: 1.6;
          margin-bottom: 12px;
          padding: 14px 16px;
          background: var(--green-50);
          border-left: 2px solid var(--stroke-green);
          font-style: italic;
        }

        .voice-card.dont .voice-example {
          background: #fff0f4;
          border-left-color: #ffb8cb;
          text-decoration: line-through;
          text-decoration-color: #ff5996;
        }

        .voice-note {
          font-size: 12px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .spacing-row {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
          margin-bottom: 32px;
          align-items: flex-end;
        }

        .spacing-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
        }

        .spacing-block {
          background: var(--green-200);
          border: 1px solid var(--stroke-green);
          width: 100%;
          min-width: 40px;
        }

        .spacing-label {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          text-align: center;
        }

        /* ─── LOGO BLOCKS ────────────────────────────────── */
        .logo-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2px;
          margin-bottom: 32px;
        }

        .logo-block {
          border: 1px solid var(--stroke-green);
          padding: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 180px;
          background: var(--white);
        }

        .logo-block.on-dark {
          background: var(--green-600);
        }

        .logo-block.on-black {
          background: var(--near-black);
        }

        .logo-block.on-green {
          background: var(--interaction);
        }

        .logo-svg {
          margin-bottom: 16px;
        }

        .logo-block-label {
          font-family: var(--font-mono);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-tertiary);
        }

        .logo-block.on-dark .logo-block-label,
        .logo-block.on-black .logo-block-label {
          color: var(--green-100);
        }

        .logo-block.on-green .logo-block-label {
          color: var(--near-black);
        }

        /* ─── RESPONSIVE ─────────────────────────────────── */
        @media (max-width: 900px) {
          .page-grid { grid-template-columns: 1fr; }
          .sidebar { position: static; height: auto; flex-direction: row; flex-wrap: wrap; padding: 24px 20px; }
          .sidebar-nav { flex-direction: row; flex-wrap: wrap; }
          .hero { padding: 48px 24px; }
          .hero h1 { font-size: 40px; }
          .section { padding: 48px 24px; }
          .voice-grid, .type-specimen { grid-template-columns: 1fr; }
          .t-h1-serif, .t-h1-sans { font-size: 40px; }
          .t-h2-serif { font-size: 32px; }
        }
      `}</style>

      <div className="page-grid">
        {/* SIDEBAR */}
        <nav className="sidebar">
          <div className="sidebar-logo">
            <div style={{ width: '80px' }}>
              <svg width="100" height="32" viewBox="0 0 100 32" fill="none">
                <path d="M14.2683 8.35377V11.2588C12.9587 9.16447 10.9253 7.88086 8.40935 7.88086C3.03288 7.88086 0 11.833 0 17.1364C0 22.4735 3.06735 26.5608 8.47828 26.5608C10.9942 26.5608 12.9931 25.2772 14.2683 23.1829V26.0879H18.473V8.35377H14.2683ZM9.30543 23.0478C6.23809 23.0478 4.48039 20.2441 4.48039 17.1364C4.48039 14.0963 6.20362 11.4277 9.37436 11.4277C11.9937 11.4277 14.2339 13.2856 14.2339 17.0688C14.2339 20.7846 12.0971 23.0478 9.30543 23.0478Z" fill="white"/>
                <path d="M22.0938 8.35547V26.0896H26.5741V8.35547H22.0938Z" fill="white"/>
                <path d="M34.832 12.7461V8.3548H30.3516V26.0889H34.832V15.9551C34.832 13.3541 36.6586 12.307 38.3818 12.307C39.3813 12.307 40.4152 12.5772 40.9666 12.7799V8.05078C38.0372 8.05078 35.6246 9.77353 34.832 12.7461Z" fill="white"/>
                <path d="M42.0625 13.7594C42.0625 19.2655 45.9225 23.1839 51.4713 23.1839C57.0546 23.1839 60.8804 19.2655 60.8804 13.7594C60.8804 8.35475 57.0546 4.50391 51.4713 4.50391C45.9225 4.50391 42.0625 8.35475 42.0625 13.7594ZM56.3998 13.7594C56.3998 17.2049 54.5042 19.6708 51.4713 19.6708C48.404 19.6708 46.5429 17.2049 46.5429 13.7594C46.5429 10.4491 48.404 8.05073 51.4713 8.05073C54.5042 8.05073 56.3998 10.4491 56.3998 13.7594Z" fill="white"/>
                <path d="M73.3738 7.88086C70.7545 7.88086 68.6177 9.40093 67.4804 11.833V8.35377H63V31.9993H67.4804V22.9127C68.7556 25.1083 71.1336 26.5608 73.6496 26.5608C78.5435 26.5608 81.9555 22.8113 81.9555 17.4404C81.9555 11.7993 78.4057 7.88086 73.3738 7.88086ZM72.5811 23.2505C69.5827 23.2505 67.4804 20.7846 67.4804 17.2715C67.4804 13.6571 69.5827 11.1237 72.5811 11.1237C75.4417 11.1237 77.4751 13.7247 77.4751 17.4066C77.4751 20.8521 75.4417 23.2505 72.5811 23.2505Z" fill="white"/>
                <path d="M83.3906 19.9401C83.3906 23.1491 86.2856 26.5608 92.0757 26.5608C97.9002 26.5608 100.003 23.2167 100.003 20.6157C100.003 16.6297 95.212 15.9203 92.0068 15.3123C89.8355 14.9407 88.4569 14.6367 88.4569 13.4207C88.4569 12.0357 90.0078 11.1575 91.6621 11.1575C93.9023 11.1575 94.7639 12.6775 94.8329 14.2989H99.3133C99.3133 11.6641 97.4177 7.88086 91.5587 7.88086C86.4924 7.88086 83.9765 10.6845 83.9765 13.6909C83.9765 17.9809 88.836 18.42 92.0412 19.028C93.9023 19.3658 95.5221 19.7712 95.5221 21.0886C95.5221 22.406 93.9368 23.2842 92.248 23.2842C90.6626 23.2842 87.871 22.406 87.871 19.9401H83.3906Z" fill="white"/>
                <path d="M24.4093 6.19288C22.5697 6.19288 21.25 4.89943 21.25 3.13563C21.25 1.37184 22.5697 0 24.4093 0C26.1688 0 27.5685 1.37184 27.5685 3.13563C27.5685 4.89943 26.1688 6.19288 24.4093 6.19288Z" fill="white"/>
              </svg>
            </div>
            <div className="logo-text">Brand Style Guide</div>
          </div>

          <div>
            <div className="sidebar-label">Contents</div>
            <div className="sidebar-nav">
              <a href="#colors">01 Colors</a>
              <a href="#typography">02 Typography</a>
              <a href="#components">03 Components</a>
              <a href="#logo">04 Logo & Imagery</a>
              <a href="#spacing">05 Spacing & Layout</a>
              <a href="#snippets">06 CSS Snippets</a>
              <a href="#containers">07 Containers</a>
              <a href="#dataviz">08 Data Viz</a>
              <a href="#brand-strategy">09 Brand Strategy</a>
              <a href="#copy-voice-tone">10 Copy, Voice & Tone</a>
            </div>
          </div>

          <div className="sidebar-footer">
            AirOps Brand<br />
            For Claude Code<br />
            v2025
          </div>
        </nav>

        {/* MAIN */}
        <main className="main">
          {/* HERO */}
          <div className="hero">
            <div className="hero-tag">AirOps Brand System</div>
            <h1>Build on<br /><em>brand,</em><br />every time.</h1>
            <p className="hero-sub">Everything you need to ship pages, apps, and campaigns that look unmistakably AirOps. Copy the code. Follow the rules. Ship it.</p>
            <div className="hero-download">
              <a href="/airops-brand-skill-files.zip" download className="hero-download-btn">
                <span>↓</span>
                <span>Download Skill Files</span>
              </a>
              <p className="hero-download-helper">Download this zip and upload into your Claude skills environment</p>
              <p className="hero-download-helper" style={{ marginTop: '6px', opacity: 0.55, fontSize: '11px' }}>Restricted: AirOps employees and licensed users only.</p>
            </div>
          </div>

          {/* 01 COLORS */}
          <section className="section" id="colors">
            <div className="section-header">
              <span className="section-num">01</span>
              <h2>Colors</h2>
            </div>

            <div className="color-section-label">Brand Greens — Primary Palette</div>
            <div className="color-grid">
              <div className="color-swatch" onClick={() => copyToClipboard('#000d05')}>
                <div className="color-swatch-block" style={{ background: '#000d05' }}></div>
                <div className="color-swatch-info">
                  <div className="color-name">Near Black</div>
                  <div className="color-hex">#000d05</div>
                  <div className="color-role">Deep backgrounds, rich text</div>
                </div>
              </div>
              <div className="color-swatch" onClick={() => copyToClipboard('#002910')}>
                <div className="color-swatch-block" style={{ background: '#002910' }}></div>
                <div className="color-swatch-info">
                  <div className="color-name">Forest</div>
                  <div className="color-hex">#002910</div>
                  <div className="color-role">Hero sections, sidebar, dark cards</div>
                </div>
              </div>
              <div className="color-swatch" onClick={() => copyToClipboard('#008c44')}>
                <div className="color-swatch-block" style={{ background: '#008c44' }}></div>
                <div className="color-swatch-info">
                  <div className="color-name">Mid Green</div>
                  <div className="color-hex">#008c44</div>
                  <div className="color-role">Labels, links, accents on light</div>
                </div>
              </div>
              <div className="color-swatch" onClick={() => copyToClipboard('#00e676')}>
                <div className="color-swatch-block" style={{ background: '#00e676', border: '1px solid #d4e8da' }}></div>
                <div className="color-swatch-info">
                  <div className="color-name">Interaction</div>
                  <div className="color-hex">#00e676</div>
                  <div className="color-role">CTAs, interactive states, accents</div>
                </div>
              </div>
              <div className="color-swatch" onClick={() => copyToClipboard('#CCFFE0')}>
                <div className="color-swatch-block" style={{ background: '#CCFFE0', border: '1px solid #d4e8da' }}></div>
                <div className="color-swatch-info">
                  <div className="color-name">Super Light</div>
                  <div className="color-hex">#CCFFE0</div>
                  <div className="color-role">Hover states, section fills</div>
                </div>
              </div>
              <div className="color-swatch" onClick={() => copyToClipboard('#dfeae3')}>
                <div className="color-swatch-block" style={{ background: '#dfeae3', border: '1px solid #d4e8da' }}></div>
                <div className="color-swatch-info">
                  <div className="color-name">Green 100</div>
                  <div className="color-hex">#dfeae3</div>
                  <div className="color-role">Muted backgrounds</div>
                </div>
              </div>
              <div className="color-swatch" onClick={() => copyToClipboard('#F8FFFA')}>
                <div className="color-swatch-block" style={{ background: '#f8fffb', border: '1px solid #d4e8da' }}></div>
                <div className="color-swatch-info">
                  <div className="color-name">Off White</div>
                  <div className="color-hex">#F8FFFA</div>
                  <div className="color-role">Page backgrounds, card fills</div>
                </div>
              </div>
            </div>

            <div className="color-section-label">Special Use</div>
            <div className="color-grid">
              <div className="color-swatch" onClick={() => copyToClipboard('#EEFF8C')}>
                <div className="color-swatch-block" style={{ background: '#EEFF8C', border: '1px solid #d4e878' }}></div>
                <div className="color-swatch-info">
                  <div className="color-name">Label Yellow</div>
                  <div className="color-hex">#EEFF8C</div>
                  <div className="color-role">Pill labels, DM Mono tags only</div>
                </div>
              </div>
              <div className="color-swatch" onClick={() => copyToClipboard('#ffffff')}>
                <div className="color-swatch-block" style={{ background: '#ffffff', border: '1px solid #ecedef' }}></div>
                <div className="color-swatch-info">
                  <div className="color-name">White</div>
                  <div className="color-hex">#ffffff</div>
                  <div className="color-role">Default page background</div>
                </div>
              </div>
              <div className="color-swatch" onClick={() => copyToClipboard('#09090b')}>
                <div className="color-swatch-block" style={{ background: '#09090b' }}></div>
                <div className="color-swatch-info">
                  <div className="color-name">Near Black UI</div>
                  <div className="color-hex">#09090b</div>
                  <div className="color-role">UI text, primary buttons</div>
                </div>
              </div>
              <div className="color-swatch" onClick={() => copyToClipboard('#676c79')}>
                <div className="color-swatch-block" style={{ background: '#676c79' }}></div>
                <div className="color-swatch-info">
                  <div className="color-name">Body Secondary</div>
                  <div className="color-hex">#676c79</div>
                  <div className="color-role">Secondary text, descriptions</div>
                </div>
              </div>
            </div>

            <div className="color-section-label" style={{ marginTop: '56px' }}>Secondary Palette</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '16px', marginBottom: '40px' }}>
              {/* Row 1: Very Light Tints */}
              <div onClick={() => copyToClipboard('#f5f5f5')} style={{ background: '#f5f5f5', cursor: 'pointer', border: '1px solid #e5e5e5', padding: '48px 16px 16px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '8px', left: '8px', fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>1</div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', marginTop: '32px' }}>#f5f5f5</div>
              </div>
              <div onClick={() => copyToClipboard('#fafaf5')} style={{ background: '#fafaf5', cursor: 'pointer', border: '1px solid #e5e5e5', padding: '48px 16px 16px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '8px', left: '8px', fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>1</div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', marginTop: '32px' }}>#fafaf5</div>
              </div>
              <div onClick={() => copyToClipboard('#f0f9fc')} style={{ background: '#f0f9fc', cursor: 'pointer', border: '1px solid #e5e5e5', padding: '48px 16px 16px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '8px', left: '8px', fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>1</div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', marginTop: '32px' }}>#f0f9fc</div>
              </div>
              <div onClick={() => copyToClipboard('#f5f5ff')} style={{ background: '#f5f5ff', cursor: 'pointer', border: '1px solid #e5e5e5', padding: '48px 16px 16px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '8px', left: '8px', fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>1</div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', marginTop: '32px' }}>#f5f5ff</div>
              </div>
              <div onClick={() => copyToClipboard('#f8f5ff')} style={{ background: '#f8f5ff', cursor: 'pointer', border: '1px solid #e5e5e5', padding: '48px 16px 16px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '8px', left: '8px', fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>1</div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', marginTop: '32px' }}>#f8f5ff</div>
              </div>
              <div onClick={() => copyToClipboard('#fff5f8')} style={{ background: '#fff5f8', cursor: 'pointer', border: '1px solid #e5e5e5', padding: '48px 16px 16px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '8px', left: '8px', fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>1</div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', marginTop: '32px' }}>#fff5f8</div>
              </div>
              <div onClick={() => copyToClipboard('#fff5f5')} style={{ background: '#fff5f5', cursor: 'pointer', border: '1px solid #e5e5e5', padding: '48px 16px 16px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '8px', left: '8px', fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>1</div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', marginTop: '32px' }}>#fff5f5</div>
              </div>

              {/* Row 2: Light/Pastel */}
              <div onClick={() => copyToClipboard('#d4e8da')} style={{ background: '#d4e8da', cursor: 'pointer', border: '1px solid #c0d8c7', padding: '48px 16px 16px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '8px', left: '8px', fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>1</div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', marginTop: '32px' }}>#d4e8da</div>
              </div>
              <div onClick={() => copyToClipboard('#f4ffb8')} style={{ background: '#f4ffb8', cursor: 'pointer', border: '1px solid #e0eb9f', padding: '48px 16px 16px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '8px', left: '8px', fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>1</div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', marginTop: '32px' }}>#f4ffb8</div>
              </div>
              <div onClick={() => copyToClipboard('#b8e6f0')} style={{ background: '#b8e6f0', cursor: 'pointer', border: '1px solid #9fd4de', padding: '48px 16px 16px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '8px', left: '8px', fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>1</div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', marginTop: '32px' }}>#b8e6f0</div>
              </div>
              <div onClick={() => copyToClipboard('#c8c8ff')} style={{ background: '#c8c8ff', cursor: 'pointer', border: '1px solid #b0b0eb', padding: '48px 16px 16px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '8px', left: '8px', fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>1</div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', marginTop: '32px' }}>#c8c8ff</div>
              </div>
              <div onClick={() => copyToClipboard('#d8c8f0')} style={{ background: '#d8c8f0', cursor: 'pointer', border: '1px solid #c4b0dc', padding: '48px 16px 16px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '8px', left: '8px', fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>1</div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', marginTop: '32px' }}>#d8c8f0</div>
              </div>
              <div onClick={() => copyToClipboard('#f0c8d8')} style={{ background: '#f0c8d8', cursor: 'pointer', border: '1px solid #dcb0c4', padding: '48px 16px 16px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '8px', left: '8px', fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>1</div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', marginTop: '32px' }}>#f0c8d8</div>
              </div>
              <div onClick={() => copyToClipboard('#f0d0c8')} style={{ background: '#f0d0c8', cursor: 'pointer', border: '1px solid #dcbcb0', padding: '48px 16px 16px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '8px', left: '8px', fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>1</div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', marginTop: '32px' }}>#f0d0c8</div>
              </div>

              {/* Row 3: Saturated */}
              <div onClick={() => copyToClipboard('#2d8659')} style={{ background: '#2d8659', cursor: 'pointer', color: '#fff', padding: '48px 16px 16px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '8px', left: '8px', fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>1</div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', marginTop: '32px', textTransform: 'uppercase' }}>#2d8659</div>
              </div>
              <div onClick={() => copyToClipboard('#8b8b2d')} style={{ background: '#8b8b2d', cursor: 'pointer', color: '#fff', padding: '48px 16px 16px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '8px', left: '8px', fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>1</div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', marginTop: '32px', textTransform: 'uppercase' }}>#8b8b2d</div>
              </div>
              <div onClick={() => copyToClipboard('#2d6b7a')} style={{ background: '#2d6b7a', cursor: 'pointer', color: '#fff', padding: '48px 16px 16px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '8px', left: '8px', fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>1</div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', marginTop: '32px', textTransform: 'uppercase' }}>#2d6b7a</div>
              </div>
              <div onClick={() => copyToClipboard('#0000cc')} style={{ background: '#0000cc', cursor: 'pointer', color: '#fff', padding: '48px 16px 16px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '8px', left: '8px', fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>1</div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', marginTop: '32px', textTransform: 'uppercase' }}>#0000cc</div>
              </div>
              <div onClick={() => copyToClipboard('#6b3d8b')} style={{ background: '#6b3d8b', cursor: 'pointer', color: '#fff', padding: '48px 16px 16px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '8px', left: '8px', fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>1</div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', marginTop: '32px', textTransform: 'uppercase' }}>#6b3d8b</div>
              </div>
              <div onClick={() => copyToClipboard('#b3428b')} style={{ background: '#b3428b', cursor: 'pointer', color: '#fff', padding: '48px 16px 16px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '8px', left: '8px', fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>1</div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', marginTop: '32px', textTransform: 'uppercase' }}>#b3428b</div>
              </div>
              <div onClick={() => copyToClipboard('#8b4d42')} style={{ background: '#8b4d42', cursor: 'pointer', color: '#fff', padding: '48px 16px 16px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '8px', left: '8px', fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>1</div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', marginTop: '32px', textTransform: 'uppercase' }}>#8b4d42</div>
              </div>

              {/* Row 4: Dark */}
              <div onClick={() => copyToClipboard('#0d3d26')} style={{ background: '#0d3d26', cursor: 'pointer', color: '#fff', padding: '48px 16px 16px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '8px', left: '8px', fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>1</div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', marginTop: '32px', textTransform: 'uppercase' }}>#0d3d26</div>
              </div>
              <div onClick={() => copyToClipboard('#3d3d0d')} style={{ background: '#3d3d0d', cursor: 'pointer', color: '#fff', padding: '48px 16px 16px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '8px', left: '8px', fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>1</div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', marginTop: '32px', textTransform: 'uppercase' }}>#3d3d0d</div>
              </div>
              <div onClick={() => copyToClipboard('#0d2d3d')} style={{ background: '#0d2d3d', cursor: 'pointer', color: '#fff', padding: '48px 16px 16px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '8px', left: '8px', fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>1</div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', marginTop: '32px', textTransform: 'uppercase' }}>#0d2d3d</div>
              </div>
              <div onClick={() => copyToClipboard('#00004d')} style={{ background: '#00004d', cursor: 'pointer', color: '#fff', padding: '48px 16px 16px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '8px', left: '8px', fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>1</div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', marginTop: '32px', textTransform: 'uppercase' }}>#00004d</div>
              </div>
              <div onClick={() => copyToClipboard('#2d1a3d')} style={{ background: '#2d1a3d', cursor: 'pointer', color: '#fff', padding: '48px 16px 16px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '8px', left: '8px', fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>1</div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', marginTop: '32px', textTransform: 'uppercase' }}>#2d1a3d</div>
              </div>
              <div onClick={() => copyToClipboard('#4d1a3d')} style={{ background: '#4d1a3d', cursor: 'pointer', color: '#fff', padding: '48px 16px 16px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '8px', left: '8px', fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>1</div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', marginTop: '32px', textTransform: 'uppercase' }}>#4d1a3d</div>
              </div>
              <div onClick={() => copyToClipboard('#3d1d1a')} style={{ background: '#3d1d1a', cursor: 'pointer', color: '#fff', padding: '48px 16px 16px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '8px', left: '8px', fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>1</div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', marginTop: '32px', textTransform: 'uppercase' }}>#3d1d1a</div>
              </div>
            </div>

            <div className="code-label">Usage in code</div>
            <div className="code-block">{`/* CSS Variables */
--near-black:   #000d05;
--green-600:    #002910;  /* forest */
--green-500:    #008c44;  /* mid green */
--interaction:  #00e676;  /* also #00ff64 */
--green-200:    #CCFFE0;  /* super light */
--green-100:    #dfeae3;`}</div>
          </section>

          {/* 02 TYPOGRAPHY */}
          <section className="section" id="typography">
            <div className="section-header">
              <span className="section-num">02</span>
              <h2>Typography</h2>
            </div>

            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '560px', lineHeight: '1.6' }}>
              AirOps uses three typefaces. <strong>Saans</strong> for UI and body. <strong>Serrif VF</strong> for large editorial headlines. <strong>Saans Mono</strong> for eyebrows, labels, and tags. Type creates hierarchy in rich text environments — see the stack applied in context on the right of each row below.
            </p>

            {/* TYPE STACK — applied examples */}
            <div style={{ border: '1px solid var(--stroke-green)', marginBottom: '40px', overflow: 'hidden' }}>
              {/* Row: Eyebrow */}
              <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', borderBottom: '1px solid var(--stroke-green)' }}>
                <div style={{ padding: '20px', borderRight: '1px solid var(--stroke-green)', background: '#fff' }}>
                  <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '2px' }}>Eyebrow</div>
                  <div style={{ fontSize: '12px', color: '#a0afb0', fontFamily: 'var(--font-mono)' }}>Saans Mono</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '8px', lineHeight: '1.5' }}>14px / ALL CAPS<br />tracking 0.06em / line-height: 1.3</div>
                </div>
                <div style={{ padding: '20px', background: 'var(--off-white)', display: 'flex', alignItems: 'center' }}>
                  <span className="pill pill-green-light">Blog Post</span>
                </div>
              </div>

              {/* Row: Large Headlines */}
              <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', borderBottom: '1px solid var(--stroke-green)' }}>
                <div style={{ padding: '20px', borderRight: '1px solid var(--stroke-green)', background: '#fff' }}>
                  <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '2px' }}>Large Headlines</div>
                  <div style={{ fontSize: '12px', color: '#a0afb0', fontFamily: 'var(--font-mono)' }}>Serrif VF</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '8px', lineHeight: '1.5' }}>96px / tracking −0.02em<br />line-height: 1.0</div>
                </div>
                <div style={{ padding: '20px 28px', background: 'var(--off-white)', display: 'flex', alignItems: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '48px', lineHeight: '1.0', letterSpacing: '-0.02em', color: '#002910', fontWeight: 400 }}>Introducing The Content Engineering Platform for AI Search</div>
                </div>
              </div>

              {/* Row: Large Body */}
              <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', borderBottom: '1px solid var(--stroke-green)' }}>
                <div style={{ padding: '20px', borderRight: '1px solid var(--stroke-green)', background: '#fff' }}>
                  <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '2px' }}>Large Body</div>
                  <div style={{ fontSize: '12px', color: '#a0afb0', fontFamily: 'var(--font-mono)' }}>Saans</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '8px', lineHeight: '1.5' }}>24px / tracking 0.02em<br />line-height: 1.3</div>
                </div>
                <div style={{ padding: '20px 28px', background: 'var(--off-white)', display: 'flex', alignItems: 'center' }}>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '20px', lineHeight: '1.3', letterSpacing: '0.02em', color: '#002910', maxWidth: '540px', margin: 0 }}>We've been busy. As a fast follow to Friday's $40m Series B announcement, we're excited to introduce the next generation of AirOps — the first end-to-end content engineering platform built to win AI search.</p>
                </div>
              </div>

              {/* Row: H5 Serif */}
              <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', borderBottom: '1px solid var(--stroke-green)' }}>
                <div style={{ padding: '20px', borderRight: '1px solid var(--stroke-green)', background: '#fff' }}>
                  <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '2px' }}>H5 Serif</div>
                  <div style={{ fontSize: '12px', color: '#a0afb0', fontFamily: 'var(--font-mono)' }}>Serrif VF</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '8px', lineHeight: '1.5' }}>40px / tracking −0.02em<br />line-height: 1.04</div>
                </div>
                <div style={{ padding: '20px 28px', background: 'var(--off-white)', display: 'flex', alignItems: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', lineHeight: '1.04', letterSpacing: '-0.02em', color: '#001408', fontWeight: 400 }}>Go from insights → action → results.</div>
                </div>
              </div>

              {/* Row: Body */}
              <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', borderBottom: '1px solid var(--stroke-green)' }}>
                <div style={{ padding: '20px', borderRight: '1px solid var(--stroke-green)', background: '#fff' }}>
                  <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '2px' }}>Body</div>
                  <div style={{ fontSize: '12px', color: '#a0afb0', fontFamily: 'var(--font-mono)' }}>Saans</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '8px', lineHeight: '1.5' }}>16px / tracking −0.02em<br />line-height: 1.4</div>
                </div>
                <div style={{ padding: '20px 28px', background: 'var(--off-white)', display: 'flex', alignItems: 'center' }}>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '1.4', letterSpacing: '-0.02em', color: '#002910', margin: 0 }}>Track citation rates, monitor competitor mentions, and optimize your content to rank in ChatGPT, Gemini, and Perplexity.</p>
                </div>
              </div>

              {/* Row: Small Text */}
              <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr' }}>
                <div style={{ padding: '20px', borderRight: '1px solid var(--stroke-green)', background: '#fff' }}>
                  <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '2px' }}>Small Text</div>
                  <div style={{ fontSize: '12px', color: '#a0afb0', fontFamily: 'var(--font-mono)' }}>Saans Mono</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '8px', lineHeight: '1.5' }}>14px / ALL CAPS<br />tracking 0.06em / line-height: 1.3</div>
                </div>
                <div style={{ padding: '20px 28px', background: 'var(--off-white)', display: 'flex', alignItems: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em', lineHeight: '1.3', color: '#002910' }}>Content Engineering Platform</div>
                </div>
              </div>
            </div>

            {/* FULL TYPE SCALE REFERENCE */}
            <div className="component-label" style={{ marginBottom: '14px' }}>Full scale reference</div>
            <div className="subsection">
              <div className="type-specimen">
                <div className="t-h1-serif">Content Wins.</div>
                <div className="type-meta">
                  <div className="type-label">H1 / Large Headline</div>
                  <div className="type-spec">Serrif VF · 96px · weight 400<br />tracking −0.02em · line-height 1.0</div>
                </div>
              </div>
              <div className="type-specimen">
                <div className="t-h1-sans">Content Wins.</div>
                <div className="type-meta">
                  <div className="type-label">H1 Sans</div>
                  <div className="type-spec">Saans · 72px · weight 400<br />tracking −0.02em · line-height 1.0</div>
                </div>
              </div>
              <div className="type-specimen">
                <div className="t-h2-serif">AEO is the new SEO</div>
                <div className="type-meta">
                  <div className="type-label">H2 Serif</div>
                  <div className="type-spec">Serrif VF · 56px · weight 400<br />tracking −0.02em</div>
                </div>
              </div>
              <div className="type-specimen">
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '40px', lineHeight: '1.04', letterSpacing: '-0.02em', color: '#001408' }}>Go from insights → action → results.</div>
                <div className="type-meta">
                  <div className="type-label">H5 Serif</div>
                  <div className="type-spec">Serrif VF · 40px · weight 400<br />tracking −0.02em · line-height 1.04</div>
                </div>
              </div>
              <div className="type-specimen">
                <div className="t-body-lg">AirOps helps content teams measure and improve their visibility in AI-generated answers across ChatGPT, Perplexity, and Google.</div>
                <div className="type-meta">
                  <div className="type-label">Large Body</div>
                  <div className="type-spec">Saans · 24px · weight 400<br />tracking 0.02em · line-height 1.3</div>
                </div>
              </div>
              <div className="type-specimen">
                <div className="t-body">Track citation rates, monitor competitor mentions, and optimize your content to rank in ChatGPT, Gemini, and Perplexity.</div>
                <div className="type-meta">
                  <div className="type-label">Body</div>
                  <div className="type-spec">Saans · 16px · weight 400<br />tracking −0.02em · line-height 1.4</div>
                </div>
              </div>
              <div className="type-specimen">
                <div className="t-mono">Content Engineering Platform</div>
                <div className="type-meta">
                  <div className="type-label">Small Text / Eyebrow</div>
                  <div className="type-spec">Saans Mono Medium · 14px<br />ALL CAPS · tracking 0.06em · line-height 1.3</div>
                </div>
              </div>
            </div>

            <div className="code-label">Font families</div>
            <div className="code-block">{`/* Typography */
--font-serif: 'Serrif', Georgia, serif;
--font-sans:  'Saans', 'Helvetica Neue', sans-serif;
--font-mono:  'Saans Mono', 'DM Mono', monospace;

/* Headlines use Serrif, negative tracking */
h1 { font-family: var(--font-serif); letter-spacing: -2px; }

/* Body copy uses Saans */
body { font-family: var(--font-sans); }

/* Labels, pills, and code use Saans Mono */
.label { font-family: var(--font-mono); text-transform: uppercase; }`}</div>
          </section>

          {/* 03 COMPONENTS */}
          <section className="section" id="components">
            <div className="section-header">
              <span className="section-num">03</span>
              <h2>Components</h2>
            </div>

            {/* BUTTONS */}
            <div className="subsection">
              <div className="component-label">Buttons — light context</div>
              <div className="component-row" style={{ alignItems: 'center' }}>
                <button className="btn btn-primary">Primary Button →</button>
                <button className="btn btn-secondary">Secondary Button →</button>
                <button className="btn btn-back">← Back</button>
                <button className="btn btn-text">Text Button →</button>
                <button className="btn btn-small">Small Button →</button>
              </div>
              <div className="component-label" style={{ marginTop: '24px' }}>Buttons — dark context</div>
              <div className="component-row" style={{ alignItems: 'center', background: '#00250e', padding: '20px', marginTop: 0 }}>
                <button className="btn btn-primary">Primary Button →</button>
                <button className="btn btn-secondary-dark">Secondary Button →</button>
                <button className="btn btn-text-dark">Text Button →</button>
                <button className="btn btn-small">Small Button →</button>
              </div>
            </div>

            {/* PILLS */}
            <div className="subsection">
              <div className="component-label">Pills & Tags — always DM Mono, ALL CAPS</div>
              <div className="component-row">
                <span className="pill pill-green-light">All Articles</span>
                <span className="pill pill-green">How-To</span>
                <span className="pill pill-indigo">Featured</span>
                <span className="pill pill-pink">Best Practices</span>
                <span className="pill pill-dark">AEO Platform</span>
                <span className="pill pill-yellow">New Feature</span>
              </div>
            </div>

            {/* CARDS */}
            <div className="subsection">
              <div className="component-label">Cards — normal, dark, accent</div>
              <div className="card-grid">
                <div className="card">
                  <div className="card-tag"><span className="pill pill-green-light">Citations360</span></div>
                  <div className="card-title">Track AI citations across every major LLM</div>
                  <div className="card-body">See exactly when and where your content gets cited by ChatGPT, Gemini, and Perplexity.</div>
                </div>
                <div className="card card-dark">
                  <div className="card-tag"><span className="pill pill-dark">Page360</span></div>
                  <div className="card-title">Unified content performance</div>
                  <div className="card-body">Combine AEO citations, GSC, and GA4 in one view. No more tab switching.</div>
                </div>
                <div className="card card-accent">
                  <div className="card-tag"><span className="pill pill-dark">New</span></div>
                  <div className="card-title">AEO scoring at scale</div>
                  <div className="card-body">Measure how optimized your pages are for AI answer engines, page by page.</div>
                </div>
              </div>
            </div>

            {/* FORMS */}
            <div className="subsection">
              <div className="component-label">Form Inputs</div>
              <div className="form-group">
                <label className="form-label">Email address</label>
                <input className="form-input" type="email" placeholder="you@company.com" />
                <span className="input-hint">We'll only send you product updates.</span>
              </div>
              <div className="form-group">
                <label className="form-label">Company</label>
                <input className="form-input" type="text" placeholder="Acme Corp" />
              </div>
              <button className="btn btn-primary" style={{ marginTop: '8px' }}>Get a Demo →</button>
            </div>

            {/* TABLES */}
            <div className="subsection">
              <div className="component-label">Data Tables</div>
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Page URL</th>
                      <th>Citations</th>
                      <th>Citation Rate</th>
                      <th>Trend</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>/blog/aeo-guide</code></td>
                      <td>142</td>
                      <td>38%</td>
                      <td style={{ color: 'var(--green-500)' }}>+12%</td>
                    </tr>
                    <tr>
                      <td><code>/blog/citations-matter</code></td>
                      <td>98</td>
                      <td>31%</td>
                      <td style={{ color: 'var(--green-500)' }}>+8%</td>
                    </tr>
                    <tr>
                      <td><code>/docs/page360</code></td>
                      <td>76</td>
                      <td>24%</td>
                      <td style={{ color: '#ff5996' }}>-3%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="code-label">Component Rules</div>
            <div className="code-block">{`/* AirOps Component Rules */

/* 1. NO border-radius — sharp corners everywhere (except primary buttons) */
border-radius: 0;

/* 2. Brand border style */
border: 1px solid #d4e8da;

/* 3. Pill labels = Saans Mono, ALL CAPS */
.pill {
  font-family: 'Saans Mono', monospace;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 8px 16px;
  border: 1px solid;
  border-radius: 5px;
}

/* 4. Buttons */
.btn-primary { background: #00ff64; color: #002910; border-radius: 58px; }
.btn-primary:hover { background: #00cc50; }
.btn-secondary { background: #eef9f3; color: #002910; border-radius: 0; }
.btn-secondary:hover { background: #ccffe0; }`}</div>
          </section>

          {/* 04 LOGO */}
          <section className="section" id="logo">
            <div className="section-header">
              <span className="section-num">04</span>
              <h2>Logo & Imagery</h2>
            </div>

            <div className="component-label">Logo on different backgrounds</div>
            <div className="logo-grid">
              <div className="logo-block">
                <div className="logo-svg">
                  <div style={{ width: '120px' }}>
                    <svg width="100" height="32" viewBox="0 0 100 32" fill="none">
                      <path d="M14.2683 8.35377V11.2588C12.9587 9.16447 10.9253 7.88086 8.40935 7.88086C3.03288 7.88086 0 11.833 0 17.1364C0 22.4735 3.06735 26.5608 8.47828 26.5608C10.9942 26.5608 12.9931 25.2772 14.2683 23.1829V26.0879H18.473V8.35377H14.2683ZM9.30543 23.0478C6.23809 23.0478 4.48039 20.2441 4.48039 17.1364C4.48039 14.0963 6.20362 11.4277 9.37436 11.4277C11.9937 11.4277 14.2339 13.2856 14.2339 17.0688C14.2339 20.7846 12.0971 23.0478 9.30543 23.0478Z" fill="#0B0E16"/>
                      <path d="M22.0938 8.35547V26.0896H26.5741V8.35547H22.0938Z" fill="#0B0E16"/>
                      <path d="M34.832 12.7461V8.3548H30.3516V26.0889H34.832V15.9551C34.832 13.3541 36.6586 12.307 38.3818 12.307C39.3813 12.307 40.4152 12.5772 40.9666 12.7799V8.05078C38.0372 8.05078 35.6246 9.77353 34.832 12.7461Z" fill="#0B0E16"/>
                      <path d="M42.0625 13.7594C42.0625 19.2655 45.9225 23.1839 51.4713 23.1839C57.0546 23.1839 60.8804 19.2655 60.8804 13.7594C60.8804 8.35475 57.0546 4.50391 51.4713 4.50391C45.9225 4.50391 42.0625 8.35475 42.0625 13.7594ZM56.3998 13.7594C56.3998 17.2049 54.5042 19.6708 51.4713 19.6708C48.404 19.6708 46.5429 17.2049 46.5429 13.7594C46.5429 10.4491 48.404 8.05073 51.4713 8.05073C54.5042 8.05073 56.3998 10.4491 56.3998 13.7594Z" fill="#0B0E16"/>
                      <path d="M73.3738 7.88086C70.7545 7.88086 68.6177 9.40093 67.4804 11.833V8.35377H63V31.9993H67.4804V22.9127C68.7556 25.1083 71.1336 26.5608 73.6496 26.5608C78.5435 26.5608 81.9555 22.8113 81.9555 17.4404C81.9555 11.7993 78.4057 7.88086 73.3738 7.88086ZM72.5811 23.2505C69.5827 23.2505 67.4804 20.7846 67.4804 17.2715C67.4804 13.6571 69.5827 11.1237 72.5811 11.1237C75.4417 11.1237 77.4751 13.7247 77.4751 17.4066C77.4751 20.8521 75.4417 23.2505 72.5811 23.2505Z" fill="#0B0E16"/>
                      <path d="M83.3906 19.9401C83.3906 23.1491 86.2856 26.5608 92.0757 26.5608C97.9002 26.5608 100.003 23.2167 100.003 20.6157C100.003 16.6297 95.212 15.9203 92.0068 15.3123C89.8355 14.9407 88.4569 14.6367 88.4569 13.4207C88.4569 12.0357 90.0078 11.1575 91.6621 11.1575C93.9023 11.1575 94.7639 12.6775 94.8329 14.2989H99.3133C99.3133 11.6641 97.4177 7.88086 91.5587 7.88086C86.4924 7.88086 83.9765 10.6845 83.9765 13.6909C83.9765 17.9809 88.836 18.42 92.0412 19.028C93.9023 19.3658 95.5221 19.7712 95.5221 21.0886C95.5221 22.406 93.9368 23.2842 92.248 23.2842C90.6626 23.2842 87.871 22.406 87.871 19.9401H83.3906Z" fill="#0B0E16"/>
                      <path d="M24.4093 6.19288C22.5697 6.19288 21.25 4.89943 21.25 3.13563C21.25 1.37184 22.5697 0 24.4093 0C26.1688 0 27.5685 1.37184 27.5685 3.13563C27.5685 4.89943 26.1688 6.19288 24.4093 6.19288Z" fill="#0B0E16"/>
                    </svg>
                  </div>
                </div>
                <div className="logo-block-label">On white</div>
              </div>

              <div className="logo-block on-dark">
                <div className="logo-svg">
                  <div style={{ width: '120px' }}>
                    <svg width="100" height="32" viewBox="0 0 100 32" fill="none">
                      <path d="M14.2683 8.35377V11.2588C12.9587 9.16447 10.9253 7.88086 8.40935 7.88086C3.03288 7.88086 0 11.833 0 17.1364C0 22.4735 3.06735 26.5608 8.47828 26.5608C10.9942 26.5608 12.9931 25.2772 14.2683 23.1829V26.0879H18.473V8.35377H14.2683ZM9.30543 23.0478C6.23809 23.0478 4.48039 20.2441 4.48039 17.1364C4.48039 14.0963 6.20362 11.4277 9.37436 11.4277C11.9937 11.4277 14.2339 13.2856 14.2339 17.0688C14.2339 20.7846 12.0971 23.0478 9.30543 23.0478Z" fill="white"/>
                      <path d="M22.0938 8.35547V26.0896H26.5741V8.35547H22.0938Z" fill="white"/>
                      <path d="M34.832 12.7461V8.3548H30.3516V26.0889H34.832V15.9551C34.832 13.3541 36.6586 12.307 38.3818 12.307C39.3813 12.307 40.4152 12.5772 40.9666 12.7799V8.05078C38.0372 8.05078 35.6246 9.77353 34.832 12.7461Z" fill="white"/>
                      <path d="M42.0625 13.7594C42.0625 19.2655 45.9225 23.1839 51.4713 23.1839C57.0546 23.1839 60.8804 19.2655 60.8804 13.7594C60.8804 8.35475 57.0546 4.50391 51.4713 4.50391C45.9225 4.50391 42.0625 8.35475 42.0625 13.7594ZM56.3998 13.7594C56.3998 17.2049 54.5042 19.6708 51.4713 19.6708C48.404 19.6708 46.5429 17.2049 46.5429 13.7594C46.5429 10.4491 48.404 8.05073 51.4713 8.05073C54.5042 8.05073 56.3998 10.4491 56.3998 13.7594Z" fill="white"/>
                      <path d="M73.3738 7.88086C70.7545 7.88086 68.6177 9.40093 67.4804 11.833V8.35377H63V31.9993H67.4804V22.9127C68.7556 25.1083 71.1336 26.5608 73.6496 26.5608C78.5435 26.5608 81.9555 22.8113 81.9555 17.4404C81.9555 11.7993 78.4057 7.88086 73.3738 7.88086ZM72.5811 23.2505C69.5827 23.2505 67.4804 20.7846 67.4804 17.2715C67.4804 13.6571 69.5827 11.1237 72.5811 11.1237C75.4417 11.1237 77.4751 13.7247 77.4751 17.4066C77.4751 20.8521 75.4417 23.2505 72.5811 23.2505Z" fill="white"/>
                      <path d="M83.3906 19.9401C83.3906 23.1491 86.2856 26.5608 92.0757 26.5608C97.9002 26.5608 100.003 23.2167 100.003 20.6157C100.003 16.6297 95.212 15.9203 92.0068 15.3123C89.8355 14.9407 88.4569 14.6367 88.4569 13.4207C88.4569 12.0357 90.0078 11.1575 91.6621 11.1575C93.9023 11.1575 94.7639 12.6775 94.8329 14.2989H99.3133C99.3133 11.6641 97.4177 7.88086 91.5587 7.88086C86.4924 7.88086 83.9765 10.6845 83.9765 13.6909C83.9765 17.9809 88.836 18.42 92.0412 19.028C93.9023 19.3658 95.5221 19.7712 95.5221 21.0886C95.5221 22.406 93.9368 23.2842 92.248 23.2842C90.6626 23.2842 87.871 22.406 87.871 19.9401H83.3906Z" fill="white"/>
                      <path d="M24.4093 6.19288C22.5697 6.19288 21.25 4.89943 21.25 3.13563C21.25 1.37184 22.5697 0 24.4093 0C26.1688 0 27.5685 1.37184 27.5685 3.13563C27.5685 4.89943 26.1688 6.19288 24.4093 6.19288Z" fill="white"/>
                    </svg>
                  </div>
                </div>
                <div className="logo-block-label">On forest dark</div>
              </div>

              <div className="logo-block on-black">
                <div className="logo-svg">
                  <div style={{ width: '120px' }}>
                    <svg width="100" height="32" viewBox="0 0 100 32" fill="none">
                      <path d="M14.2683 8.35377V11.2588C12.9587 9.16447 10.9253 7.88086 8.40935 7.88086C3.03288 7.88086 0 11.833 0 17.1364C0 22.4735 3.06735 26.5608 8.47828 26.5608C10.9942 26.5608 12.9931 25.2772 14.2683 23.1829V26.0879H18.473V8.35377H14.2683ZM9.30543 23.0478C6.23809 23.0478 4.48039 20.2441 4.48039 17.1364C4.48039 14.0963 6.20362 11.4277 9.37436 11.4277C11.9937 11.4277 14.2339 13.2856 14.2339 17.0688C14.2339 20.7846 12.0971 23.0478 9.30543 23.0478Z" fill="white"/>
                      <path d="M22.0938 8.35547V26.0896H26.5741V8.35547H22.0938Z" fill="white"/>
                      <path d="M34.832 12.7461V8.3548H30.3516V26.0889H34.832V15.9551C34.832 13.3541 36.6586 12.307 38.3818 12.307C39.3813 12.307 40.4152 12.5772 40.9666 12.7799V8.05078C38.0372 8.05078 35.6246 9.77353 34.832 12.7461Z" fill="white"/>
                      <path d="M42.0625 13.7594C42.0625 19.2655 45.9225 23.1839 51.4713 23.1839C57.0546 23.1839 60.8804 19.2655 60.8804 13.7594C60.8804 8.35475 57.0546 4.50391 51.4713 4.50391C45.9225 4.50391 42.0625 8.35475 42.0625 13.7594ZM56.3998 13.7594C56.3998 17.2049 54.5042 19.6708 51.4713 19.6708C48.404 19.6708 46.5429 17.2049 46.5429 13.7594C46.5429 10.4491 48.404 8.05073 51.4713 8.05073C54.5042 8.05073 56.3998 10.4491 56.3998 13.7594Z" fill="white"/>
                      <path d="M73.3738 7.88086C70.7545 7.88086 68.6177 9.40093 67.4804 11.833V8.35377H63V31.9993H67.4804V22.9127C68.7556 25.1083 71.1336 26.5608 73.6496 26.5608C78.5435 26.5608 81.9555 22.8113 81.9555 17.4404C81.9555 11.7993 78.4057 7.88086 73.3738 7.88086ZM72.5811 23.2505C69.5827 23.2505 67.4804 20.7846 67.4804 17.2715C67.4804 13.6571 69.5827 11.1237 72.5811 11.1237C75.4417 11.1237 77.4751 13.7247 77.4751 17.4066C77.4751 20.8521 75.4417 23.2505 72.5811 23.2505Z" fill="white"/>
                      <path d="M83.3906 19.9401C83.3906 23.1491 86.2856 26.5608 92.0757 26.5608C97.9002 26.5608 100.003 23.2167 100.003 20.6157C100.003 16.6297 95.212 15.9203 92.0068 15.3123C89.8355 14.9407 88.4569 14.6367 88.4569 13.4207C88.4569 12.0357 90.0078 11.1575 91.6621 11.1575C93.9023 11.1575 94.7639 12.6775 94.8329 14.2989H99.3133C99.3133 11.6641 97.4177 7.88086 91.5587 7.88086C86.4924 7.88086 83.9765 10.6845 83.9765 13.6909C83.9765 17.9809 88.836 18.42 92.0412 19.028C93.9023 19.3658 95.5221 19.7712 95.5221 21.0886C95.5221 22.406 93.9368 23.2842 92.248 23.2842C90.6626 23.2842 87.871 22.406 87.871 19.9401H83.3906Z" fill="white"/>
                      <path d="M24.4093 6.19288C22.5697 6.19288 21.25 4.89943 21.25 3.13563C21.25 1.37184 22.5697 0 24.4093 0C26.1688 0 27.5685 1.37184 27.5685 3.13563C27.5685 4.89943 26.1688 6.19288 24.4093 6.19288Z" fill="white"/>
                    </svg>
                  </div>
                </div>
                <div className="logo-block-label">On near black</div>
              </div>

              <div className="logo-block on-green">
                <div className="logo-svg">
                  <div style={{ width: '120px' }}>
                    <svg width="100" height="32" viewBox="0 0 100 32" fill="none">
                      <path d="M14.2683 8.35377V11.2588C12.9587 9.16447 10.9253 7.88086 8.40935 7.88086C3.03288 7.88086 0 11.833 0 17.1364C0 22.4735 3.06735 26.5608 8.47828 26.5608C10.9942 26.5608 12.9931 25.2772 14.2683 23.1829V26.0879H18.473V8.35377H14.2683ZM9.30543 23.0478C6.23809 23.0478 4.48039 20.2441 4.48039 17.1364C4.48039 14.0963 6.20362 11.4277 9.37436 11.4277C11.9937 11.4277 14.2339 13.2856 14.2339 17.0688C14.2339 20.7846 12.0971 23.0478 9.30543 23.0478Z" fill="#0B0E16"/>
                      <path d="M22.0938 8.35547V26.0896H26.5741V8.35547H22.0938Z" fill="#0B0E16"/>
                      <path d="M34.832 12.7461V8.3548H30.3516V26.0889H34.832V15.9551C34.832 13.3541 36.6586 12.307 38.3818 12.307C39.3813 12.307 40.4152 12.5772 40.9666 12.7799V8.05078C38.0372 8.05078 35.6246 9.77353 34.832 12.7461Z" fill="#0B0E16"/>
                      <path d="M42.0625 13.7594C42.0625 19.2655 45.9225 23.1839 51.4713 23.1839C57.0546 23.1839 60.8804 19.2655 60.8804 13.7594C60.8804 8.35475 57.0546 4.50391 51.4713 4.50391C45.9225 4.50391 42.0625 8.35475 42.0625 13.7594ZM56.3998 13.7594C56.3998 17.2049 54.5042 19.6708 51.4713 19.6708C48.404 19.6708 46.5429 17.2049 46.5429 13.7594C46.5429 10.4491 48.404 8.05073 51.4713 8.05073C54.5042 8.05073 56.3998 10.4491 56.3998 13.7594Z" fill="#0B0E16"/>
                      <path d="M73.3738 7.88086C70.7545 7.88086 68.6177 9.40093 67.4804 11.833V8.35377H63V31.9993H67.4804V22.9127C68.7556 25.1083 71.1336 26.5608 73.6496 26.5608C78.5435 26.5608 81.9555 22.8113 81.9555 17.4404C81.9555 11.7993 78.4057 7.88086 73.3738 7.88086ZM72.5811 23.2505C69.5827 23.2505 67.4804 20.7846 67.4804 17.2715C67.4804 13.6571 69.5827 11.1237 72.5811 11.1237C75.4417 11.1237 77.4751 13.7247 77.4751 17.4066C77.4751 20.8521 75.4417 23.2505 72.5811 23.2505Z" fill="#0B0E16"/>
                      <path d="M83.3906 19.9401C83.3906 23.1491 86.2856 26.5608 92.0757 26.5608C97.9002 26.5608 100.003 23.2167 100.003 20.6157C100.003 16.6297 95.212 15.9203 92.0068 15.3123C89.8355 14.9407 88.4569 14.6367 88.4569 13.4207C88.4569 12.0357 90.0078 11.1575 91.6621 11.1575C93.9023 11.1575 94.7639 12.6775 94.8329 14.2989H99.3133C99.3133 11.6641 97.4177 7.88086 91.5587 7.88086C86.4924 7.88086 83.9765 10.6845 83.9765 13.6909C83.9765 17.9809 88.836 18.42 92.0412 19.028C93.9023 19.3658 95.5221 19.7712 95.5221 21.0886C95.5221 22.406 93.9368 23.2842 92.248 23.2842C90.6626 23.2842 87.871 22.406 87.871 19.9401H83.3906Z" fill="#0B0E16"/>
                      <path d="M24.4093 6.19288C22.5697 6.19288 21.25 4.89943 21.25 3.13563C21.25 1.37184 22.5697 0 24.4093 0C26.1688 0 27.5685 1.37184 27.5685 3.13563C27.5685 4.89943 26.1688 6.19288 24.4093 6.19288Z" fill="#0B0E16"/>
                    </svg>
                  </div>
                </div>
                <div className="logo-block-label">On interaction green</div>
              </div>
            </div>

            <div className="code-label">Imagery guidelines</div>
            <div className="code-block">{`/* AirOps Imagery Rules */

Photos & illustrations:
✓  Real people, real work contexts
✓  High contrast, editorial style
✓  Green overlays or green-tinted treatment on dark backgrounds
✗  Stock photo clichés (handshakes, lightbulbs, "teamwork" poses)
✗  Purple/blue gradient AI aesthetics

Data viz (charts, graphs):
✓  Sharp corners, no rounded bars
✓  Green palette: #eef8f0 → #0a2e14, accent #00e676
✓  Serrif headlines on charts
✓  Saans Mono ALL-CAPS labels with #EEFF8C fill pills
✓  1px #d4e8da borders, white background`}</div>
          </section>

          {/* 05 SPACING */}
          <section className="section" id="spacing">
            <div className="section-header">
              <span className="section-num">05</span>
              <h2>Spacing & Layout</h2>
            </div>

            <div className="component-label">8px base grid</div>
            <div className="spacing-row">
              <div className="spacing-item">
                <div className="spacing-block" style={{ height: '4px' }}></div>
                <div className="spacing-label">4px<br />xs</div>
              </div>
              <div className="spacing-item">
                <div className="spacing-block" style={{ height: '8px' }}></div>
                <div className="spacing-label">8px<br />sm</div>
              </div>
              <div className="spacing-item">
                <div className="spacing-block" style={{ height: '16px' }}></div>
                <div className="spacing-label">16px<br />md</div>
              </div>
              <div className="spacing-item">
                <div className="spacing-block" style={{ height: '24px' }}></div>
                <div className="spacing-label">24px<br />lg</div>
              </div>
              <div className="spacing-item">
                <div className="spacing-block" style={{ height: '32px' }}></div>
                <div className="spacing-label">32px<br />xl</div>
              </div>
              <div className="spacing-item">
                <div className="spacing-block" style={{ height: '48px' }}></div>
                <div className="spacing-label">48px<br />2xl</div>
              </div>
            </div>

            <div className="code-block">{`/* Layout Rules */

Max content width:   1200px
Page horizontal pad: 64px desktop, 24px mobile
Section padding:     72px 64px
Card padding:        28–32px
Component gap:       2px (tight grid, brand look)
Border-radius:       0 (sharp corners, always)`}</div>
          </section>

          {/* 07 SNIPPETS */}
          <section className="section" id="snippets">
            <div className="section-header">
              <span className="section-num">06</span>
              <h2>CSS Snippets</h2>
            </div>

            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '32px', maxWidth: '560px' }}>
              Ready-to-paste snippets for common patterns when building in Claude Code.
            </p>

            <div className="code-label">Dark hero section</div>
            <div className="code-block">{`/* Dark hero — use on landing pages */
.hero-dark {
  background: #002910;
  padding: 80px 64px;
  border-bottom: 1px solid #013a1a;
}

.hero-dark h1 {
  font-family: var(--font-serif);
  font-size: 64px;
  color: var(--off-white);
  letter-spacing: -2px;
  line-height: 0.9;
}`}</div>

            <div className="code-label">Section container</div>
            <div className="code-block">{`/* Standard section wrapper */
.section {
  padding: 72px 64px;
  border-bottom: 1px solid var(--stroke-green);
  max-width: 1200px;
}`}</div>
          </section>

          {/* 07 CONTAINERS */}
          <section className="section" id="containers">
            <div className="section-header">
              <span className="section-num">07</span>
              <h2>Container Styles</h2>
            </div>

            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '15px', lineHeight: '1.6' }}>
              Four surface styles for page sections. All share the same content structure: mono tag → H2 (serif line 1 + sans line 2) → body copy → buttons.
            </p>

            {/* LIGHT */}
            <div className="component-label" style={{ marginBottom: '14px' }}>Light Style — white bg</div>
            <div style={{ background: '#fff', padding: '48px', border: '1px solid var(--stroke-green)', marginBottom: '8px', textAlign: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
                <span className="pill" style={{ background: '#eef9f3', borderColor: '#057a28', color: '#057a28', borderRadius: '5px', padding: '4px 10px', fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Light Style</span>
                <div style={{ lineHeight: '1', color: '#002910', fontSize: '48px', letterSpacing: '-0.03em' }}>
                  <div style={{ fontFamily: 'var(--font-serif)' }}>H2 line 1 serif</div>
                  <div style={{ fontFamily: 'var(--font-sans)' }}>h2 line 2 sans</div>
                </div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '1.5', color: '#002910', maxWidth: '580px', margin: 0 }}>Regular body lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <button className="btn btn-primary">Primary Button →</button>
                  <button className="btn btn-secondary">Secondary Button →</button>
                </div>
              </div>
            </div>

            {/* CANVAS */}
            <div className="component-label" style={{ marginBottom: '14px', marginTop: '32px' }}>Canvas Style — white bg + dot grid</div>
            <div style={{ background: '#fff', backgroundImage: 'radial-gradient(circle,#d4e8da 1px,transparent 1px)', backgroundSize: '24px 24px', padding: '96px 48px', border: '1px solid var(--stroke-green)', marginBottom: '8px', textAlign: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
                <span className="pill" style={{ background: '#eef9f3', borderColor: '#057a28', color: '#057a28', borderRadius: '5px', padding: '4px 10px', fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Canvas Style</span>
                <div style={{ lineHeight: '1', color: '#002910', fontSize: '48px', letterSpacing: '-0.03em' }}>
                  <div style={{ fontFamily: 'var(--font-serif)' }}>H2 line 1 serif</div>
                  <div style={{ fontFamily: 'var(--font-sans)' }}>h2 line 2 sans</div>
                </div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '1.5', color: '#002910', maxWidth: '580px', margin: 0 }}>Regular body lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.</p>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <button className="btn btn-primary">Primary Button →</button>
                  <button className="btn btn-secondary">Secondary Button →</button>
                </div>
              </div>
            </div>

            {/* DARK */}
            <div className="component-label" style={{ marginBottom: '14px', marginTop: '32px' }}>Dark Style — dark green bg</div>
            <div style={{ background: '#00250e', padding: '96px 48px', border: '1px solid #057a28', boxShadow: 'inset 0 0 0 1px #057a28', marginBottom: '8px', textAlign: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
                <span className="pill" style={{ background: '#001d0b', borderColor: '#c0ffd2', color: '#c0ffd2', borderRadius: '5px', padding: '4px 10px', fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Dark Style</span>
                <div style={{ lineHeight: '1', color: '#f8fffa', fontSize: '48px', letterSpacing: '-0.03em' }}>
                  <div style={{ fontFamily: 'var(--font-serif)' }}>H2 line 1 serif</div>
                  <div style={{ fontFamily: 'var(--font-sans)' }}>h2 line 2 sans</div>
                </div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '1.5', color: '#f8fffa', maxWidth: '580px', margin: 0 }}>Dark background with off-white text. Use for high-impact hero sections or accent content blocks.</p>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <button className="btn btn-primary">Primary Button →</button>
                  <button className="btn btn-secondary-dark">Secondary Button →</button>
                </div>
              </div>
            </div>

            {/* SPECIAL (INDIGO) */}
            <div className="component-label" style={{ marginBottom: '14px', marginTop: '32px' }}>Special blue mode — indigo bg</div>
            <div style={{ background: '#2626CC', padding: '96px 48px', border: '1px solid #4a4aff', marginBottom: '8px', textAlign: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
                <span className="pill" style={{ background: 'rgba(0,0,0,0.2)', borderColor: '#d0d0ff', color: '#d0d0ff', borderRadius: '5px', padding: '4px 10px', fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Strategy Sessions</span>
                <div style={{ lineHeight: '1.1', color: '#f8fffa', fontSize: '56px', letterSpacing: '-0.03em', maxWidth: '800px' }}>
                  <div style={{ fontFamily: 'var(--font-serif)' }}>Special blue mode</div>
                </div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '1.5', color: '#f8fffa', maxWidth: '580px', margin: 0 }}>Work directly with our expert team to create your content game plan. We'll help you build the systems and train your team to succeed.</p>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginTop: '8px' }}>
                  <input
                    type="text"
                    placeholder="Enter your work email"
                    style={{
                      background: 'rgba(0,0,0,0.3)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: '#fff',
                      padding: '14px 20px',
                      fontSize: '15px',
                      width: '280px',
                      fontFamily: 'var(--font-sans)'
                    }}
                  />
                  <button className="btn btn-primary">Book a Demo →</button>
                </div>
              </div>
            </div>

            {/* PAPER MODE */}
            <div className="component-label" style={{ marginBottom: '14px', marginTop: '32px' }}>Paper mode — soft pink bg</div>
            <div style={{ background: '#fee7fd', padding: '96px 48px', border: '1px solid #e5c5e3', marginBottom: '8px', textAlign: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
                <span className="pill" style={{ background: 'rgba(58,9,44,0.08)', borderColor: '#a85a96', color: '#3a092c', borderRadius: '5px', padding: '4px 10px', fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Strategy Sessions</span>
                <div style={{ lineHeight: '1.1', color: '#3a092c', fontSize: '56px', letterSpacing: '-0.03em', maxWidth: '800px' }}>
                  <div style={{ fontFamily: 'var(--font-serif)' }}>Paper mode</div>
                </div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '1.5', color: '#3a092c', maxWidth: '580px', margin: 0 }}>Work directly with our expert team to create your content game plan. We'll help you build the systems and train your team to succeed.</p>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginTop: '8px' }}>
                  <input
                    type="text"
                    placeholder="Enter your work email"
                    style={{
                      background: 'rgba(58,9,44,0.05)',
                      border: '1px solid rgba(58,9,44,0.15)',
                      color: '#3a092c',
                      padding: '14px 20px',
                      fontSize: '15px',
                      width: '280px',
                      fontFamily: 'var(--font-sans)'
                    }}
                  />
                  <button className="btn btn-primary">Book a Demo →</button>
                </div>
              </div>
            </div>

            <div className="code-label">Container token summary</div>
            <div className="code-block">{`/* Light */
bg: #ffffff  |  text: #002910
pill: bg #eef9f3 / border+text #057a28

/* Canvas */
bg: #ffffff + radial-gradient(#d4e8da 1px, transparent 1px) 24px
text: #002910  |  pill: same as Light

/* Dark */
bg: #00250e  |  text: #f8fffa
double inset border: 1px solid #057a28
pill: bg #001d0b / border+text #c0ffd2
secondary btn: rgba(0,0,0,0.3)

/* Special (Indigo) */
bg: #2626CC  |  text: #f8fffa
pill: bg rgba(0,0,0,0.2) / border+text #d0d0ff
input: rgba(0,0,0,0.3) bg
border: 1px solid #4a4aff

/* Paper Mode */
bg: #fee7fd  |  text: #3a092c
pill: bg rgba(58,9,44,0.08) / border #a85a96 / text #3a092c
input: rgba(58,9,44,0.05) bg
border: 1px solid #e5c5e3

/* Shared H2 pattern */
line-1: Serrif VF  |  line-2: Saans
size: 72px  |  tracking: -0.03em  |  line-height: 1`}</div>
          </section>

          {/* 08 DATA VIZ */}
          <section className="section" id="dataviz">
            <div className="section-header">
              <span className="section-num">08</span>
              <h2>Data Viz</h2>
            </div>

            <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '15px', lineHeight: '1.6', maxWidth: '600px' }}>
              AirOps data visualizations use a strict palette and typographic system. Sharp corners only. Georgia or Serrif VF for headlines. DM Mono for all axis labels, value callouts, and pill tags. Green spectrum palette with #eeff8c as the highlight accent.
            </p>

            {/* GLOBAL TOKENS */}
            <div className="component-label" style={{ marginBottom: '14px' }}>Global tokens — all chart types</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', marginBottom: '40px', fontSize: '13px' }}>
              <div style={{ background: '#fff', border: '1px solid var(--stroke-green)', padding: '20px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>Typography</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--text-primary)', lineHeight: '1.5' }}>
                  <div><strong>Headline:</strong> Serrif VF / Georgia, 40–56px, tracking −0.02em</div>
                  <div><strong>Subhead / subtitle:</strong> DM Mono Medium, 18–24px, tracking −0.02em</div>
                  <div><strong>Axis labels:</strong> DM Mono Regular, 14–18px, #a9a9a9</div>
                  <div><strong>Value callouts:</strong> Saans / DM Mono Medium, 16–20px, #002910</div>
                  <div><strong>Legend:</strong> Saans Medium, 14px</div>
                  <div><strong>Footnote:</strong> DM Mono Medium, 14–18px, 80% opacity</div>
                </div>
              </div>
              <div style={{ background: '#fff', border: '1px solid var(--stroke-green)', padding: '20px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>Palette</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '36px', height: '20px', background: '#ccffe0', border: '1px solid #009b32' }}></div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px' }}>#ccffe0 — primary bar / fill (light)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '36px', height: '20px', background: '#009b32', border: '1px solid #009b32' }}></div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px' }}>#009b32 — primary green / line</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '36px', height: '20px', background: '#eeff8c', border: '1px solid #b8c400' }}></div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px' }}>#eeff8c — highlight / accent bar</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '36px', height: '20px', background: '#001408', border: '1px solid #001408' }}></div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px' }}>#001408 — near black / text</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '36px', height: '20px', background: '#f8fffb', border: '1px solid #009b32' }}></div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px' }}>#f8fffb — background (light)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '36px', height: '20px', background: '#00250e', border: '1px solid #009b32' }}></div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px' }}>#00250e — background (dark)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '36px', height: '20px', background: '#a9a9a9', border: '1px solid #ccc' }}></div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px' }}>#a9a9a9 — axes / grid lines</span>
                  </div>
                </div>
              </div>
            </div>

            {/* VISUAL EXAMPLES */}

            {/* 1. TABLE INFOGRAPHIC */}
            <div className="component-label" style={{ marginBottom: '14px', marginTop: '8px' }}>1. Table infographic — numbered list format</div>
            <div style={{ background: '#f8fffb', border: '1.6px solid #009b32', maxWidth: '560px', marginBottom: '8px' }}>
              <div style={{ padding: '20px 20px 14px' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', lineHeight: '1.05', letterSpacing: '-0.02em', color: '#001408', marginBottom: '6px' }}>15 Ways to Get Cited</div>
                <div style={{ fontSize: '12px', color: '#4b4d58', lineHeight: '1.4', maxWidth: '320px' }}>Pages updated within 3 months are 3× more likely to appear.</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', background: '#009b32' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#fff', padding: '7px 10px' }}>What Is It</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#fff', padding: '7px 10px' }}>Description</span>
              </div>
              <div style={{ borderTop: '1.6px solid #009b32' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', borderBottom: '1px solid #009b32', background: '#fff' }}>
                  <div style={{ padding: '10px', borderRight: '1px solid #009b32', fontSize: '11px', fontWeight: 700, color: '#009b32' }}>1. Keep Content Fresh</div>
                  <div style={{ padding: '10px', fontSize: '11px', color: '#4b4d58', lineHeight: '1.4' }}>3× more likely to be cited. Regular refresh prevents stale content penalty.</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', borderBottom: '1px solid #009b32', background: '#f8fffb' }}>
                  <div style={{ padding: '10px', borderRight: '1px solid #009b32', fontSize: '11px', fontWeight: 700, color: '#009b32' }}>2. Add Structured Schema</div>
                  <div style={{ padding: '10px', fontSize: '11px', color: '#4b4d58', lineHeight: '1.4' }}>Rich markup increases <strong style={{ color: '#009b32' }}>citation likelihood by 13%</strong> across AI and Google.</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', background: '#fff' }}>
                  <div style={{ padding: '10px', borderRight: '1px solid #009b32', fontSize: '11px', fontWeight: 700, color: '#009b32' }}>3. Use Sequential Headings</div>
                  <div style={{ padding: '10px', fontSize: '11px', color: '#4b4d58', lineHeight: '1.4' }}>Properly ordered H2–H4 tags <strong style={{ color: '#009b32' }}>2× your chance of being cited.</strong></div>
                </div>
              </div>
              <div style={{ padding: '10px 14px', display: 'flex', justifyContent: 'flex-end', borderTop: '1.6px solid #009b32', background: '#fff' }}>
                <div style={{ position: 'relative', border: '1px solid #009b32', background: '#fff', padding: '5px 10px' }}>
                  <svg width="44" height="14" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.2683 8.35377V11.2588C12.9587 9.16447 10.9253 7.88086 8.40935 7.88086C3.03288 7.88086 0 11.833 0 17.1364C0 22.4735 3.06735 26.5608 8.47828 26.5608C10.9942 26.5608 12.9931 25.2772 14.2683 23.1829V26.0879H18.473V8.35377H14.2683ZM9.30543 23.0478C6.23809 23.0478 4.48039 20.2441 4.48039 17.1364C4.48039 14.0963 6.20362 11.4277 9.37436 11.4277C11.9937 11.4277 14.2339 13.2856 14.2339 17.0688C14.2339 20.7846 12.0971 23.0478 9.30543 23.0478Z" fill="#0B0E16"/>
                    <path d="M22.0938 8.35547V26.0896H26.5741V8.35547H22.0938Z" fill="#0B0E16"/>
                    <path d="M34.832 12.7461V8.3548H30.3516V26.0889H34.832V15.9551C34.832 13.3541 36.6586 12.307 38.3818 12.307C39.3813 12.307 40.4152 12.5772 40.9666 12.7799V8.05078C38.0372 8.05078 35.6246 9.77353 34.832 12.7461Z" fill="#0B0E16"/>
                    <path d="M42.0625 13.7594C42.0625 19.2655 45.9225 23.1839 51.4713 23.1839C57.0546 23.1839 60.8804 19.2655 60.8804 13.7594C60.8804 8.35475 57.0546 4.50391 51.4713 4.50391C45.9225 4.50391 42.0625 8.35475 42.0625 13.7594ZM56.3998 13.7594C56.3998 17.2049 54.5042 19.6708 51.4713 19.6708C48.404 19.6708 46.5429 17.2049 46.5429 13.7594C46.5429 10.4491 48.404 8.05073 51.4713 8.05073C54.5042 8.05073 56.3998 10.4491 56.3998 13.7594Z" fill="#0B0E16"/>
                    <path d="M73.3738 7.88086C70.7545 7.88086 68.6177 9.40093 67.4804 11.833V8.35377H63V31.9993H67.4804V22.9127C68.7556 25.1083 71.1336 26.5608 73.6496 26.5608C78.5435 26.5608 81.9555 22.8113 81.9555 17.4404C81.9555 11.7993 78.4057 7.88086 73.3738 7.88086ZM72.5811 23.2505C69.5827 23.2505 67.4804 20.7846 67.4804 17.2715C67.4804 13.6571 69.5827 11.1237 72.5811 11.1237C75.4417 11.1237 77.4751 13.7247 77.4751 17.4066C77.4751 20.8521 75.4417 23.2505 72.5811 23.2505Z" fill="#0B0E16"/>
                    <path d="M83.3906 19.9401C83.3906 23.1491 86.2856 26.5608 92.0757 26.5608C97.9002 26.5608 100.003 23.2167 100.003 20.6157C100.003 16.6297 95.212 15.9203 92.0068 15.3123C89.8355 14.9407 88.4569 14.6367 88.4569 13.4207C88.4569 12.0357 90.0078 11.1575 91.6621 11.1575C93.9023 11.1575 94.7639 12.6775 94.8329 14.2989H99.3133C99.3133 11.6641 97.4177 7.88086 91.5587 7.88086C86.4924 7.88086 83.9765 10.6845 83.9765 13.6909C83.9765 17.9809 88.836 18.42 92.0412 19.028C93.9023 19.3658 95.5221 19.7712 95.5221 21.0886C95.5221 22.406 93.9368 23.2842 92.248 23.2842C90.6626 23.2842 87.871 22.406 87.871 19.9401H83.3906Z" fill="#0B0E16"/>
                    <path d="M24.4093 6.19288C22.5697 6.19288 21.25 4.89943 21.25 3.13563C21.25 1.37184 22.5697 0 24.4093 0C26.1688 0 27.5685 1.37184 27.5685 3.13563C27.5685 4.89943 26.1688 6.19288 24.4093 6.19288Z" fill="#0B0E16"/>
                  </svg>
                </div>
              </div>
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)', marginBottom: '40px' }}>bg #f8fffb · outer border 1.6px #009b32 · col header bg #009b32 · rows alternate #fff / #f8fffb · label col 160–210px · numbered items in bold #009b32 · stats bolded #009b32 in description</div>

            {/* 2. NUMBERED LIST INFOGRAPHIC */}
            <div className="component-label" style={{ marginBottom: '14px' }}>2. Numbered list — simple two-column with large number</div>
            <div style={{ position: 'relative', background: '#f8fffb', border: '1px solid #009b32', maxWidth: '480px', padding: '24px', marginBottom: '8px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', lineHeight: '1.05', letterSpacing: '-0.02em', color: '#001408', marginBottom: '20px' }}>Internal Linking<br />Best Practices</div>
              <div style={{ border: '1px solid #009b32' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr', borderBottom: '1px solid #009b32', background: '#fff' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '1px solid #009b32', fontFamily: 'var(--font-serif)', fontSize: '22px', color: '#009b32', padding: '14px' }}>1</div>
                  <div style={{ padding: '14px', fontSize: '13px', color: '#001408', lineHeight: '1.4' }}>Use clear, descriptive anchors</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr', borderBottom: '1px solid #009b32', background: '#f8fffb' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '1px solid #009b32', fontFamily: 'var(--font-serif)', fontSize: '22px', color: '#009b32', padding: '14px' }}>2</div>
                  <div style={{ padding: '14px', fontSize: '13px', color: '#001408', lineHeight: '1.4' }}>Place links early when they matter</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr', borderBottom: '1px solid #009b32', background: '#fff' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '1px solid #009b32', fontFamily: 'var(--font-serif)', fontSize: '22px', color: '#009b32', padding: '14px' }}>3</div>
                  <div style={{ padding: '14px', fontSize: '13px', color: '#001408', lineHeight: '1.4' }}>Link between content-rich pages</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr', background: '#f8fffb' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '1px solid #009b32', fontFamily: 'var(--font-serif)', fontSize: '22px', color: '#009b32', padding: '14px' }}>4</div>
                  <div style={{ padding: '14px', fontSize: '13px', color: '#001408', lineHeight: '1.4' }}>Keep link volume intentional</div>
                </div>
              </div>
              <div style={{ position: 'absolute', bottom: '-1px', right: '-1px', border: '1px solid #009b32', background: '#fff', padding: '6px 12px', display: 'flex', alignItems: 'center' }}>
                <svg width="72" height="23" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.2683 8.35377V11.2588C12.9587 9.16447 10.9253 7.88086 8.40935 7.88086C3.03288 7.88086 0 11.833 0 17.1364C0 22.4735 3.06735 26.5608 8.47828 26.5608C10.9942 26.5608 12.9931 25.2772 14.2683 23.1829V26.0879H18.473V8.35377H14.2683ZM9.30543 23.0478C6.23809 23.0478 4.48039 20.2441 4.48039 17.1364C4.48039 14.0963 6.20362 11.4277 9.37436 11.4277C11.9937 11.4277 14.2339 13.2856 14.2339 17.0688C14.2339 20.7846 12.0971 23.0478 9.30543 23.0478Z" fill="#0B0E16"/>
                  <path d="M22.0938 8.35547V26.0896H26.5741V8.35547H22.0938Z" fill="#0B0E16"/>
                  <path d="M34.832 12.7461V8.3548H30.3516V26.0889H34.832V15.9551C34.832 13.3541 36.6586 12.307 38.3818 12.307C39.3813 12.307 40.4152 12.5772 40.9666 12.7799V8.05078C38.0372 8.05078 35.6246 9.77353 34.832 12.7461Z" fill="#0B0E16"/>
                  <path d="M42.0625 13.7594C42.0625 19.2655 45.9225 23.1839 51.4713 23.1839C57.0546 23.1839 60.8804 19.2655 60.8804 13.7594C60.8804 8.35475 57.0546 4.50391 51.4713 4.50391C45.9225 4.50391 42.0625 8.35475 42.0625 13.7594ZM56.3998 13.7594C56.3998 17.2049 54.5042 19.6708 51.4713 19.6708C48.404 19.6708 46.5429 17.2049 46.5429 13.7594C46.5429 10.4491 48.404 8.05073 51.4713 8.05073C54.5042 8.05073 56.3998 10.4491 56.3998 13.7594Z" fill="#0B0E16"/>
                  <path d="M73.3738 7.88086C70.7545 7.88086 68.6177 9.40093 67.4804 11.833V8.35377H63V31.9993H67.4804V22.9127C68.7556 25.1083 71.1336 26.5608 73.6496 26.5608C78.5435 26.5608 81.9555 22.8113 81.9555 17.4404C81.9555 11.7993 78.4057 7.88086 73.3738 7.88086ZM72.5811 23.2505C69.5827 23.2505 67.4804 20.7846 67.4804 17.2715C67.4804 13.6571 69.5827 11.1237 72.5811 11.1237C75.4417 11.1237 77.4751 13.7247 77.4751 17.4066C77.4751 20.8521 75.4417 23.2505 72.5811 23.2505Z" fill="#0B0E16"/>
                  <path d="M83.3906 19.9401C83.3906 23.1491 86.2856 26.5608 92.0757 26.5608C97.9002 26.5608 100.003 23.2167 100.003 20.6157C100.003 16.6297 95.212 15.9203 92.0068 15.3123C89.8355 14.9407 88.4569 14.6367 88.4569 13.4207C88.4569 12.0357 90.0078 11.1575 91.6621 11.1575C93.9023 11.1575 94.7639 12.6775 94.8329 14.2989H99.3133C99.3133 11.6641 97.4177 7.88086 91.5587 7.88086C86.4924 7.88086 83.9765 10.6845 83.9765 13.6909C83.9765 17.9809 88.836 18.42 92.0412 19.028C93.9023 19.3658 95.5221 19.7712 95.5221 21.0886C95.5221 22.406 93.9368 23.2842 92.248 23.2842C90.6626 23.2842 87.871 22.406 87.871 19.9401H83.3906Z" fill="#0B0E16"/>
                  <path d="M24.4093 6.19288C22.5697 6.19288 21.25 4.89943 21.25 3.13563C21.25 1.37184 22.5697 0 24.4093 0C26.1688 0 27.5685 1.37184 27.5685 3.13563C27.5685 4.89943 26.1688 6.19288 24.4093 6.19288Z" fill="#0B0E16"/>
                </svg>
              </div>
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)', marginBottom: '40px' }}>number col: serif large, green · rows alternate white/#f8fffb · outer + dividers 1px #009b32</div>

            {/* 3. EQUATION / STACKED BLOCKS */}
            <div className="component-label" style={{ marginBottom: '14px' }}>3. Equation / stacked blocks — formula visualization</div>
            <div style={{ position: 'relative', background: '#f8fffb', border: '1px solid #009b32', maxWidth: '480px', padding: '28px', marginBottom: '8px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '34px', lineHeight: '1.05', letterSpacing: '-0.02em', color: '#001408', marginBottom: '22px' }}>3 Principles of<br />Quality Content</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                <div style={{ position: 'relative', border: '1px solid #009b32', background: '#fff', padding: '14px', textAlign: 'center', fontSize: '14px', color: '#001408' }}>Information-gain content</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '28px' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid #009b32', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#009b32', fontWeight: 700 }}>+</div>
                </div>
                <div style={{ position: 'relative', border: '1px solid #009b32', background: '#fff', padding: '14px', textAlign: 'center', fontSize: '14px', color: '#001408' }}>Humans in the loop</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '28px' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid #009b32', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#009b32', fontWeight: 700 }}>+</div>
                </div>
                <div style={{ position: 'relative', border: '1px solid #009b32', background: '#fff', padding: '14px', textAlign: 'center', fontSize: '14px', color: '#001408' }}>High-velocity updates</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '28px' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid #009b32', background: '#009b32', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#fff', fontWeight: 700 }}>=</div>
                </div>
                <div style={{ border: '1px solid #009b32', background: '#009b32', padding: '14px', textAlign: 'center', fontSize: '16px', color: '#fff', fontWeight: 500, letterSpacing: '-0.01em' }}>Quality content</div>
              </div>
              <div style={{ position: 'absolute', bottom: '-1px', right: '-1px', border: '1px solid #009b32', background: '#fff', padding: '6px 12px', display: 'flex', alignItems: 'center' }}>
                <svg width="72" height="23" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.2683 8.35377V11.2588C12.9587 9.16447 10.9253 7.88086 8.40935 7.88086C3.03288 7.88086 0 11.833 0 17.1364C0 22.4735 3.06735 26.5608 8.47828 26.5608C10.9942 26.5608 12.9931 25.2772 14.2683 23.1829V26.0879H18.473V8.35377H14.2683ZM9.30543 23.0478C6.23809 23.0478 4.48039 20.2441 4.48039 17.1364C4.48039 14.0963 6.20362 11.4277 9.37436 11.4277C11.9937 11.4277 14.2339 13.2856 14.2339 17.0688C14.2339 20.7846 12.0971 23.0478 9.30543 23.0478Z" fill="#0B0E16"/>
                  <path d="M22.0938 8.35547V26.0896H26.5741V8.35547H22.0938Z" fill="#0B0E16"/>
                  <path d="M34.832 12.7461V8.3548H30.3516V26.0889H34.832V15.9551C34.832 13.3541 36.6586 12.307 38.3818 12.307C39.3813 12.307 40.4152 12.5772 40.9666 12.7799V8.05078C38.0372 8.05078 35.6246 9.77353 34.832 12.7461Z" fill="#0B0E16"/>
                  <path d="M42.0625 13.7594C42.0625 19.2655 45.9225 23.1839 51.4713 23.1839C57.0546 23.1839 60.8804 19.2655 60.8804 13.7594C60.8804 8.35475 57.0546 4.50391 51.4713 4.50391C45.9225 4.50391 42.0625 8.35475 42.0625 13.7594ZM56.3998 13.7594C56.3998 17.2049 54.5042 19.6708 51.4713 19.6708C48.404 19.6708 46.5429 17.2049 46.5429 13.7594C46.5429 10.4491 48.404 8.05073 51.4713 8.05073C54.5042 8.05073 56.3998 10.4491 56.3998 13.7594Z" fill="#0B0E16"/>
                  <path d="M73.3738 7.88086C70.7545 7.88086 68.6177 9.40093 67.4804 11.833V8.35377H63V31.9993H67.4804V22.9127C68.7556 25.1083 71.1336 26.5608 73.6496 26.5608C78.5435 26.5608 81.9555 22.8113 81.9555 17.4404C81.9555 11.7993 78.4057 7.88086 73.3738 7.88086ZM72.5811 23.2505C69.5827 23.2505 67.4804 20.7846 67.4804 17.2715C67.4804 13.6571 69.5827 11.1237 72.5811 11.1237C75.4417 11.1237 77.4751 13.7247 77.4751 17.4066C77.4751 20.8521 75.4417 23.2505 72.5811 23.2505Z" fill="#0B0E16"/>
                  <path d="M83.3906 19.9401C83.3906 23.1491 86.2856 26.5608 92.0757 26.5608C97.9002 26.5608 100.003 23.2167 100.003 20.6157C100.003 16.6297 95.212 15.9203 92.0068 15.3123C89.8355 14.9407 88.4569 14.6367 88.4569 13.4207C88.4569 12.0357 90.0078 11.1575 91.6621 11.1575C93.9023 11.1575 94.7639 12.6775 94.8329 14.2989H99.3133C99.3133 11.6641 97.4177 7.88086 91.5587 7.88086C86.4924 7.88086 83.9765 10.6845 83.9765 13.6909C83.9765 17.9809 88.836 18.42 92.0412 19.028C93.9023 19.3658 95.5221 19.7712 95.5221 21.0886C95.5221 22.406 93.9368 23.2842 92.248 23.2842C90.6626 23.2842 87.871 22.406 87.871 19.9401H83.3906Z" fill="#0B0E16"/>
                  <path d="M24.4093 6.19288C22.5697 6.19288 21.25 4.89943 21.25 3.13563C21.25 1.37184 22.5697 0 24.4093 0C26.1688 0 27.5685 1.37184 27.5685 3.13563C27.5685 4.89943 26.1688 6.19288 24.4093 6.19288Z" fill="#0B0E16"/>
                </svg>
              </div>
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)', marginBottom: '40px' }}>blocks: 1px #009b32 border, white fill · connector: circle with + or = · result row: #009b32 fill, white text</div>

            {/* 4. LINE CHART */}
            <div className="component-label" style={{ marginBottom: '14px' }}>4. Line chart — time series with projection</div>
            <div style={{ position: 'relative', background: '#f8fffb', border: '1px solid #009b32', padding: '24px', maxWidth: '600px', marginBottom: '8px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', lineHeight: '1.05', letterSpacing: '-0.02em', color: '#001408', marginBottom: '20px' }}>ChatGPT vs Google Traffic</div>
              <div style={{ position: 'relative', border: '1px solid #009b32', background: '#fff', padding: '20px 16px 12px' }}>
                <svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
                  <text x="0" y="18" fontFamily="DM Mono,monospace" fontSize="9" fill="#a9a9a9">4B</text>
                  <text x="0" y="62" fontFamily="DM Mono,monospace" fontSize="9" fill="#a9a9a9">3B</text>
                  <text x="0" y="108" fontFamily="DM Mono,monospace" fontSize="9" fill="#a9a9a9">2B</text>
                  <text x="0" y="154" fontFamily="DM Mono,monospace" fontSize="9" fill="#a9a9a9">1B</text>
                  <text x="0" y="200" fontFamily="DM Mono,monospace" fontSize="9" fill="#a9a9a9">0</text>
                  <line x1="30" y1="200" x2="510" y2="200" stroke="#a9a9a9" strokeWidth="0.5"/>
                  <polyline points="40,150 120,135 200,125 280,115 360,105 440,95" fill="none" stroke="#009b32" strokeWidth="2"/>
                  <polyline points="40,180 120,175 200,172 280,170 360,172 440,175" fill="none" stroke="#eeff8c" strokeWidth="2"/>
                  <polyline points="440,95 480,85 520,75" fill="none" stroke="#009b32" strokeWidth="2" strokeDasharray="4,4" opacity="0.6"/>
                  <text x="445" y="90" fontFamily="DM Mono,monospace" fontSize="10" fill="#009b32">ChatGPT</text>
                  <text x="445" y="170" fontFamily="DM Mono,monospace" fontSize="10" fill="#002910">Google</text>
                  <text x="40" y="215" fontFamily="DM Mono,monospace" fontSize="9" fill="#a9a9a9">2023</text>
                  <text x="280" y="215" fontFamily="DM Mono,monospace" fontSize="9" fill="#a9a9a9">2024</text>
                  <text x="480" y="215" fontFamily="DM Mono,monospace" fontSize="9" fill="#a9a9a9">2025</text>
                </svg>
              </div>
              <div style={{ position: 'absolute', bottom: '-1px', right: '-1px', border: '1px solid #009b32', background: '#fff', padding: '6px 12px', display: 'flex', alignItems: 'center' }}>
                <svg width="72" height="23" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.2683 8.35377V11.2588C12.9587 9.16447 10.9253 7.88086 8.40935 7.88086C3.03288 7.88086 0 11.833 0 17.1364C0 22.4735 3.06735 26.5608 8.47828 26.5608C10.9942 26.5608 12.9931 25.2772 14.2683 23.1829V26.0879H18.473V8.35377H14.2683ZM9.30543 23.0478C6.23809 23.0478 4.48039 20.2441 4.48039 17.1364C4.48039 14.0963 6.20362 11.4277 9.37436 11.4277C11.9937 11.4277 14.2339 13.2856 14.2339 17.0688C14.2339 20.7846 12.0971 23.0478 9.30543 23.0478Z" fill="#0B0E16"/>
                  <path d="M22.0938 8.35547V26.0896H26.5741V8.35547H22.0938Z" fill="#0B0E16"/>
                  <path d="M34.832 12.7461V8.3548H30.3516V26.0889H34.832V15.9551C34.832 13.3541 36.6586 12.307 38.3818 12.307C39.3813 12.307 40.4152 12.5772 40.9666 12.7799V8.05078C38.0372 8.05078 35.6246 9.77353 34.832 12.7461Z" fill="#0B0E16"/>
                  <path d="M42.0625 13.7594C42.0625 19.2655 45.9225 23.1839 51.4713 23.1839C57.0546 23.1839 60.8804 19.2655 60.8804 13.7594C60.8804 8.35475 57.0546 4.50391 51.4713 4.50391C45.9225 4.50391 42.0625 8.35475 42.0625 13.7594ZM56.3998 13.7594C56.3998 17.2049 54.5042 19.6708 51.4713 19.6708C48.404 19.6708 46.5429 17.2049 46.5429 13.7594C46.5429 10.4491 48.404 8.05073 51.4713 8.05073C54.5042 8.05073 56.3998 10.4491 56.3998 13.7594Z" fill="#0B0E16"/>
                  <path d="M73.3738 7.88086C70.7545 7.88086 68.6177 9.40093 67.4804 11.833V8.35377H63V31.9993H67.4804V22.9127C68.7556 25.1083 71.1336 26.5608 73.6496 26.5608C78.5435 26.5608 81.9555 22.8113 81.9555 17.4404C81.9555 11.7993 78.4057 7.88086 73.3738 7.88086ZM72.5811 23.2505C69.5827 23.2505 67.4804 20.7846 67.4804 17.2715C67.4804 13.6571 69.5827 11.1237 72.5811 11.1237C75.4417 11.1237 77.4751 13.7247 77.4751 17.4066C77.4751 20.8521 75.4417 23.2505 72.5811 23.2505Z" fill="#0B0E16"/>
                  <path d="M83.3906 19.9401C83.3906 23.1491 86.2856 26.5608 92.0757 26.5608C97.9002 26.5608 100.003 23.2167 100.003 20.6157C100.003 16.6297 95.212 15.9203 92.0068 15.3123C89.8355 14.9407 88.4569 14.6367 88.4569 13.4207C88.4569 12.0357 90.0078 11.1575 91.6621 11.1575C93.9023 11.1575 94.7639 12.6775 94.8329 14.2989H99.3133C99.3133 11.6641 97.4177 7.88086 91.5587 7.88086C86.4924 7.88086 83.9765 10.6845 83.9765 13.6909C83.9765 17.9809 88.836 18.42 92.0412 19.028C93.9023 19.3658 95.5221 19.7712 95.5221 21.0886C95.5221 22.406 93.9368 23.2842 92.248 23.2842C90.6626 23.2842 87.871 22.406 87.871 19.9401H83.3906Z" fill="#0B0E16"/>
                  <path d="M24.4093 6.19288C22.5697 6.19288 21.25 4.89943 21.25 3.13563C21.25 1.37184 22.5697 0 24.4093 0C26.1688 0 27.5685 1.37184 27.5685 3.13563C27.5685 4.89943 26.1688 6.19288 24.4093 6.19288Z" fill="#0B0E16"/>
                </svg>
              </div>
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)', marginBottom: '40px' }}>chart area: white bg, 1px #009b32 border · lines: #009b32 (data), #eeff8c (comparison) · axes: DM Mono 9px #a9a9a9 · projections: dashed stroke, 0.6 opacity</div>

            <div className="code-label">Data visualization guidelines</div>
            <div className="code-block">{`/* AirOps Data Viz Rules */

Charts & graphs:
✓  Sharp corners, no rounded bars
✓  Green palette: #eef8f0 → #0a2e14, accent #00e676
✓  Serrif for chart headlines
✓  Saans Mono ALL-CAPS labels
✓  1px #d4e8da borders, white background

Always:
- Sharp corners on bars, containers, chart frames
- Outer border: 1px solid #009b32
- Axes and grid lines: DM Mono Regular, #a9a9a9
- Value callouts: Saans / DM Mono Medium, #002910
- AirOps Research logo: position:absolute; bottom:-1px; right:-1px

Never:
- Rounded bars
- Drop shadows on chart elements
- Gradients on fills
- Mixing chart palette with web palette`}</div>
          </section>

          {/* 09 BRAND STRATEGY */}
          <section className="section" id="brand-strategy">
            <div className="section-header">
              <span className="section-num">09</span>
              <h2>Brand Strategy</h2>
            </div>

            {/* CORE BELIEFS */}
            <div className="component-label" style={{ marginBottom: '20px', fontSize: '13px' }}>Our Core Beliefs</div>
            <div style={{ background: '#f8fffb', border: '1px solid var(--stroke-green)', padding: '48px 40px', marginBottom: '56px', maxWidth: '880px' }}>
              <p style={{ fontSize: '18px', lineHeight: '1.65', color: 'var(--text-primary)', marginBottom: '24px', maxWidth: '680px' }}>
                We believe quality content is the only durable strategy in the AI era, and that the marketers who embrace intelligent systems will be the ones who win.
              </p>
              <p style={{ fontSize: '18px', lineHeight: '1.65', color: 'var(--text-primary)', marginBottom: '24px', maxWidth: '680px' }}>
                In this new era, creativity and technology work hand in hand, giving marketers more control, foresight, and opportunity than ever before.
              </p>
              <p style={{ fontSize: '18px', lineHeight: '1.65', color: 'var(--text-primary)', marginBottom: '24px', maxWidth: '680px' }}>
                When marketers join AirOps, they don't just ship better work - they build expertise in the craft of content engineering, combining human creativity with AI precision to elevate their teams, earn promotions, and drive results that get their brands seen by the audiences that matter most.
              </p>
              <p style={{ fontSize: '18px', lineHeight: '1.65', color: 'var(--text-primary)', margin: 0, maxWidth: '680px' }}>
                We see AI not as a threat, but as a catalyst for growth, creativity, and empowerment. And at the center of it all is our community: a guild of forward-thinking marketers, customers, and teammates who are learning, building, and winning together.
              </p>
            </div>

            {/* WHY NOW */}
            <div className="component-label" style={{ marginBottom: '20px', fontSize: '13px' }}>Why Now?</div>
            <div style={{ background: '#fff', border: '1px solid var(--stroke-green)', padding: '48px 40px', marginBottom: '56px', fontSize: '18px', lineHeight: '1.65', color: 'var(--text-primary)', maxWidth: '880px' }}>
              <div style={{ maxWidth: '680px' }}>
                We built AirOps to help brands reach their next customers in the AI era - a time when AI is reshaping how people discover, buy, and engage. The old growth playbook is collapsing, and as a result, the old ways of working are breaking down. The brands that win will be those that meaningfully add to the conversation. That means fresh, authoritative, information-gain content with a strong POV that helps customers and agents make better decisions.
              </div>
            </div>

            {/* WHO WE SERVE */}
            <div className="component-label" style={{ marginBottom: '20px', fontSize: '13px' }}>Who We Serve</div>
            <div style={{ background: '#f8fffb', border: '1px solid var(--stroke-green)', padding: '48px 40px', marginBottom: '56px', maxWidth: '880px' }}>
              <p style={{ fontSize: '18px', lineHeight: '1.65', color: 'var(--text-primary)', marginBottom: '32px', maxWidth: '680px' }}>
                Marketers have always been creative; it's the systems that fell behind. AirOps gives them the leverage to move faster, create smarter, and stay ahead in this new era of human + AI collaboration.
              </p>
              <div style={{ marginBottom: '28px', maxWidth: '680px' }}>
                <div style={{ fontWeight: 600, fontSize: '17px', marginBottom: '12px', letterSpacing: '-0.01em' }}>CMOs:</div>
                <div style={{ fontSize: '17px', lineHeight: '1.65', color: 'var(--text-secondary)' }}>
                  When a CMO brings on AirOps, they don't just modernize workflows for their team - they elevate performance, protect their brand's visibility, and lead the way in how great marketing gets done in the AI era.
                </div>
              </div>
              <div style={{ maxWidth: '680px' }}>
                <div style={{ fontWeight: 600, fontSize: '17px', marginBottom: '12px', letterSpacing: '-0.01em' }}>Growth and content marketers (Content Engineers):</div>
                <div style={{ fontSize: '17px', lineHeight: '1.65', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                  When a growth or content marketer learns AirOps, they don't just ship better work - they drive team wins, earn promotions, and gain an immediate and lasting career edge. Their old title transforms into a new and emerging one: the content engineer.
                </div>
                <div style={{ fontSize: '16px', lineHeight: '1.65', color: 'var(--text-secondary)', fontStyle: 'italic', paddingLeft: '20px', borderLeft: '3px solid var(--stroke-green)' }}>
                  A content engineer is a marketer who combines strategy, creativity, and AI-powered systems to scale quality content. They build the processes that connect insights to execution, ensuring every piece of content performs across SEO, AI search, and growth channels.
                </div>
              </div>
            </div>

            {/* MISSION */}
            <div className="component-label" style={{ marginBottom: '14px' }}>Mission</div>
            <div style={{ background: '#00250e', padding: '80px 48px', marginBottom: '40px', fontSize: '64px', lineHeight: '1.1', color: '#f8fffa', fontFamily: 'var(--font-serif)', letterSpacing: '-0.02em', fontWeight: 400 }}>
              To empower marketers to thrive in the AI era by equipping them with the tools, systems, and community to create high-quality content that drives visibility and reach.
            </div>

            {/* BRAND POSITIONING */}
            <div className="component-label" style={{ marginBottom: '20px', fontSize: '13px' }}>Brand Positioning</div>
            <div style={{ background: '#fff', border: '1px solid var(--stroke-green)', padding: '48px 40px', marginBottom: '56px', maxWidth: '880px' }}>
              <div style={{ fontSize: '18px', lineHeight: '1.65', color: 'var(--text-primary)', maxWidth: '680px' }}>
                <p style={{ marginBottom: '24px' }}>AirOps empowers marketing teams to reach their audiences with clarity and impact in the AI era.</p>
                <p style={{ marginBottom: '24px' }}>Unlike generic AI tools focused on speed and volume alone, AirOps blends human creativity with AI precision to elevate the craft of content creation, enabling teams to produce high-quality, on-brand work at scale.</p>
                <p style={{ margin: 0 }}>We stand apart as the trusted system for marketers who value creativity, consistency, and control - giving them the workflows, insights, and community to thrive in an era where content quality determines visibility.</p>
              </div>
            </div>

            {/* BRAND PROMISE */}
            <div className="component-label" style={{ marginBottom: '20px', fontSize: '13px' }}>Brand Promise</div>
            <div style={{ background: '#f8fffb', border: '1px solid var(--stroke-green)', padding: '48px 40px', marginBottom: '56px', fontSize: '18px', lineHeight: '1.65', color: 'var(--text-primary)', maxWidth: '880px' }}>
              <div style={{ maxWidth: '680px' }}>
                We believe marketers deserve better tools to elevate their ideas, partners who share their standards, and a community that celebrates the craft. We are equipping them with those tools, and a supportive community to lean on. Together, we're building the future of marketing.
              </div>
            </div>

            {/* CORE NARRATIVES */}
            <div className="component-label" style={{ marginBottom: '20px', fontSize: '13px' }}>Core Narratives</div>
            <p style={{ fontSize: '17px', color: 'var(--text-secondary)', marginBottom: '28px', lineHeight: '1.65', maxWidth: '680px' }}>
              Our storytelling should center on empowerment. When marketers join AirOps, they don't just ship better content - they drive team wins, advance their careers, and build confidence in the AI era.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '56px', maxWidth: '880px' }}>
              <div style={{ background: '#fff', border: '1px solid var(--stroke-green)', padding: '32px' }}>
                <div style={{ fontWeight: 600, fontSize: '17px', marginBottom: '12px', letterSpacing: '-0.01em' }}>Engineering the Future of Marketing</div>
                <div style={{ fontSize: '16px', lineHeight: '1.65', color: 'var(--text-secondary)', maxWidth: '620px' }}>
                  AirOps is the end-to-end operating system for the new era of content marketing - fueling a golden era where creativity meets intelligence and quality leads the way.
                </div>
              </div>
              <div style={{ background: '#fff', border: '1px solid var(--stroke-green)', padding: '32px' }}>
                <div style={{ fontWeight: 600, fontSize: '17px', marginBottom: '12px', letterSpacing: '-0.01em' }}>The new golden age of marketing - where craft meets science</div>
                <div style={{ fontSize: '16px', lineHeight: '1.65', color: 'var(--text-secondary)', maxWidth: '620px' }}>
                  AirOps is engineering a new era of marketing where creativity, data, and AI come together in harmony. This is the new golden age of marketing: one defined by quality, collaboration, and progress.
                </div>
              </div>
              <div style={{ background: '#fff', border: '1px solid var(--stroke-green)', padding: '32px' }}>
                <div style={{ fontWeight: 600, fontSize: '17px', marginBottom: '12px', letterSpacing: '-0.01em' }}>Human + AI + community = the formula for progress</div>
                <div style={{ fontSize: '16px', lineHeight: '1.65', color: 'var(--text-secondary)', maxWidth: '620px' }}>
                  The future belongs to marketers who know how to blend strategy with intelligence. AirOps unites their creative talent, smart systems, and a forward-thinking community to help great work rise to the top.
                </div>
              </div>
              <div style={{ background: '#fff', border: '1px solid var(--stroke-green)', padding: '32px' }}>
                <div style={{ fontWeight: 600, fontSize: '17px', marginBottom: '12px', letterSpacing: '-0.01em' }}>Content engineering makes sure the best ideas get seen</div>
                <div style={{ fontSize: '16px', lineHeight: '1.65', color: 'var(--text-secondary)', maxWidth: '620px' }}>
                  It's how marketers' strategic thinking and great ideas scale - via a system that ensures quality content reaches its audience, drives visibility, and delivers measurable impact.
                </div>
              </div>
              <div style={{ background: '#fff', border: '1px solid var(--stroke-green)', padding: '32px' }}>
                <div style={{ fontWeight: 600, fontSize: '17px', marginBottom: '12px', letterSpacing: '-0.01em' }}>Our brand enemies: AI slop, automated hacks, and quick wins</div>
                <div style={{ fontSize: '16px', lineHeight: '1.65', color: 'var(--text-secondary)', maxWidth: '620px' }}>
                  In a world chasing quick wins, AirOps champions the marketers engineering lasting impact. While others automate for speed, we optimize for quality, helping marketers create work that performs today and endures tomorrow.
                </div>
              </div>
            </div>

            {/* BRAND ATTRIBUTES */}
            <div className="component-label" style={{ marginBottom: '20px', fontSize: '13px' }}>Brand Attributes</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '56px', maxWidth: '880px' }}>
              <div style={{ background: '#fff', border: '1px solid var(--stroke-green)', padding: '32px' }}>
                <div style={{ fontWeight: 600, fontSize: '17px', marginBottom: '12px', letterSpacing: '-0.01em' }}>Trusted and Authoritative</div>
                <div style={{ fontSize: '16px', lineHeight: '1.65', color: 'var(--text-secondary)' }}>
                  We lead with clarity, conviction, and experience. Our voice is informed and forward-looking - the kind that earns trust.
                </div>
              </div>
              <div style={{ background: '#fff', border: '1px solid var(--stroke-green)', padding: '32px' }}>
                <div style={{ fontWeight: 600, fontSize: '17px', marginBottom: '12px', letterSpacing: '-0.01em' }}>Warm and Human</div>
                <div style={{ fontSize: '16px', lineHeight: '1.65', color: 'var(--text-secondary)' }}>
                  We're welcoming from the first hello - a place where marketers feel seen, supported, and connected. Even complex ideas feel approachable and engaging with us.
                </div>
              </div>
              <div style={{ background: '#fff', border: '1px solid var(--stroke-green)', padding: '32px' }}>
                <div style={{ fontWeight: 600, fontSize: '17px', marginBottom: '12px', letterSpacing: '-0.01em' }}>Prestigious, yet inclusive</div>
                <div style={{ fontSize: '16px', lineHeight: '1.65', color: 'var(--text-secondary)' }}>
                  Our brand feels aspirational yet welcoming: a place where curious, driven marketers come to grow, connect, and push their craft further.
                </div>
              </div>
              <div style={{ background: '#fff', border: '1px solid var(--stroke-green)', padding: '32px' }}>
                <div style={{ fontWeight: 600, fontSize: '17px', marginBottom: '12px', letterSpacing: '-0.01em' }}>Quality-Driven and Opinionated</div>
                <div style={{ fontSize: '16px', lineHeight: '1.65', color: 'var(--text-secondary)' }}>
                  We care deeply about craft and quality in everything we make. Every word and detail reflects intention, taste, and conviction. We don't chase trends. We create them.
                </div>
              </div>
              <div style={{ background: '#fff', border: '1px solid var(--stroke-green)', padding: '32px' }}>
                <div style={{ fontWeight: 600, fontSize: '17px', marginBottom: '12px', letterSpacing: '-0.01em' }}>Fun</div>
                <div style={{ fontSize: '16px', lineHeight: '1.65', color: 'var(--text-secondary)' }}>
                  B2B shouldn't feel like getting a root canal. Great marketing should be smart, creative, and occasionally make you snort-laugh at your desk.
                </div>
              </div>
            </div>

            {/* BRAND PERSONA */}
            <div className="component-label" style={{ marginBottom: '20px', fontSize: '13px' }}>Our Brand Persona</div>
            <div style={{ background: '#f8fffb', border: '1px solid var(--stroke-green)', padding: '48px 40px', marginBottom: '56px', maxWidth: '880px' }}>
              <p style={{ fontSize: '17px', lineHeight: '1.65', color: 'var(--text-primary)', marginBottom: '24px', fontStyle: 'italic', maxWidth: '680px' }}>
                Our persona is the first and foundational instrument helping us step into our brand voice. It's who we keep in mind as we craft every communication.
              </p>
              <p style={{ fontSize: '18px', lineHeight: '1.65', color: 'var(--text-primary)', marginBottom: '24px', maxWidth: '680px' }}>
                Think of AirOps as your easy-going, intelligent, and animated friend who shows up early with coffee on a Sunday, eager to take on the day and explore adventures ahead. A book festival, a museum, a farmers market - their batteries are fully charged and ready to go. You're happy to come along for the ride.
              </p>
              <p style={{ fontSize: '18px', lineHeight: '1.65', color: 'var(--text-primary)', marginBottom: '24px', maxWidth: '680px' }}>
                When you spend time with them, you feel comfortable and intrigued with what topic or news they'll bring next. You're amazed by how smoothly they can flow from deep, complicated subjects to lighthearted stories that leave you tickled and laughing. They stream the <em>Prof G</em> tech podcast on their dog walks, and watch <em>British Bake-Off</em> at night.
              </p>
              <p style={{ fontSize: '18px', lineHeight: '1.65', color: 'var(--text-primary)', marginBottom: '24px', maxWidth: '680px' }}>
                They're social, friendly, and don't believe in hoarding useful knowledge and facts. They share what they know, so everyone around them is more independent and capable. They live with a growth mindset, and that spirit is contagious.
              </p>
              <p style={{ fontSize: '18px', lineHeight: '1.65', color: 'var(--text-primary)', margin: 0, maxWidth: '680px' }}>
                Your success is their success - they love when their friends succeed. If life and career is a game, they play it like professionals, not amateurs.
              </p>
            </div>
          </section>

          {/* 10 COPY, VOICE & TONE */}
          <section className="section" id="copy-voice-tone">
            <div className="section-header">
              <span className="section-num">10</span>
              <h2>Copy, Voice & Tone</h2>
            </div>

            <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '15px', lineHeight: '1.6', fontStyle: 'italic' }}>
              One source of truth for how we sound across every channel, format, and moment.
            </p>

            {/* WHAT IS AIROPS */}
            <div className="component-label" style={{ marginBottom: '14px' }}>What is AirOps?</div>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.6' }}>
              There are a few ways to describe AirOps depending on the context. Use the version that fits the moment.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
              <div style={{ background: '#f8fffb', border: '1px solid var(--stroke-green)', padding: '20px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#008c44', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px', fontWeight: 600 }}>Long - For sales calls, PR, partnerships, funding</div>
                <div style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--text-primary)' }}>
                  We're living through one of the biggest shifts in marketing history. AI is transforming how people discover, evaluate, and choose brands. Search results are no longer pages of blue links; they're AI-generated answers. And in that new reality, many brands are invisible.<br /><br />
                  For marketers, this moment demands a new kind of thinking. Traditional SEO playbooks are losing relevance, performance data is fragmented across tools, and the pace of change is relentless. What worked yesterday doesn't guarantee visibility tomorrow.<br /><br />
                  That's where AirOps comes in.<br /><br />
                  AirOps is a content engineering platform built for the AI era: a system of action that helps marketing teams create and maintain high-quality, on-brand content that AI cites and audiences choose.
                </div>
              </div>

              <div style={{ background: '#f8fffb', border: '1px solid var(--stroke-green)', padding: '20px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#008c44', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px', fontWeight: 600 }}>Medium - For internal presentations, team docs, one-pagers</div>
                <div style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--text-primary)' }}>
                  AirOps is a content engineering platform that helps marketers create and maintain high-quality, on-brand content that AI cites and audiences choose - content that's grounded in authoritative sources, enriched with information gain, and engineered for performance across human and AI discovery.
                </div>
              </div>

              <div style={{ background: '#f8fffb', border: '1px solid var(--stroke-green)', padding: '20px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#008c44', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px', fontWeight: 600 }}>Short - For social posts, podcast intros, bios</div>
                <div style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--text-primary)' }}>
                  AirOps is the content engineering platform that helps marketers create and maintain high-quality, on-brand content that wins AI search.
                </div>
              </div>
            </div>

            {/* BRAND PILLARS */}
            <div className="component-label" style={{ marginBottom: '14px' }}>Brand Pillars</div>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.6' }}>
              These represent what AirOps believes in - our enduring brand truths and core beliefs.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '40px' }}>
              <div style={{ background: '#fff', border: '1px solid var(--stroke-green)', padding: '20px' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Quality Content Wins</div>
                <div style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                  In a vast ocean of content, quality is the only durable strategy to build and maintain trust in the AI era. Better content will always outperform more content.
                </div>
              </div>

              <div style={{ background: '#fff', border: '1px solid var(--stroke-green)', padding: '20px' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Human + AI Collaboration</div>
                <div style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                  Marketers spark the ideas; AirOps gives them the firepower. AI doesn't replace creativity or people - it enhances our creative powers.
                </div>
              </div>

              <div style={{ background: '#fff', border: '1px solid var(--stroke-green)', padding: '20px' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Always on Offense</div>
                <div style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                  Marketing moves fast. The old playbook? Already obsolete. AirOps helps you stay ten steps ahead with the tools, insights, and education built for what's next.
                </div>
              </div>

              <div style={{ background: '#fff', border: '1px solid var(--stroke-green)', padding: '20px' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Intelligent Systems</div>
                <div style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                  AirOps connects your unique ideas, data, tools, and AI models into powerful workflows that scale high-quality content.
                </div>
              </div>

              <div style={{ background: '#fff', border: '1px solid var(--stroke-green)', padding: '20px' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Community Driven</div>
                <div style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                  AirOps creates a space for content engineers to learn, build, and thrive together. We're here to nurture tomorrow's leaders.
                </div>
              </div>

              <div style={{ background: '#fff', border: '1px solid var(--stroke-green)', padding: '20px' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Content Engineers Leading</div>
                <div style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                  The future belongs to marketers who engineer their craft: combining human insight, creative instinct, and intelligent systems.
                </div>
              </div>
            </div>

            {/* VOICE OVERVIEW */}
            <div className="component-label" style={{ marginBottom: '20px', fontSize: '13px' }}>Voice Overview</div>
            <div style={{ background: '#f8fffb', border: '1px solid var(--stroke-green)', padding: '48px 40px', marginBottom: '56px', maxWidth: '880px' }}>
              <p style={{ fontSize: '18px', lineHeight: '1.65', color: 'var(--text-primary)', marginBottom: '24px', maxWidth: '680px' }}>
                Voice is the personality of AirOps - it's who we are all the time. It's the core characteristic that makes us sound smart, reliable, warm, and calm under pressure. Whether we're writing a major company announcement or posting a quick feature update, our core personality is the same. It never changes.
              </p>
              <p style={{ fontSize: '18px', lineHeight: '1.65', color: 'var(--text-primary)', marginBottom: '24px', maxWidth: '680px' }}>
                Our voice stays constant, but our <strong>tone flexes</strong> depending on the message, the medium, and the audience.
              </p>
              <p style={{ fontSize: '18px', lineHeight: '1.65', color: 'var(--text-primary)', marginBottom: '24px', maxWidth: '680px' }}>
                At AirOps, we're in the trenches with our customers and know that heavy tech jargon can make us shudder. Overall, we speak like experienced and friendly coaches - we're inclusive and welcoming, and respectful when talking tech. We're always aware that some customers are fresh to the platform, while others are super-savvy users.
              </p>
              <p style={{ fontSize: '18px', lineHeight: '1.65', color: 'var(--text-primary)', marginBottom: '24px', maxWidth: '680px' }}>
                We treat every partner and project seriously. We want to educate people without patronizing or confusing them.
              </p>
              <p style={{ fontSize: '18px', lineHeight: '1.65', color: 'var(--text-primary)', margin: 0, maxWidth: '680px' }}>
                Using conversational voice and playful humor, we play with language to bring joy to their work. We prefer the subtle over the noisy and let our platform and products provide the wonder.
              </p>
            </div>

            {/* VOICE PRINCIPLES */}
            <div className="component-label" style={{ marginBottom: '20px', fontSize: '13px' }}>Voice Principles</div>
            <p style={{ fontSize: '17px', color: 'var(--text-secondary)', marginBottom: '28px', lineHeight: '1.65', maxWidth: '680px' }}>
              Every word we say informs and encourages. We impart our expertise with clarity, empathy, and subtle wit.
            </p>

            <div style={{ marginBottom: '56px', maxWidth: '880px' }}>
              {/* We're Experts */}
              <div style={{ background: '#00250e', padding: '40px', marginBottom: '3px' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 600, color: '#f8fffa', marginBottom: '16px', letterSpacing: '-0.01em' }}>We're Experts</div>
                <div style={{ fontSize: '17px', lineHeight: '1.65', color: '#f8fffa', marginBottom: '24px', maxWidth: '640px' }}>
                  We speak with the authority that comes from building first-of-their-kind products. We're knowledgeable and confident about what we say. We know the complexity and effort required for AI transformation. There are no magic buttons.
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#00ff64', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>✓ Do</div>
                    <div style={{ fontSize: '13px', lineHeight: '1.5', color: '#ccffe0' }}>
                      • Write with authority and confidence<br />
                      <span style={{ fontSize: '12px', opacity: 0.8 }}>i.e. "AirOps is where big ideas become real results."</span><br /><br />
                      • Lead the conversation<br />
                      <span style={{ fontSize: '12px', opacity: 0.8 }}>i.e. "If AI can't find you, neither can your customers."</span><br /><br />
                      • Back claims with data or logic<br />
                      <span style={{ fontSize: '12px', opacity: 0.8 }}>i.e. "After reviewing 5.5 million LLM answers, we found something surprising."</span><br /><br />
                      • Be technical and precise<br />
                      <span style={{ fontSize: '12px', opacity: 0.8 }}>Use terms like content engineering, human-in-the-loop, AEO, and LLMs.</span>
                    </div>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#ff6b6b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>✗ Don't</div>
                    <div style={{ fontSize: '13px', lineHeight: '1.5', color: '#ccffe0' }}>
                      • Overstate capabilities or make claims we can't support<br /><br />
                      • Use jargon to sound smart - use it only when it adds precision
                    </div>
                  </div>
                </div>
              </div>

              {/* We're Optimistic */}
              <div style={{ background: '#00250e', padding: '24px', marginBottom: '2px' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '18px', fontWeight: 600, color: '#f8fffa', marginBottom: '12px' }}>We're Optimistic</div>
                <div style={{ fontSize: '14px', lineHeight: '1.6', color: '#f8fffa', marginBottom: '16px' }}>
                  We value positivity, reality, and trust. Like a good friend, we speak with warmth and sincerity and put our client's challenges and goals first.
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#00ff64', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>✓ Do</div>
                    <div style={{ fontSize: '13px', lineHeight: '1.5', color: '#ccffe0' }}>
                      • Be welcoming<br />
                      <span style={{ fontSize: '12px', opacity: 0.8 }}>i.e. "We're excited to share what's new!"</span><br /><br />
                      • Show empathy<br />
                      <span style={{ fontSize: '12px', opacity: 0.8 }}>i.e. "Juggling across tools just adds stress. Work in one place with Grids."</span><br /><br />
                      • Talk like a real person<br />
                      <span style={{ fontSize: '12px', opacity: 0.8 }}>i.e. "Learning pays off with AirOps."</span><br /><br />
                      • Celebrate community progress<br />
                      <span style={{ fontSize: '12px', opacity: 0.8 }}>i.e. "Webflow saw 5x more citations in weeks, not months."</span>
                    </div>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#ff6b6b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>✗ Don't</div>
                    <div style={{ fontSize: '13px', lineHeight: '1.5', color: '#ccffe0' }}>
                      • Use heavy tech jargon<br />
                      <span style={{ fontSize: '12px', opacity: 0.8 }}>Instead of: "Construct multi-layered workflows personalized..."<br />Say: "Build workflows built on your brand foundations."</span><br /><br />
                      • Talk at people<br />
                      <span style={{ fontSize: '12px', opacity: 0.8 }}>Avoid authoritative language that lacks sincerity.</span><br /><br />
                      • Egg on AI anxiety<br />
                      <span style={{ fontSize: '12px', opacity: 0.8 }}>Keep the vibe positive and encouraging.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* We're Empowering */}
              <div style={{ background: '#00250e', padding: '24px' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '18px', fontWeight: 600, color: '#f8fffa', marginBottom: '12px' }}>We're Empowering</div>
                <div style={{ fontSize: '14px', lineHeight: '1.6', color: '#f8fffa', marginBottom: '16px' }}>
                  We see the potential in our clients, and love to see them build and solve problems. We celebrate new features and updates, hammering home the benefits to community users and spotlighting their capabilities.
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#00ff64', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>✓ Do</div>
                    <div style={{ fontSize: '13px', lineHeight: '1.5', color: '#ccffe0' }}>
                      • Focus on user's impact<br />
                      <span style={{ fontSize: '12px', opacity: 0.8 }}>i.e. "Turn your most creative ideas into reality."</span><br /><br />
                      • Celebrate progress<br />
                      <span style={{ fontSize: '12px', opacity: 0.8 }}>i.e. "Master the workflows and be the go-to AI person on your team."</span><br /><br />
                      • Be optimistic and forward-looking<br />
                      <span style={{ fontSize: '12px', opacity: 0.8 }}>i.e. "Turn your strategy into content that wins."</span><br /><br />
                      • Be encouraging<br />
                      <span style={{ fontSize: '12px', opacity: 0.8 }}>i.e. "This is your moment to lead the next era of content marketing."</span>
                    </div>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#ff6b6b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>✗ Don't</div>
                    <div style={{ fontSize: '13px', lineHeight: '1.5', color: '#ccffe0' }}>
                      • Make it all about us<br />
                      <span style={{ fontSize: '12px', opacity: 0.8 }}>Our value is measured by their success.</span><br /><br />
                      • Be patronizing<br />
                      <span style={{ fontSize: '12px', opacity: 0.8 }}>We empower our customers, we don't belittle them.</span><br /><br />
                      • Make empty promises<br />
                      <span style={{ fontSize: '12px', opacity: 0.8 }}>Be confident, but don't promise outcomes we can't deliver.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* WHAT WE'RE NOT */}
            <div className="component-label" style={{ marginBottom: '14px' }}>What We're Not</div>
            <div style={{ background: '#fff', border: '1px solid var(--stroke-green)', padding: '40px', marginBottom: '56px', maxWidth: '880px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', fontSize: '16px', lineHeight: '1.65' }}>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '8px', color: 'var(--text-primary)' }}>We're not AI doomsday believers.</div>
                  <div style={{ color: 'var(--text-secondary)' }}>
                    We bring enthusiasm for the future, not crippling fear.
                  </div>
                </div>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '8px', color: 'var(--text-primary)' }}>We're not panicking.</div>
                  <div style={{ color: 'var(--text-secondary)' }}>
                    We're a beacon of hope and intelligence, helping build the next class of marketers and a playground for them to thrive in.
                  </div>
                </div>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '8px', color: 'var(--text-primary)' }}>We're not replacing humans.</div>
                  <div style={{ color: 'var(--text-secondary)' }}>
                    We firmly believe in the collaboration between robots and people. The best ideas and the best work comes when we work in-tandem.
                  </div>
                </div>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '8px', color: 'var(--text-primary)' }}>We're not a slop factory.</div>
                  <div style={{ color: 'var(--text-secondary)' }}>
                    We care deeply about craft, quality, and the irreplaceable role the human touch plays in great work. AI automation is a tool, not a shortcut.
                  </div>
                </div>
              </div>
            </div>

            {/* WRITING PRINCIPLES & GOALS */}
            <div className="component-label" style={{ marginBottom: '14px' }}>Writing Principles & Goals</div>
            <p style={{ fontSize: '17px', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.65', maxWidth: '680px' }}>
              We publish lots of content at AirOps. From emails to social posts to webinars and more, we're producing branded content for our audiences.
            </p>

            <div style={{ background: '#f8fffb', border: '1px solid var(--stroke-green)', padding: '40px', marginBottom: '56px', maxWidth: '880px' }}>
              <div style={{ fontWeight: 600, marginBottom: '16px', fontSize: '17px' }}>With every piece, we aim to:</div>
              <div style={{ fontSize: '16px', lineHeight: '1.7', color: 'var(--text-primary)', marginBottom: '24px', maxWidth: '680px' }}>
                • <strong>Respect our reader.</strong> Put yourself in their shoes - remember that people have better things to read and do. We're asking for their time, so let's be considerate and keep things moving with crisp language that gets the point across. Communicate, don't market.<br /><br />
                • <strong>Empower them.</strong> Help people understand AirOps with language and structure that informs them and encourages them to make the most of our products.<br /><br />
                • <strong>Educate when necessary.</strong> Strive to make the complex simple, without minimizing the power of our platform and features. Give readers the information they need, in a logical and incremental way.<br /><br />
                • <strong>Inspire our community.</strong> We're one big family of content engineers, not a cold and distant tech brand. We often recognize customer wins, share incredible strategies and workflows, and energize our community to push what's possible.
              </div>

              <div style={{ fontWeight: 600, marginBottom: '16px', fontSize: '17px' }}>In order to achieve our goals, we make sure our content:</div>
              <div style={{ fontSize: '16px', lineHeight: '1.7', color: 'var(--text-primary)', maxWidth: '680px' }}>
                • <strong>Comes across clearly.</strong> Understand the topic you're writing about. Use simple words and sentences.<br /><br />
                • <strong>Serves a purpose.</strong> Before we start typing, we ask the points we're trying to make, and who this content is for.<br /><br />
                • <strong>Feels friendly.</strong> Write like a human. Break a few rules if it makes your writing more relatable.<br /><br />
                • <strong>Fits the channel.</strong> Tailor the message to the medium. Email subject lines need a different approach than a tutorial on AI integrations.<br /><br />
                • <strong>Hits the right tone.</strong> We flex our tone depending on what we need to say, and who we're talking to.
              </div>
            </div>

            {/* WRITING TACTICS */}
            <div className="component-label" style={{ marginBottom: '14px' }}>Writing Tactics</div>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#008c44', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', fontWeight: 600 }}>Explaining Complex Subjects</div>
              <div style={{ background: '#fff', border: '1px solid var(--stroke-green)', padding: '32px', fontSize: '16px', lineHeight: '1.7', maxWidth: '880px' }}>
                Our goal is to make the complex work of high-scale AI performance seem simple, without ever talking down to our audience. We use our clear and expert voice to bring confidence and control to our readers.<br /><br />
                <strong>1. Know your goal and the "Why"</strong> - Address the reader's motivation immediately. Why should a busy person care about this complex topic?<br /><br />
                <strong>2. Structure and Simplify</strong> - Divide large, complex concepts into smaller, logical, and digestible chunks. Use clear headings and numbered lists to guide the reader through a process one step at a time.<br /><br />
                <strong>3. Use Analogies and Results-Oriented Language</strong> - Compare the complex idea to a familiar, real-world scenario. Lead with the outcome and benefit, not the product name. Use visuals when possible.
              </div>
            </div>

            <div style={{ marginBottom: '56px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#008c44', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', fontWeight: 600 }}>Handling Acronyms and Jargon</div>
              <div style={{ background: '#fff', border: '1px solid var(--stroke-green)', padding: '32px', fontSize: '16px', lineHeight: '1.7', maxWidth: '880px' }}>
                Acronyms should be used to improve readability by preventing repetition, not to create a barrier for non-experts.<br /><br />
                <strong>The Rule: Define on First Use</strong><br />
                On the first mention of an unfamiliar acronym in any document, spell out the full term, followed immediately by the acronym in parentheses.<br /><br />
                <span style={{ color: '#008c44' }}>✓ Correct:</span> Our approach is to focus on Answer Engine Optimization (AEO). The AEO framework provides...<br />
                <span style={{ color: '#ff6b6b' }}>✗ Incorrect:</span> Our approach is to focus on AEO. Answer Engine Optimization provides...<br /><br />
                <strong>Be Judicious</strong><br />
                • Do not overuse: If you only use a term two or three times in a document, do not define an acronym for it.<br />
                • Only create an acronym if the term is long and you use it five or more times in a single piece.<br />
                • Exceptions for universal terms: API, AI may be used without spelling out.
              </div>
            </div>

            {/* AVOIDING AI-Y WRITING TROPES */}
            <div className="component-label" style={{ marginBottom: '14px' }}>Avoiding AI-y Writing Tropes</div>
            <p style={{ fontSize: '17px', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.65', maxWidth: '680px' }}>
              AI-generated content has patterns that readers are starting to recognize and tune out. We avoid them across everything we publish.
            </p>

            <div style={{ background: '#fff', border: '1px solid var(--stroke-green)', padding: '40px', marginBottom: '56px', maxWidth: '880px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', fontSize: '16px', lineHeight: '1.65' }}>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '6px', color: 'var(--text-primary)' }}>Em dashes as dramatic pause</div>
                  <div style={{ color: 'var(--text-secondary)' }}>
                    <span style={{ textDecoration: 'line-through', opacity: 0.6 }}>AirOps is more than a platform - it's a movement.</span><br />
                    <span style={{ color: '#008c44' }}>✓ AirOps is more than a platform. It's a movement.</span>
                  </div>
                </div>

                <div>
                  <div style={{ fontWeight: 600, marginBottom: '6px', color: 'var(--text-primary)' }}>\"If X, then Y\" construction</div>
                  <div style={{ color: 'var(--text-secondary)' }}>
                    <span style={{ textDecoration: 'line-through', opacity: 0.6 }}>If you want visibility, then you need content.</span><br />
                    <span style={{ color: '#008c44' }}>✓ Great content is how you grow visibility.</span>
                  </div>
                </div>

                <div>
                  <div style={{ fontWeight: 600, marginBottom: '6px', color: 'var(--text-primary)' }}>\"In today's world\" openers</div>
                  <div style={{ color: 'var(--text-secondary)' }}>
                    <span style={{ textDecoration: 'line-through', opacity: 0.6 }}>In today's world, AI is changing everything.</span><br />
                    <span style={{ color: '#008c44' }}>✓ AI is changing how people discover brands.</span>
                  </div>
                </div>

                <div>
                  <div style={{ fontWeight: 600, marginBottom: '6px', color: 'var(--text-primary)' }}>\"Delve into\"</div>
                  <div style={{ color: 'var(--text-secondary)' }}>
                    Just say explore, look at, dig into, or cover. \"Delve\" is a flag that nobody talks like this in real life.
                  </div>
                </div>

                <div>
                  <div style={{ fontWeight: 600, marginBottom: '6px', color: 'var(--text-primary)' }}>\"Leveraging\" as default verb</div>
                  <div style={{ color: 'var(--text-secondary)' }}>
                    <span style={{ textDecoration: 'line-through', opacity: 0.6 }}>Leverage your data to improve content.</span><br />
                    <span style={{ color: '#008c44' }}>✓ Use your data to improve content.</span>
                  </div>
                </div>

                <div>
                  <div style={{ fontWeight: 600, marginBottom: '6px', color: 'var(--text-primary)' }}>Three-part list \"and beyond\"</div>
                  <div style={{ color: 'var(--text-secondary)' }}>
                    \"Content, SEO, and beyond\" is vague. Name the actual things or cut the list.
                  </div>
                </div>

                <div>
                  <div style={{ fontWeight: 600, marginBottom: '6px', color: 'var(--text-primary)' }}>Hollow affirmations</div>
                  <div style={{ color: 'var(--text-secondary)' }}>
                    \"Great question!\" \"Absolutely!\" \"Certainly!\" at the start of responses. They're filler.
                  </div>
                </div>

                <div>
                  <div style={{ fontWeight: 600, marginBottom: '6px', color: 'var(--text-primary)' }}>Overly formal transitions</div>
                  <div style={{ color: 'var(--text-secondary)' }}>
                    \"Furthermore,\" \"Moreover,\" \"Additionally\" feel robotic when overused.
                  </div>
                </div>
              </div>
            </div>

            {/* TONE TABLE */}
            <div className="component-label" style={{ marginBottom: '14px' }}>Tone Guide</div>
            <p style={{ fontSize: '17px', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.65', maxWidth: '680px' }}>
              Voice stays constant. Tone flexes. Reference this when creating AirOps communications.
            </p>

            <div style={{ border: '1px solid var(--stroke-green)', marginBottom: '56px', maxWidth: '880px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', background: '#008c44' }}>
                <div style={{ padding: '14px 20px', borderRight: '1px solid #006633', fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#fff' }}>Tone</div>
                <div style={{ padding: '14px 20px', fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#fff' }}>Use For</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '1px solid var(--stroke-green)', background: '#fff' }}>
                <div style={{ padding: '14px 20px', borderRight: '1px solid var(--stroke-green)', fontWeight: 600, fontSize: '15px' }}>Functional + Data Driven</div>
                <div style={{ padding: '14px 20px', fontSize: '15px', color: 'var(--text-secondary)' }}>Documentation, workflow building, app prompts, UI microcopy, release notes, research reports, case studies, training</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '1px solid var(--stroke-green)', background: '#f8fffb' }}>
                <div style={{ padding: '14px 20px', borderRight: '1px solid var(--stroke-green)', fontWeight: 600, fontSize: '15px' }}>Empowering</div>
                <div style={{ padding: '14px 20px', fontSize: '15px', color: 'var(--text-secondary)' }}>Product videos/demos, major announcements, email subject lines, sales decks, customer stories, thought leadership</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '1px solid var(--stroke-green)', background: '#fff' }}>
                <div style={{ padding: '14px 20px', borderRight: '1px solid var(--stroke-green)', fontWeight: 600, fontSize: '15px' }}>Collaborative</div>
                <div style={{ padding: '14px 20px', fontSize: '15px', color: 'var(--text-secondary)' }}>Support chat/forums, customer marketing emails, onboarding sequences, outreach or nurture sequences</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: '1px solid var(--stroke-green)', background: '#f8fffb' }}>
                <div style={{ padding: '14px 20px', borderRight: '1px solid var(--stroke-green)', fontWeight: 600, fontSize: '15px' }}>Aspirational</div>
                <div style={{ padding: '14px 20px', fontSize: '15px', color: 'var(--text-secondary)' }}>Website copy, keynotes, investor decks, blog posts, thought leadership, career/recruiting</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', background: '#fff' }}>
                <div style={{ padding: '14px 20px', borderRight: '1px solid var(--stroke-green)', fontWeight: 600, fontSize: '15px' }}>Witty + Clever</div>
                <div style={{ padding: '14px 20px', fontSize: '15px', color: 'var(--text-secondary)' }}>LinkedIn posts, social copy, ad copy, event invites, website copy</div>
              </div>
            </div>

            {/* COPY EXAMPLES */}
            <div className="component-label" style={{ marginBottom: '14px' }}>Copy Examples by Channel</div>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#008c44', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', fontWeight: 600 }}>Email Subject Lines</div>
              <div style={{ background: '#f8fffb', border: '1px solid var(--stroke-green)', padding: '24px', fontSize: '16px', lineHeight: '1.8', maxWidth: '880px' }}>
                • Take collaboration to the next level with Grids.<br />
                • Get the winning workflows from Carta, Chime, and Ramp<br />
                • Save hours and see results faster with Power Agents<br />
                • Talk to the team that built the Power Agents.<br />
                • How Chime achieved 5x citations in 2 weeks
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#008c44', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', fontWeight: 600 }}>Hero Brand Headlines</div>
              <div style={{ background: '#f8fffb', border: '1px solid var(--stroke-green)', padding: '24px', fontSize: '16px', lineHeight: '1.8', maxWidth: '880px' }}>
                • Content that climbs to the top of AI search.<br />
                • Craft content built to win AI search.<br />
                • With great content comes great visibility.<br />
                • Get seen. Get cited. Own the conversation.
              </div>
            </div>

            <div style={{ marginBottom: '56px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#008c44', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', fontWeight: 600 }}>Product Feature Copy</div>
              <div style={{ background: '#f8fffb', border: '1px solid var(--stroke-green)', padding: '24px', fontSize: '16px', lineHeight: '1.8', maxWidth: '880px' }}>
                • Grids: Collaborate and orchestrate your way to winning content<br />
                • Workflows: Workflows built on your brand foundations<br />
                • Power Agents: Magic building blocks built by our team<br />
                • Brand Kits: Govern your brand's voice as a team<br />
                • Integrations: Connect your stack for richer context (and less friction)
              </div>
            </div>

            {/* COPY RULES */}
            <div className="code-label">Copy Rules</div>
            <div className="code-block">{`/* AirOps Copy Rules */

✓  Use en dash (–) for ranges: "10–20 citations"
✓  Sentence case for headlines: "AEO is the new SEO"
✓  Oxford comma: "ChatGPT, Gemini, and Perplexity"
✓  Product names capitalized: AirOps, Page360, Citations360

✓  CTA copy: short imperatives
   "Get a demo"  "Start free"  "See it live"
   ✗ Not: "Click here to learn more about our platform"

✗  Never: "synergize," "robust," "comprehensive"
✗  Never start with: "We are excited to announce..."`}</div>
          </section>
        </main>
      </div>

      {/* Toast Notification */}
      {copiedColor && (
        <div className="toast">
          Copied {copiedColor} to clipboard ✓
        </div>
      )}

      {phase === 'main' && (
        <ModeToggle mode="human" onToggle={() => setPhase('machine')} />
      )}
    </>
  )
}
