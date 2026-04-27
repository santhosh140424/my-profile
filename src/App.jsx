import { useState, useEffect, useRef } from "react";

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
        "Upgraded Drupal sites across v9 → v10 → v11 with zero data loss; built custom modules, plugins, services, and event subscribers.",
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

const NAV = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

function useInView(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return visible;
}

function FadeIn({ children, delay = 0 }) {
  const ref = useRef();
  const visible = useInView(ref);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#0f172a", color: "#e2e8f0", minHeight: "100vh" }}>
      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(15,23,42,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.3s",
        padding: "0 2rem",
        display: "flex", alignItems: "center", justifyContent: "space-between", height: 60,
      }}>
        <span style={{ fontWeight: 700, fontSize: 18, color: "#38bdf8", letterSpacing: 1 }}>SK</span>
        <div style={{ display: "flex", gap: 4 }}>
          {NAV.map(n => (
            <button key={n} onClick={() => scrollTo(n)} style={{
              background: active === n ? "rgba(56,189,248,0.12)" : "transparent",
              border: "none", color: active === n ? "#38bdf8" : "#94a3b8",
              padding: "6px 14px", borderRadius: 6, cursor: "pointer", fontSize: 13,
              fontWeight: active === n ? 600 : 400, transition: "all 0.2s",
            }}>{n}</button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section id="about" style={{
        minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        flexDirection: "column", textAlign: "center", padding: "100px 2rem 4rem",
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(56,189,248,0.08) 0%, transparent 70%)",
      }}>
        <div style={{
          width: 90, height: 90, borderRadius: "50%",
          background: "linear-gradient(135deg, #38bdf8, #818cf8)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 32, fontWeight: 800, color: "#0f172a", marginBottom: 28,
          boxShadow: "0 0 40px rgba(56,189,248,0.3)",
        }}>SK</div>

        <div style={{ fontSize: 13, letterSpacing: 4, color: "#38bdf8", textTransform: "uppercase", marginBottom: 12 }}>
          Full Stack Developer
        </div>
        <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.1, color: "#f1f5f9" }}>
          {data.name}
        </h1>
        <p style={{ color: "#64748b", fontSize: 15, maxWidth: 560, lineHeight: 1.8, marginBottom: 32 }}>
          {data.summary}
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginBottom: 40 }}>
          {["Laravel", "React", "Drupal 9/10/11", "MySQL", "Chain Link AI"].map(t => (
            <span key={t} style={{
              background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.2)",
              color: "#38bdf8", padding: "4px 14px", borderRadius: 99, fontSize: 12, fontWeight: 500,
            }}>{t}</span>
          ))}
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <button onClick={() => scrollTo("Contact")} style={{
            background: "#38bdf8", color: "#0f172a", border: "none",
            padding: "10px 24px", borderRadius: 8, fontWeight: 700, fontSize: 14, cursor: "pointer",
          }}>Get in Touch</button>
          <button onClick={() => scrollTo("Projects")} style={{
            background: "transparent", color: "#94a3b8", border: "1px solid rgba(148,163,184,0.25)",
            padding: "10px 24px", borderRadius: 8, fontWeight: 500, fontSize: 14, cursor: "pointer",
          }}>View Projects</button>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: "80px 2rem", maxWidth: 900, margin: "0 auto" }}>
        <FadeIn>
          <SectionTitle>Technical Skills</SectionTitle>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            {data.skills.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.08}>
                <div style={{
                  background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12, padding: "20px 22px",
                }}>
                  <div style={{ fontSize: 11, letterSpacing: 2, color: "#38bdf8", textTransform: "uppercase", marginBottom: 12, fontWeight: 600 }}>
                    {s.label}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {s.items.map(item => (
                      <span key={item} style={{
                        background: "rgba(100,116,139,0.15)", color: "#cbd5e1",
                        padding: "3px 10px", borderRadius: 6, fontSize: 12,
                      }}>{item}</span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={{ padding: "80px 2rem", maxWidth: 900, margin: "0 auto" }}>
        <FadeIn>
          <SectionTitle>Experience</SectionTitle>
          <div style={{ position: "relative", paddingLeft: 24 }}>
            <div style={{ position: "absolute", left: 7, top: 8, bottom: 8, width: 1, background: "rgba(56,189,248,0.2)" }} />
            {data.experience.map((exp, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ position: "relative", marginBottom: 48 }}>
                  <div style={{
                    position: "absolute", left: -21, top: 4,
                    width: 10, height: 10, borderRadius: "50%",
                    background: "#38bdf8", boxShadow: "0 0 10px rgba(56,189,248,0.5)",
                  }} />
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 4 }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 17, color: "#f1f5f9" }}>{exp.role}</div>
                      <div style={{ fontSize: 13, color: "#38bdf8", marginTop: 2 }}>{exp.company} · {exp.location}</div>
                    </div>
                    <span style={{
                      background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.15)",
                      color: "#94a3b8", padding: "3px 12px", borderRadius: 99, fontSize: 11, whiteSpace: "nowrap",
                    }}>{exp.period}</span>
                  </div>
                  <ul style={{ margin: "12px 0 0", paddingLeft: 18, listStyle: "none" }}>
                    {exp.points.map((p, j) => (
                      <li key={j} style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.7, marginBottom: 6, position: "relative", paddingLeft: 12 }}>
                        <span style={{ position: "absolute", left: 0, top: 8, width: 4, height: 4, background: "#38bdf8", borderRadius: "50%" }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "80px 2rem", maxWidth: 900, margin: "0 auto" }}>
        <FadeIn>
          <SectionTitle>Key Projects</SectionTitle>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {data.projects.map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.1}>
                <div style={{
                  background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12, padding: "22px 22px", height: "100%",
                  borderTop: `2px solid ${p.color}`,
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 12px 32px rgba(0,0,0,0.3)`; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{ fontWeight: 700, fontSize: 15, color: "#f1f5f9", marginBottom: 6 }}>{p.name}</div>
                  <div style={{ fontSize: 11, color: p.color, marginBottom: 12, letterSpacing: 0.5 }}>{p.tech}</div>
                  <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* EDUCATION */}
      <section id="education" style={{ padding: "80px 2rem", maxWidth: 900, margin: "0 auto" }}>
        <FadeIn>
          <SectionTitle>Education</SectionTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {data.education.map((e, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{
                  background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12, padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8,
                }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 15, color: "#f1f5f9" }}>{e.degree}</div>
                    <div style={{ fontSize: 13, color: "#64748b", marginTop: 4 }}>{e.school}</div>
                  </div>
                  <span style={{
                    background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.15)",
                    color: "#38bdf8", padding: "4px 14px", borderRadius: 99, fontSize: 12, fontWeight: 600,
                  }}>{e.year}</span>
                </div>
              </FadeIn>
            ))}
          </div>

          <div style={{ marginTop: 40 }}>
            <div style={{ fontSize: 11, letterSpacing: 3, color: "#475569", textTransform: "uppercase", marginBottom: 16 }}>Languages</div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {data.languages.map(l => (
                <span key={l} style={{
                  background: "rgba(100,116,139,0.12)", border: "1px solid rgba(100,116,139,0.2)",
                  color: "#94a3b8", padding: "6px 16px", borderRadius: 8, fontSize: 13,
                }}>{l}</span>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 32 }}>
            <div style={{ fontSize: 11, letterSpacing: 3, color: "#475569", textTransform: "uppercase", marginBottom: 16 }}>Interests</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {data.interests.map(interest => (
                <div key={interest} style={{ fontSize: 13, color: "#64748b", display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <span style={{ color: "#38bdf8", marginTop: 2 }}>›</span>
                  {interest}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "80px 2rem 120px", maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <FadeIn>
          <SectionTitle>Get In Touch</SectionTitle>
          <p style={{ color: "#64748b", fontSize: 15, lineHeight: 1.8, marginBottom: 40 }}>
            Open to exciting projects, collaborations, and opportunities. Feel free to reach out!
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 40 }}>
            {[
              { label: "Email", value: data.email, href: `mailto:${data.email}` },
              { label: "Phone 1", value: data.phone1, href: `tel:${data.phone1}` },
              { label: "Phone 2", value: data.phone2, href: `tel:${data.phone2}` },
              { label: "Location", value: data.location, href: null },
            ].map(c => (
              <div key={c.label} style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 12, padding: "18px 20px",
              }}>
                <div style={{ fontSize: 11, letterSpacing: 2, color: "#475569", textTransform: "uppercase", marginBottom: 6 }}>{c.label}</div>
                {c.href
                  ? <a href={c.href} style={{ color: "#38bdf8", fontSize: 13, textDecoration: "none", wordBreak: "break-all" }}>{c.value}</a>
                  : <span style={{ color: "#94a3b8", fontSize: 13 }}>{c.value}</span>}
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "24px 2rem", textAlign: "center",
        color: "#334155", fontSize: 12,
      }}>
        © 2024 Santhosh Kumar N · Built with React
      </footer>
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <div style={{ marginBottom: 36 }}>
      <div style={{ fontSize: 11, letterSpacing: 4, color: "#38bdf8", textTransform: "uppercase", marginBottom: 8 }}>Portfolio</div>
      <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#f1f5f9", margin: 0 }}>{children}</h2>
    </div>
  );
}