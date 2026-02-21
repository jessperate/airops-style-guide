'use client'

import { useState } from 'react'

export default function StyleGuidePage() {
  return (
    <div className="min-h-screen bg-[#002910] flex">
      {/* LEFT SIDEBAR */}
      <aside className="w-64 bg-[#002910] fixed left-0 top-0 h-screen flex flex-col border-r border-[#008c44]/30">
        <div className="p-8 flex-1 flex flex-col">
          {/* Logo */}
          <div className="mb-12">
            <h1 className="text-white text-2xl font-medium">airOps</h1>
          </div>

          {/* Brand Label */}
          <div className="mb-8">
            <p className="text-white/60 text-xs uppercase tracking-wider font-medium">
              BRAND STYLE GUIDE
            </p>
          </div>

          {/* Contents Section */}
          <div className="mb-6">
            <h2 className="text-[#00FF64] text-xs uppercase tracking-wider font-semibold mb-4">
              CONTENTS
            </h2>
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-3">
              <li>
                <a
                  href="#colors"
                  className="text-white/80 hover:text-white text-sm flex items-start gap-3 transition-colors"
                >
                  <span className="text-white/50 font-mono text-xs">01</span>
                  <span>Colors</span>
                </a>
              </li>
              <li>
                <a
                  href="#typography"
                  className="text-white/80 hover:text-white text-sm flex items-start gap-3 transition-colors"
                >
                  <span className="text-white/50 font-mono text-xs">02</span>
                  <span>Typography</span>
                </a>
              </li>
              <li>
                <a
                  href="#components"
                  className="text-white/80 hover:text-white text-sm flex items-start gap-3 transition-colors"
                >
                  <span className="text-white/50 font-mono text-xs">03</span>
                  <span>Components</span>
                </a>
              </li>
              <li>
                <a
                  href="#voice-copy"
                  className="text-white/80 hover:text-white text-sm flex items-start gap-3 transition-colors"
                >
                  <span className="text-white/50 font-mono text-xs">04</span>
                  <span>Voice & Copy</span>
                </a>
              </li>
              <li>
                <a
                  href="#logo-imagery"
                  className="text-white/80 hover:text-white text-sm flex items-start gap-3 transition-colors"
                >
                  <span className="text-white/50 font-mono text-xs">05</span>
                  <span>Logo & Imagery</span>
                </a>
              </li>
              <li>
                <a
                  href="#spacing-layout"
                  className="text-white/80 hover:text-white text-sm flex items-start gap-3 transition-colors"
                >
                  <span className="text-white/50 font-mono text-xs">06</span>
                  <span>Spacing & Layout</span>
                </a>
              </li>
              <li>
                <a
                  href="#css-snippets"
                  className="text-white/80 hover:text-white text-sm flex items-start gap-3 transition-colors"
                >
                  <span className="text-white/50 font-mono text-xs">07</span>
                  <span>CSS Snippets</span>
                </a>
              </li>
              <li>
                <a
                  href="#containers"
                  className="text-white/80 hover:text-white text-sm flex items-start gap-3 transition-colors"
                >
                  <span className="text-white/50 font-mono text-xs">08</span>
                  <span>Containers</span>
                </a>
              </li>
              <li>
                <a
                  href="#data-viz"
                  className="text-white/80 hover:text-white text-sm flex items-start gap-3 transition-colors"
                >
                  <span className="text-white/50 font-mono text-xs">09</span>
                  <span>Data Viz</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Footer */}
          <div className="mt-auto pt-8">
            <p className="text-[#00FF64] text-xs uppercase tracking-wider font-medium">
              AIROPS BRAND FOR CLAUDE CODE v2025
            </p>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="ml-64 flex-1 min-h-screen bg-[#002910]">
        <div className="max-w-5xl mx-auto px-12 py-16">
          {/* Hero Section */}
          <div className="mb-16">
            {/* Yellow Badge */}
            <div className="inline-block mb-8">
              <div className="px-4 py-2 bg-[#FFD700] text-black text-xs font-semibold uppercase tracking-wider">
                AIROPS BRAND SYSTEM
              </div>
            </div>

            {/* Hero Headline */}
            <h1 className="text-6xl font-medium mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
              <span className="text-white">Build on </span>
              <span className="text-[#00FF64]">brand,</span>
              <br />
              <span className="text-white">every time.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
              A comprehensive design system for the AirOps brand. Use these guidelines
              to create consistent, on-brand experiences across all touchpoints.
            </p>
          </div>
          {/* 01 COLORS Section */}
          <section id="colors" className="mb-12">
            <div className="bg-white p-12">
              {/* Section Header */}
              <div className="mb-10">
                <div className="flex items-baseline gap-6 mb-4">
                  <span className="text-[#00FF64] text-sm font-mono">01</span>
                  <h2 className="text-4xl font-medium" style={{ fontFamily: 'var(--font-serif)' }}>
                    Colors
                  </h2>
                </div>
              </div>

              {/* Brand Greens Section */}
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-wider font-semibold mb-6 text-black/60">
                  BRAND GREENS — PRIMARY PALETTE
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <ColorSwatchNew
                    name="NEAR BLACK"
                    hex="#000d05"
                    description="Deep backgrounds, rich text"
                  />
                  <ColorSwatchNew
                    name="FOREST"
                    hex="#002910"
                    description="Hero sections, sidebar, dark cards"
                  />
                  <ColorSwatchNew
                    name="MID GREEN"
                    hex="#008c44"
                    description="Labels, links, accents on light"
                  />
                  <ColorSwatchNew
                    name="INTERACTION"
                    hex="#00e676"
                    description="CTAs, interactive states, accents"
                  />
                  <ColorSwatchNew
                    name="SUPER LIGHT"
                    hex="#ccffe0"
                    description="Hover states, section fills"
                  />
                  <ColorSwatchNew
                    name="GREEN 100"
                    hex="#dfeae3"
                    description="Muted backgrounds"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 02 TYPOGRAPHY Section */}
          <section id="typography" className="mb-12">
            <div className="bg-white p-12">
              {/* Section Header */}
              <div className="mb-10">
                <div className="flex items-baseline gap-6 mb-4">
                  <span className="text-[#00FF64] text-sm font-mono">02</span>
                  <h2 className="text-4xl font-medium" style={{ fontFamily: 'var(--font-serif)' }}>
                    Typography
                  </h2>
                </div>
                <p className="text-black/60 text-base mt-4">
                  Our typography system uses three distinct font families for different purposes.
                </p>
              </div>

              {/* Font Families */}
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-wider font-semibold mb-6 text-black/60">
                  TYPEFACES
                </h3>
                <div className="space-y-4">
                  <FontExample
                    family="Saans"
                    cssVar="--font-sans"
                    usage="Body text, UI elements"
                    sample="The quick brown fox jumps over the lazy dog"
                  />
                  <FontExample
                    family="Saans Mono"
                    cssVar="--font-mono"
                    usage="Code, pills, technical content"
                    sample="console.log('Hello World');"
                    mono
                  />
                  <FontExample
                    family="Serrif"
                    cssVar="--font-serif"
                    usage="Headings, emphasis"
                    sample="The quick brown fox jumps over the lazy dog"
                    serif
                  />
                </div>
              </div>

              {/* Font Weights */}
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-wider font-semibold mb-6 text-black/60">
                  FONT WEIGHTS
                </h3>
                <div className="space-y-3">
                  <div className="p-4 border border-black/10">
                    <span className="font-normal text-2xl">Regular (400)</span>
                    <CodeSnippet code="font-weight: 400; // or font-normal" />
                  </div>
                  <div className="p-4 border border-black/10">
                    <span className="font-medium text-2xl">Medium (500)</span>
                    <CodeSnippet code="font-weight: 500; // or font-medium" />
                  </div>
                  <div className="p-4 border border-black/10">
                    <span className="font-semibold text-2xl">Semibold (600)</span>
                    <CodeSnippet code="font-weight: 600; // or font-semibold" />
                  </div>
                  <div className="p-4 border border-black/10">
                    <span className="font-bold text-2xl">Bold (700)</span>
                    <CodeSnippet code="font-weight: 700; // or font-bold" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 03 COMPONENTS Section */}
          <section id="components" className="mb-12">
            <div className="bg-white p-12">
              {/* Section Header */}
              <div className="mb-10">
                <div className="flex items-baseline gap-6 mb-4">
                  <span className="text-[#00FF64] text-sm font-mono">03</span>
                  <h2 className="text-4xl font-medium" style={{ fontFamily: 'var(--font-serif)' }}>
                    Components
                  </h2>
                </div>
                <p className="text-black/60 text-base mt-4">
                  Reusable UI components with sharp corners and high contrast.
                </p>
              </div>

              {/* Buttons */}
              <div className="mb-10">
                <h3 className="text-xs uppercase tracking-wider font-semibold mb-6 text-black/60">
                  BUTTONS
                </h3>
                <div className="space-y-6">
                  <ComponentExample
                    title="Primary Button"
                    description="Main call-to-action button with primary green color"
                  >
                    <button className="px-6 py-3 bg-[#00FF64] border border-black hover:bg-[#00cc50] transition-colors font-medium">
                      Primary Button
                    </button>
                    <CodeSnippet code='<button className="px-6 py-3 bg-[#00FF64] border border-black hover:bg-[#00cc50] transition-colors font-medium">
  Primary Button
</button>' />
                  </ComponentExample>

                  <ComponentExample
                    title="Secondary Button"
                    description="Secondary action button with white background"
                  >
                    <button className="px-6 py-3 bg-white border border-black hover:bg-[#f5f5f5] transition-colors font-medium">
                      Secondary Button
                    </button>
                    <CodeSnippet code='<button className="px-6 py-3 bg-white border border-black hover:bg-[#f5f5f5] transition-colors font-medium">
  Secondary Button
</button>' />
                  </ComponentExample>
                </div>
              </div>

              {/* Cards */}
              <div className="mb-10">
                <h3 className="text-xs uppercase tracking-wider font-semibold mb-6 text-black/60">
                  CARDS
                </h3>
                <div className="space-y-6">
                  <ComponentExample
                    title="Basic Card"
                    description="Simple card with border"
                  >
                    <div className="p-6 border border-black bg-white max-w-md">
                      <h3 className="text-xl font-semibold mb-2">Card Title</h3>
                      <p className="text-black/60">
                        This is a basic card component with sharp corners and a black border.
                      </p>
                    </div>
                    <CodeSnippet code='<div className="p-6 border border-black bg-white">
  <h3 className="text-xl font-semibold mb-2">Card Title</h3>
  <p className="text-black/60">Card content...</p>
</div>' />
                  </ComponentExample>
                </div>
              </div>
            </div>
          </section>

          {/* 04 VOICE & COPY Section */}
          <section id="voice-copy" className="mb-12">
            <div className="bg-white p-12">
              <div className="mb-10">
                <div className="flex items-baseline gap-6 mb-4">
                  <span className="text-[#00FF64] text-sm font-mono">04</span>
                  <h2 className="text-4xl font-medium" style={{ fontFamily: 'var(--font-serif)' }}>
                    Voice & Copy
                  </h2>
                </div>
                <p className="text-black/60 text-base mt-4">
                  Clear, confident, and helpful. Our voice is professional yet approachable.
                </p>
              </div>
            </div>
          </section>

          {/* 05 LOGO & IMAGERY Section */}
          <section id="logo-imagery" className="mb-12">
            <div className="bg-white p-12">
              <div className="mb-10">
                <div className="flex items-baseline gap-6 mb-4">
                  <span className="text-[#00FF64] text-sm font-mono">05</span>
                  <h2 className="text-4xl font-medium" style={{ fontFamily: 'var(--font-serif)' }}>
                    Logo & Imagery
                  </h2>
                </div>
                <p className="text-black/60 text-base mt-4">
                  Guidelines for logo usage and imagery selection.
                </p>
              </div>
            </div>
          </section>

          {/* 06 SPACING & LAYOUT Section */}
          <section id="spacing-layout" className="mb-12">
            <div className="bg-white p-12">
              <div className="mb-10">
                <div className="flex items-baseline gap-6 mb-4">
                  <span className="text-[#00FF64] text-sm font-mono">06</span>
                  <h2 className="text-4xl font-medium" style={{ fontFamily: 'var(--font-serif)' }}>
                    Spacing & Layout
                  </h2>
                </div>
                <p className="text-black/60 text-base mt-4">
                  Common layout patterns and spacing guidelines.
                </p>
              </div>

              {/* Spacing Scale */}
              <div className="mb-10">
                <h3 className="text-xs uppercase tracking-wider font-semibold mb-6 text-black/60">
                  SPACING SCALE
                </h3>
                <div className="space-y-4 p-6 border border-black/10">
                  <div className="flex items-center gap-4">
                    <div className="w-32 text-sm" style={{ fontFamily: 'var(--font-mono)' }}>gap-1 (4px)</div>
                    <div className="flex gap-1">
                      <div className="w-8 h-8 bg-[#00FF64] border border-black"></div>
                      <div className="w-8 h-8 bg-[#00FF64] border border-black"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-32 text-sm" style={{ fontFamily: 'var(--font-mono)' }}>gap-2 (8px)</div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 bg-[#00FF64] border border-black"></div>
                      <div className="w-8 h-8 bg-[#00FF64] border border-black"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-32 text-sm" style={{ fontFamily: 'var(--font-mono)' }}>gap-4 (16px)</div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-[#00FF64] border border-black"></div>
                      <div className="w-8 h-8 bg-[#00FF64] border border-black"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-32 text-sm" style={{ fontFamily: 'var(--font-mono)' }}>gap-8 (32px)</div>
                    <div className="flex gap-8">
                      <div className="w-8 h-8 bg-[#00FF64] border border-black"></div>
                      <div className="w-8 h-8 bg-[#00FF64] border border-black"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 07 CSS SNIPPETS Section */}
          <section id="css-snippets" className="mb-12">
            <div className="bg-white p-12">
              <div className="mb-10">
                <div className="flex items-baseline gap-6 mb-4">
                  <span className="text-[#00FF64] text-sm font-mono">07</span>
                  <h2 className="text-4xl font-medium" style={{ fontFamily: 'var(--font-serif)' }}>
                    CSS Snippets
                  </h2>
                </div>
                <p className="text-black/60 text-base mt-4">
                  Ready-to-use code snippets for common patterns.
                </p>
              </div>
            </div>
          </section>

          {/* 08 CONTAINERS Section */}
          <section id="containers" className="mb-12">
            <div className="bg-white p-12">
              <div className="mb-10">
                <div className="flex items-baseline gap-6 mb-4">
                  <span className="text-[#00FF64] text-sm font-mono">08</span>
                  <h2 className="text-4xl font-medium" style={{ fontFamily: 'var(--font-serif)' }}>
                    Containers
                  </h2>
                </div>
                <p className="text-black/60 text-base mt-4">
                  Container patterns and max-width guidelines.
                </p>
              </div>
            </div>
          </section>

          {/* 09 DATA VIZ Section */}
          <section id="data-viz" className="mb-12">
            <div className="bg-white p-12">
              <div className="mb-10">
                <div className="flex items-baseline gap-6 mb-4">
                  <span className="text-[#00FF64] text-sm font-mono">09</span>
                  <h2 className="text-4xl font-medium" style={{ fontFamily: 'var(--font-serif)' }}>
                    Data Viz
                  </h2>
                </div>
                <p className="text-black/60 text-base mt-4">
                  Data visualization guidelines and chart styles.
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}

// Helper Components
function ColorSwatchNew({ name, hex, description }: {
  name: string;
  hex: string;
  description: string;
}) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border border-black/10">
      <div
        className="w-full h-24"
        style={{ backgroundColor: hex }}
      ></div>
      <div className="p-4">
        <h4 className="text-xs uppercase tracking-wider font-semibold mb-2">{name}</h4>
        <button
          onClick={() => copyToClipboard(hex)}
          className="w-full text-left px-2 py-1 text-xs mb-2 font-mono hover:bg-black/5 transition-colors"
        >
          {copied ? 'Copied!' : hex}
        </button>
        <p className="text-xs text-black/50">{description}</p>
      </div>
    </div>
  );
}

function FontExample({ family, cssVar, usage, sample, mono = false, serif = false }: {
  family: string;
  cssVar: string;
  usage: string;
  sample: string;
  mono?: boolean;
  serif?: boolean;
}) {
  return (
    <div className="border border-black p-4">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h4 className="font-semibold">{family}</h4>
          <p className="text-sm text-[#333333]">{usage}</p>
        </div>
        <code className="text-sm px-2 py-1 bg-[#f5f5f5] border border-[#e5e5e5]" style={{ fontFamily: 'var(--font-mono)' }}>
          {cssVar}
        </code>
      </div>
      <div
        className="text-2xl"
        style={{
          fontFamily: mono ? 'var(--font-mono)' : serif ? 'var(--font-serif)' : 'var(--font-sans)'
        }}
      >
        {sample}
      </div>
    </div>
  );
}

function ComponentExample({ title, description, children }: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-black/10">
      <div className="p-4 bg-black/5 border-b border-black/10">
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-black/60 mt-1">{description}</p>
      </div>
      <div className="p-6 space-y-4">
        {children}
      </div>
    </div>
  );
}

function CodeSnippet({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative mt-3">
      <pre className="p-3 bg-black/5 border border-black/10 overflow-x-auto text-xs" style={{ fontFamily: 'var(--font-mono)' }}>
        <code>{code}</code>
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 px-2 py-1 bg-white border border-black hover:bg-[#00FF64] transition-colors text-xs font-medium"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
}
