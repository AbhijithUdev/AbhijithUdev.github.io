# Abijith.U — Personal Portfolio Website

An architectural, minimalist personal portfolio website engineered for **Abijith.U**, styled after the **Auralis SaaS Landing Page Design System**.

---

## 🌟 Key Highlights & Design System

- **Visual Language:** Engineered Softness, Tonal Layering, and Glassmorphism.
- **Color Tokens:**
  - Base canvas: `#F7F7F5`
  - Recessed panels: `#F3F2EF`
  - Elevated cards: `#FCFCFB` with 1px border `#E7E7E4`
  - Deep Graphite showcase panel: `#111318` with glass terminal window
  - Atmospheric drifting gradient orbs in coral, indigo, emerald, and sky blue
- **Typography:** Inter (tight tracking for headlines, clean tabular geometry) + JetBrains Mono for technical terminal windows.
- **Components:** Solid black pill buttons, 24px–28px card radii, zero sharp corners, infinite marquee ticker, dynamic spectral frequency visualizer, and responsive mobile navigation drawer.
- **Tech Stack:** Pure **HTML5**, **CSS3**, and **Vanilla JavaScript**. No build step, no Node modules, no frameworks.
- **Maintainability:** 100% data-driven. All text, projects, skills, education, and social links live in `js/data.js`.

---

## 📁 Project Directory Structure

```text
c:\Users\Abhijith\Downloads\protfolio/
├── index.html         # Semantic HTML5 markup, SEO meta tags, Open Graph, accessible landmarks
├── css/
│   └── styles.css     # Design tokens, grid system, glassmorphism, responsive styles, animations
├── js/
│   ├── data.js        # Central data store (Edit your bio, projects, skills, and links here!)
│   └── main.js        # Dynamic DOM hydration, mobile drawer, scroll animations, form handling
├── assets/
│   └── favicon.svg    # Geometric engineered SVG favicon
└── README.md          # Maintenance and deployment documentation
```

---

## ✏️ How to Edit Content (Without Touching Layout)

Open `js/data.js` in any text editor. It contains thoroughly commented sections for:

1. **Personal Information:**
   - Name, role headline, and 2-3 sentence confident bio.
   - Formspree form ID: replace `YOUR_FORMSPREE_ID` with your ID from [formspree.io](https://formspree.io).
2. **Navigation Links:**
   - Real GitHub (`https://github.com/AbhijithUdev`) and LinkedIn (`https://www.linkedin.com/in/abhijith-u-1b1365384/?isSelfProfile=true`) are already linked in the nav and contact section.
3. **Projects:**
   - **Featured Project:** Renders automatically inside the Deep Graphite panel with interactive code snippet and metrics.
   - **Secondary Projects:** Soft white cards with status chips (`Live`, `In Progress`), tags, and GitHub/Demo links.
4. **Skills Matrix:**
   - Grouped into Languages (HTML, CSS, Python), Focus Area (Cyber Security), Currently Learning, and Tools.
   - Highlighted tag: `"Currently learning: Cyber Security"` with an active pulsating emerald indicator.
5. **Education:**
   - College of Engineering, Kallooppara (B.Tech CSE Cyber Security).
   - Marked placeholders for previous schooling milestones.

---

## 🚀 How to Run Locally

Because this project uses zero dependencies, you can run it instantly using any of the methods below:

### Option A: Direct Open in Browser
Double-click `index.html` or drag it into any web browser (Chrome, Edge, Firefox, Safari).

### Option B: Python HTTP Server (Recommended)
Open your terminal in the portfolio directory and run:
```bash
python -m http.server 3000
```
Then visit `http://localhost:3000` in your browser.

### Option C: VS Code Live Server
1. Open the folder in VS Code.
2. Click **Go Live** on the bottom status bar (using the Live Server extension).

---

## 🌐 How to Deploy (Free & Instant on GitHub Pages)

### 1. Push to your `AbhijithUdev.github.io` repository:
```bash
git remote add origin https://github.com/AbhijithUdev/AbhijithUdev.github.io.git
git branch -M main
git push -u origin main
```

Your website will automatically be live at:  
👉 **`https://abhijithudev.github.io/`**

### 2. Vercel
1. Go to [vercel.com](https://vercel.com).
2. Click **Add New... > Project** and import your GitHub repository (or drag-and-drop this folder via the Vercel dashboard).
3. Leave build settings default (Framework preset: `Other`).
4. Click **Deploy**.

### 3. Netlify
1. Go to [netlify.com](https://netlify.com).
2. Drag and drop this folder onto the Netlify drop zone, or link your GitHub repository.
3. Instant live HTTPS URL!

---

## 📋 Checklist of Placeholders to Personalize

Search `js/data.js` for `[PLACEHOLDER]` to update:
- [x] `personal.email`: Configured as `udeeshsushamakk@gmail.com`.
- [ ] `personal.formspreeId`: Sign up at [formspree.io](https://formspree.io) (free), create a form, and paste your form ID (e.g., `xpwzlkab`).
- [x] `education`: Timeline updated (B.Tech 2026–Present, 12th passed in 2026, 10th passed in 2024). Edit school names in `education[1]` & `education[2]` if desired.
- [ ] `projects`: Update project links or code snippets as you develop new security tools and repositories.
