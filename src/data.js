const data = {
  name: "Santhosh Kumar N",
  title: "Full Stack Web Developer",
  tagline: "3+ Years · Laravel · React · Drupal 9/10/11 · MySQL · Chain Link AI",
  location: "Chennai, Tamil Nadu – 600052",
  email: "santhoshkumar140424@gmail.com",
  phone1: "+91 9176170978",
  phone2: "+91 9962294067",
  summary:
    "Results-driven Full Stack Web Developer with 3+ years of experience building scalable, secure web applications. Delivered mission-critical systems for ISRO and enterprise clients. Passionate about clean code, performance optimization, and AI-driven web experiences.",
  skills: [
    { label: "Front-End", items: ["HTML5", "CSS3", "SCSS", "JavaScript ES6+", "jQuery", "React.js", "Bootstrap", "Material-UI"] },
    { label: "Back-End", items: ["PHP", "Laravel", "RESTful APIs", "MVC", "Eloquent ORM", "Drupal 9", "Drupal 10", "Drupal 11"] },
    { label: "Database", items: ["MySQL", "Query Optimization", "Schema Design", "Migrations", "Indexing"] },
    { label: "AI & Emerging", items: ["Chain Link AI", "Oracle Integrations", "AI Workflow Automation", "OpenAI API"] },
    { label: "Tools", items: ["Git", "GitHub", "Postman", "VS Code", "Drush", "Composer", "TCPDF", "DomPDF"] },
  ],
  experience: [
    {
      role: "Software Engineer",
      company: "Quilltez Soft Solution Pvt Ltd",
      location: "Avadi, Chennai",
      period: "Nov 2021 – Present",
      points: [
        "Built ISRO I-GRASP Research Proposal Management System (Laravel + React) for 500+ researchers, streamlining end-to-end proposal workflows.",
        "Architected ISKCON Temple Donation Portal with automated PDF receipt generation and real-time email notifications.",
        "Developed Email & Domain Verification Platform — reduced spam issues by 60% with blacklist/whitelist admin controls.",
        "Designed and documented 20+ RESTful API endpoints with JWT/Sanctum authentication, pagination, and error handling.",
        "Upgraded Drupal sites acronpm startss v9 → v10 → v11 with zero data loss; built custom modules, plugins, services, and event subscribers.",
        "Integrated Chain Link AI oracle data feeds — reduced manual data entry by 40%, improved client dashboard accuracy.",
        "Participated in Agile sprints, conducted GitHub code reviews, and coordinated zero-downtime production deployments.",
      ],
    },
    {
      role: "Assistant Client Partner",
      company: "Access Health Care Pvt Ltd",
      location: "Chennai",
      period: "Feb 2022 – Oct 2022",
      points: [
        "Managed 50+ client accounts with 95% satisfaction rate within defined SLA timelines.",
        "Coordinated with insurance companies to expedite claims processing, reducing resolution time by 20%.",
        "Conducted structured post-call analysis reports, improving first-call resolution rates by 15%.",
      ],
    },
  ],
  projects: [
    {
      name: "ISRO I-GRASP",
      tech: "Laravel · React · MySQL",
      desc: "Government-grade research proposal management platform for ISRO handling full lifecycle: submission, review, approval & reporting.",
      color: "#0ea5e9",
    },
    {
      name: "ISKCON Donation System",
      tech: "Laravel · PHP · TCPDF",
      desc: "Automated donation portal with dynamic PDF receipt generation, donor history tracking, and email notifications.",
      color: "#f59e0b",
    },
    {
      name: "Email & Domain Verifier",
      tech: "Laravel · REST APIs",
      desc: "Custom email/domain validation and filtering engine with blacklist enforcement — improved deliverability and security.",
      color: "#10b981",
    },
    {
      name: "Chain Link AI Integration",
      tech: "Chain Link AI · Laravel",
      desc: "Real-time tamper-proof oracle data feeds powering client dashboards, reducing manual data entry by 40%.",
      color: "#8b5cf6",
    },
  ],
  education: [
    { degree: "Bachelor of Computer Applications (BCA)", school: "Vel Tech Rangasanku Arts and Science College, Chennai", year: "2019" },
    { degree: "Higher Secondary (12th)", school: "Govt. Higher Secondary School, Lakshmipuram", year: "2016" },
  ],
  interests: [
    "Web Development Trends – React 18, Laravel 11, Headless CMS",
    "Cybersecurity & Web Performance – OWASP, Query Optimization, CDN Caching",
    "AI/ML in Web Apps – OpenAI API, Chain Link AI, AI-driven UX",
  ],
  languages: ["Tamil – Native", "English – Professional Working Proficiency"],
};

export default data;