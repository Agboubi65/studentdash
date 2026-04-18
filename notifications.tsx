import { useState } from 'react';
import './notifications.css';
const CYAN="#00e5c8",TEXT="#e2e8f0",MUTED="#64748b",
      GREEN="#22c55e",YELLOW="#f59e0b",PURPLE="#8b5cf6";

const notifications=[
  {id:1,type:"match",  text:"New offer matching your profile: Backend Engineer at Mobilis (91% match)", time:"2 min ago", read:false},
  {id:2,type:"reply",  text:"Sonatrach responded to your application — check your status",               time:"1h ago",    read:false},
  {id:3,type:"msg",    text:"New message from Djezzy HR: 'We'd love to schedule a call…'",              time:"3h ago",    read:false},
  {id:4,type:"profile",text:"Complete your profile to improve AI matching accuracy",                    time:"Yesterday", read:true},
  {id:5,type:"eval",   text:"Rate your internship experience at Nextralis",                             time:"2 days ago",read:true},
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

const iconMap: Record<string, string>={match:"✦",reply:"📋",msg:"💬",profile:"👤",eval:"⭐"};
const colorMap: Record<string, string>={match:CYAN,reply:GREEN,msg:PURPLE,profile:YELLOW,eval:YELLOW};

export default function NotificationsPage() {
  const [items,setItems] =useState(notifications);

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
              <div key={n.id} className={`nav-item ${n.id==="notifications"?"active":""}`}>
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
              <h1 className="page-title">Notifications</h1>
              <p className="page-sub">{items.filter(n=>!n.read).length} unread notifications</p>
            </div>
            <button className="btn btn-outline" onClick={()=>setItems(items.map(n=>({...n,read:true})))}>
              Mark all as read
            </button>
          </div>

          <div className="card" style={{padding:0}}>
            {items.map(n=>(
              <div
                key={n.id}
                className={`notif-item ${!n.read?"unread":""}`}
                onClick={()=>setItems(items.map(x=>x.id===n.id?{...x,read:true}:x))}
              >
                <div style={{width:40,height:40,borderRadius:12,background:(colorMap[n.type]||MUTED)+"18",border:`1px solid ${(colorMap[n.type]||MUTED)}33`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:18}}>
                  {iconMap[n.type]}
                </div>
                <div style={{flex:1}}>
                  <div style={{fontSize:13.5,color:n.read?MUTED:TEXT,fontWeight:n.read?400:500,lineHeight:1.4}}>{n.text}</div>
                  <div style={{fontSize:11.5,color:MUTED,marginTop:4}}>{n.time}</div>
                </div>
                {!n.read&&<div className="notif-dot"/>}
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
