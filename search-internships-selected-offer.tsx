import { useState } from 'react';
import './search-internships-selected-offer.css';
const CYAN="#00e5c8",CARD="#111827",CARD2="#0f1724",
      BORDER="#1e2d40",TEXT="#e2e8f0",MUTED="#64748b",
      RED="#ef4444",YELLOW="#f59e0b";

const internships=[
  {id:1,title:"Front-End Developer Intern",     company:"Sonatrach",location:"Algiers, Algeria",duration:"6 months",type:"On-site",level:"Master",paid:true, match:87,start:"Sept 2025",skills:["React","TypeScript","Three.js"],domain:"Engineering"},
  {id:2,title:"Data Science Intern",            company:"Djezzy",   location:"Oran, Algeria",  duration:"3 months",type:"Hybrid", level:"Master",paid:true, match:78,start:"Oct 2025", skills:["Python","ML","SQL"],            domain:"Data"},
  {id:3,title:"UI/UX Designer Intern",          company:"Ooredoo",  location:"Constantine",    duration:"4 months",type:"Remote", level:"Licence",paid:false,match:65,start:"Nov 2025", skills:["Figma","Adobe XD","CSS"],       domain:"Design"},
  {id:4,title:"Backend Engineer Intern",        company:"Mobilis",  location:"Algiers",        duration:"6 months",type:"On-site",level:"Master",paid:true, match:91,start:"Sept 2025",skills:["Node.js","PostgreSQL","Docker"], domain:"Engineering"},
  {id:5,title:"Mobile Dev Intern (React Native)",company:"CPA Bank", location:"Algiers",       duration:"5 months",type:"Hybrid", level:"Licence",paid:true, match:72,start:"Oct 2025", skills:["React Native","JavaScript","API"],domain:"Mobile"},
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

export default function SearchInternshipsSelectedOfferPage() {
  const [selected, setSelected] = useState<(typeof internships)[number] | null>(internships[3]);
  const [q,setQ] =useState("");
  const filtered=internships.filter(j=>j.title.toLowerCase().includes(q.toLowerCase())||j.company.toLowerCase().includes(q.toLowerCase()));

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
              <div key={n.id} className={`nav-item ${n.id==="search"?"active":""}`}>
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
              <h1 className="page-title">Search Internships</h1>
              <p className="page-sub">Browse and filter {internships.length} available offers</p>
            </div>
          </div>

          {/* ── SEARCH & FILTERS ── */}
          <div className="card" style={{marginBottom:20}}>
            <div className="search-wrap">
              <span className="search-icon">🔍</span>
              <input className="search-input" placeholder="Search by title, company, or skill…" value={q} onChange={e=>setQ(e.target.value)}/>
            </div>
            <div className="filter-row">
              {([
                ["Domain",  ["All","Engineering","Data","Design","Mobile"]],
                ["Duration",["All","1-2 months","3 months","4-6 months"]],
                ["Type",    ["All","On-site","Remote","Hybrid"]],
                ["Level",   ["All","Licence","Master"]],
                ["Pay",     ["All","Paid","Unpaid"]],
              ] as [string, string[]][]).map(([label,opts])=>(
                <select key={label} className="filter-select">
                  {opts.map(o=><option key={o}>{o==="All"?`${label}: All`:o}</option>)}
                </select>
              ))}
              <button className="btn btn-outline btn-sm">🔔 Save Search</button>
            </div>
          </div>

          {/* ── RESULTS + DETAIL PANEL ── */}
          <div style={{display:"flex",gap:18}}>

            {/* Results list */}
            <div style={{flex:1,display:"flex",flexDirection:"column",gap:12}}>
              <div style={{fontSize:13,color:MUTED,marginBottom:4}}>{filtered.length} results · sorted by AI match</div>
              {filtered.map(j=>(
                <div
                  key={j.id}
                  className="intern-card"
                  style={{background:selected?.id===j.id?`${CYAN}08`:CARD, borderColor:selected?.id===j.id?CYAN+"55":BORDER}}
                  onClick={()=>setSelected(j)}
                >
                  <div style={{display:"flex",gap:14,alignItems:"flex-start"}}>
                    <div className="company-logo"><span style={{fontSize:22}}>🏢</span></div>
                    <div style={{flex:1}}>
                      <div style={{display:"flex",justifyContent:"space-between"}}>
                        <div>
                          <div className="intern-title">{j.title}</div>
                          <div style={{fontSize:13,color:MUTED}}>{j.company} · {j.location}</div>
                        </div>
                        <MatchRing score={j.match}/>
                      </div>
                      <div className="intern-meta">
                        <span className="tag tag-muted">⏱ {j.duration}</span>
                        <span className="tag tag-muted">📍 {j.type}</span>
                        <span className="tag tag-muted">🎓 {j.level}</span>
                        {j.paid&&<span className="tag tag-green">Paid</span>}
                        <span className="tag tag-cyan">{j.domain}</span>
                      </div>
                      <div style={{display:"flex",gap:6,marginTop:10,flexWrap:"wrap"}}>
                        {j.skills.map(s=><span key={s} className="skill-tag">{s}</span>)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Detail panel */}
            {selected&&(
              <div style={{width:360,flexShrink:0}}>
                <div className="card card-glow" style={{position:"sticky",top:20}}>
                  <div style={{display:"flex",justifyContent:"space-between",marginBottom:16}}>
                    <div className="company-logo"><span style={{fontSize:28}}>🏢</span></div>
                    <button onClick={()=>setSelected(null)} className="btn btn-ghost btn-sm">✕</button>
                  </div>
                  <div style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:18,color:"#fff",marginBottom:4}}>{selected.title}</div>
                  <div style={{color:MUTED,fontSize:13,marginBottom:14}}>{selected.company} · {selected.location}</div>
                  <div style={{display:"flex",justifyContent:"center",marginBottom:16}}>
                    <div style={{textAlign:"center"}}>
                      <div style={{fontFamily:"'Syne',sans-serif",fontSize:48,fontWeight:800,color:CYAN,lineHeight:1}}>{selected.match}%</div>
                      <div style={{fontSize:12,color:MUTED}}>AI Compatibility Score</div>
                      <div className="progress-bar" style={{width:200,margin:"8px auto 0"}}>
                        <div className="progress-fill" style={{width:`${selected.match}%`}}/>
                      </div>
                    </div>
                  </div>
                  <div className="divider"/>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:16}}>
                    {[["📍 Location",selected.location],["⏱ Duration",selected.duration],["📅 Start",selected.start],["🎓 Level",selected.level]].map(([k,v])=>(
                      <div key={k} style={{background:CARD2,borderRadius:10,padding:"10px 12px",border:`1px solid ${BORDER}`}}>
                        <div style={{fontSize:10,color:MUTED,marginBottom:3}}>{k}</div>
                        <div style={{fontSize:13,fontWeight:600}}>{v}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{marginBottom:14}}>
                    <div style={{fontSize:12,fontWeight:600,color:MUTED,textTransform:"uppercase",letterSpacing:1,marginBottom:8}}>Required Skills</div>
                    {selected.skills.map(s=>(
                      <div key={s} style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:7}}>
                        <span className="skill-tag"><span className="dot adv"/>{s}</span>
                        <span className="tag tag-green" style={{fontSize:10}}>✓ You have this</span>
                      </div>
                    ))}
                    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:7}}>
                      <span className="skill-tag"><span className="dot" style={{background:RED}}/>Docker</span>
                      <span className="tag tag-red" style={{fontSize:10}}>✗ Missing</span>
                    </div>
                  </div>
                  <div style={{display:"flex",gap:8}}>
                    <button className="btn btn-primary" style={{flex:1}}>Apply Now →</button>
                    <button className="btn btn-outline">🔖</button>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </>
  );
}
