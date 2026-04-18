import { useState } from 'react';
import './applications.css';
const CYAN="#00e5c8",TEXT="#e2e8f0",MUTED="#64748b",
      GREEN="#22c55e",RED="#ef4444",YELLOW="#f59e0b";

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

export default function ApplicationsPage() {
  const [tab,setTab] =useState("all");
  const filtered=tab==="all"?applications:applications.filter(a=>a.status===tab);

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
              <div key={n.id} className={`nav-item ${n.id==="applications"?"active":""}`}>
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
              <h1 className="page-title">My Applications</h1>
              <p className="page-sub">Track all your submitted applications</p>
            </div>
          </div>

          {/* ── STAT CARDS ── */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14,marginBottom:24}}>
            {([
              ["All",      applications.length,                                    CYAN],
              ["Pending",  applications.filter(a=>a.status==="pending").length,   YELLOW],
              ["Accepted", applications.filter(a=>a.status==="accepted").length,  GREEN],
              ["Rejected", applications.filter(a=>a.status==="rejected").length,  RED],
            ] as [string,number,string][]).map(([label,count,color])=>(
              <div
                key={label}
                className="card"
                style={{textAlign:"center",borderColor:color+"22",cursor:"pointer",transition:"all .2s",
                  ...(tab===label.toLowerCase()?{boxShadow:`0 0 20px ${color}15`,borderColor:color+"44"}:{})
                }}
                onClick={()=>setTab(label.toLowerCase())}
              >
                <div style={{fontFamily:"'Syne',sans-serif",fontSize:28,fontWeight:800,color}}>{count}</div>
                <div style={{fontSize:12,color:MUTED,marginTop:4}}>{label}</div>
              </div>
            ))}
          </div>

          {/* ── TABLE CARD ── */}
          <div className="card">
            <div className="tabs" style={{marginBottom:20}}>
              {["all","pending","accepted","rejected"].map(t=>(
                <div key={t} className={`tab ${tab===t?"active":""}`} onClick={()=>setTab(t)}>
                  {t.charAt(0).toUpperCase()+t.slice(1)}
                </div>
              ))}
            </div>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Position</th>
                    <th>Company</th>
                    <th>Date Applied</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map(a=>(
                    <tr key={a.id}>
                      <td><span style={{fontWeight:600}}>{a.title}</span></td>
                      <td><span style={{color:MUTED}}>{a.company}</span></td>
                      <td><span style={{color:MUTED,fontSize:12.5}}>{a.date}</span></td>
                      <td><StatusBadge s={a.status}/></td>
                      <td>
                        <div style={{display:"flex",gap:8}}>
                          <button className="btn btn-outline btn-sm">View</button>
                          {a.status==="pending"&&<button className="btn btn-danger btn-sm">Withdraw</button>}
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filtered.length===0&&(
                    <tr>
                      <td colSpan={5} style={{textAlign:"center",color:MUTED,padding:40}}>
                        No applications in this category
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
