/**
 * ==============================================================================
 * CLIENT INTERACTION & DATA HYDRATION SCRIPT (main.js)
 * Personal Portfolio for Abijith.U
 * 
 * Clean Vanilla JavaScript · No Frameworks · No Dependencies
 * ==============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // Ensure portfolioData exists before hydration
  if (typeof portfolioData === "undefined") {
    console.error("portfolioData object not found. Ensure data.js is loaded prior to main.js.");
    return;
  }

  initNavigation();
  hydrateHeroSection();
  hydrateTrustMarquee();
  hydrateProjectsSection();
  hydrateSkillsSection();
  hydrateAboutAndEducation();
  hydrateContactSection();
  hydrateFooter();
  initScrollAnimations();
  initSpectralBars();
  initContactForm();
});

/* ------------------------------------------------------------------------------
   1. NAVIGATION & MOBILE DRAWER
   ------------------------------------------------------------------------------ */
function initNavigation() {
  const { personal, navLinks } = portfolioData;

  // Set Brand Logo
  const brandEl = document.getElementById("navBrandName");
  if (brandEl) brandEl.textContent = personal.name;

  // Hydrate Desktop Navigation Menu
  const menuContainer = document.getElementById("navMenu");
  const mobileContainer = document.getElementById("mobileDrawerMenu");

  if (menuContainer) {
    menuContainer.innerHTML = navLinks
      .map((link) => {
        const externalAttr = link.external ? 'target="_blank" rel="noopener noreferrer"' : "";
        const externalIcon = link.external
          ? `<svg class="external-icon" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 2H10V8.5M10 2L2 10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`
          : "";
        return `
          <li>
            <a href="${link.href}" class="nav-link" ${externalAttr}>
              ${link.label}
              ${externalIcon}
            </a>
          </li>
        `;
      })
      .join("");
  }

  // Hydrate Mobile Drawer Navigation
  if (mobileContainer) {
    mobileContainer.innerHTML = navLinks
      .map((link) => {
        const externalAttr = link.external ? 'target="_blank" rel="noopener noreferrer"' : "";
        const externalIcon = link.external
          ? `<svg class="external-icon" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 2H10V8.5M10 2L2 10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`
          : `<span style="font-size: 18px; color: var(--text-tertiary);">→</span>`;
        return `
          <a href="${link.href}" class="nav-link mobile-link" ${externalAttr}>
            ${link.label}
            ${externalIcon}
          </a>
        `;
      })
      .join("");
  }

  // Mobile Hamburger Toggle
  const toggleBtn = document.getElementById("mobileToggle");
  const drawer = document.getElementById("mobileDrawer");

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener("click", () => {
      const isOpen = drawer.classList.toggle("open");
      toggleBtn.setAttribute("aria-expanded", isOpen);
      toggleBtn.innerHTML = isOpen
        ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"/></svg>`
        : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    });

    // Close drawer when clicking any mobile link
    drawer.querySelectorAll(".mobile-link").forEach((link) => {
      link.addEventListener("click", () => {
        drawer.classList.remove("open");
        toggleBtn.setAttribute("aria-expanded", "false");
        toggleBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
      });
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && drawer.classList.contains("open")) {
        drawer.classList.remove("open");
        toggleBtn.setAttribute("aria-expanded", "false");
        toggleBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
      }
    });
  }
}

/* ------------------------------------------------------------------------------
   2. HERO SECTION
   ------------------------------------------------------------------------------ */
function hydrateHeroSection() {
  const { personal } = portfolioData;

  const heroH1 = document.getElementById("heroHeadline");
  if (heroH1) heroH1.textContent = personal.heroHeadline;

  const heroSub = document.getElementById("heroSubheadline");
  if (heroSub) heroSub.textContent = personal.heroSubheadline;

  const heroStatusText = document.getElementById("heroStatusText");
  if (heroStatusText) heroStatusText.textContent = personal.statusText;
}

/* ------------------------------------------------------------------------------
   3. TRUST STRIP MARQUEE
   Renders tools twice for seamless, infinite looping
   ------------------------------------------------------------------------------ */
function hydrateTrustMarquee() {
  const { tools } = portfolioData;
  const marqueeTrack = document.getElementById("toolsMarqueeTrack");
  if (!marqueeTrack) return;

  const itemsHtml = tools
    .map(
      (tool) => `
      <div class="marquee-item">
        <span class="status-dot neutral"></span>
        <span>${tool.name}</span>
        <span class="item-badge">${tool.badge}</span>
      </div>
    `
    )
    .join("");

  // Double the set to ensure smooth infinite wrap
  marqueeTrack.innerHTML = itemsHtml + itemsHtml;
}

/* ------------------------------------------------------------------------------
   4. PROJECTS SECTION (Featured Deep Graphite & Secondary Cards)
   ------------------------------------------------------------------------------ */
function hydrateProjectsSection() {
  const { projects } = portfolioData;

  const featured = projects.find((p) => p.isFeatured) || projects[0];
  const others = projects.filter((p) => p.id !== featured.id);

  // Hydrate Featured Deep Graphite Panel
  const graphiteContainer = document.getElementById("featuredGraphiteContainer");
  if (graphiteContainer && featured) {
    const snippet = featured.codeSnippet || {
      filename: "main.py",
      code: "# No preview code provided"
    };

    // Syntax highlight preview helper
    const formattedCode = highlightSyntax(snippet.code);

    const tagsHtml = featured.tags
      .map((tag) => `<span class="graphite-tag-pill">${tag}</span>`)
      .join("");

    const metricsHtml = (featured.metrics || [])
      .map(
        (m) => `
        <div class="telemetry-stat">
          <span class="telemetry-stat-label">${m.label}</span>
          <span class="telemetry-stat-val" style="color: #FCFCFB;">${m.value}</span>
        </div>
      `
      )
      .join("");

    graphiteContainer.innerHTML = `
      <div class="featured-graphite-panel reveal-on-scroll">
        <div class="graphite-panel-grid">
          <!-- Left Column: Project Overview -->
          <div class="graphite-content">
            <div class="graphite-status-row">
              <span class="graphite-chip">
                <span class="status-dot ${featured.statusColor || "amber"} pulse"></span>
                ${featured.status}
              </span>
              <span style="font-size: 12px; color: var(--text-secondary-dark); text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600;">
                ${featured.subtitle}
              </span>
            </div>

            <h3 class="graphite-title">${featured.title}</h3>
            <p class="graphite-desc">${featured.description}</p>

            <div class="graphite-tags">
              ${tagsHtml}
            </div>

            ${
              metricsHtml
                ? `<div class="widget-metrics-row" style="border-top-color: rgba(255, 255, 255, 0.1); margin-top: 10px;">
                    ${metricsHtml}
                   </div>`
                : ""
            }

            <div class="graphite-actions">
              ${
                featured.links.github
                  ? `<a href="${featured.links.github}" target="_blank" rel="noopener noreferrer" class="btn btn-graphite-primary">
                      <span>View GitHub Repository</span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </a>`
                  : ""
              }
              ${
                featured.links.demo
                  ? `<a href="${featured.links.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-graphite-secondary">
                      <span>Live Demonstration</span>
                    </a>`
                  : ""
              }
            </div>
          </div>

          <!-- Right Column: Glass Terminal Window -->
          <div class="terminal-window">
            <div class="terminal-header">
              <div class="terminal-controls">
                <span class="control-dot close"></span>
                <span class="control-dot min"></span>
                <span class="control-dot max"></span>
              </div>
              <span class="terminal-filename">${snippet.filename}</span>
              <span style="font-size: 11px; color: rgba(255,255,255,0.4); font-family: var(--font-mono);">UTF-8</span>
            </div>
            <div class="terminal-body">
              <pre class="terminal-code"><code>${formattedCode}</code></pre>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Hydrate Secondary White Project Cards
  const gridContainer = document.getElementById("secondaryProjectsGrid");
  if (gridContainer) {
    gridContainer.innerHTML = others
      .map((proj) => {
        const tagsHtml = proj.tags
          .map((tag) => `<span class="card-tag">${tag}</span>`)
          .join("");

        return `
          <article class="project-card reveal-on-scroll">
            <div>
              <div class="card-top-row">
                <span class="project-status-chip">
                  <span class="status-dot ${proj.statusColor || "emerald"}"></span>
                  ${proj.status}
                </span>

                ${
                  proj.links.github
                    ? `<a href="${proj.links.github}" target="_blank" rel="noopener noreferrer" class="card-icon-link" aria-label="View source on GitHub" title="View GitHub Source">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                      </a>`
                    : ""
                }
              </div>

              <div class="card-main-content">
                <div class="card-subtitle">${proj.subtitle}</div>
                <h3 class="card-title">${proj.title}</h3>
                <p class="card-desc">${proj.description}</p>
              </div>
            </div>

            <div class="card-tags">
              ${tagsHtml}
            </div>
          </article>
        `;
      })
      .join("");
  }
}

// Clean single-pass tokenizer for syntax highlighting without tag collision
function highlightSyntax(code) {
  const escapeHtml = (str) =>
    str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const tokenRegex = /(#.*$)|("""[\s\S]*?"""|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')|(\b(?:import|from|class|def|return|with|as|if|else|for|in|True|False)\b)|(\b(?:self|NetworkAuditor|SecurityAuditor|socket|AF_INET|SOCK_STREAM)\b)|(\b\d+(?:\.\d+)?\b)/gm;

  let lastIndex = 0;
  let result = "";

  code.replace(tokenRegex, (match, comment, str, keyword, cls, number, offset) => {
    // Append escaped text preceding this match
    result += escapeHtml(code.slice(lastIndex, offset));
    lastIndex = offset + match.length;

    if (comment) {
      result += `<span class="syn-comment">${escapeHtml(comment)}</span>`;
    } else if (str) {
      result += `<span class="syn-string">${escapeHtml(str)}</span>`;
    } else if (keyword) {
      result += `<span class="syn-keyword">${escapeHtml(keyword)}</span>`;
    } else if (cls) {
      result += `<span class="syn-class">${escapeHtml(cls)}</span>`;
    } else if (number) {
      result += `<span class="syn-number">${escapeHtml(number)}</span>`;
    } else {
      result += escapeHtml(match);
    }
    return match;
  });

  result += escapeHtml(code.slice(lastIndex));
  return result;
}

/* ------------------------------------------------------------------------------
   5. SKILLS SECTION
   Grouped chips with designated status dots and highlighted learning badge
   ------------------------------------------------------------------------------ */
function hydrateSkillsSection() {
  const { skills } = portfolioData;
  const container = document.getElementById("skillsGrid");
  if (!container) return;

  container.innerHTML = skills
    .map((group) => {
      const isHighlight = group.highlight ? "highlight" : "";

      const chipsHtml = group.items
        .map((item) => {
          const isLearningBadge = item.tagLabel
            ? `<span class="currently-learning-tag"><span class="status-dot emerald pulse"></span> ${item.tagLabel}</span>`
            : "";

          return `
            <div class="skill-chip-row">
              <div class="skill-left-info">
                <span class="status-dot ${item.dot || "neutral"} ${item.pulse ? "pulse" : ""}"></span>
                <span class="skill-name">${item.name}</span>
                ${isLearningBadge}
              </div>
              <span class="skill-status-label">${item.status}</span>
            </div>
          `;
        })
        .join("");

      return `
        <div class="skill-category-card ${isHighlight} reveal-on-scroll">
          <div class="skill-card-header">
            <div>
              <h3 class="skill-card-title">${group.category}</h3>
              <p class="skill-card-desc">${group.description}</p>
            </div>
          </div>
          <div class="skills-chip-list">
            ${chipsHtml}
          </div>
        </div>
      `;
    })
    .join("");
}

/* ------------------------------------------------------------------------------
   6. ABOUT & EDUCATION SECTION
   Two-Column layout: Left bio card, right row-style table with 1px dividers
   ------------------------------------------------------------------------------ */
function hydrateAboutAndEducation() {
  const { personal, education } = portfolioData;

  // Hydrate Bio
  const p1 = document.getElementById("aboutBioP1");
  if (p1) p1.textContent = personal.aboutBioParagraph1;

  const p2 = document.getElementById("aboutBioP2");
  if (p2) p2.textContent = personal.aboutBioParagraph2;

  // Hydrate Education Milestones
  const eduContainer = document.getElementById("educationList");
  if (eduContainer) {
    eduContainer.innerHTML = education
      .map(
        (item) => `
        <div class="edu-row-item reveal-on-scroll">
          <div class="edu-row-header">
            <div>
              <h4 class="edu-degree">${item.degree}</h4>
              <div class="edu-institution">${item.institution}</div>
            </div>
            <span class="edu-period">${item.period}</span>
          </div>
          <p class="edu-details">${item.details}</p>
        </div>
      `
      )
      .join("");
  }
}

/* ------------------------------------------------------------------------------
   7. CONTACT SECTION & DIRECT CHANNELS
   ------------------------------------------------------------------------------ */
function hydrateContactSection() {
  const { personal } = portfolioData;

  const emailEl = document.getElementById("contactEmailVal");
  if (emailEl) {
    emailEl.textContent = personal.email;
    emailEl.href = `mailto:${personal.email}`;
  }

  const githubEl = document.getElementById("contactGithubVal");
  if (githubEl) {
    githubEl.textContent = "github.com/AbhijithUdev";
    githubEl.href = personal.github;
  }

  const linkedinEl = document.getElementById("contactLinkedinVal");
  if (linkedinEl) {
    linkedinEl.textContent = "linkedin.com/in/abhijith-u-1b1365384";
    linkedinEl.href = personal.linkedin;
  }

  const locationEl = document.getElementById("contactLocationVal");
  if (locationEl) locationEl.textContent = personal.location;
}

/* ------------------------------------------------------------------------------
   8. FOOTER
   ------------------------------------------------------------------------------ */
function hydrateFooter() {
  const { footer, personal } = portfolioData;

  const copyEl = document.getElementById("footerCopyText");
  if (copyEl) copyEl.textContent = footer.copyrightNotice;

  const footerBrand = document.getElementById("footerBrand");
  if (footerBrand) footerBrand.textContent = personal.name;

  const linksContainer = document.getElementById("footerSocialLinks");
  if (linksContainer) {
    linksContainer.innerHTML = footer.socialLinks
      .map(
        (link) => `
        <li>
          <a href="${link.href}" class="footer-link" target="_blank" rel="noopener noreferrer">
            ${link.label}
          </a>
        </li>
      `
      )
      .join("");
  }
}

/* ------------------------------------------------------------------------------
   9. FORMSPREE SUBMISSION HANDLER
   Gracefully submits via fetch to provide inline feedback without full reload
   ------------------------------------------------------------------------------ */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const statusMsg = document.getElementById("formStatusMsg");
  const submitBtn = document.getElementById("formSubmitBtn");

  if (!form) return;

  // Set action attribute dynamically from data.js
  const formspreeId = portfolioData.personal.formspreeId;
  const isPlaceholder = !formspreeId || formspreeId === "YOUR_FORMSPREE_ID";

  if (!isPlaceholder) {
    form.action = `https://formspree.io/f/${formspreeId}`;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (isPlaceholder) {
      if (statusMsg) {
        statusMsg.className = "form-status-msg success";
        statusMsg.textContent =
          "Message preview noted! To receive real submissions, update 'formspreeId' in js/data.js with your free Formspree ID.";
      }
      form.reset();
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending message...";
    }

    const formData = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        if (statusMsg) {
          statusMsg.className = "form-status-msg success";
          statusMsg.textContent = "Thank you! Your message has been transmitted successfully.";
        }
        form.reset();
      } else {
        throw new Error("Formspree response not OK");
      }
    } catch (err) {
      if (statusMsg) {
        statusMsg.className = "form-status-msg error";
        statusMsg.textContent = "Unable to dispatch message. Please contact directly via email or LinkedIn.";
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";
      }
    }
  });
}

/* ------------------------------------------------------------------------------
   10. SCROLL REVEAL (IntersectionObserver)
   Respects user's motion preferences
   ------------------------------------------------------------------------------ */
function initScrollAnimations() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
      el.classList.add("is-revealed");
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
    observer.observe(el);
  });
}

/* ------------------------------------------------------------------------------
   11. SPECTRAL BARS ACTIVITY SIMULATION
   Subtle height modulation to bring the telemetry widget alive
   ------------------------------------------------------------------------------ */
function initSpectralBars() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const bars = document.querySelectorAll(".spectral-bar");
  if (!bars.length) return;

  setInterval(() => {
    bars.forEach((bar) => {
      // Random variation between 18% and 95%
      const randomPct = Math.floor(Math.random() * 75) + 20;
      bar.style.height = `${randomPct}%`;
    });
  }, 2400);
}
