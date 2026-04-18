import type { ReactNode } from 'react';
import './ta3k-dashboard.css';

type BadgeTone = 'teal' | 'red';
type Status = 'pending' | 'accepted' | 'rejected';
type SubTone = 'teal' | 'neutral';
type IconTone = 'teal' | 'amber' | 'purple' | 'blue';

type NavItem = {
  id: string;
  label: string;
  icon: string;
  active?: boolean;
  badge?: string;
  badgeTone?: BadgeTone;
};

type StatCard = {
  label: string;
  value: string;
  sub: string;
  subTone: SubTone;
  iconTone: IconTone;
  icon: ReactNode;
};

type Recommendation = {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  mode: string;
  logo: string;
  match: number;
};

type Application = {
  id: number;
  role: string;
  meta: string;
  status: Status;
};

type MissingSkill = {
  name: string;
  demand: number;
};

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: '⊞', active: true },
  { id: 'profile', label: 'My Profile', icon: '👤' },
  { id: 'search', label: 'Search Internships', icon: '🔍' },
  { id: 'applications', label: 'Applications', icon: '📋', badge: '4', badgeTone: 'teal' },
  { id: 'ai', label: 'AI Recommendations', icon: '✦', badge: '12', badgeTone: 'teal' },
  { id: 'messages', label: 'Messages', icon: '💬', badge: '3', badgeTone: 'red' },
  { id: 'notifications', label: 'Notifications', icon: '🔔', badge: '3', badgeTone: 'red' },
  { id: 'analytics', label: 'Profile Analytics', icon: '📊' },
];

const statCards: StatCard[] = [
  {
    label: 'AI Matches',
    value: '12',
    sub: '+3 today',
    subTone: 'teal',
    iconTone: 'teal',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    label: 'Applications',
    value: '4',
    sub: '2 pending',
    subTone: 'neutral',
    iconTone: 'amber',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
  },
  {
    label: 'Profile Views',
    value: '28',
    sub: '+7 this week',
    subTone: 'teal',
    iconTone: 'purple',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    label: 'Messages',
    value: '3',
    sub: '2 unread',
    subTone: 'neutral',
    iconTone: 'blue',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

const recommendations: Recommendation[] = [
  {
    id: 1,
    title: 'Front-End Developer Intern',
    company: 'Sonatrach',
    location: 'Algiers, Algeria',
    duration: '6 months',
    mode: 'On-site',
    logo: '🏢',
    match: 91,
  },
  {
    id: 2,
    title: 'Data Science Intern',
    company: 'Djezzy',
    location: 'Oran, Algeria',
    duration: '3 months',
    mode: 'Hybrid',
    logo: '📱',
    match: 87,
  },
  {
    id: 3,
    title: 'UI/UX Designer Intern',
    company: 'Ooredoo',
    location: 'Constantine',
    duration: '4 months',
    mode: 'Remote',
    logo: '📡',
    match: 76,
  },
];

const applications: Application[] = [
  { id: 1, role: 'Front-End Developer Intern', meta: 'Sonatrach - 12 Jul 2025', status: 'pending' },
  { id: 2, role: 'ML Engineer Intern', meta: 'Nextralis - 5 Jul 2025', status: 'accepted' },
  { id: 3, role: 'Full-Stack Intern', meta: 'Cevital Group - 28 Jun 2025', status: 'rejected' },
];

const missingSkills: MissingSkill[] = [
  { name: 'Docker', demand: 85 },
  { name: 'TypeScript', demand: 78 },
  { name: 'GraphQL', demand: 61 },
];

const statusMap: Record<Status, { label: string; className: string }> = {
  pending: { label: 'Pending', className: 'dash-status-pending' },
  accepted: { label: 'Accepted', className: 'dash-status-accepted' },
  rejected: { label: 'Rejected', className: 'dash-status-rejected' },
};

function MatchRing({ score }: { score: number }) {
  const radius = 23;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 100) * circumference;

  return (
    <div className="dash-match-ring">
      <svg viewBox="0 0 58 58" aria-hidden="true">
        <circle className="dash-match-track" cx="29" cy="29" r={radius} />
        <circle
          className="dash-match-fill"
          cx="29"
          cy="29"
          r={radius}
          style={{ strokeDasharray: `${progress} ${circumference}` }}
        />
      </svg>
      <div className="dash-match-label">
        {score}%
        <small>match</small>
      </div>
    </div>
  );
}

export default function Ta3kDashboardPage() {
  return (
    <div className="ta3k-dashboard-page">
      {/* Sidebar */}
      <aside className="dash-sidebar">
        <div className="dash-logo-wrap">
          <div className="dash-logo-icon">T</div>
          <div className="dash-logo-text">
            <h1>Ta3k</h1>
            <span>Smart Internship Finder</span>
          </div>
        </div>

        <p className="dash-nav-label">Student Portal</p>
        <nav className="dash-nav" aria-label="Student Portal">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href="#" className={`dash-nav-link ${item.active ? 'active' : ''}`}>
                  <span className="dash-nav-left">
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </span>
                  {item.badge ? (
                    <span className={`dash-nav-badge ${item.badgeTone === 'red' ? 'badge-red' : 'badge-teal'}`}>
                      {item.badge}
                    </span>
                  ) : null}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="dash-user-card">
          <div className="dash-avatar">A</div>
          <div className="dash-user-info">
            <p>Amira Benali</p>
            <span>M2 - Computer Science</span>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="dash-main">
        <div className="dash-page-header">
          <h2>
            Welcome back, <span>Amira</span>
          </h2>
          <p>Here&apos;s your activity snapshot for today</p>
        </div>

        {/* Stat cards */}
        <div className="dash-stats-grid">
          {statCards.map((card, index) => (
            <div key={card.label} className="dash-stat-card" style={{ animationDelay: `${0.05 + index * 0.05}s` }}>
              <div className={`dash-stat-icon icon-${card.iconTone}`}>{card.icon}</div>
              <div className="dash-stat-label">{card.label}</div>
              <div className="dash-stat-value">{card.value}</div>
              <div className={`dash-stat-sub ${card.subTone === 'neutral' ? 'neutral' : ''}`}>{card.sub}</div>
            </div>
          ))}
        </div>

        {/* Bottom grid */}
        <div className="dash-bottom-grid">
          <section className="dash-panel" style={{ animationDelay: '0.25s' }}>
            <div className="dash-panel-head">
              <h3>AI Recommendations</h3>
              <a href="#" className="dash-view-all">
                View all {'->'}
              </a>
            </div>
            <p className="dash-panel-sub">Curated for your profile</p>

            {recommendations.map((item) => (
              <article key={item.id} className="dash-rec-card">
                <div className="dash-company-logo">{item.logo}</div>
                <div className="dash-rec-info">
                  <strong>{item.title}</strong>
                  <div className="dash-company-text">
                    {item.company} - {item.location}
                  </div>
                  <div className="dash-tags">
                    <span className="dash-tag">{item.duration}</span>
                    <span className="dash-tag">{item.mode}</span>
                  </div>
                </div>
                <MatchRing score={item.match} />
              </article>
            ))}
          </section>

          <div className="dash-right-col">
            <section className="dash-panel" style={{ animationDelay: '0.3s' }}>
              <div className="dash-panel-head">
                <h3>My Applications</h3>
                <a href="#" className="dash-view-all">
                  View all {'->'}
                </a>
              </div>

              {applications.map((application) => {
                const meta = statusMap[application.status];
                return (
                  <div key={application.id} className="dash-app-row">
                    <div className="dash-app-info">
                      <strong>{application.role}</strong>
                      <span>{application.meta}</span>
                    </div>
                    <span className={`dash-status-badge ${meta.className}`}>{meta.label}</span>
                  </div>
                );
              })}
            </section>

            <section className="dash-panel" style={{ animationDelay: '0.35s' }}>
              <div className="dash-panel-head">
                <h3>Missing Skills</h3>
                <span className="dash-ai-badge">* AI insight</span>
              </div>
              <div className="dash-spacer" />

              {missingSkills.map((skill, index) => (
                <div key={skill.name} className="dash-skill-row">
                  <div className="dash-skill-meta">
                    <strong>{skill.name}</strong>
                    <span>{skill.demand}% of offers</span>
                  </div>
                  <div className="dash-bar-track">
                    <div
                      className="dash-bar-fill"
                      style={{ width: `${skill.demand}%`, animationDelay: `${0.3 + index * 0.15}s` }}
                    />
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
