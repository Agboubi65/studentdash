import './ai-recommendations-ta3k.css';
const CYAN="#00e5c8",
      BORDER="#1e2d40",TEXT="#e2e8f0",MUTED="#64748b",
      GREEN="#22c55e",RED="#ef4444",YELLOW="#f59e0b",PURPLE="#8b5cf6";

const internships=[
  {id:1,title:"Front-End Developer Intern",     company:"Sonatrach", location:"Algiers, Algeria",  duration:"6 months", type:"On-site", paid:true, match:87, start:"Sept 2025", skills:["React","TypeScript","Three.js"], missing:["GraphQL"]},
  {id:2,title:"Data Science Intern",            company:"Djezzy",    location:"Oran, Algeria",     duration:"3 months", type:"Hybrid",  paid:true, match:78, start:"Oct 2025",  skills:["Python","ML","SQL"],             missing:["Spark"]},
  {id:3,title:"UI/UX Designer Intern",          company:"Ooredoo",   location:"Constantine",       duration:"4 months", type:"Remote",  paid:false,match:65, start:"Nov 2025",  skills:["Figma","CSS"],                   missing:["Adobe XD"]},
  {id:4,title:"Backend Engineer Intern",        company:"Mobilis",   location:"Algiers",           duration:"6 months", type:"On-site", paid:true, match:91, start:"Sept 2025", skills:["Node.js","PostgreSQL"],          missing:["Docker"]},
  {id:5,title:"Mobile Dev Intern (React Native)",company:"CPA Bank",  location:"Algiers",          duration:"5 months", type:"Hybrid",  paid:true, match:72, start:"Oct 2025",  skills:["React Native","JavaScript"],     missing:["API"]},
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

const MatchRing = ({ score }: { score: number }) => {
  const r=22,c=28,stroke=4,circ=2*Math.PI*r,prog=(score/100)*circ;
  const color=score>=80?CYAN:score>=60?YELLOW:RED;
  return(
    <div className="match-ring">
      <svg width={c*2} height={c*2}>
        <circle cx={c} cy={c} r={r} fill="none" stroke={BORDER} strokeWidth={stroke}/>
        <circle cx={c} cy={c} r={r} fill="none" stroke={color} strokeWidth={stroke} strokeDasharray={`${prog} ${circ}`} strokeLinecap="round"/>
      </svg>
      <div className="match-score-text">
        <span className="pct" style={{color}}>{score}%</span>
        <span className="lbl">match</span>
      </div>
    </div>
  );
};

export default function AiRecommendationsTa3kPage() {
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
              <div key={n.id} className={`nav-item ${n.id==="ai"?"active":""}`}>
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
              <div className="hero-badge"><span className="dot"/>✦ AI Powered</div>
              <h1 className="page-title">AI Recommendations</h1>
              <p className="page-sub">Offers curated for your profile, skills & preferences</p>
            </div>
          </div>

          {/* ── COMPATIBILITY BANNER ── */}
          <div className="card" style={{
            marginBottom:20,display:"flex",gap:20,alignItems:"center",
            background:`linear-gradient(135deg,${CYAN}0a,${PURPLE}08)`,
            borderColor:CYAN+"22"
          }}>
            <div style={{fontSize:36}}>✦</div>
            <div>
              <div style={{fontWeight:700,marginBottom:4}}>
                Your Compatibility Score is <span style={{color:CYAN}}>78/100</span>
              </div>
              <div style={{fontSize:13,color:MUTED}}>
                Complete your profile and add missing skills to unlock more high-match offers
              </div>
            </div>
            <button className="btn btn-primary btn-sm" style={{marginLeft:"auto",flexShrink:0}}>
              Improve Score →
            </button>
          </div>

          {/* ── OFFER CARDS ── */}
          {[...internships].sort((a,b)=>b.match-a.match).map(j=>(
            <div key={j.id} className="card" style={{
              borderColor:j.match>=80?CYAN+"33":BORDER,
              marginBottom:14,
              transition:"all .2s"
            }}>
              <div style={{display:"flex",gap:16,alignItems:"flex-start"}}>
                <MatchRing score={j.match}/>
                <div style={{flex:1}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8}}>
                    <div>
                      <div style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:16,color:"#fff"}}>
                        {j.title}
                      </div>
                      <div style={{color:MUTED,fontSize:13,marginTop:2}}>
                        {j.company} · {j.location} · {j.duration} · {j.type}
                        {j.paid&&<span style={{marginLeft:8,color:GREEN,fontWeight:600,fontSize:12}}>💰 Paid</span>}
                      </div>
                    </div>
                    {j.match>=80&&<span className="tag tag-cyan">⭐ Top Match</span>}
                  </div>

                  <div style={{marginBottom:12}}>
                    <div style={{fontSize:12,color:MUTED,marginBottom:6}}>Skills Match</div>
                    <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                      {j.skills.map(s=>(
                        <span key={s} className="tag tag-green" style={{fontSize:11}}>✓ {s}</span>
                      ))}
                      {j.missing.map(s=>(
                        <span key={s} className="tag tag-red" style={{fontSize:11}}>✗ {s}</span>
                      ))}
                    </div>
                  </div>

                  <div style={{display:"flex",gap:8,alignItems:"center"}}>
                    <button className="btn btn-primary btn-sm">Apply Now</button>
                    <button className="btn btn-outline btn-sm">🔖 Save</button>
                    <div style={{marginLeft:"auto",fontSize:12,color:MUTED}}>
                      Missing: <span style={{color:RED}}>{j.missing.join(", ")}</span> · Add it to boost your score
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
