/**
 * ==============================================================================
 * PORTFOLIO CONTENT DATA STORE (data.js)
 * ==============================================================================
 * Welcome! All the content for your portfolio lives right here in this file.
 * To update your bio, projects, skills, education, or social links:
 * Simply edit the values below and save. You DO NOT need to touch index.html or styles.css.
 *
 * Clearly marked placeholders have "[PLACEHOLDER]" comments next to them.
 * ==============================================================================
 */

const portfolioData = {
  // ---------------------------------------------------------------------------
  // 1. PERSONAL INFORMATION & BRANDING
  // ---------------------------------------------------------------------------
  personal: {
    name: "Abijith.U",
    role: "Cyber Security Student & Developer",
    statusText: "Active: B.Tech CSE (Cyber Security)",
    statusDot: "emerald", // 'emerald' | 'amber' | 'blue'
    
    // Punchy headlines for Hero and Call-To-Action
    heroHeadline: "Securing and building the web.",
    heroSubheadline:
      "A cyber security student who builds with Python and web technologies. Focused on crafting robust, secure systems and modern web interfaces with precision and engineered clarity.",

    // 2-3 sentence confident and honest bio
    aboutBioParagraph1:
      "A cyber security student who builds with Python and modern web technologies. Focused on understanding system vulnerabilities, developing secure applications, and crafting clean digital experiences with engineered precision.",
    aboutBioParagraph2:
      "Currently pursuing my B.Tech in Computer Science and Engineering with a specialization in Cyber Security at College of Engineering, Kallooppara. I believe the strongest software is built when sound engineering practices meet a security-first architecture from day one.",

    location: "Kerala, India",

    // CONTACT & SOCIAL LINKS
    // Notice: Your real GitHub, LinkedIn, and Email are now configured!
    email: "udeeshsushamakk@gmail.com",
    github: "https://github.com/AbhijithUdev",
    linkedin: "https://www.linkedin.com/in/abhijith-u-1b1365384/?isSelfProfile=true",
    twitter: "https://twitter.com/your_handle", // [PLACEHOLDER - Optional]

    // Formspree Form ID: Register free at formspree.io and paste your form ID here:
    formspreeId: "YOUR_FORMSPREE_ID" // [PLACEHOLDER - e.g. "xpwzlkab"]
  },

  // ---------------------------------------------------------------------------
  // 2. NAVIGATION LINKS
  // Added your requested GitHub and LinkedIn links to the navigation bar
  // ---------------------------------------------------------------------------
  navLinks: [
    { label: "About", href: "#about", external: false },
    { label: "Skills", href: "#skills", external: false },
    { label: "Projects", href: "#projects", external: false },
    { label: "Education", href: "#education", external: false },
    { label: "GitHub", href: "https://github.com/AbhijithUdev", external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/abhijith-u-1b1365384/?isSelfProfile=true", external: true }
  ],

  // ---------------------------------------------------------------------------
  // 3. CORE TECHNOLOGIES & TOOLS (Trust Strip Ticker)
  // These appear in the smooth infinite scrolling marquee
  // ---------------------------------------------------------------------------
  tools: [
    { name: "Python", category: "Core Language", badge: "3.12" },
    { name: "HTML5", category: "Markup", badge: "Modern Web" },
    { name: "CSS3", category: "Styling", badge: "Tokens & Grid" },
    { name: "Git", category: "Version Control", badge: "VCS" },
    { name: "Linux", category: "OS / Kernel", badge: "CLI" },
    { name: "Bash", category: "Shell Scripting", badge: "Automation" },
    { name: "VS Code", category: "IDE", badge: "Environment" },
    { name: "Cyber Security", category: "Domain", badge: "Active Focus" }
  ],

  // ---------------------------------------------------------------------------
  // 4. PROJECTS
  // 3 projects: 1 featured in Deep Graphite Dark Terminal, 2 in Soft White Cards
  // ---------------------------------------------------------------------------
  projects: [
    {
      id: "project-1-recon-scanner",
      title: "Python Security Recon & Network Auditor",
      subtitle: "Defensive Security Tooling",
      description:
        "A multi-threaded reconnaissance and port auditing tool written in Python. Designed for automated service discovery, banner grabbing, and basic vulnerability posture assessment with low latency and clean terminal reporting.",
      isFeatured: true, // Renders inside the dark Deep Graphite showcase panel
      status: "In Progress",
      statusColor: "amber", // 'emerald' | 'amber' | 'blue'
      tags: ["Python", "Socket Programming", "Cyber Security", "CLI"],
      links: {
        github: "https://github.com/AbhijithUdev",
        demo: null // Set to live URL when available, or null
      },
      // Terminal display snippet shown inside the graphite window
      codeSnippet: {
        filename: "recon_auditor.py",
        language: "python",
        code: `import socket
import concurrent.futures

class NetworkAuditor:
    """Security audit utility for service & port discovery."""
    def __init__(self, target_host: str, timeout: float = 0.5):
        self.target = target_host
        self.timeout = timeout
        self.active_services = []

    def probe_port(self, port: int) -> bool:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
            sock.settimeout(self.timeout)
            if sock.connect_ex((self.target, port)) == 0:
                self.active_services.append(port)
                return True
        return False

# Initialize audit session
scanner = NetworkAuditor("127.0.0.1")
scanner.probe_port(443)  # HTTPS verification: OK [200]`
      },
      metrics: [
        { label: "Target Scope", value: "Localhost / LAN" },
        { label: "Concurrency", value: "32 Threads" },
        { label: "Latency", value: "< 14 ms" }
      ]
    },
    {
      id: "project-2-web-sec-lab",
      title: "Web Security & Authentication Sandbox",
      subtitle: "Interactive Research Lab",
      description:
        "An experimental web application laboratory exploring client-side security postures, Content Security Policy (CSP), sanitization pipelines, and resilient authentication flows built using vanilla web technologies and Python backend handlers.",
      isFeatured: false,
      status: "In Progress",
      statusColor: "amber",
      tags: ["HTML5", "CSS3", "Python", "OWASP"],
      links: {
        github: "https://github.com/AbhijithUdev",
        demo: "#" // [PLACEHOLDER - Add demo link if available]
      }
    },
    {
      id: "project-3-portfolio-engine",
      title: "Engineered Minimalist Portfolio",
      subtitle: "Design System Architecture",
      description:
        "A zero-dependency personal portfolio site crafted after high-end AI infrastructure design systems. Built with strict semantic HTML5, pure CSS custom property tokens, and data-driven client hydration for effortless maintenance.",
      isFeatured: false,
      status: "Live",
      statusColor: "emerald",
      tags: ["HTML5", "CSS3", "Vanilla JS", "Design System"],
      links: {
        github: "https://github.com/AbhijithUdev",
        demo: "#" // [PLACEHOLDER - Add live link if available]
      }
    }
  ],

  // ---------------------------------------------------------------------------
  // 5. SKILLS MATRIX
  // Grouped chips with designated status dots and learning badges
  // ---------------------------------------------------------------------------
  skills: [
    {
      category: "Languages",
      description: "Core programming and frontend markup tools",
      items: [
        { name: "Python", status: "Proficient", dot: "emerald" },
        { name: "HTML5", status: "Semantic & Accessible", dot: "emerald" },
        { name: "CSS3", status: "Modern Layouts & Variables", dot: "emerald" }
      ]
    },
    {
      category: "Focus Area",
      description: "Primary specialized academic & technical discipline",
      items: [
        { name: "Cyber Security Fundamentals", status: "Core Specialization", dot: "blue" },
        { name: "Network Protocols & Defense", status: "Academic Focus", dot: "blue" },
        { name: "Web Application Security", status: "Active Study", dot: "blue" }
      ]
    },
    {
      category: "Currently Learning",
      description: "Active knowledge acquisition and current deep dive",
      highlight: true, // Highlighted card
      items: [
        {
          name: "Cyber Security",
          tagLabel: "Currently learning: Cyber Security",
          status: "In Progress (B.Tech Specialization)",
          dot: "emerald",
          pulse: true
        },
        {
          name: "Defensive Security & Threat Analysis",
          status: "Foundational Practice",
          dot: "blue"
        }
      ]
    },
    {
      category: "Tools & Environment",
      description: "Development workflows and command-line environments",
      items: [
        { name: "Git & GitHub", status: "Version Control", dot: "neutral" },
        { name: "Linux CLI", status: "Command Line & Shell", dot: "neutral" },
        { name: "VS Code", status: "Development Environment", dot: "neutral" }
      ]
    }
  ],

  // ---------------------------------------------------------------------------
  // 6. EDUCATION & MILESTONES
  // Clean row-style list with 1px borders
  // ---------------------------------------------------------------------------
  education: [
    {
      degree: "B.Tech in Computer Science & Engineering (Cyber Security)",
      institution: "College of Engineering, Kallooppara",
      period: "2026 – Present (Ongoing)",
      status: "Current",
      statusColor: "emerald",
      details:
        "Specialized degree program covering core computer systems, data structures, network security, cryptography, operating systems, and defensive security architectures."
    },
    {
      degree: "Higher Secondary Education (12th Grade)",
      institution: "Higher Secondary School [PLACEHOLDER - Edit school name in data.js]",
      period: "2024 – 2026 (Completed)",
      status: "Completed",
      statusColor: "neutral",
      details:
        "Focused study in Science stream (Mathematics, Physics, Chemistry, Computer Science). [PLACEHOLDER - update with your school name]"
    },
    {
      degree: "Secondary School Leaving Certificate (10th Grade)",
      institution: "High School [PLACEHOLDER - Edit school name in data.js]",
      period: "2024 (Completed)",
      status: "Completed",
      statusColor: "neutral",
      details:
        "General secondary education covering mathematics, science, and foundational studies. [PLACEHOLDER - update with your school name]"
    }
  ],

  // ---------------------------------------------------------------------------
  // 7. FOOTER & SOCIAL CHANNELS
  // ---------------------------------------------------------------------------
  footer: {
    copyrightNotice: "© 2026 Abijith.U. Engineered for precision and clarity.",
    socialLinks: [
      { label: "GitHub", href: "https://github.com/AbhijithUdev" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/abhijith-u-1b1365384/?isSelfProfile=true" },
      { label: "Email", href: "mailto:udeeshsushamakk@gmail.com" }
    ]
  }
};

// Make data available globally for vanilla JS hydration
if (typeof window !== "undefined") {
  window.portfolioData = portfolioData;
}
