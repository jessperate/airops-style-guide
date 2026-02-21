'use client'

import { useState } from 'react'

export default function StyleGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-[#e5e5e5] bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#00FF64] flex items-center justify-center border border-black">
              <span className="font-bold text-xl">AO</span>
            </div>
            <div>
              <h1 className="text-4xl font-medium" style={{ fontFamily: 'var(--font-serif)' }}>
                AirOps Style Guide
              </h1>
              <p className="text-sm text-[#333333] mt-1">Complete design system reference</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Navigation */}
        <nav className="mb-12 p-6 border border-[#e5e5e5] bg-[#f5f5f5]">
          <h3 className="text-lg font-semibold mb-3">Quick Navigation</h3>
          <div className="flex flex-wrap gap-3">
            <a href="#colors" className="px-4 py-2 border border-black bg-white hover:bg-[#f5f5f5] transition-colors">
              Colors
            </a>
            <a href="#typography" className="px-4 py-2 border border-black bg-white hover:bg-[#f5f5f5] transition-colors">
              Typography
            </a>
            <a href="#components" className="px-4 py-2 border border-black bg-white hover:bg-[#f5f5f5] transition-colors">
              Components
            </a>
            <a href="#layout" className="px-4 py-2 border border-black bg-white hover:bg-[#f5f5f5] transition-colors">
              Layout Patterns
            </a>
            <a href="#code-examples" className="px-4 py-2 border border-black bg-white hover:bg-[#f5f5f5] transition-colors">
              Code Examples
            </a>
          </div>
        </nav>

        {/* Color Palette Section */}
        <section id="colors" className="mb-16">
          <h2 className="text-3xl font-medium mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            Color Palette
          </h2>
          <p className="text-[#333333] mb-8">
            The AirOps color system is built around high contrast and clean aesthetics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ColorSwatch
              name="Primary"
              hex="#00FF64"
              cssVar="--primary"
              description="Primary brand color for CTAs and highlights"
            />
            <ColorSwatch
              name="Primary Hover"
              hex="#00cc50"
              cssVar="--primary-hover"
              description="Hover state for primary elements"
            />
            <ColorSwatch
              name="Background"
              hex="#ffffff"
              cssVar="--background"
              description="Main background color"
              border
            />
            <ColorSwatch
              name="Foreground"
              hex="#000000"
              cssVar="--foreground"
              description="Primary text color"
            />
            <ColorSwatch
              name="Muted"
              hex="#f5f5f5"
              cssVar="--muted"
              description="Subtle backgrounds and secondary areas"
              border
            />
            <ColorSwatch
              name="Border"
              hex="#e5e5e5"
              cssVar="--border"
              description="Borders and dividers"
              border
            />
          </div>
        </section>

        {/* Typography Section */}
        <section id="typography" className="mb-16">
          <h2 className="text-3xl font-medium mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            Typography
          </h2>
          <p className="text-[#333333] mb-8">
            Our typography system uses three distinct font families for different purposes.
          </p>

          {/* Font Families */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Font Families</h3>
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
            <h3 className="text-2xl font-semibold mb-4">Font Weights</h3>
            <div className="space-y-3">
              <div className="p-4 border border-[#e5e5e5]">
                <span className="font-normal text-2xl">Regular (400)</span>
                <CodeSnippet code="font-weight: 400; // or font-normal" />
              </div>
              <div className="p-4 border border-[#e5e5e5]">
                <span className="font-medium text-2xl">Medium (500)</span>
                <CodeSnippet code="font-weight: 500; // or font-medium" />
              </div>
              <div className="p-4 border border-[#e5e5e5]">
                <span className="font-semibold text-2xl">Semibold (600)</span>
                <CodeSnippet code="font-weight: 600; // or font-semibold" />
              </div>
              <div className="p-4 border border-[#e5e5e5]">
                <span className="font-bold text-2xl">Bold (700)</span>
                <CodeSnippet code="font-weight: 700; // or font-bold" />
              </div>
            </div>
          </div>

          {/* Heading Styles */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Heading Styles</h3>
            <div className="space-y-6 p-6 border border-[#e5e5e5] bg-white">
              <div>
                <h1 style={{ fontFamily: 'var(--font-serif)' }} className="text-5xl font-medium mb-2">
                  Heading 1
                </h1>
                <CodeSnippet code='<h1 className="text-5xl font-medium" style={{ fontFamily: "var(--font-serif)" }}>Heading 1</h1>' />
              </div>
              <div>
                <h2 style={{ fontFamily: 'var(--font-serif)' }} className="text-3xl font-medium mb-2">
                  Heading 2
                </h2>
                <CodeSnippet code='<h2 className="text-3xl font-medium" style={{ fontFamily: "var(--font-serif)" }}>Heading 2</h2>' />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Heading 3</h3>
                <CodeSnippet code='<h3 className="text-2xl font-semibold">Heading 3</h3>' />
              </div>
            </div>
          </div>

          {/* Text Examples */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Text Styles</h3>
            <div className="space-y-4">
              <div className="p-4 border border-[#e5e5e5]">
                <p className="text-base mb-2">
                  Body text using Saans Regular. This is the standard text style for paragraphs and general content.
                </p>
                <CodeSnippet code='<p className="text-base">Body text...</p>' />
              </div>
              <div className="p-4 border border-[#e5e5e5] bg-[#f5f5f5]">
                <code className="text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
                  const example = &quot;Code text using Saans Mono&quot;;
                </code>
                <CodeSnippet code='<code className="text-sm" style={{ fontFamily: "var(--font-mono)" }}>...</code>' />
              </div>
            </div>
          </div>
        </section>

        {/* Components Section */}
        <section id="components" className="mb-16">
          <h2 className="text-3xl font-medium mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            Components
          </h2>
          <p className="text-[#333333] mb-8">
            Reusable UI components with sharp corners and high contrast.
          </p>

          {/* Buttons */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">Buttons</h3>
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

              <ComponentExample
                title="Button Group"
                description="Multiple buttons displayed together"
              >
                <div className="flex gap-3">
                  <button className="px-6 py-3 bg-[#00FF64] border border-black hover:bg-[#00cc50] transition-colors font-medium">
                    Confirm
                  </button>
                  <button className="px-6 py-3 bg-white border border-black hover:bg-[#f5f5f5] transition-colors font-medium">
                    Cancel
                  </button>
                </div>
                <CodeSnippet code='<div className="flex gap-3">
  <button className="px-6 py-3 bg-[#00FF64] border border-black hover:bg-[#00cc50] transition-colors font-medium">
    Confirm
  </button>
  <button className="px-6 py-3 bg-white border border-black hover:bg-[#f5f5f5] transition-colors font-medium">
    Cancel
  </button>
</div>' />
              </ComponentExample>
            </div>
          </div>

          {/* Cards */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">Cards</h3>
            <div className="space-y-6">
              <ComponentExample
                title="Basic Card"
                description="Simple card with border"
              >
                <div className="p-6 border border-black bg-white max-w-md">
                  <h3 className="text-xl font-semibold mb-2">Card Title</h3>
                  <p className="text-[#333333]">
                    This is a basic card component with sharp corners and a black border.
                  </p>
                </div>
                <CodeSnippet code='<div className="p-6 border border-black bg-white">
  <h3 className="text-xl font-semibold mb-2">Card Title</h3>
  <p className="text-[#333333]">Card content...</p>
</div>' />
              </ComponentExample>

              <ComponentExample
                title="Highlighted Card"
                description="Card with primary color accent"
              >
                <div className="border border-black bg-white max-w-md">
                  <div className="h-2 bg-[#00FF64]"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Featured Card</h3>
                    <p className="text-[#333333]">
                      Card with a primary color accent bar at the top.
                    </p>
                  </div>
                </div>
                <CodeSnippet code='<div className="border border-black bg-white">
  <div className="h-2 bg-[#00FF64]"></div>
  <div className="p-6">
    <h3 className="text-xl font-semibold mb-2">Featured Card</h3>
    <p className="text-[#333333]">Card content...</p>
  </div>
</div>' />
              </ComponentExample>
            </div>
          </div>

          {/* Pills/Badges */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">Pills & Badges</h3>
            <div className="space-y-6">
              <ComponentExample
                title="Status Pills"
                description="Small labels for status, categories, or tags"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-[#00FF64] border border-black text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
                    Active
                  </span>
                  <span className="px-3 py-1 bg-white border border-black text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
                    Pending
                  </span>
                  <span className="px-3 py-1 bg-[#f5f5f5] border border-black text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
                    Inactive
                  </span>
                </div>
                <CodeSnippet code='<span className="px-3 py-1 bg-[#00FF64] border border-black text-sm" style={{ fontFamily: "var(--font-mono)" }}>
  Active
</span>' />
              </ComponentExample>

              <ComponentExample
                title="Count Badges"
                description="Numerical indicators"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-base">Notifications</span>
                    <span className="w-6 h-6 flex items-center justify-center bg-[#00FF64] border border-black text-xs font-bold">
                      5
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-base">Messages</span>
                    <span className="w-6 h-6 flex items-center justify-center bg-black text-white text-xs font-bold">
                      12
                    </span>
                  </div>
                </div>
                <CodeSnippet code='<span className="w-6 h-6 flex items-center justify-center bg-[#00FF64] border border-black text-xs font-bold">
  5
</span>' />
              </ComponentExample>
            </div>
          </div>

          {/* Input Fields */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">Input Fields</h3>
            <div className="space-y-6">
              <ComponentExample
                title="Text Input"
                description="Standard text input field"
              >
                <input
                  type="text"
                  placeholder="Enter text..."
                  className="px-4 py-3 border border-black bg-white w-full max-w-md focus:outline-none focus:border-[#00FF64]"
                />
                <CodeSnippet code='<input
  type="text"
  placeholder="Enter text..."
  className="px-4 py-3 border border-black bg-white w-full focus:outline-none focus:border-[#00FF64]"
/>' />
              </ComponentExample>

              <ComponentExample
                title="Text Area"
                description="Multi-line text input"
              >
                <textarea
                  placeholder="Enter message..."
                  rows={4}
                  className="px-4 py-3 border border-black bg-white w-full max-w-md focus:outline-none focus:border-[#00FF64]"
                />
                <CodeSnippet code='<textarea
  placeholder="Enter message..."
  rows={4}
  className="px-4 py-3 border border-black bg-white w-full focus:outline-none focus:border-[#00FF64]"
/>' />
              </ComponentExample>
            </div>
          </div>

          {/* Code Blocks */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">Code Blocks</h3>
            <div className="space-y-6">
              <ComponentExample
                title="Inline Code"
                description="Code within text"
              >
                <p>
                  Use the <code className="px-2 py-1 bg-[#f5f5f5] border border-[#e5e5e5] text-sm" style={{ fontFamily: 'var(--font-mono)' }}>useState</code> hook to manage state.
                </p>
                <CodeSnippet code='<code className="px-2 py-1 bg-[#f5f5f5] border border-[#e5e5e5] text-sm" style={{ fontFamily: "var(--font-mono)" }}>
  useState
</code>' />
              </ComponentExample>

              <ComponentExample
                title="Code Block"
                description="Multi-line code display"
              >
                <pre className="p-4 bg-black text-[#00FF64] border border-black overflow-x-auto" style={{ fontFamily: 'var(--font-mono)' }}>
                  <code>{`function Example() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`}</code>
                </pre>
                <CodeSnippet code='<pre className="p-4 bg-black text-[#00FF64] border border-black" style={{ fontFamily: "var(--font-mono)" }}>
  <code>...</code>
</pre>' />
              </ComponentExample>
            </div>
          </div>
        </section>

        {/* Layout Patterns Section */}
        <section id="layout" className="mb-16">
          <h2 className="text-3xl font-medium mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            Layout Patterns
          </h2>
          <p className="text-[#333333] mb-8">
            Common layout patterns and spacing guidelines.
          </p>

          {/* Grid Layouts */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">Grid Layouts</h3>
            <ComponentExample
              title="3-Column Grid"
              description="Responsive grid layout"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-6 border border-black bg-[#f5f5f5]">Column 1</div>
                <div className="p-6 border border-black bg-[#f5f5f5]">Column 2</div>
                <div className="p-6 border border-black bg-[#f5f5f5]">Column 3</div>
              </div>
              <CodeSnippet code='<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div className="p-6 border border-black bg-[#f5f5f5]">Column 1</div>
  <div className="p-6 border border-black bg-[#f5f5f5]">Column 2</div>
  <div className="p-6 border border-black bg-[#f5f5f5]">Column 3</div>
</div>' />
            </ComponentExample>
          </div>

          {/* Flex Layouts */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">Flex Layouts</h3>
            <ComponentExample
              title="Horizontal Layout"
              description="Flex row with space between"
            >
              <div className="flex justify-between items-center p-4 border border-black">
                <span className="font-medium">Left Content</span>
                <span className="font-medium">Right Content</span>
              </div>
              <CodeSnippet code='<div className="flex justify-between items-center p-4 border border-black">
  <span>Left Content</span>
  <span>Right Content</span>
</div>' />
            </ComponentExample>
          </div>

          {/* Spacing Scale */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">Spacing Scale</h3>
            <div className="space-y-4 p-6 border border-[#e5e5e5]">
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
                <div className="w-32 text-sm" style={{ fontFamily: 'var(--font-mono)' }}>gap-3 (12px)</div>
                <div className="flex gap-3">
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
                <div className="w-32 text-sm" style={{ fontFamily: 'var(--font-mono)' }}>gap-6 (24px)</div>
                <div className="flex gap-6">
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

          {/* Border Styles */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">Border Styles</h3>
            <div className="space-y-4">
              <div className="p-4 border border-black">
                <code className="text-sm" style={{ fontFamily: 'var(--font-mono)' }}>border border-black</code>
              </div>
              <div className="p-4 border border-[#e5e5e5]">
                <code className="text-sm" style={{ fontFamily: 'var(--font-mono)' }}>border border-[#e5e5e5]</code>
              </div>
              <div className="p-4 border-2 border-black">
                <code className="text-sm" style={{ fontFamily: 'var(--font-mono)' }}>border-2 border-black</code>
              </div>
              <div className="p-4 border-t border-black">
                <code className="text-sm" style={{ fontFamily: 'var(--font-mono)' }}>border-t border-black</code>
              </div>
            </div>
          </div>
        </section>

        {/* Code Examples Section */}
        <section id="code-examples" className="mb-16">
          <h2 className="text-3xl font-medium mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            Code Examples
          </h2>
          <p className="text-[#333333] mb-8">
            Complete code examples for common patterns.
          </p>

          {/* Full Component Example */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">Complete Component Example</h3>
            <div className="border border-black">
              <div className="p-4 bg-[#f5f5f5] border-b border-black">
                <h4 className="font-semibold">Feature Card Component</h4>
              </div>
              <div className="p-6">
                {/* Visual Example */}
                <div className="mb-6 border border-black p-6 bg-white">
                  <h3 className="text-xl font-semibold mb-2">Feature Title</h3>
                  <p className="text-[#333333] mb-4">
                    This is a complete feature card with title, description, and action button.
                  </p>
                  <button className="px-4 py-2 bg-[#00FF64] border border-black hover:bg-[#00cc50] transition-colors font-medium">
                    Learn More
                  </button>
                </div>
                {/* Code Example */}
                <pre className="p-4 bg-black text-[#00FF64] overflow-x-auto" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem' }}>
                  <code>{`export function FeatureCard() {
  return (
    <div className="border border-black p-6 bg-white">
      <h3 className="text-xl font-semibold mb-2">
        Feature Title
      </h3>
      <p className="text-[#333333] mb-4">
        This is a complete feature card with title,
        description, and action button.
      </p>
      <button className="px-4 py-2 bg-[#00FF64] border border-black hover:bg-[#00cc50] transition-colors font-medium">
        Learn More
      </button>
    </div>
  );
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* CSS Variables Usage */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">CSS Variables Reference</h3>
            <div className="border border-black overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#f5f5f5] border-b border-black">
                  <tr>
                    <th className="p-4 text-left font-semibold">Variable</th>
                    <th className="p-4 text-left font-semibold">Value</th>
                    <th className="p-4 text-left font-semibold">Usage</th>
                  </tr>
                </thead>
                <tbody style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem' }}>
                  <tr className="border-b border-[#e5e5e5]">
                    <td className="p-4">--primary</td>
                    <td className="p-4">#00FF64</td>
                    <td className="p-4">Primary brand color</td>
                  </tr>
                  <tr className="border-b border-[#e5e5e5]">
                    <td className="p-4">--primary-hover</td>
                    <td className="p-4">#00cc50</td>
                    <td className="p-4">Primary hover state</td>
                  </tr>
                  <tr className="border-b border-[#e5e5e5]">
                    <td className="p-4">--background</td>
                    <td className="p-4">#ffffff</td>
                    <td className="p-4">Page background</td>
                  </tr>
                  <tr className="border-b border-[#e5e5e5]">
                    <td className="p-4">--foreground</td>
                    <td className="p-4">#000000</td>
                    <td className="p-4">Text color</td>
                  </tr>
                  <tr className="border-b border-[#e5e5e5]">
                    <td className="p-4">--muted</td>
                    <td className="p-4">#f5f5f5</td>
                    <td className="p-4">Subtle backgrounds</td>
                  </tr>
                  <tr className="border-b border-[#e5e5e5]">
                    <td className="p-4">--border</td>
                    <td className="p-4">#e5e5e5</td>
                    <td className="p-4">Borders and dividers</td>
                  </tr>
                  <tr className="border-b border-[#e5e5e5]">
                    <td className="p-4">--font-sans</td>
                    <td className="p-4">Saans</td>
                    <td className="p-4">Body text font</td>
                  </tr>
                  <tr className="border-b border-[#e5e5e5]">
                    <td className="p-4">--font-mono</td>
                    <td className="p-4">Saans Mono</td>
                    <td className="p-4">Code and pills</td>
                  </tr>
                  <tr>
                    <td className="p-4">--font-serif</td>
                    <td className="p-4">Serrif</td>
                    <td className="p-4">Headings</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Tailwind Classes Quick Reference */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">Common Tailwind Classes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-black p-4">
                <h4 className="font-semibold mb-2">Colors</h4>
                <div className="space-y-1 text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
                  <div>bg-[#00FF64] - Primary background</div>
                  <div>bg-[#00cc50] - Primary hover</div>
                  <div>text-[#333333] - Muted text</div>
                  <div>border-black - Black border</div>
                  <div>border-[#e5e5e5] - Light border</div>
                </div>
              </div>
              <div className="border border-black p-4">
                <h4 className="font-semibold mb-2">Typography</h4>
                <div className="space-y-1 text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
                  <div>font-normal - Weight 400</div>
                  <div>font-medium - Weight 500</div>
                  <div>font-semibold - Weight 600</div>
                  <div>font-bold - Weight 700</div>
                  <div>text-sm, text-base, text-lg, etc.</div>
                </div>
              </div>
              <div className="border border-black p-4">
                <h4 className="font-semibold mb-2">Spacing</h4>
                <div className="space-y-1 text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
                  <div>p-4, px-4, py-4 - Padding</div>
                  <div>m-4, mx-4, my-4 - Margin</div>
                  <div>gap-3, gap-4, gap-6 - Gap</div>
                  <div>space-y-4 - Vertical spacing</div>
                </div>
              </div>
              <div className="border border-black p-4">
                <h4 className="font-semibold mb-2">Layout</h4>
                <div className="space-y-1 text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
                  <div>flex, grid - Display types</div>
                  <div>justify-between - Flex justify</div>
                  <div>items-center - Flex align</div>
                  <div>grid-cols-3 - Grid columns</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-[#e5e5e5] text-center text-sm text-[#333333]">
          <p>AirOps Style Guide - Design System Reference</p>
          <p className="mt-2">Built with Next.js, TypeScript, and Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
}

// Helper Components
function ColorSwatch({ name, hex, cssVar, description, border = false }: {
  name: string;
  hex: string;
  cssVar: string;
  description: string;
  border?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border border-black p-4">
      <div
        className={`w-full h-24 mb-3 ${border ? 'border border-[#e5e5e5]' : ''}`}
        style={{ backgroundColor: hex }}
      ></div>
      <h4 className="font-semibold mb-1">{name}</h4>
      <p className="text-sm text-[#333333] mb-3">{description}</p>
      <div className="space-y-2">
        <button
          onClick={() => copyToClipboard(hex)}
          className="w-full text-left px-2 py-1 bg-[#f5f5f5] hover:bg-[#e5e5e5] transition-colors text-sm border border-[#e5e5e5]"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          {copied ? 'Copied!' : hex}
        </button>
        <button
          onClick={() => copyToClipboard(`var(${cssVar})`)}
          className="w-full text-left px-2 py-1 bg-[#f5f5f5] hover:bg-[#e5e5e5] transition-colors text-sm border border-[#e5e5e5]"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          {copied ? 'Copied!' : `var(${cssVar})`}
        </button>
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
    <div className="border border-black">
      <div className="p-4 bg-[#f5f5f5] border-b border-black">
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-[#333333] mt-1">{description}</p>
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
      <pre className="p-3 bg-[#f5f5f5] border border-[#e5e5e5] overflow-x-auto text-xs" style={{ fontFamily: 'var(--font-mono)' }}>
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
