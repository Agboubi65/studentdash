import { useState } from 'react';
import './messages.css';
const CYAN="#00e5c8",
      BORDER="#1e2d40",TEXT="#e2e8f0",MUTED="#64748b",
      GREEN="#22c55e";

const conversations=[
  {id:1,company:"Djezzy",   emoji:"📡",last:"We'd love to schedule a call…",  time:"3h", unread:2},
  {id:2,company:"Sonatrach",emoji:"🏭",last:"Thank you for applying!",         time:"1d", unread:0},
  {id:3,company:"Ooredoo",  emoji:"📱",last:"Could you share your portfolio?", time:"2d", unread:0},
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

export default function MessagesPage() {
  const [active,setActive] =useState(conversations[0]);
  const msgs=[
    {from:"them",text:"Hello Amira! Thank you for applying for the Data Science Internship position.",time:"10:30 AM"},
    {from:"me",  text:"Thank you! I'm very excited about this opportunity at Djezzy.",               time:"10:45 AM"},
    {from:"them",text:"We reviewed your profile and were impressed by your match score. We'd love to schedule a call.",time:"11:00 AM"},
    {from:"me",  text:"Absolutely! I'm available any day next week between 10am and 5pm.",           time:"11:15 AM"},
    {from:"them",text:"Perfect. Could you confirm Tuesday at 2pm? We'll send a video call link.",    time:"11:20 AM"},
  ];

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
              <div key={n.id} className={`nav-item ${n.id==="messages"?"active":""}`}>
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
              <h1 className="page-title">Messages</h1>
              <p className="page-sub">Direct communication with recruiters</p>
            </div>
          </div>

          <div className="card" style={{padding:0,overflow:"hidden"}}>
            <div style={{display:"flex"}}>

              {/* ── CONVERSATION LIST ── */}
              <div style={{width:280,borderRight:`1px solid ${BORDER}`,flexShrink:0}}>
                <div style={{padding:"16px 16px 12px",borderBottom:`1px solid ${BORDER}`}}>
                  <div className="search-wrap">
                    <span className="search-icon">🔍</span>
                    <input className="search-input" placeholder="Search conversations…" style={{fontSize:12.5}}/>
                  </div>
                </div>
                <div className="chat-list">
                  {conversations.map(c=>(
                    <div key={c.id} className={`chat-item ${active.id===c.id?"active":""}`} onClick={()=>setActive(c)}>
                      <div className="avatar" style={{position:"relative"}}>
                        {c.emoji}
                        {c.unread>0&&<span style={{position:"absolute",top:-3,right:-3,width:16,height:16,background:CYAN,borderRadius:"50%",fontSize:9,color:"#000",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700}}>{c.unread}</span>}
                      </div>
                      <div style={{flex:1,overflow:"hidden"}}>
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                          <span style={{fontWeight:600,fontSize:13.5}}>{c.company}</span>
                          <span style={{fontSize:11,color:MUTED}}>{c.time}</span>
                        </div>
                        <div style={{fontSize:12,color:MUTED,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",marginTop:2}}>{c.last}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── CHAT PANEL ── */}
              <div style={{flex:1,display:"flex",flexDirection:"column"}}>
                <div style={{padding:"16px 20px",borderBottom:`1px solid ${BORDER}`,display:"flex",alignItems:"center",gap:12}}>
                  <div className="avatar">{active.emoji}</div>
                  <div>
                    <div style={{fontWeight:700}}>{active.company}</div>
                    <div style={{fontSize:12,color:GREEN}}>● Online</div>
                  </div>
                </div>
                <div style={{flex:1,padding:20,overflowY:"auto",display:"flex",flexDirection:"column",gap:12,minHeight:320}}>
                  {msgs.map((m,i)=>(
                    <div key={i} style={{display:"flex",flexDirection:"column",alignItems:m.from==="me"?"flex-end":"flex-start"}}>
                      <div className={`chat-bubble ${m.from==="me"?"sent":"recv"}`}>{m.text}</div>
                      <div className="msg-time">{m.time}</div>
                    </div>
                  ))}
                </div>
                <div style={{padding:"14px 20px",borderTop:`1px solid ${BORDER}`,display:"flex",gap:10}}>
                  <input className="form-input" placeholder="Type a message…" style={{flex:1}}/>
                  <button className="btn btn-outline btn-sm">↑</button>
                  <button className="btn btn-primary btn-sm">➤</button>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  );
}
