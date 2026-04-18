import './profile-analytics.css';
const CYAN="#00e5c8",CARD2="#0f1724",
      BORDER="#1e2d40",TEXT="#e2e8f0",MUTED="#64748b",
      GREEN="#22c55e",RED="#ef4444",YELLOW="#f59e0b",PURPLE="#8b5cf6";

const applications=[
  {id:1,title:"Front-End Developer Intern", company:"Sonatrach",    date:"12 Jul 2025", status:"pending"},
  {id:2,title:"ML Engineer Intern",         company:"Nextralis",    date:"5 Jul 2025",  status:"accepted"},
  {id:3,title:"Full-Stack Intern",          company:"Cevital Group",date:"28 Jun 2025", status:"rejected"},
  {id:4,title:"DevOps Intern",              company:"NCA Rouiba",   date:"20 Jun 2025", status:"pending"},
];

const navItems=[
  {id:"dashboard",     label:"Dashboard",         icon:"⊞"},
  {id:"profile",       label:"My Profile",         icon:"👤"},
  {id:"search",        label:"Search Internships", icon:"🔍"},
  {id:"applications",  label:"Applications",       icon:"📋", badge:"4"},
  {id:"ai",            label:"AI Recommendations", icon:"✦",  badge:"12"},
  {id:"messages",      label:"Messages",           icon:"💬", badge:"3", red:true},
  {id:"notifications", label:"Notifications",      icon:"🔔", badge:"3", red:true},
  {id:"stats",         label:"Profile Analytics",  icon:"📊"},
];

const StatusBadge = ({ s }: { s: string }) => {
  const map: Record<string, string[]>={
    pending: ["tag-yellow","Pending"],
    accepted:["tag-green", "Accepted"],
    rejected:["tag-red",   "Rejected"],
  };
  const [cls,label] =map[s]||["tag-muted",s];
  return <span className={`tag ${cls}`}>{label}</span>;
};

export default function ProfileAnalyticsPage() {
  return(
    <>
<div className="app">

        {/* ── SIDEBAR ── */}
        <div className="sidebar">
          <div className="logo">
            <div className="logo-icon"><span style={{color:CYAN,fontWeight:800,fontSize:14}}>T</span></div>
            <div><div className="logo-text">Ta3k</div><div className="logo-sub">Smart Internship Finder</div></div>
          </div>
          <div className="nav-section">
            <div className="nav-label">Student Portal</div>
            {navItems.map(n=>(
              <div key={n.id} className={`nav-item ${n.id==="stats"?"active":""}`}>
                <span>{n.icon}</span>
                <span>{n.label}</span>
                {n.badge&&<span className={`nav-badge ${n.red?"red":""}`}>{n.badge}</span>}
              </div>
            ))}
          </div>
          <div className="sidebar-footer">
            <div className="user-mini">
              <div className="avatar">A</div>
              <div>
                <div style={{fontSize:13,fontWeight:600,color:TEXT}}>Amira Benali</div>
                <div style={{fontSize:11,color:MUTED}}>M2 · Computer Science</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── MAIN ── */}
        <div className="main">
          <div className="page-header">
            <div>
              <h1 className="page-title">Profile Analytics</h1>
              <p className="page-sub">Understand your performance and visibility</p>
            </div>
          </div>

          {/* ── STAT CARDS ── */}
          <div className="grid-4" style={{marginBottom:20}}>
            {[
              {label:"Profile Views",  value:"28",  sub:"+7 this week",             color:CYAN},
              {label:"Avg Match Score",value:"74%", sub:"Across all applications",  color:PURPLE},
              {label:"Response Rate",  value:"50%", sub:"Recruiters responding",    color:GREEN},
              {label:"Applications",   value:"4",   sub:"1 accepted",               color:YELLOW},
            ].map((s,i)=>(
              <div key={i} className="stat-card" style={{borderColor:s.color+"22"}}>
                <div className="stat-label">{s.label}</div>
                <div className="stat-value" style={{color:s.color}}>{s.value}</div>
                <div style={{fontSize:12,color:MUTED}}>{s.sub}</div>
              </div>
            ))}
          </div>

          {/* ── BOTTOM GRID ── */}
          <div className="grid-2">

            {/* Top In-Demand Skills */}
            <div className="card">
              <div className="section-title">Top In-Demand Skills</div>
              <div className="section-sub">Most requested in your target domains</div>
              {[
                {skill:"Docker",    pct:85, have:false},
                {skill:"React",     pct:78, have:true},
                {skill:"TypeScript",pct:72, have:true},
                {skill:"GraphQL",   pct:61, have:false},
                {skill:"Python",    pct:55, have:true},
              ].map((s,i)=>(
                <div key={i} style={{marginBottom:14}}>
                  <div style={{display:"flex",justifyContent:"space-between",marginBottom:5}}>
                    <span style={{fontSize:13.5,fontWeight:500,display:"flex",alignItems:"center",gap:6}}>
                      <span style={{fontSize:11,color:s.have?GREEN:RED}}>{s.have?"✓":"✗"}</span>
                      {s.skill}
                    </span>
                    <span style={{fontSize:12,color:MUTED}}>{s.pct}% of offers</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width:`${s.pct}%`,background:s.have?undefined:`linear-gradient(90deg,${RED},#c2410c)`}}/>
                  </div>
                </div>
              ))}
            </div>

            {/* Application History */}
            <div className="card">
              <div className="section-title">Application History</div>
              <div className="section-sub">Match score with AI compatibility</div>
              {applications.map((a,i)=>(
                <div key={a.id} style={{padding:"12px 14px",background:CARD2,borderRadius:12,border:`1px solid ${BORDER}`,display:"flex",alignItems:"center",gap:14,marginBottom:10}}>
                  <StatusBadge s={a.status}/>
                  <div style={{flex:1}}>
                    <div style={{fontWeight:600,fontSize:13}}>{a.title}</div>
                    <div style={{fontSize:12,color:MUTED}}>{a.company} · {a.date}</div>
                  </div>
                  <div style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:20,color:CYAN}}>{[87,91,65,72][i]}%</div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </>
  );
}
