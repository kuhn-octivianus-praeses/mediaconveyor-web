# Snippets
## Theme in CSS (first)

:root {
  /* Color Palette */
  --bg-dark: #030712;
  --bg-surface: rgba(15, 23, 42, 0.6);
  --glass-bg: rgba(255, 255, 255, 0.03);
  --glass-bg-hover: rgba(255, 255, 255, 0.06);
  --glass-border: rgba(255, 255, 255, 0.08);
  --glass-border-hover: rgba(255, 255, 255, 0.2);
  --glass-shadow: 0 16px 40px 0 rgba(0, 0, 0, 0.4);
  
  --primary-cyan: #00f2fe;
  --primary-blue: #4facfe;
  --accent-purple: #a855f7;
  --accent-indigo: #6366f1;
  --accent-emerald: #10b981;
  
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --text-dim: #64748b;
  
  --font-main: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-full: 9999px;
  
  --transition-fast: 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-normal: 0.35s cubic-bezier(0.16, 1, 0.3, 1);

}

## Theme in CSS (second)

:root {
  /* Color Palette */
  --bg-dark: #121103;
  --bg-surface: rgba(42, 41, 15, 0.6);
  --glass-bg: rgba(255, 255, 255, 0.03);
  --glass-bg-hover: rgba(255, 255, 255, 0.06);
  --glass-border: rgba(255, 255, 255, 0.08);
  --glass-border-hover: rgba(255, 255, 255, 0.2);
  --glass-shadow: 0 16px 40px 0 rgba(0, 0, 0, 0.4);
  
  --primary-cyan: #feba00;
  --primary-blue: #fe6f4f;
  --accent-purple: #f7b655;
  --accent-indigo: #63a1f1;
  --accent-emerald: #10b981;
  
  --text-main: #fbfbf8;
  --text-muted: #b8b694;
  --text-dim: #8b8064;
  
  --font-main: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-full: 9999px;
  
  --transition-fast: 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-normal: 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

  ------------------
  ## Github-Section

  <section id="github-resources" class="section">
      <div class="section-header">
        <span class="section-tag">Open Source GitHub Resources</span>
        <h2 class="section-title">Repositories & Ecosystem Links</h2>
        <p class="section-desc">Explore open source Kuhn Octivianus Praeses repositories, SDKs, CLI tools, and official GitHub developer resources.</p>
      </div>

      <!-- Controls: Search & Category Filter Pills -->
      <div class="resources-controls">
        <div class="search-box">
          <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input type="text" id="search-input" class="search-input" placeholder="Search GitHub repositories by keyword, language, tag...">
        </div>

        <div class="filter-pills">
          <button class="filter-pill active" data-category="all">All Repositories</button>
          <button class="filter-pill" data-category="core">Core Engine</button>
          <button class="filter-pill" data-category="sdks">SDKs</button>
          <button class="filter-pill" data-category="cli">CLI & Tools</button>
          <button class="filter-pill" data-category="infra">Kubernetes & Infra</button>
        </div>
      </div>

      <!-- Repositories Dynamic Grid -->
      <div class="repos-grid" id="repos-grid">
        <!-- Rendered via js/app.js -->
      </div>

      <!-- Quick External GitHub Links Section -->
      <div id="docs" class="section-header" style="margin-top: 4rem; margin-bottom: 2rem;">
        <span class="section-tag">Developer Portal</span>
        <h2 class="section-title">Online GitHub Directory</h2>
      </div>

      <div class="quick-links-grid">
        <a href="https://github.com/Kuhn Octivianus Praeses" target="_blank" rel="noopener noreferrer" class="glass-card quick-link-card">
          <div class="quick-link-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </div>
          <div class="quick-link-content">
            <h4>GitHub Organization</h4>
            <p>github.com/Kuhn Octivianus Praeses</p>
          </div>
        </a>

        <a href="https://github.com/Kuhn Octivianus Praeses/core-engine/issues" target="_blank" rel="noopener noreferrer" class="glass-card quick-link-card">
          <div class="quick-link-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          </div>
          <div class="quick-link-content">
            <h4>Issue Tracker</h4>
            <p>Bug reports & feature requests</p>
          </div>
        </a>

        <a href="https://github.com/Kuhn Octivianus Praeses/core-engine/discussions" target="_blank" rel="noopener noreferrer" class="glass-card quick-link-card">
          <div class="quick-link-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          </div>
          <div class="quick-link-content">
            <h4>Community Discussions</h4>
            <p>Architecture Q&A & ideas</p>
          </div>
        </a>

        <a href="https://github.com/Kuhn Octivianus Praeses/core-engine/releases" target="_blank" rel="noopener noreferrer" class="glass-card quick-link-card">
          <div class="quick-link-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          </div>
          <div class="quick-link-content">
            <h4>Releases & Changelogs</h4>
            <p>v2.4.0 Release Binaries</p>
          </div>
        </a>
      </div>
    </section>
}