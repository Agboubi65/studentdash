import { useState } from 'react';
import './my-profile.css';
const CYAN="#00e5c8",CARD2="#0f1724",
      BORDER="#1e2d40",TEXT="#e2e8f0",MUTED="#64748b",GREEN="#22c55e",
      RED="#ef4444";

const navItems=[
  {id:"dashboard",  label:"Dashboard",          icon:"⊞"},
  {id:"profile",    label:"My Profile",          icon:"👤"},
  {id:"search",     label:"Search Internships",  icon:"🔍"},
  {id:"applications",label:"Applications",       icon:"📋", badge:"4"},
  {id:"ai",         label:"AI Recommendations",  icon:"✦",  badge:"12"},
  {id:"messages",   label:"Messages",            icon:"💬", badge:"3", red:true},
  {id:"notifications",label:"Notifications",     icon:"🔔", badge:"3", red:true},
  {id:"stats",      label:"Profile Analytics",   icon:"📊"},
];

export default function MyProfilePage() {
  const [tab,setTab] =useState("info");

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
              <div key={n.id} className={`nav-item ${n.id==="profile"?"active":""}`}>
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
              <h1 className="page-title">My Profile</h1>
              <p className="page-sub">Manage your student profile and documents</p>
            </div>
            <button className="btn btn-primary">✓ Save Changes</button>
          </div>

          <div style={{display:"flex",gap:20}}>

            {/* Left sidebar: avatar + profile strength */}
            <div style={{width:240,flexShrink:0,display:"flex",flexDirection:"column",gap:16}}>
              <div className="card" style={{textAlign:"center"}}>
                <div style={{display:"flex",justifyContent:"center",marginBottom:12}}>
                  <div className="avatar lg">A</div>
                </div>
                <div style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:16,color:"#fff"}}>Amira Benali</div>
                <div style={{color:MUTED,fontSize:12,marginBottom:6}}>Master 2 · Computer Science</div>
                <div style={{color:MUTED,fontSize:12,marginBottom:16}}>University of Oran 1</div>
                <button className="btn btn-outline btn-sm" style={{width:"100%"}}>↑ Change Photo</button>
              </div>

              <div className="card">
                <div style={{fontWeight:600,fontSize:13,marginBottom:12}}>Profile Strength</div>
                <div className="completion-bar"><div className="completion-fill" style={{width:"75%"}}/></div>
                <div style={{fontSize:12,color:CYAN,fontWeight:700,marginBottom:14}}>75% Complete</div>
                {[
                  {label:"Add LinkedIn URL", done:false},
                  {label:"Upload CV",        done:true},
                  {label:"Add skills",       done:true},
                  {label:"Set preferences",  done:false},
                ].map((item,i)=>(
                  <div key={i} style={{display:"flex",gap:8,alignItems:"center",marginBottom:8}}>
                    <span style={{fontSize:12,color:item.done?GREEN:MUTED}}>{item.done?"✓":"○"}</span>
                    <span style={{fontSize:12,color:item.done?MUTED:TEXT,textDecoration:item.done?"line-through":"none"}}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: tabbed content */}
            <div style={{flex:1}}>
              <div className="tabs" style={{marginBottom:20}}>
                {["info","skills","preferences","documents"].map(t=>(
                  <div key={t} className={`tab ${tab===t?"active":""}`} onClick={()=>setTab(t)}>
                    {t.charAt(0).toUpperCase()+t.slice(1)}
                  </div>
                ))}
              </div>

              {/* ── INFO TAB ── */}
              {tab==="info"&&(
                <div className="card">
                  <div className="section-title">Personal Information</div>
                  <div className="section-sub">Your basic details visible to recruiters</div>
                  <div className="grid-2">
                    {[
                      ["First Name","Amira"],
                      ["Last Name","Benali"],
                      ["Email","amira.benali@gmail.com"],
                      ["Phone","+213 555 123 456"],
                      ["University","University of Oran 1"],
                      ["Level","Master 2"],
                      ["Specialty","Computer Science"],
                      ["Graduation Year","2026"],
                    ].map(([l,v])=>(
                      <div key={l} className="form-group">
                        <label className="form-label">{l}</label>
                        <input className="form-input" defaultValue={v}/>
                      </div>
                    ))}
                  </div>
                  <div className="form-group">
                    <label className="form-label">About Me</label>
                    <textarea className="form-input" defaultValue="Passionate software engineering student specializing in frontend development. Looking for a 6-month internship in web or mobile development."/>
                  </div>
                </div>
              )}

              {/* ── SKILLS TAB ── */}
              {tab==="skills"&&(
                <div className="card">
                  <div className="section-title">Skills & Technologies</div>
                  <div className="section-sub">Add skills to improve AI matching accuracy</div>
                  <div style={{marginBottom:20}}>
                    {[
                      {name:"React",        level:"Advanced"},
                      {name:"JavaScript",   level:"Advanced"},
                      {name:"TypeScript",   level:"Intermediate"},
                      {name:"CSS / Tailwind",level:"Advanced"},
                      {name:"Node.js",      level:"Intermediate"},
                      {name:"Python",       level:"Beginner"},
                      {name:"Figma",        level:"Intermediate"},
                      {name:"Git",          level:"Advanced"},
                    ].map((s,i)=>(
                      <div key={i} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 0",borderBottom:`1px solid ${BORDER}22`}}>
                        <span className="skill-tag">
                          <span className={`dot ${s.level==="Advanced"?"adv":s.level==="Intermediate"?"mid":"beg"}`}/>
                          {s.name}
                        </span>
                        <div style={{display:"flex",gap:8,alignItems:"center"}}>
                          <span className={`tag ${s.level==="Advanced"?"tag-cyan":s.level==="Intermediate"?"tag-yellow":"tag-muted"}`}>{s.level}</span>
                          <button className="btn btn-ghost btn-sm" style={{color:RED,fontSize:16,padding:"4px 8px"}}>×</button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{display:"flex",gap:10}}>
                    <input className="form-input" placeholder="Add a skill…" style={{flex:1}}/>
                    <select className="filter-select">
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                    </select>
                    <button className="btn btn-primary">+ Add</button>
                  </div>
                </div>
              )}

              {/* ── PREFERENCES TAB ── */}
              {tab==="preferences"&&(
                <div className="card">
                  <div className="section-title">Internship Preferences</div>
                  <div className="section-sub">Tell the AI what kind of internship you're looking for</div>
                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">Preferred Sectors</label>
                      <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                        {["Web Dev","Data Science","Mobile","DevOps","AI/ML","Design"].map(s=>(
                          <span key={s} className={`tag ${["Web Dev","Data Science","Mobile"].includes(s)?"tag-cyan":"tag-muted"}`} style={{cursor:"pointer"}}>{s}</span>
                        ))}
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Work Type</label>
                      <div style={{display:"flex",gap:8}}>
                        {["On-site","Remote","Hybrid"].map(t=>(
                          <span key={t} className={`tag ${t==="Hybrid"?"tag-cyan":"tag-muted"}`} style={{cursor:"pointer"}}>{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Preferred Location</label>
                      <input className="form-input" defaultValue="Algiers, Algeria"/>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Duration</label>
                      <select className="form-input">
                        <option>4-6 months</option>
                        <option>1-3 months</option>
                        <option>6+ months</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Start Date</label>
                      <input className="form-input" type="date" defaultValue="2025-09-01"/>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Compensation</label>
                      <select className="form-input">
                        <option>Paid preferred</option>
                        <option>Paid only</option>
                        <option>No preference</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* ── DOCUMENTS TAB ── */}
              {tab==="documents"&&(
                <div className="card">
                  <div className="section-title">Documents</div>
                  <div className="section-sub">Upload your CV and cover letter</div>
                  {[
                    {label:"Curriculum Vitae (CV)", icon:"📄", uploaded:true,  filename:"Amira_Benali_CV_2025.pdf", size:"245 KB"},
                    {label:"Cover Letter",           icon:"✉️", uploaded:false},
                  ].map((doc,i)=>(
                    <div key={i} style={{padding:20,background:CARD2,borderRadius:12,border:`1px solid ${doc.uploaded?CYAN+"33":BORDER}`,marginBottom:14}}>
                      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                        <div>
                          <div style={{fontWeight:600,fontSize:14,marginBottom:4}}>{doc.icon} {doc.label}</div>
                          {doc.uploaded
                            ? <div style={{fontSize:12,color:GREEN}}>✓ Uploaded: {doc.filename} · {doc.size}</div>
                            : <div style={{fontSize:12,color:MUTED}}>No file uploaded yet</div>
                          }
                        </div>
                        <div style={{display:"flex",gap:8}}>
                          {doc.uploaded&&<button className="btn btn-outline btn-sm">Preview</button>}
                          <button className="btn btn-primary btn-sm">↑ {doc.uploaded?"Update":"Upload"}</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
