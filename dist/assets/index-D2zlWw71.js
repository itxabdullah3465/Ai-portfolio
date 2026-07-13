(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();const d={profile:{name:"MUHAMMAD ABDULLAH",title:"AI Developer & Front-End Engineer",subtitle:"Portfolio OS v2.0",avatar:"/profile.jpg",bio:"Bachelor’s in Artificial Intelligence | AI Developer | Front-End Developer (React.js, JavaScript, Tailwind CSS) | Database Management | UI/UX Designer | Passionate",location:"Pakistan",email:"abdullah.dev@example.com",github:"itxabdullah3465",linkedin:"https://www.linkedin.com/in/muhammad-abdullah-dev",resumeUrl:"#"},weather:{defaultCity:"Lahore",defaultLat:"31.5497",defaultLon:"74.3436"},changelog:[{version:"2.0.0",date:"2026-07-01",features:["Interactive Terminal CLI with 20+ commands and autocompletion","Interactive Glassmorphic Window Manager (drag, resize, snap, minimize/maximize)","GitHub API Integration with contribution calendar grid","LinkedIn Professional Profile display","Music Player with synthwave playlist and audio wave visualizer","Scientific & Basic Mode Calculator","Sticky Notes widget with auto-save to LocalStorage","Project Analytics Dashboard using custom animated SVG charts","Global Search Everything (Ctrl+F) and Desktop Notification Center"],improvements:["Enhanced animation rendering with smooth CSS variables and GPU acceleration","Dynamic particle canvas background responsive to mouse movement","Improved window snapping guides and window resizing algorithms"],fixes:["Resolved canvas resize lagging on ultra-wide screens","Fixed cursor overlap in terminal line feeds","Patched sound play state synchronizations"]},{version:"1.0.0",date:"2025-12-15",features:["Initial OS environment setup","Basic file system mock","Responsive grid alignment for desktop icons","Start Menu app launchers"]}],skills:[{name:"Python / AI Dev",category:"Artificial Intelligence",level:85,icon:"🧠"},{name:"Machine Learning & LLMs",category:"Artificial Intelligence",level:80,icon:"🤖"},{name:"React.js / Next.js",category:"Front-End",level:90,icon:"⚛️"},{name:"JavaScript (ES6+)",category:"Front-End",level:90,icon:"⚡"},{name:"Tailwind CSS",category:"Front-End",level:92,icon:"🌊"},{name:"HTML5 & CSS3",category:"Front-End",level:100,icon:"🎨"},{name:"SQL & NoSQL Databases",category:"Database Management",level:85,icon:"🗄️"},{name:"Figma (UI/UX)",category:"UI/UX Design",level:88,icon:"📐"},{name:"Git & GitHub",category:"Tools",level:88,icon:"🐙"}],projects:[{id:"project-1",title:"Interactive Portfolio OS",description:"A premium interactive operating system replication built from scratch as a portfolio.",tech:["HTML5","CSS3","JavaScript","Vite","Web Audio API"],stars:124,url:"https://github.com/itxabdullah3465/portfolio-os",liveUrl:"https://melodious-concha-820245.netlify.app/",image:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&h=250&q=80",pinned:!0},{id:"project-2",title:"Premium e-Commerce Platform",description:"Modern online shop front featuring shopping cart integrations, animations, and quick checkout.",tech:["React","JavaScript","TailwindCSS","Redux"],stars:98,url:"https://github.com/itxabdullah3465/ecommerce-shop",liveUrl:"https://lovely-lolly-9d4c6c.netlify.app/",image:"https://images.unsplash.com/photo-1472851294608-062f824d296e?auto=format&fit=crop&w=400&h=250&q=80",pinned:!0},{id:"project-3",title:"Cryptocurrency Analytics Dashboard",description:"Real-time dashboard visualizing price action, market capitalization, and coin distribution stats.",tech:["HTML5 Canvas","JavaScript","SVG Chart","REST API"],stars:87,url:"https://github.com/itxabdullah3465/crypto-tracker",liveUrl:"https://steady-belekoy-b981e5.netlify.app/",image:"https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=400&h=250&q=80",pinned:!0},{id:"project-4",title:"Glassmorphic Web Editor",description:"A browser-based lightweight coding environment highlighting syntax with dynamic glass custom panels.",tech:["JavaScript","CSS Grid","Code Highlight","LocalStorage"],stars:64,url:"https://github.com/itxabdullah3465/glass-editor",liveUrl:"https://scintillating-beijinho-f912e1.netlify.app/",image:"https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=400&h=250&q=80",pinned:!0},{id:"project-5",title:"Interactive Music Player",description:"A gorgeous retro synthwave audio player featuring playlist selection and frequency bars.",tech:["Web Audio API","JavaScript","CSS Variables","Keyframes"],stars:52,url:"https://github.com/itxabdullah3465/music-player",liveUrl:"https://delicate-sopapillas-0d7005.netlify.app/",image:"https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&h=250&q=80",pinned:!1},{id:"project-6",title:"Notes & Task Organizer Workspace",description:"A drag-and-drop workflow planner with category tags, notes archiving, and dynamic listings.",tech:["HTML5 Canvas","Vite","Vanilla JS","JSON Sync"],stars:48,url:"https://github.com/itxabdullah3465/task-workspace",liveUrl:"https://relaxed-croquembouche-56e970.netlify.app/",image:"https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=400&h=250&q=80",pinned:!1}],experience:[{role:"Senior Frontend Engineer",company:"InnovateTech Solutions",duration:"2024 - Present",bullets:["Led a team of 4 developers to build a high-performance analytics platform using React and Web Workers, reducing page loads by 40%.","Engineered a dynamic drag-and-drop dashboard builder utilizing CSS Grid and HTML5 drag APIs.","Implemented standardized unit testing structures using Vitest, achieving 85% code coverage."]},{role:"Frontend Developer",company:"PixelPerfect Labs",duration:"2022 - 2024",bullets:["Developed responsive web apps and customized interactive dashboards for enterprise clients.","Optimized bundles and styled components to improve Lighthouse performance scores from 65 to 95+.","Collaborated closely with UI/UX designers to translate Figma frames into pixel-perfect CSS components."]}],education:[{degree:"Bachelor of Science in Computer Science",school:"National University of Computer and Emerging Sciences",duration:"2018 - 2022",details:"Specialized in Software Engineering and Human-Computer Interaction."}],certificates:[{name:"Advanced React & Next.js Practitioner",issuer:"Udemy / Vercel Academy",date:"2024"},{name:"CSS Masterclass: Flexbox, Grid, and Animations",issuer:"Frontend Masters",date:"2023"},{name:"UI/UX Design Certification",issuer:"Google Career Certificates",date:"2022"}],achievements:[{title:"First Place",event:"National Hackathon 2023",description:"Developed an AI-powered student aid portal in 48 hours."},{title:"Top Contributor",event:"Hacktoberfest 2024",description:"Merged 12 pull requests in various developer utility projects."}],services:[{title:"Single Page App Development",description:"Building highly interactive React, Vue, or Vanilla JS applications."},{title:"UI/UX Design & Prototyping",description:"Designing interfaces in Figma and coding them into modular CSS."},{title:"Performance Optimization",description:"Auditing, refactoring, and optimizing slow websites for maximum Lighthouse scores."}],musicList:[{title:"Resonance",artist:"Home (Synthwave)",url:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},{title:"Sunset Chaser",artist:"Neon Driver",url:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"},{title:"Cyber City Light",artist:"Outrun 1984",url:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"}]};class N{constructor(t,e,i){this.taskbarContainer=document.getElementById(t),this.windowsContainer=document.getElementById(e),this.snapIndicator=document.getElementById(i),this.windows=new Map,this.activeWindow=null,this.zIndexCounter=100,this.snapThreshold=20,window.addEventListener("resize",()=>this.handleScreenResize())}createWindow(t,e,i,s="fa-solid fa-window-maximize"){if(this.windows.has(t)){const y=this.windows.get(t);return y.classList.contains("minimized")&&this.restoreWindow(t),this.focusWindow(t),y}const n=document.createElement("div");n.className="window",n.id=`win-${t}`,n.setAttribute("data-app",t),n.style.zIndex=++this.zIndexCounter;const a=window.innerWidth,l=window.innerHeight-48,r=Math.min(640,a-40),h=Math.min(480,l-40),f=(a-r)/2+this.windows.size*20%100,c=(l-h)/2+this.windows.size*20%100;n.style.width=`${r}px`,n.style.height=`${h}px`,n.style.left=`${f}px`,n.style.top=`${c}px`,n.customCoords={left:f,top:c,width:r,height:h},n.innerHTML=`
      <div class="window-header">
        <div class="window-title-bar">
          <i class="window-title-icon ${s}"></i>
          <span>${e}</span>
        </div>
        <div class="window-controls">
          <button class="window-control-btn minimize" title="Minimize"></button>
          <button class="window-control-btn maximize" title="Maximize"></button>
          <button class="window-control-btn close" title="Close"></button>
        </div>
      </div>
      <div class="window-content"></div>
      
      <!-- Resizers -->
      <div class="resize-handle n"></div>
      <div class="resize-handle s"></div>
      <div class="resize-handle e"></div>
      <div class="resize-handle w"></div>
      <div class="resize-handle se"></div>
      <div class="resize-handle sw"></div>
    `;const v=n.querySelector(".window-content");return typeof i=="string"?v.innerHTML=i:v.appendChild(i),this.windowsContainer.appendChild(n),this.windows.set(t,n),this.setupWindowEvents(n,t),this.addTaskbarTile(t,e,s),this.focusWindow(t),n.dispatchEvent(new CustomEvent("app-ready",{detail:{contentEl:v}})),n}setupWindowEvents(t,e){const i=t.querySelector(".window-header");t.addEventListener("mousedown",()=>this.focusWindow(e)),i.addEventListener("mousedown",n=>this.initDrag(n,t)),i.addEventListener("dblclick",()=>this.toggleMaximize(e)),t.querySelector(".window-control-btn.close").addEventListener("click",n=>{n.stopPropagation(),this.closeWindow(e)}),t.querySelector(".window-control-btn.minimize").addEventListener("click",n=>{n.stopPropagation(),this.minimizeWindow(e)}),t.querySelector(".window-control-btn.maximize").addEventListener("click",n=>{n.stopPropagation(),this.toggleMaximize(e)}),t.querySelectorAll(".resize-handle").forEach(n=>{n.addEventListener("mousedown",a=>this.initResize(a,t,n.className.split(" ")[1]))})}initDrag(t,e){if(t.target.closest(".window-control-btn")||e.classList.contains("maximized"))return;t.preventDefault(),this.focusWindow(e.getAttribute("data-app"));const i=t.clientX,s=t.clientY,n=parseFloat(e.style.left),a=parseFloat(e.style.top);let l=e.classList.contains("snapped-left")||e.classList.contains("snapped-right"),r=.5;if(l){const c=e.getBoundingClientRect();r=(i-c.left)/c.width}const h=c=>{let v=c.clientX-i,y=c.clientY-s,x=n+v,u=a+y;l&&(e.classList.remove("snapped-left","snapped-right"),e.style.width=`${e.customCoords.width}px`,e.style.height=`${e.customCoords.height}px`,x=c.clientX-e.customCoords.width*r,u=c.clientY-15,l=!1);const p=c.clientX;p<this.snapThreshold?this.showSnapIndicator(0,0,window.innerWidth/2,window.innerHeight-48):p>window.innerWidth-this.snapThreshold?this.showSnapIndicator(window.innerWidth/2,0,window.innerWidth/2,window.innerHeight-48):this.hideSnapIndicator(),u=Math.max(0,u),e.style.left=`${x}px`,e.style.top=`${u}px`},f=c=>{window.removeEventListener("mousemove",h),window.removeEventListener("mouseup",f);const v=c.clientX;this.hideSnapIndicator(),v<this.snapThreshold?this.snapWindow(e,"left"):v>window.innerWidth-this.snapThreshold?this.snapWindow(e,"right"):(e.customCoords.left=parseFloat(e.style.left),e.customCoords.top=parseFloat(e.style.top))};window.addEventListener("mousemove",h),window.addEventListener("mouseup",f)}initResize(t,e,i){t.preventDefault(),t.stopPropagation();const s=t.clientX,n=t.clientY,a=parseFloat(e.style.width),l=parseFloat(e.style.height),r=parseFloat(e.style.left),h=parseFloat(e.style.top),f=v=>{let y=v.clientX-s,x=v.clientY-n,u=a,p=l,k=r,g=h;const S=320,m=240;if(i.includes("e")&&(u=Math.max(S,a+y)),i.includes("w")){const b=a-y;b>=S&&(u=b,k=r+y)}if(i.includes("s")&&(p=Math.max(m,l+x)),i.includes("n")){const b=l-x;b>=m&&(p=b,g=h+x)}e.style.width=`${u}px`,e.style.height=`${p}px`,e.style.left=`${k}px`,e.style.top=`${g}px`,e.customCoords={left:k,top:g,width:u,height:p}},c=()=>{window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",c)};window.addEventListener("mousemove",f),window.addEventListener("mouseup",c)}showSnapIndicator(t,e,i,s){this.snapIndicator.style.left=`${t}px`,this.snapIndicator.style.top=`${e}px`,this.snapIndicator.style.width=`${i}px`,this.snapIndicator.style.height=`${s}px`,this.snapIndicator.classList.add("visible")}hideSnapIndicator(){this.snapIndicator.classList.remove("visible")}snapWindow(t,e){t.classList.remove("maximized");const i=window.innerWidth/2,s=window.innerHeight-48,n=e==="left"?0:i,a=0;t.style.width=`${i}px`,t.style.height=`${s}px`,t.style.left=`${n}px`,t.style.top=`${a}px`,e==="left"?t.classList.add("snapped-left"):t.classList.add("snapped-right")}focusWindow(t){const e=this.windows.get(t);e&&(this.activeWindow&&this.activeWindow.classList.remove("active"),e.classList.add("active"),e.style.zIndex=++this.zIndexCounter,this.activeWindow=e,this.focusTaskbarTile(t))}minimizeWindow(t){const e=this.windows.get(t);if(!e)return;e.classList.add("minimized"),e.classList.remove("active");const i=this.taskbarContainer.querySelector(`[data-app="${t}"]`);i&&i.classList.remove("active"),this.activeWindow===e&&(this.activeWindow=null,this.focusNextTopWindow())}restoreWindow(t){const e=this.windows.get(t);e&&(e.classList.remove("minimized"),this.focusWindow(t))}toggleMaximize(t){const e=this.windows.get(t);e&&(e.classList.contains("maximized")?(e.classList.remove("maximized"),e.style.left=`${e.customCoords.left}px`,e.style.top=`${e.customCoords.top}px`,e.style.width=`${e.customCoords.width}px`,e.style.height=`${e.customCoords.height}px`):(e.classList.add("maximized"),e.classList.remove("snapped-left","snapped-right"),e.style.left="0px",e.style.top="0px",e.style.width="100%",e.style.height="calc(100vh - 48px)"))}closeWindow(t){const e=this.windows.get(t);e&&(e.style.opacity="0",e.style.transform="scale(0.9) translateY(20px)",setTimeout(()=>{e.remove(),this.windows.delete(t),this.removeTaskbarTile(t),this.activeWindow===e&&(this.activeWindow=null,this.focusNextTopWindow())},150))}focusNextTopWindow(){let t=null,e=-1;this.windows.forEach((i,s)=>{if(!i.classList.contains("minimized")){const n=parseInt(i.style.zIndex);n>e&&(e=n,t=s)}}),t&&this.focusWindow(t)}handleScreenResize(){this.windows.forEach(t=>{t.classList.contains("maximized")&&(t.style.width="100%",t.style.height="calc(100vh - 48px)")})}addTaskbarTile(t,e,i){if(this.taskbarContainer.querySelector(`[data-app="${t}"]`))return;const s=document.createElement("div");s.className="taskbar-app-tile",s.setAttribute("data-app",t),s.innerHTML=`
      <i class="${i}"></i>
      <span>${e}</span>
    `,s.addEventListener("click",()=>{const n=this.windows.get(t);n&&(n.classList.contains("minimized")?this.restoreWindow(t):n.classList.contains("active")?this.minimizeWindow(t):this.focusWindow(t))}),this.taskbarContainer.appendChild(s)}focusTaskbarTile(t){this.taskbarContainer.querySelectorAll(".taskbar-app-tile").forEach(i=>{i.classList.remove("active")});const e=this.taskbarContainer.querySelector(`[data-app="${t}"]`);e&&e.classList.add("active")}removeTaskbarTile(t){const e=this.taskbarContainer.querySelector(`[data-app="${t}"]`);e&&e.remove()}}class B{constructor(t,e,i,s){this.panel=t,this.list=e,this.toastContainer=i,this.countBadge=s,this.notifications=JSON.parse(localStorage.getItem("os_notifications"))||[{id:"notif-1",title:"System Boot Completed",message:"Portfolio OS v2.0 initialized successfully. Welcome back!",time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),icon:"💻",unread:!0},{id:"notif-2",title:"GitHub Connected",message:"Established pipeline with GitHub REST API.",time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),icon:"🐙",unread:!0}],this.init()}init(){this.renderNotifications(),this.updateBadge();const t=document.getElementById("btn-clear-notifications");t&&t.addEventListener("click",()=>this.clearAll());const e=document.getElementById("tray-bell");e&&e.addEventListener("click",i=>{i.stopPropagation(),this.togglePanel()}),document.addEventListener("click",i=>{!this.panel.contains(i.target)&&i.target.id!=="tray-bell"&&this.panel.classList.remove("open")})}renderNotifications(){if(this.notifications.length===0){this.list.innerHTML=`
        <div style="text-align: center; color: var(--text-muted); font-size: 0.8rem; margin-top: 40px;">
          No notifications.
        </div>
      `;return}this.list.innerHTML=this.notifications.map(t=>`
      <div class="notification-item ${t.unread?"unread":""}" data-id="${t.id}">
        <div class="notification-icon">${t.icon}</div>
        <div class="notification-text">
          <h4>${t.title}</h4>
          <p>${t.message}</p>
          <div class="notification-time">${t.time}</div>
        </div>
      </div>
    `).join(""),this.list.querySelectorAll(".notification-item").forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("data-id");this.markAsRead(e)})})}pushNotification(t,e,i="🔔"){const s={id:`notif-${Date.now()}`,title:t,message:e,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),icon:i,unread:!0};this.notifications.unshift(s),this.notifications.length>10&&this.notifications.pop(),this.saveNotifications(),this.renderNotifications(),this.updateBadge(),this.pushToast(t,e,i)}pushToast(t,e,i="🔔"){const s=document.createElement("div");s.className="toast-message",s.innerHTML=`
      <div style="font-size: 1.3rem;">${i}</div>
      <div style="flex:1;">
        <h4 style="font-size: 0.8rem; font-weight: 600; color: #fff; margin:0;">${t}</h4>
        <p style="font-size: 0.7rem; color: var(--text-secondary); margin-top: 2px;">${e}</p>
      </div>
    `,this.toastContainer.appendChild(s),this.playNotificationSound(),setTimeout(()=>{s.style.opacity="0",s.style.transform="translateX(30px)",setTimeout(()=>s.remove(),300)},4e3)}playNotificationSound(){try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=new t;if(e.state==="suspended")return;const i=e.createOscillator(),s=e.createGain();i.type="sine",i.frequency.setValueAtTime(523.25,e.currentTime),i.frequency.setValueAtTime(659.25,e.currentTime+.08),i.frequency.setValueAtTime(783.99,e.currentTime+.16),s.gain.setValueAtTime(.08,e.currentTime),s.gain.exponentialRampToValueAtTime(.001,e.currentTime+.35),i.connect(s),s.connect(e.destination),i.start(),i.stop(e.currentTime+.35)}catch{}}markAsRead(t){const e=this.notifications.find(i=>i.id===t);e&&e.unread&&(e.unread=!1,this.saveNotifications(),this.renderNotifications(),this.updateBadge())}clearAll(){this.notifications=[],this.saveNotifications(),this.renderNotifications(),this.updateBadge()}updateBadge(){this.notifications.filter(e=>e.unread).length>0?(this.countBadge.classList.add("glow"),this.countBadge.style.color="var(--primary-color)"):(this.countBadge.classList.remove("glow"),this.countBadge.style.color="var(--text-secondary)")}togglePanel(){this.panel.classList.toggle("open"),this.panel.classList.contains("open")&&(this.notifications.forEach(t=>t.unread=!1),this.saveNotifications(),this.renderNotifications(),this.updateBadge())}saveNotifications(){localStorage.setItem("os_notifications",JSON.stringify(this.notifications))}}class H{constructor(t,e,i,s){this.overlay=t,this.input=e,this.resultsList=i,this.wm=s,this.index=[],this.selectedIndex=-1,this.buildIndex(),this.init()}buildIndex(){d.projects.forEach(t=>{this.index.push({title:t.title,desc:t.description,category:"Project",icon:"fa-solid fa-code",action:()=>window.launchApp("projects")})}),d.skills.forEach(t=>{this.index.push({title:t.name,desc:`${t.category} skill with level ${t.level}%`,category:"Skill",icon:"fa-solid fa-chart-line",action:()=>window.launchApp("skills")})}),d.certificates.forEach(t=>{this.index.push({title:t.name,desc:`Issued by ${t.issuer} in ${t.date}`,category:"Certificate",icon:"fa-solid fa-certificate",action:()=>window.launchApp("linkedin")})}),d.experience.forEach(t=>{this.index.push({title:`${t.role} - ${t.company}`,desc:t.bullets.join(" "),category:"Experience",icon:"fa-solid fa-briefcase",action:()=>window.launchApp("linkedin")})}),this.index.push({title:"Terminal CLI",desc:"Interactive developer shell interface",category:"System App",icon:"fa-solid fa-terminal",action:()=>window.launchApp("terminal")}),this.index.push({title:"Music Player",desc:"Listen to premium outrun synthwave tunes",category:"Accessory",icon:"fa-solid fa-music",action:()=>window.launchApp("music")}),this.index.push({title:"Calculator",desc:"Windows-style scientific arithmetic device",category:"Accessory",icon:"fa-solid fa-calculator",action:()=>window.launchApp("calculator")})}init(){this.input.addEventListener("input",()=>this.performSearch()),this.input.addEventListener("keydown",t=>{const e=this.resultsList.querySelectorAll(".search-result-item");e.length!==0&&(t.key==="ArrowDown"?(t.preventDefault(),this.selectedIndex=(this.selectedIndex+1)%e.length,this.updateActiveItem(e)):t.key==="ArrowUp"?(t.preventDefault(),this.selectedIndex=(this.selectedIndex-1+e.length)%e.length,this.updateActiveItem(e)):t.key==="Enter"&&(t.preventDefault(),this.selectedIndex!==-1&&e[this.selectedIndex]?e[this.selectedIndex].click():e[0]&&e[0].click()))}),document.addEventListener("click",t=>{!this.overlay.contains(t.target)&&t.target.id!=="start-search-trigger"&&this.closeSearch()})}performSearch(){const t=this.input.value.trim().toLowerCase();if(this.resultsList.innerHTML="",this.selectedIndex=-1,!t){this.resultsList.innerHTML=`
        <div style="text-align: center; color: var(--text-muted); font-size: 0.8rem; margin: 40px 0;">
          Search everything (projects, skills, experience...)
        </div>
      `;return}const e=this.index.filter(i=>i.title.toLowerCase().includes(t)||i.desc.toLowerCase().includes(t)||i.category.toLowerCase().includes(t));if(e.length===0){this.resultsList.innerHTML=`
        <div style="text-align: center; color: var(--text-muted); font-size: 0.8rem; margin: 40px 0;">
          No matching results found.
        </div>
      `;return}e.slice(0,5).forEach((i,s)=>{const n=document.createElement("div");n.className="search-result-item",n.innerHTML=`
        <div class="search-result-icon"><i class="${i.icon}"></i></div>
        <div class="search-result-details">
          <h4>${i.title}</h4>
          <p>${i.category} • ${i.desc.substring(0,60)}...</p>
        </div>
      `,n.addEventListener("click",()=>{i.action(),this.closeSearch()}),this.resultsList.appendChild(n)})}updateActiveItem(t){t.forEach((e,i)=>{i===this.selectedIndex?(e.classList.add("selected"),e.scrollIntoView({block:"nearest"})):e.classList.remove("selected")})}openSearch(){this.overlay.classList.add("open"),this.input.value="",this.performSearch(),setTimeout(()=>this.input.focus(),150)}closeSearch(){this.overlay.classList.remove("open")}getProjectsHtml(){return`
      <div style="padding: 20px; display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px;">
        ${d.projects.map(t=>`
          <div class="repo-card" style="height: auto; min-height: 310px; display: flex; flex-direction: column;">
            <div class="card-image-banner" style="background-image: url('${t.image}');"></div>
            <div style="padding: 15px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div class="repo-title" style="cursor: pointer;" onclick="window.open('${t.liveUrl}', '_blank')">${t.title}</div>
                <div class="repo-desc">${t.description}</div>
                <div style="display: flex; gap: 5px; flex-wrap: wrap; margin-bottom: 12px;">
                  ${t.tech.map(e=>`<span style="font-size:0.65rem; background:rgba(255,255,255,0.05); padding: 2px 6px; border-radius:4px; color:var(--primary-color);">${e}</span>`).join("")}
                </div>
              </div>
              <div class="repo-footer" style="margin-top: 10px;">
                <span style="font-size: 0.75rem; color: var(--text-muted);"><i class="fa-regular fa-star"></i> ${t.stars} Stars</span>
                <div style="display: flex; gap: 6px;">
                  <button class="btn-linkedin-secondary" style="padding: 5px 10px; border-radius: 6px; font-size: 0.75rem; border-color: rgba(255,255,255,0.1);" onclick="window.open('${t.url}', '_blank')" title="View GitHub Code">
                    <i class="fa-brands fa-github"></i> Code
                  </button>
                  <button class="btn-github-profile" style="padding: 5px 10px; border-radius: 6px; font-size: 0.75rem; margin-top:0;" onclick="window.open('${t.liveUrl}', '_blank')" title="Launch Netlify Live Demo">
                    <i class="fa-solid fa-rocket"></i> Live
                  </button>
                </div>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    `}}class F{constructor(t,e){this.desktop=t,this.notes=JSON.parse(localStorage.getItem("os_sticky_notes"))||[];const i=document.getElementById(e);i&&i.addEventListener("click",()=>this.createNewNote()),this.init()}init(){this.notes.length===0?this.createNewNote("Welcome! Double click here to write note. Click the dots to change colors.","yellow",150,150):this.notes.forEach(t=>this.renderNoteDOM(t))}createNewNote(t="",e="yellow",i=null,s=null){const n=window.innerWidth,a=window.innerHeight,l={id:`note-${Date.now()}-${Math.floor(Math.random()*1e3)}`,content:t,color:e,x:i!==null?i:Math.floor(Math.random()*(n-250)),y:s!==null?s:Math.floor(Math.random()*(a-300))};this.notes.push(l),this.saveNotes(),this.renderNoteDOM(l)}renderNoteDOM(t){const e=document.createElement("div");e.className=`sticky-note ${t.color}`,e.id=t.id,e.style.left=`${t.x}px`,e.style.top=`${t.y}px`,e.innerHTML=`
      <div class="sticky-note-header">
        <div class="sticky-note-color-picker">
          <div class="color-dot yellow" data-color="yellow" style="background:#fef08a;"></div>
          <div class="color-dot blue" data-color="blue" style="background:#bfdbfe;"></div>
          <div class="color-dot pink" data-color="pink" style="background:#fbcfe8;"></div>
          <div class="color-dot green" data-color="green" style="background:#bbf7d0;"></div>
          <div class="color-dot purple" data-color="purple" style="background:#e9d5ff;"></div>
        </div>
        <div class="sticky-note-close">&times;</div>
      </div>
      <textarea class="sticky-note-body" placeholder="Write something...">${t.content}</textarea>
    `,this.desktop.appendChild(e),this.setupNoteEvents(e,t)}setupNoteEvents(t,e){const i=t.querySelector(".sticky-note-header"),s=t.querySelector(".sticky-note-body"),n=t.querySelector(".sticky-note-close"),a=t.querySelectorAll(".color-dot");i.addEventListener("mousedown",l=>{l.preventDefault(),t.style.zIndex=1e3;const r=l.clientX,h=l.clientY,f=parseFloat(t.style.left),c=parseFloat(t.style.top),v=x=>{let u=f+(x.clientX-r),p=c+(x.clientY-h);u=Math.max(0,Math.min(u,window.innerWidth-220)),p=Math.max(0,Math.min(p,window.innerHeight-220)),t.style.left=`${u}px`,t.style.top=`${p}px`,e.x=u,e.y=p},y=()=>{t.style.zIndex=10,window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",y),this.saveNotes()};window.addEventListener("mousemove",v),window.addEventListener("mouseup",y)}),s.addEventListener("input",()=>{e.content=s.value,this.saveNotes()}),a.forEach(l=>{l.addEventListener("click",()=>{const r=l.getAttribute("data-color");t.className=`sticky-note ${r}`,e.color=r,this.saveNotes()})}),n.addEventListener("click",()=>{t.remove(),this.notes=this.notes.filter(l=>l.id!==e.id),this.saveNotes()})}saveNotes(){localStorage.setItem("os_sticky_notes",JSON.stringify(this.notes))}}class O{constructor(t,e,i,s,n,a,l){this.cityEl=t,this.tempEl=e,this.descEl=i,this.iconEl=s,this.humidityEl=n,this.windEl=a,this.refreshBtn=l,this.city=localStorage.getItem("os_weather_city")||d.weather.defaultCity,this.lat=localStorage.getItem("os_weather_lat")||d.weather.defaultLat,this.lon=localStorage.getItem("os_weather_lon")||d.weather.defaultLon,this.init()}init(){this.refreshBtn.addEventListener("click",t=>{t.stopPropagation(),this.refreshBtn.classList.add("fa-spin"),this.updateWeather().finally(()=>{setTimeout(()=>this.refreshBtn.classList.remove("fa-spin"),600)})}),this.geolocateUser()}geolocateUser(){navigator.geolocation?navigator.geolocation.getCurrentPosition(t=>{this.lat=t.coords.latitude.toFixed(4),this.lon=t.coords.longitude.toFixed(4),this.city="Local Area",this.updateWeather()},t=>{console.warn("Geolocation declined / unavailable. Defaulting weather coordinates."),this.updateWeather()},{timeout:5e3}):this.updateWeather()}async updateWeather(){this.cityEl.textContent=this.city;try{const t=`https://api.open-meteo.com/v1/forecast?latitude=${this.lat}&longitude=${this.lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,wind_speed_10m&timezone=auto`,e=await fetch(t);if(!e.ok)throw new Error("Weather service unreachable");const i=await e.json();this.renderWeather(i.current)}catch(t){console.error(t),this.cityEl.textContent="Offline",this.tempEl.textContent="--°C",this.descEl.textContent="Unable to connect"}}renderWeather(t){const e=Math.round(t.temperature_2m),i=t.relative_humidity_2m,s=t.wind_speed_10m,n=t.weather_code;this.tempEl.textContent=`${e}°C`,this.humidityEl.textContent=`${i}%`,this.windEl.textContent=`${s} km/h`;const a=this.decodeWMOCode(n,t.is_day);this.descEl.textContent=a.desc,this.iconEl.innerHTML=`<i class="${a.icon}"></i>`}decodeWMOCode(t,e){let i="Clear Sky",s=e?"fa-solid fa-sun":"fa-solid fa-moon";return t===0?(i="Clear Sky",s=e?"fa-solid fa-sun":"fa-solid fa-moon"):t>=1&&t<=3?(i="Partly Cloudy",s=e?"fa-solid fa-cloud-sun":"fa-solid fa-cloud-moon"):t===45||t===48?(i="Foggy",s="fa-solid fa-smog"):t>=51&&t<=55?(i="Light Drizzle",s="fa-solid fa-cloud-rain"):t>=61&&t<=65?(i="Rainy",s="fa-solid fa-cloud-showers-heavy"):t>=71&&t<=77?(i="Snowing",s="fa-solid fa-snowflake"):t>=80&&t<=82?(i="Rain Showers",s="fa-solid fa-cloud-showers-water"):t>=95&&t<=99&&(i="Thunderstorm",s="fa-solid fa-cloud-bolt"),{desc:i,icon:s}}}class R{constructor(t,e){this.container=t,this.wm=e,this.history=[],this.historyIndex=-1,this.commands=["help","about","projects","skills","certificates","experience","resume","contact","github","linkedin","gallery","achievements","services","education","clear","date","time","whoami","version","exit"],this.init()}init(){this.container.innerHTML=`
      <div class="terminal-app" id="terminal-app">
        <div class="terminal-history" id="terminal-history">
          <div class="terminal-line terminal-welcome-text">Welcome to Portfolio OS v2.0 Interactive Developer Terminal.
Type 'help' to see list of available commands.</div>
        </div>
        <div class="terminal-prompt-line">
          <span class="terminal-prompt">></span>
          <div class="terminal-input-wrapper">
            <input type="text" class="terminal-input" id="terminal-input" autofocus autocomplete="off" spellcheck="false">
            <span class="terminal-custom-cursor" id="terminal-cursor"></span>
          </div>
        </div>
      </div>
    `,this.historyEl=this.container.querySelector("#terminal-history"),this.inputEl=this.container.querySelector("#terminal-input"),this.cursorEl=this.container.querySelector("#terminal-cursor"),this.appEl=this.container.querySelector("#terminal-app"),this.appEl.addEventListener("click",()=>this.inputEl.focus()),this.inputEl.addEventListener("keydown",t=>this.handleKeyDown(t)),this.inputEl.addEventListener("input",()=>this.updateCursorPosition()),setTimeout(()=>this.inputEl.focus(),100)}handleKeyDown(t){if(t.key==="Enter"){const e=this.inputEl.value.trim();this.executeCommand(e),this.inputEl.value="",this.updateCursorPosition()}else t.key==="ArrowUp"?(t.preventDefault(),this.history.length>0&&(this.historyIndex===-1&&(this.historyIndex=this.history.length),this.historyIndex=Math.max(0,this.historyIndex-1),this.inputEl.value=this.history[this.historyIndex],this.updateCursorPosition())):t.key==="ArrowDown"?(t.preventDefault(),this.history.length>0&&this.historyIndex!==-1&&(this.historyIndex++,this.historyIndex>=this.history.length?(this.historyIndex=-1,this.inputEl.value=""):this.inputEl.value=this.history[this.historyIndex],this.updateCursorPosition())):t.key==="Tab"&&(t.preventDefault(),this.handleAutocomplete())}updateCursorPosition(){setTimeout(()=>{},10)}handleAutocomplete(){const t=this.inputEl.value.trim().toLowerCase();if(!t)return;const e=this.commands.filter(i=>i.startsWith(t));e.length===1?this.inputEl.value=e[0]:e.length>1&&(this.printLine(`> ${this.inputEl.value}`,"terminal-prompt"),this.printLine(e.join("   "),"info"))}executeCommand(t){const e=t.trim();if(!e)return;this.printLine(`> ${e}`,"terminal-prompt"),this.history.push(e),this.historyIndex=-1;const i=e.toLowerCase().split(" "),s=i[0];if(i.slice(1),!this.commands.includes(s)){this.printLine(`Command not found: '${s}'. Type 'help' to view available commands.`,"warn"),this.scrollToBottom();return}switch(s){case"help":this.cmdHelp();break;case"about":this.cmdAbout();break;case"projects":this.cmdProjects();break;case"skills":this.cmdSkills();break;case"certificates":this.cmdCertificates();break;case"experience":this.cmdExperience();break;case"resume":this.cmdResume();break;case"contact":this.cmdContact();break;case"github":this.cmdGithub();break;case"linkedin":this.cmdLinkedin();break;case"gallery":this.cmdGallery();break;case"achievements":this.cmdAchievements();break;case"services":this.cmdServices();break;case"education":this.cmdEducation();break;case"clear":this.historyEl.innerHTML="";break;case"date":this.printLine(new Date().toDateString());break;case"time":this.printLine(new Date().toTimeString());break;case"whoami":this.printLine(`${d.profile.name} - ${d.profile.title}`);break;case"version":this.printLine(`Portfolio OS version: ${d.profile.subtitle} (Release date: 2026-07-01)`);break;case"exit":this.wm.closeWindow("terminal");break}this.scrollToBottom()}printLine(t,e=""){const i=document.createElement("div");i.className=`terminal-line ${e}`,i.textContent=t,this.historyEl.appendChild(i)}printElement(t){this.historyEl.appendChild(t)}scrollToBottom(){this.historyEl.scrollTop=this.historyEl.scrollHeight}cmdHelp(){const t=document.createElement("div");t.className="terminal-cmd-heading",t.textContent="AVAILABLE COMMANDS",this.printElement(t);const e={about:"Display professional summary bio",projects:"List frontend web projects portfolio",skills:"Show technical skills levels dashboard",experience:"Display work history details",resume:"Download PDF Resume CV",contact:"Show email and social contact options",github:"Open GitHub Profile / Launch GitHub App",linkedin:"Open LinkedIn profile app section",certificates:"View licenses and certifications",gallery:"Show projects representation grid",achievements:"Display awards & career milestones",services:"Show technical dev services offered",education:"List academic background",clear:"Clear screen logs","date / time":"Show current date and time info",whoami:"Who is the logged in user?",version:"Show current OS compile version",exit:"Close current terminal terminal window"},i=document.createElement("table");i.className="terminal-table",i.innerHTML=`
      <thead>
        <tr>
          <th>Command</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        ${Object.entries(e).map(([s,n])=>`
          <tr>
            <td style="color: #38bdf8; font-weight: bold;">${s}</td>
            <td>${n}</td>
          </tr>
        `).join("")}
      </tbody>
    `,this.printElement(i)}cmdAbout(){this.printLine(`${d.profile.name}`,"terminal-cmd-heading"),this.printLine(d.profile.bio),this.printLine(`
Location: ${d.profile.location}`),this.printLine(`Email: ${d.profile.email}`)}cmdProjects(){this.printLine("PROJECTS PORTFOLIO","terminal-cmd-heading"),d.projects.forEach(t=>{this.printLine(`• ${t.title} (${t.tech.join(", ")})`),this.printLine(`  Description: ${t.description}`),this.printLine(`  GitHub Stars: ⭐ ${t.stars} | URL: ${t.url}
`)})}cmdSkills(){this.printLine("TECHNICAL SKILLS PROGRESS","terminal-cmd-heading"),d.skills.forEach(t=>{const e=Math.round(t.level/10),i="█".repeat(e)+"░".repeat(10-e);this.printLine(`${t.icon} ${t.name.padEnd(20)} [${i}] ${t.level}%`)})}cmdCertificates(){this.printLine("CERTIFICATIONS","terminal-cmd-heading"),d.certificates.forEach(t=>{this.printLine(`• ${t.name}`),this.printLine(`  Issued by: ${t.issuer} | Date: ${t.date}
`)})}cmdExperience(){this.printLine("WORK EXPERIENCE","terminal-cmd-heading"),d.experience.forEach(t=>{this.printLine(`• ${t.role} at ${t.company} (${t.duration})`),t.bullets.forEach(e=>{this.printLine(`  - ${e}`)}),this.printLine("")})}cmdResume(){this.printLine("Downloading Resume PDF..."),this.printLine(`Direct Link: ${d.profile.resumeUrl}`),window.open(d.profile.resumeUrl,"_blank")}cmdContact(){this.printLine("CONTACT INFORMATION","terminal-cmd-heading"),this.printLine(`Email: ${d.profile.email}`),this.printLine(`LinkedIn: ${d.profile.linkedin}`),this.printLine(`GitHub: https://github.com/${d.profile.github}`)}cmdGithub(){this.printLine("Opening GitHub application..."),setTimeout(()=>{const t=document.querySelector('.desktop-icon[data-app="github"]');t&&t.click()},300)}cmdLinkedin(){this.printLine("Opening LinkedIn application..."),setTimeout(()=>{const t=document.querySelector('.desktop-icon[data-app="linkedin"]');t&&t.click()},300)}cmdGallery(){this.printLine("ASCII ART PROJECT GALLERY","terminal-cmd-heading"),this.printLine(`
    +-----------------------------------------------+
    |                  PROJECT GALLERY              |
    +-----------------------------------------------+
    |   [1] Portfolio OS v2.0                       |
    |   [2] Crypto Dashboard                        |
    |   [3] Collaborative Draw                      |
    |   [4] Glassmorphic Editor                     |
    +-----------------------------------------------+
    `),this.printLine('Type "projects" to view active repository URLs.')}cmdAchievements(){this.printLine("CAREER ACHIEVEMENTS & MILESTONES","terminal-cmd-heading"),d.achievements.forEach(t=>{this.printLine(`🏆 [${t.title}] ${t.event}`),this.printLine(`   Description: ${t.description}
`)})}cmdServices(){this.printLine("TECHNICAL SERVICES OFFERED","terminal-cmd-heading"),d.services.forEach(t=>{this.printLine(`🛠️ ${t.title}`),this.printLine(`   ${t.description}
`)})}cmdEducation(){this.printLine("EDUCATION HISTORY","terminal-cmd-heading"),d.education.forEach(t=>{this.printLine(`🎓 ${t.degree}`),this.printLine(`   School: ${t.school} (${t.duration})`),this.printLine(`   Focus: ${t.details}
`)})}}class j{constructor(t,e){this.container=t,this.notifier=e,this.username=localStorage.getItem("os_github_username")||d.profile.github,this.profileData=null,this.reposData=[],this.init()}async init(){this.container.innerHTML=`
      <div class="github-container">
        <!-- Profile Header -->
        <div class="github-profile-card" id="github-profile-card">
          <div class="github-avatar-skeleton" style="width: 80px; height: 80px; border-radius: 50%; background: rgba(255,255,255,0.05);"></div>
          <div style="flex: 1;">
            <div style="height: 20px; width: 150px; background: rgba(255,255,255,0.05); margin-bottom: 8px; border-radius: 4px;"></div>
            <div style="height: 12px; width: 220px; background: rgba(255,255,255,0.05); border-radius: 4px;"></div>
          </div>
        </div>

        <!-- Contribution Calendar Graph -->
        <div class="contrib-calendar-section">
          <h3>GitHub Contribution History</h3>
          <div class="contrib-calendar-grid" id="contrib-calendar-grid">
            <!-- Box cells populated by JS -->
          </div>
        </div>

        <!-- Languages & Statistics -->
        <div class="language-section">
          <h3>Most Used Languages</h3>
          <div class="lang-bar-container" id="lang-bar-container"></div>
          <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-top: 10px; font-size: 0.75rem; color: var(--text-secondary);" id="lang-labels"></div>
        </div>

        <!-- Pinned / Active Projects -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 0.95rem; color: #fff;">Repositories</h3>
          <div class="github-repos-grid" id="github-repos-grid"></div>
        </div>
      </div>
    `,this.profileCardEl=this.container.querySelector("#github-profile-card"),this.calendarGridEl=this.container.querySelector("#contrib-calendar-grid"),this.langBarEl=this.container.querySelector("#lang-bar-container"),this.langLabelsEl=this.container.querySelector("#lang-labels"),this.reposGridEl=this.container.querySelector("#github-repos-grid"),this.renderContributionCalendar(),await this.fetchGitHubData()}renderContributionCalendar(){this.calendarGridEl.innerHTML="";const t=53*7;for(let e=0;e<t;e++){const i=document.createElement("div");i.className="contrib-day";const s=e%7;let n=0;const a=Math.random();s===0||s===6?a>.85?n=1:a>.97&&(n=2):a>.8?n=4:a>.6?n=3:a>.3?n=2:a>.1&&(n=1),i.classList.add(`lvl-${n}`);const l=new Date;l.setDate(l.getDate()-(t-e)),i.title=`${n} contributions on ${l.toDateString()}`,this.calendarGridEl.appendChild(i)}}async fetchGitHubData(){try{const t=await fetch(`https://api.github.com/users/${this.username}`);if(!t.ok)throw new Error("Rate limit / user not found");this.profileData=await t.json();const e=await fetch(`https://api.github.com/users/${this.username}/repos?sort=updated&per_page=6`);e.ok&&(this.reposData=await e.json()),this.renderProfileCard(this.profileData),this.renderLanguagesAndRepos()}catch{console.warn("GitHub API limit exceeded or network error, falling back to mock details."),this.profileData={avatar_url:d.profile.avatar,name:d.profile.name,login:this.username,bio:d.profile.bio,followers:142,following:56,public_repos:d.projects.length,html_url:`https://github.com/${this.username}`},this.reposData=d.projects.map(e=>({name:e.title,description:e.description,language:e.tech[0],stargazers_count:e.stars,forks_count:Math.round(e.stars/3),clone_url:e.url,html_url:e.url})),this.renderProfileCard(this.profileData),this.renderLanguagesAndRepos()}}renderProfileCard(t){this.profileCardEl.innerHTML=`
      <img src="${t.avatar_url}" class="github-avatar" alt="GitHub Avatar">
      <div class="github-info">
        <h2 style="margin: 0; font-size: 1.25rem;">${t.name||t.login}</h2>
        <div style="font-size: 0.8rem; color: var(--primary-color);">@${t.login}</div>
        <p style="font-size: 0.8rem; margin-top: 6px; color: var(--text-secondary); line-height: 1.4;">${t.bio||"No profile bio available."}</p>
        <div class="github-stats-row">
          <div class="github-stat-item">Followers: <span>${t.followers}</span></div>
          <div class="github-stat-item">Following: <span>${t.following}</span></div>
          <div class="github-stat-item">Repos: <span>${t.public_repos}</span></div>
        </div>
        <button class="btn-github-profile" id="btn-open-gh-profile">
          <i class="fa-brands fa-github"></i> Open Profile
        </button>
      </div>
    `,this.profileCardEl.querySelector("#btn-open-gh-profile").addEventListener("click",()=>{window.open(t.html_url,"_blank"),this.notifier&&this.notifier.pushToast("GitHub App","Opening github profile in browser...")})}renderLanguagesAndRepos(){const t={};let e=0;this.reposData.forEach(s=>{s.language&&(t[s.language]=(t[s.language]||0)+1,e++)}),e===0&&(t.JavaScript=4,t.CSS=2,t.TypeScript=1,e=7);const i={JavaScript:"#f1e05a",TypeScript:"#3178c6",HTML:"#e34c26",CSS:"#563d7c",Vue:"#41b883",Python:"#3572A5",Shell:"#89e051"};this.langBarEl.innerHTML="",this.langLabelsEl.innerHTML="",Object.entries(t).sort((s,n)=>n[1]-s[1]).forEach(([s,n])=>{const a=(n/e*100).toFixed(1),l=i[s]||"#888888",r=document.createElement("div");r.className="lang-segment",r.style.width=`${a}%`,r.style.backgroundColor=l,r.title=`${s}: ${a}%`,this.langBarEl.appendChild(r);const h=document.createElement("div");h.style.display="flex",h.style.alignItems="center",h.style.gap="5px",h.innerHTML=`
          <span style="width: 8px; height: 8px; border-radius: 50%; background-color: ${l}; display: inline-block;"></span>
          <span>${s} (${a}%)</span>
        `,this.langLabelsEl.appendChild(h)}),this.reposGridEl.innerHTML="",this.reposData.slice(0,6).forEach(s=>{const n=document.createElement("div");n.className="repo-card";const a=i[s.language]||"#888888";n.innerHTML=`
        <div>
          <div class="repo-title" style="cursor: pointer;">${s.name}</div>
          <div class="repo-desc">${s.description||"No description provided."}</div>
        </div>
        <div class="repo-footer">
          <div class="repo-lang">
            <span class="repo-lang-dot" style="background-color: ${a};"></span>
            <span>${s.language||"Web"}</span>
          </div>
          <div style="display: flex; gap: 8px;">
            <span><i class="fa-regular fa-star"></i> ${s.stargazers_count}</span>
            <span><i class="fa-solid fa-code-fork"></i> ${s.forks_count}</span>
          </div>
        </div>
      `,n.querySelector(".repo-title").addEventListener("click",()=>{window.open(s.html_url,"_blank")}),this.reposGridEl.appendChild(n)})}}class G{constructor(t,e){this.container=t,this.notifier=e,this.linkedinUrl=localStorage.getItem("os_linkedin_url")||d.profile.linkedin,this.init()}init(){this.container.innerHTML=`
      <div class="linkedin-container">
        <!-- LinkedIn Header -->
        <div class="linkedin-banner"></div>
        <div class="linkedin-profile-header">
          <div class="linkedin-avatar-wrapper">
            <img src="${d.profile.avatar}" class="linkedin-avatar" alt="Avatar">
          </div>
          
          <div class="linkedin-headline-block">
            <div class="linkedin-name">${d.profile.name}</div>
            <div class="linkedin-title">${d.profile.title}</div>
            <div class="linkedin-location">${d.profile.location} • <a href="#" id="linkedin-contact-info">Contact info</a></div>
            
            <div class="linkedin-actions">
              <button class="btn-linkedin-connect" id="btn-linkedin-connect"><i class="fa-solid fa-user-plus"></i> Connect</button>
              <button class="btn-linkedin-secondary" id="btn-linkedin-open">View Profile</button>
              <button class="btn-linkedin-secondary" id="btn-linkedin-copy" title="Copy profile URL"><i class="fa-regular fa-copy"></i> Copy Link</button>
            </div>
          </div>
        </div>

        <!-- About Section -->
        <div class="linkedin-section">
          <h3 class="linkedin-section-title">About</h3>
          <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6;">
            ${d.profile.bio}
          </p>
        </div>

        <!-- Experience Section -->
        <div class="linkedin-section">
          <h3 class="linkedin-section-title">Experience</h3>
          <div id="linkedin-exp-list"></div>
        </div>

        <!-- Education Section -->
        <div class="linkedin-section">
          <h3 class="linkedin-section-title">Education</h3>
          <div id="linkedin-edu-list"></div>
        </div>

        <!-- Skills Section -->
        <div class="linkedin-section">
          <h3 class="linkedin-section-title">Skills</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;" id="linkedin-skills-tags"></div>
        </div>

        <!-- Certifications Section -->
        <div class="linkedin-section">
          <h3 class="linkedin-section-title">Licenses & Certifications</h3>
          <div id="linkedin-certs-list"></div>
        </div>
      </div>
    `,this.expEl=this.container.querySelector("#linkedin-exp-list"),this.eduEl=this.container.querySelector("#linkedin-edu-list"),this.skillsEl=this.container.querySelector("#linkedin-skills-tags"),this.certsEl=this.container.querySelector("#linkedin-certs-list"),this.populateData(),this.bindEvents()}populateData(){this.expEl.innerHTML=d.experience.map(t=>`
      <div class="linkedin-exp-item">
        <div class="linkedin-exp-company-logo">🏢</div>
        <div class="linkedin-exp-details">
          <h4>${t.role}</h4>
          <span class="company">${t.company}</span> • <span class="duration">${t.duration}</span>
          <ul>
            ${t.bullets.map(e=>`<li>${e}</li>`).join("")}
          </ul>
        </div>
      </div>
    `).join(""),this.eduEl.innerHTML=d.education.map(t=>`
      <div class="linkedin-exp-item">
        <div class="linkedin-exp-company-logo">🎓</div>
        <div class="linkedin-exp-details">
          <h4>${t.school}</h4>
          <span class="company">${t.degree}</span> • <span class="duration">${t.duration}</span>
          <p style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 4px;">${t.details}</p>
        </div>
      </div>
    `).join(""),this.skillsEl.innerHTML=d.skills.map(t=>`
      <span style="background: rgba(255,255,255,0.04); border: 1px solid var(--panel-border); padding: 5px 12px; border-radius: 15px; font-size: 0.75rem; color: var(--text-secondary);">
        ${t.icon} ${t.name}
      </span>
    `).join(""),this.certsEl.innerHTML=d.certificates.map(t=>`
      <div class="linkedin-exp-item" style="margin-bottom: 12px;">
        <div class="linkedin-exp-company-logo" style="width: 38px; height: 38px; font-size: 1.2rem;">🏅</div>
        <div class="linkedin-exp-details">
          <h4 style="font-size: 0.85rem;">${t.name}</h4>
          <p style="font-size: 0.75rem; color: var(--text-secondary);">${t.issuer} • Issued ${t.date}</p>
        </div>
      </div>
    `).join("")}bindEvents(){this.container.querySelector("#btn-linkedin-connect").addEventListener("click",()=>{this.notifier.pushToast("LinkedIn Connect","Connection invitation sent to Muhammad Abdullah!")}),this.container.querySelector("#btn-linkedin-open").addEventListener("click",()=>{window.open(this.linkedinUrl,"_blank"),this.notifier.pushToast("LinkedIn App","Opening LinkedIn Profile in default browser...")}),this.container.querySelector("#btn-linkedin-copy").addEventListener("click",()=>{navigator.clipboard.writeText(this.linkedinUrl).then(()=>{this.notifier.pushToast("LinkedIn Link","LinkedIn URL copied to clipboard!")}).catch(t=>{console.error("Failed to copy link: ",t)})}),this.container.querySelector("#linkedin-contact-info").addEventListener("click",t=>{t.preventDefault(),this.notifier.pushToast("Contact Info",`Email: ${d.profile.email}`)})}}class U{constructor(t){this.container=t,this.counters=[],this.init()}init(){const t=d.projects.length,e=d.projects.filter(l=>l.pinned).length,i=t-e,s=d.skills.length,n=d.certificates.length,a=1240;this.container.innerHTML=`
      <div class="dashboard-container">
        <!-- Stats Counter Row -->
        <div class="dashboard-stats-grid">
          <div class="stat-card">
            <div class="stat-num" data-val="${t}">0</div>
            <div class="stat-label">Total Projects</div>
          </div>
          <div class="stat-card">
            <div class="stat-num" data-val="${e}">0</div>
            <div class="stat-label">Completed</div>
          </div>
          <div class="stat-card">
            <div class="stat-num" data-val="${i}">0</div>
            <div class="stat-label">Ongoing</div>
          </div>
          <div class="stat-card">
            <div class="stat-num" data-val="${s}">0</div>
            <div class="stat-label">Tech & Skills</div>
          </div>
          <div class="stat-card">
            <div class="stat-num" data-val="${n}">0</div>
            <div class="stat-label">Certificates</div>
          </div>
          <div class="stat-card">
            <div class="stat-num" data-val="${a}">0</div>
            <div class="stat-label">Coding Hours</div>
          </div>
        </div>

        <!-- Charts Layout Grid -->
        <div class="dashboard-charts-grid">
          
          <!-- Monthly Learning Progress (Line Chart) -->
          <div class="chart-card">
            <div class="chart-title">Monthly Learning Progress (Self-study Score)</div>
            <div class="chart-container-svg" id="line-chart-box">
              <svg width="100%" height="100%" viewBox="0 0 400 180" preserveAspectRatio="none" id="svg-line-chart">
                <defs>
                  <linearGradient id="gradient-line" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="var(--primary-color)" stop-opacity="0.3"></stop>
                    <stop offset="100%" stop-color="var(--primary-color)" stop-opacity="0.00"></stop>
                  </linearGradient>
                </defs>
                <!-- Grid Lines -->
                <line x1="40" y1="30" x2="380" y2="30" stroke="rgba(255,255,255,0.05)" stroke-width="1"></line>
                <line x1="40" y1="80" x2="380" y2="80" stroke="rgba(255,255,255,0.05)" stroke-width="1"></line>
                <line x1="40" y1="130" x2="380" y2="130" stroke="rgba(255,255,255,0.05)" stroke-width="1"></line>
                <!-- Graph line will be generated dynamically -->
              </svg>
            </div>
          </div>

          <!-- Project Completion Ratio (Circular Donut Chart) -->
          <div class="chart-card">
            <div class="chart-title">Project Completion Ratio</div>
            <div class="chart-container-svg" style="display: flex; align-items: center; justify-content: center;">
              <svg width="180" height="180" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="rgba(255,255,255,0.05)" stroke-width="10"></circle>
                <circle id="donut-fill" cx="50" cy="50" r="40" fill="transparent" 
                        stroke="var(--accent-color)" stroke-width="10" 
                        stroke-dasharray="251.2" stroke-dashoffset="251.2"
                        stroke-linecap="round" transform="rotate(-90 50 50)" style="transition: stroke-dashoffset 1.5s cubic-bezier(0.16, 1, 0.3, 1); filter: drop-shadow(0 0 5px var(--accent-glow));"></circle>
                <text x="50" y="55" text-anchor="middle" font-family="var(--font-os)" font-size="12" fill="#fff" font-weight="bold">
                  <tspan id="donut-text">0</tspan>%
                </text>
              </svg>
            </div>
          </div>

          <!-- Skills Level breakdown (Top 4 skills) -->
          <div class="chart-card" style="grid-column: span 2;">
            <div class="chart-title">Top Skill Progression Index</div>
            <div id="skills-dashboard-bars" style="display: flex; flex-direction: column; justify-content: center; height: 100%;">
              <!-- Generated dynamically -->
            </div>
          </div>

        </div>
      </div>
    `,this.animateCounters(),this.drawCharts()}animateCounters(){this.container.querySelectorAll(".stat-num").forEach(e=>{const i=parseInt(e.getAttribute("data-val"));let s=0;const n=Math.ceil(i/50)||1,a=setInterval(()=>{s+=n,s>=i&&(s=i,clearInterval(a)),e.textContent=s.toLocaleString()},25)})}drawCharts(){const t=[25,45,38,68,85,92],e=this.container.querySelector("#svg-line-chart"),i=340,s=100,n=t.map((m,b)=>{const w=40+b*(i/(t.length-1)),C=130-m/100*s;return{x:w,y:C}});let a=`M ${n[0].x} ${n[0].y}`;for(let m=0;m<n.length-1;m++){const b=n[m],w=n[m+1],C=b.x+(w.x-b.x)/2,L=b.y,$=b.x+(w.x-b.x)/2,M=w.y;a+=` C ${C} ${L}, ${$} ${M}, ${w.x} ${w.y}`}const l=`${a} L ${n[n.length-1].x} 130 L 40 130 Z`,r=document.createElementNS("http://www.w3.org/2000/svg","path");r.setAttribute("d",l),r.setAttribute("fill","url(#gradient-line)"),e.appendChild(r);const h=document.createElementNS("http://www.w3.org/2000/svg","path");h.setAttribute("d",a),h.setAttribute("fill","none"),h.setAttribute("stroke","var(--primary-color)"),h.setAttribute("stroke-width","3"),h.setAttribute("stroke-linecap","round"),h.style.filter="drop-shadow(0 0 6px var(--primary-glow))";const f=500;h.setAttribute("stroke-dasharray",f),h.setAttribute("stroke-dashoffset",f),h.style.transition="stroke-dashoffset 2s cubic-bezier(0.16, 1, 0.3, 1)",e.appendChild(h),setTimeout(()=>{h.style.strokeDashoffset="0"},100),n.forEach((m,b)=>{const w=document.createElementNS("http://www.w3.org/2000/svg","circle");w.setAttribute("cx",m.x),w.setAttribute("cy",m.y),w.setAttribute("r","4"),w.setAttribute("fill","#fff"),w.setAttribute("stroke","var(--primary-color)"),w.setAttribute("stroke-width","2"),w.style.cursor="pointer";const C=["Jan","Feb","Mar","Apr","May","Jun"],L=document.createElementNS("http://www.w3.org/2000/svg","title");L.textContent=`${C[b]}: ${t[b]}%`,w.appendChild(L),e.appendChild(w)});const c=d.projects.length,v=d.projects.filter(m=>m.pinned).length,y=Math.round(v/c*100),x=this.container.querySelector("#donut-fill"),u=this.container.querySelector("#donut-text"),p=251.2,k=p-y/100*p;setTimeout(()=>{x.style.strokeDashoffset=k;let m=0;const b=setInterval(()=>{m>=y&&(m=y,clearInterval(b)),u.textContent=m,m++},15)},200);const g=d.skills.slice(0,4),S=this.container.querySelector("#skills-dashboard-bars");S.innerHTML=g.map(m=>`
      <div class="skill-bar-row">
        <div class="skill-bar-header">
          <span>${m.icon} ${m.name}</span>
          <span style="font-weight:600; color:var(--primary-color);">${m.level}%</span>
        </div>
        <div class="skill-bar-bg">
          <div class="skill-bar-fill" id="bar-${m.name.replace(/[^a-zA-Z]/g,"")}"></div>
        </div>
      </div>
    `).join(""),setTimeout(()=>{g.forEach(m=>{const b=`bar-${m.name.replace(/[^a-zA-Z]/g,"")}`,w=this.container.querySelector(`#${b}`);w&&(w.style.width=`${m.level}%`)})},150)}}class V{constructor(t,e){this.container=t,this.notifier=e,this.tracks=d.musicList,this.currentIndex=0,this.audio=new Audio,this.audio.crossOrigin="anonymous",this.isPlaying=!1,this.audioCtx=null,this.analyser=null,this.source=null,this.animationId=null,this.init()}init(){this.container.innerHTML=`
      <div class="music-player-container">
        <!-- Metadata -->
        <div class="music-info-block">
          <div class="music-disc" id="music-disc">
            <div class="music-disc-inner"></div>
          </div>
          <div class="music-metadata">
            <div class="music-title" id="track-title">Track Name</div>
            <div class="music-artist" id="track-artist">Artist Info</div>
          </div>
        </div>

        <!-- Waveform Visualizer -->
        <canvas class="music-visualizer-canvas" id="visualizer-canvas"></canvas>

        <!-- Progress Slider -->
        <div class="music-slider-group">
          <span id="curr-time">0:00</span>
          <div class="music-progress-bar" id="music-progress">
            <div class="music-progress-fill" id="music-progress-fill"></div>
          </div>
          <span id="total-time">0:00</span>
        </div>

        <!-- Controls Row -->
        <div class="music-controls">
          <button class="music-btn" id="music-prev" title="Previous Track"><i class="fa-solid fa-backward"></i></button>
          <button class="music-btn play-pause" id="music-play-pause" title="Play / Pause"><i class="fa-solid fa-play"></i></button>
          <button class="music-btn" id="music-next" title="Next Track"><i class="fa-solid fa-forward"></i></button>
        </div>

        <!-- Volume & Controls -->
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem; margin-top: 5px;">
          <div class="music-volume-group">
            <i class="fa-solid fa-volume-low" style="color: var(--text-muted);"></i>
            <input type="range" class="music-volume-slider" id="music-volume" min="0" max="1" step="0.05" value="0.5">
          </div>
          <div style="color: var(--text-muted); font-size: 0.7rem; font-family: var(--font-mono);" id="playlist-index">Track 1 of 3</div>
        </div>
      </div>
    `,this.discEl=this.container.querySelector("#music-disc"),this.titleEl=this.container.querySelector("#track-title"),this.artistEl=this.container.querySelector("#track-artist"),this.canvasEl=this.container.querySelector("#visualizer-canvas"),this.playPauseBtn=this.container.querySelector("#music-play-pause"),this.progressBar=this.container.querySelector("#music-progress"),this.progressFill=this.container.querySelector("#music-progress-fill"),this.currTimeEl=this.container.querySelector("#curr-time"),this.totalTimeEl=this.container.querySelector("#total-time"),this.volumeSlider=this.container.querySelector("#music-volume"),this.indexEl=this.container.querySelector("#playlist-index"),this.ctx=this.canvasEl.getContext("2d"),this.playPauseBtn.addEventListener("click",()=>this.togglePlay()),this.container.querySelector("#music-next").addEventListener("click",()=>this.nextTrack()),this.container.querySelector("#music-prev").addEventListener("click",()=>this.prevTrack()),this.volumeSlider.addEventListener("input",()=>this.setVolume()),this.progressBar.addEventListener("mousedown",t=>this.seekAudio(t)),this.audio.addEventListener("timeupdate",()=>this.onTimeUpdate()),this.audio.addEventListener("loadedmetadata",()=>this.onMetadataLoaded()),this.audio.addEventListener("ended",()=>this.nextTrack()),this.loadTrack(this.currentIndex),this.drawFallbackVisuals()}loadTrack(t){this.currentIndex=t;const e=this.tracks[t];this.audio.src=e.url,this.titleEl.textContent=e.title,this.artistEl.textContent=e.artist,this.indexEl.textContent=`Track ${t+1} of ${this.tracks.length}`,this.progressFill.style.width="0%",this.currTimeEl.textContent="0:00",this.totalTimeEl.textContent="0:00",this.audio.volume=parseFloat(this.volumeSlider.value)}togglePlay(){this.isPlaying?this.pause():this.play()}play(){this.audio.play().then(()=>{this.isPlaying=!0,this.playPauseBtn.innerHTML='<i class="fa-solid fa-pause"></i>',this.discEl.classList.add("playing"),this.initAudioContext(),this.drawFrequencyVisuals(),this.notifier.pushToast("Music Player",`Playing: ${this.tracks[this.currentIndex].title}`)}).catch(t=>{console.warn("Audio play blocked / failed: ",t)})}pause(){this.audio.pause(),this.isPlaying=!1,this.playPauseBtn.innerHTML='<i class="fa-solid fa-play"></i>',this.discEl.classList.remove("playing"),this.animationId&&cancelAnimationFrame(this.animationId),this.drawFallbackVisuals()}nextTrack(){let t=(this.currentIndex+1)%this.tracks.length;this.loadTrack(t),this.isPlaying&&this.play()}prevTrack(){let t=(this.currentIndex-1+this.tracks.length)%this.tracks.length;this.loadTrack(t),this.isPlaying&&this.play()}setVolume(){this.audio.volume=parseFloat(this.volumeSlider.value)}seekAudio(t){const e=this.progressBar.getBoundingClientRect(),i=(t.clientX-e.left)/e.width;this.audio.currentTime=i*this.audio.duration}onTimeUpdate(){if(!this.audio.duration)return;const t=this.audio.currentTime,e=this.audio.duration,i=t/e*100;this.progressFill.style.width=`${i}%`,this.currTimeEl.textContent=this.formatTime(t)}onMetadataLoaded(){this.totalTimeEl.textContent=this.formatTime(this.audio.duration)}formatTime(t){const e=Math.floor(t/60),i=Math.floor(t%60);return`${e}:${i<10?"0":""}${i}`}initAudioContext(){if(!this.audioCtx)try{const t=window.AudioContext||window.webkitAudioContext;this.audioCtx=new t,this.analyser=this.audioCtx.createAnalyser(),this.analyser.fftSize=64,this.source=this.audioCtx.createMediaElementSource(this.audio),this.source.connect(this.analyser),this.analyser.connect(this.audioCtx.destination)}catch{console.warn("Failed to set up MediaElementSource. Probably CORS. Using mathematical visualizer instead."),this.analyser=null}}drawFrequencyVisuals(){this.animationId&&cancelAnimationFrame(this.animationId);const t=()=>{this.animationId=requestAnimationFrame(t);const e=this.canvasEl.width=this.canvasEl.clientWidth,i=this.canvasEl.height=this.canvasEl.clientHeight;if(this.ctx.clearRect(0,0,e,i),this.analyser){const s=this.analyser.frequencyBinCount,n=new Uint8Array(s);this.analyser.getByteFrequencyData(n);const a=e/s*1.5;let l=0;for(let r=0;r<s;r++){const h=n[r]/255*i*.9;this.ctx.fillStyle=`rgba(56, 189, 248, ${.1+h/i*.8})`,this.ctx.shadowBlur=4,this.ctx.shadowColor="var(--primary-color)",this.ctx.fillRect(l,i-h,a-4,h),l+=a}}else this.drawMathWaves(!0)};t()}drawFallbackVisuals(){this.animationId&&cancelAnimationFrame(this.animationId);const t=()=>{this.animationId=requestAnimationFrame(t),this.drawMathWaves(!1)};t()}drawMathWaves(t){const e=this.canvasEl.width=this.canvasEl.clientWidth,i=this.canvasEl.height=this.canvasEl.clientHeight;this.ctx.clearRect(0,0,e,i);const s=16,n=e/s,a=Date.now()*.005;for(let l=0;l<s;l++){let r=t?Math.sin(a+l*.5)*15+20:Math.sin(a*.2+l*.2)*3+5;t&&(r+=Math.cos(a*.8+l)*6);const h=Math.max(3,Math.min(i*.8,r));this.ctx.fillStyle=t?"rgba(56, 189, 248, 0.4)":"rgba(255, 255, 255, 0.08)",this.ctx.fillRect(l*n,i-h,n-6,h)}}destroy(){this.pause(),this.audio.src=""}}class Y{constructor(t){this.container=t,this.currentInput="0",this.formula="",this.isScientific=!1,this.init()}init(){this.renderLayout()}renderLayout(){this.container.innerHTML=`
      <div class="calc-container">
        <!-- Display -->
        <div class="calc-display-section">
          <div class="calc-formula" id="calc-formula">${this.formula}</div>
          <div class="calc-output" id="calc-output">${this.currentInput}</div>
        </div>

        <!-- Mode Toggle Header -->
        <div class="calc-modes-header">
          <button class="btn-calc-mode ${this.isScientific?"":"active"}" id="btn-mode-basic">Basic</button>
          <button class="btn-calc-mode ${this.isScientific?"active":""}" id="btn-mode-sci">Scientific</button>
        </div>

        <!-- Keypad Grid -->
        <div class="calc-buttons-grid ${this.isScientific?"scientific":""}" id="calc-keypad">
          <!-- Populated by JS -->
        </div>
      </div>
    `,this.formulaEl=this.container.querySelector("#calc-formula"),this.outputEl=this.container.querySelector("#calc-output"),this.keypadEl=this.container.querySelector("#calc-keypad"),this.container.querySelector("#btn-mode-basic").addEventListener("click",()=>this.toggleMode(!1)),this.container.querySelector("#btn-mode-sci").addEventListener("click",()=>this.toggleMode(!0)),this.renderButtons()}toggleMode(t){this.isScientific=t,this.renderLayout()}renderButtons(){this.keypadEl.innerHTML="";const t=[{label:"C",type:"clear"},{label:"⌫",type:"backspace"},{label:"%",type:"op",val:"%"},{label:"/",type:"op",val:"/"},{label:"7",type:"num",val:"7"},{label:"8",type:"num",val:"8"},{label:"9",type:"num",val:"9"},{label:"*",type:"op",val:"*"},{label:"4",type:"num",val:"4"},{label:"5",type:"num",val:"5"},{label:"6",type:"num",val:"6"},{label:"-",type:"op",val:"-"},{label:"1",type:"num",val:"1"},{label:"2",type:"num",val:"2"},{label:"3",type:"num",val:"3"},{label:"+",type:"op",val:"+"},{label:"±",type:"neg"},{label:"0",type:"num",val:"0"},{label:".",type:"num",val:"."},{label:"=",type:"eq"}],e=[{label:"sin",type:"sci",val:"Math.sin("},{label:"cos",type:"sci",val:"Math.cos("},{label:"tan",type:"sci",val:"Math.tan("},{label:"C",type:"clear"},{label:"⌫",type:"backspace"},{label:"ln",type:"sci",val:"Math.log("},{label:"log",type:"sci",val:"Math.log10("},{label:"√",type:"sci",val:"Math.sqrt("},{label:"^",type:"op",val:"**"},{label:"/",type:"op",val:"/"},{label:"π",type:"num",val:"Math.PI"},{label:"7",type:"num",val:"7"},{label:"8",type:"num",val:"8"},{label:"9",type:"num",val:"9"},{label:"*",type:"op",val:"*"},{label:"e",type:"num",val:"Math.E"},{label:"4",type:"num",val:"4"},{label:"5",type:"num",val:"5"},{label:"6",type:"num",val:"6"},{label:"-",type:"op",val:"-"},{label:"(",type:"num",val:"("},{label:"1",type:"num",val:"1"},{label:"2",type:"num",val:"2"},{label:"3",type:"num",val:"3"},{label:"+",type:"op",val:"+"},{label:")",type:"num",val:")"},{label:"±",type:"neg"},{label:"0",type:"num",val:"0"},{label:".",type:"num",val:"."},{label:"=",type:"eq"}];(this.isScientific?e:t).forEach(s=>{const n=document.createElement("button");n.className="btn-calc",n.textContent=s.label,s.type==="op"&&n.classList.add("op"),s.type==="eq"&&n.classList.add("eq"),s.type==="sci"&&n.classList.add("scientific-btn"),n.addEventListener("click",()=>this.handleKeyPress(s)),this.keypadEl.appendChild(n)})}handleKeyPress(t){switch(t.type){case"clear":this.currentInput="0",this.formula="";break;case"backspace":this.currentInput.length>1?this.currentInput=this.currentInput.slice(0,-1):this.currentInput="0";break;case"num":this.currentInput==="0"&&t.val!=="."?this.currentInput=t.val:this.currentInput+=t.val;break;case"sci":this.currentInput==="0"?this.currentInput=t.val:this.currentInput+=t.val;break;case"op":this.formula+=this.currentInput+" "+t.val+" ",this.currentInput="0";break;case"neg":this.currentInput.startsWith("-")?this.currentInput=this.currentInput.slice(1):this.currentInput!=="0"&&(this.currentInput="-"+this.currentInput);break;case"eq":this.evaluateFormula();break}this.updateDisplay()}evaluateFormula(){this.formula+=this.currentInput;let t=(this.formula.match(/\(/g)||[]).length,e=(this.formula.match(/\)/g)||[]).length;t>e&&(this.formula+=")".repeat(t-e));try{const i=new Function(`return ${this.formula}`)();this.currentInput=String(parseFloat(i.toFixed(8))),this.formula=""}catch{this.currentInput="Error",this.formula=""}}updateDisplay(){this.formulaEl.textContent=this.formula,this.outputEl.textContent=this.currentInput}}class X{constructor(t){this.container=t,this.skills=[{name:"Python / AI",level:85,color:"#3776ab",icon:"fa-brands fa-python"},{name:"Machine Learning",level:80,color:"#ff6f00",icon:"fa-solid fa-brain"},{name:"React.js",level:90,color:"#61dbfb",icon:"fa-brands fa-react"},{name:"JavaScript",level:90,color:"#f1e05a",icon:"fa-brands fa-square-js"},{name:"Tailwind CSS",level:92,color:"#38bdf8",icon:"fa-solid fa-wind"},{name:"Databases",level:85,color:"#47a248",icon:"fa-solid fa-database"},{name:"UI/UX Design",level:88,color:"#f24e1e",icon:"fa-brands fa-figma"},{name:"HTML & CSS",level:100,color:"#e34c26",icon:"fa-brands fa-html5"}],this.init()}init(){this.container.innerHTML=`
      <div class="skills-app-container">
        <h3 class="skills-heading">Technical Expertise</h3>
        <div class="skills-grid-row">
          ${this.skills.map(t=>{const e=t.name.replace(/[^a-zA-Z0-9]/g,"");return`
              <div class="skills-box-card">
                <div class="skills-box-icon"><i class="${t.icon}" style="color: ${t.color};"></i></div>
                <div class="skills-radial-wrapper">
                  <svg width="84" height="84" viewBox="0 0 100 100">
                    <!-- Background Circle -->
                    <circle cx="50" cy="50" r="42" fill="transparent" stroke="rgba(255, 255, 255, 0.05)" stroke-width="8"></circle>
                    <!-- Animated Circle -->
                    <circle id="circle-fill-${e}" cx="50" cy="50" r="42" fill="transparent" 
                            stroke="${t.color}" stroke-width="8" 
                            stroke-dasharray="263.89" stroke-dashoffset="263.89" 
                            stroke-linecap="round" transform="rotate(-90 50 50)" 
                            style="transition: stroke-dashoffset 1.6s cubic-bezier(0.16, 1, 0.3, 1); filter: drop-shadow(0 0 6px ${t.color}66);"></circle>
                    <!-- Percentage Value -->
                    <text id="circle-txt-${e}" x="50" y="55" text-anchor="middle" font-family="var(--font-os)" font-size="14" fill="#fff" font-weight="bold">0%</text>
                  </svg>
                </div>
                <div class="skills-box-label">${t.name}</div>
              </div>
            `}).join("")}
        </div>
      </div>
    `,setTimeout(()=>this.animateSkills(),200)}animateSkills(){this.skills.forEach(e=>{const i=e.name.replace(/[^a-zA-Z0-9]/g,""),s=this.container.querySelector(`#circle-fill-${i}`),n=this.container.querySelector(`#circle-txt-${i}`);if(s&&n){const a=263.89-e.level/100*263.89;s.style.strokeDashoffset=a;let l=0;const r=e.level,h=Math.max(10,Math.floor(1200/r)),f=setInterval(()=>{l++,l>=r&&(l=r,clearInterval(f)),n.textContent=`${l}%`},h)}})}}let E,I,D,z;function J(){const o=document.getElementById("boot-screen"),t=document.getElementById("boot-terminal"),e=document.getElementById("boot-progress-bar"),i=[{text:"BIOS Version 2.0.26 - Check sum: OK",type:"info"},{text:"CPU: Intel Core WebDev-9000 @ 4.80GHz - 8 Cores",type:"info"},{text:"Memory Test: 16384MB - OK",type:"info"},{text:"Disk Search: HDD-0 (OS Partition) - OK",type:"info"},{text:"Loading Portfolio OS Kernel Modules...",type:"info"},{text:"Mounting virtual file system /dev/projects... [OK]",type:"ok"},{text:"Mounting virtual file system /dev/skills... [OK]",type:"ok"},{text:"Mounting virtual file system /dev/experience... [OK]",type:"ok"},{text:"Starting Network interface config... [OK]",type:"ok"},{text:"Fetching Weather Widget services... [OK]",type:"ok"},{text:"Initializing Graphics adapter (Glassmorphic FX)... [OK]",type:"ok"},{text:"Pre-compiling SVG dynamic charts compiler... [OK]",type:"ok"},{text:"Connecting GitHub pipelines API... [OK]",type:"ok"},{text:"System boot ready. Launching Desktop shell.",type:"info"}];let s=0;const n=setInterval(()=>{if(s<i.length){const a=i[s],l=document.createElement("div");l.className=`boot-line ${a.type}`,l.textContent=`[ ${new Date().toLocaleTimeString()} ] ${a.text}`,t.appendChild(l),t.scrollTop=t.scrollHeight;const r=Math.round((s+1)/i.length*100);e.style.width=`${r}%`,s++}else clearInterval(n),setTimeout(()=>{o.style.opacity="0",o.style.transform="scale(1.05)",setTimeout(()=>{o.remove(),K()},600)},500)},180)}function K(){I=new B(document.getElementById("notifications-panel"),document.getElementById("notifications-list"),document.getElementById("toast-container"),document.getElementById("tray-bell")),E=new N("taskbar-running-apps","windows-container","snap-indicator"),D=new H(document.getElementById("global-search-overlay"),document.getElementById("global-search-input"),document.getElementById("search-results-list"),E),z=new F(document.getElementById("desktop"),"quick-action-note");const o=document.getElementById("widget-weather-overlay");new O(o.querySelector("#weather-city"),o.querySelector("#weather-temp"),o.querySelector("#weather-desc"),o.querySelector("#weather-icon"),o.querySelector("#weather-humidity"),o.querySelector("#weather-wind"),o.querySelector("#weather-update")),document.getElementById("start-user-name").textContent=localStorage.getItem("os_user_name")||d.profile.name,document.getElementById("start-user-avatar").src=d.profile.avatar,Z(),tt(),et(),it(),st(),_(),nt(),at(),ot(),setTimeout(()=>{I.pushNotification("System Alert","Welcome to Muhammad Abdullah's Desktop Portfolio. Press 'Ctrl + ` ' to launch the Terminal, or double-click any icon to browse.","💻")},1e3)}const q=[{id:"terminal",title:"Terminal",icon:"fa-solid fa-terminal",color:"#38bdf8"},{id:"projects",title:"Projects",icon:"fa-solid fa-code",color:"#60a5fa"},{id:"analytics",title:"Analytics",icon:"fa-solid fa-chart-simple",color:"#a78bfa"},{id:"skills",title:"Skills",icon:"fa-solid fa-chart-pie",color:"#38bdf8"},{id:"github",title:"GitHub",icon:"fa-brands fa-github",color:"#f8fafc"},{id:"linkedin",title:"LinkedIn",icon:"fa-brands fa-linkedin",color:"#0a66c2"},{id:"music",title:"Music Player",icon:"fa-solid fa-music",color:"#fb7185"},{id:"calculator",title:"Calculator",icon:"fa-solid fa-calculator",color:"#fbbf24"},{id:"settings",title:"Settings",icon:"fa-solid fa-gear",color:"#94a3b8"},{id:"changelog",title:"What's New",icon:"fa-solid fa-bullhorn",color:"#34d399"}];function Z(){const o=document.getElementById("desktop-icons-grid");o.innerHTML="",q.forEach(t=>{const e=document.createElement("div");e.className="desktop-icon",e.setAttribute("data-app",t.id),e.innerHTML=`
      <div class="icon-wrapper">
        <i class="${t.icon}" style="color: ${t.color};"></i>
      </div>
      <div class="icon-label">${t.title}</div>
    `,e.addEventListener("click",i=>{i.stopPropagation(),o.querySelectorAll(".desktop-icon").forEach(s=>s.classList.remove("selected")),e.classList.add("selected")}),e.addEventListener("dblclick",()=>{T(t.id)}),o.appendChild(e)}),document.getElementById("desktop").addEventListener("click",t=>{t.target.closest(".desktop-icon")||o.querySelectorAll(".desktop-icon").forEach(e=>e.classList.remove("selected"))})}window.launchApp=T;function T(o){const t=q.find(s=>s.id===o);if(!t)return;let e="",i=null;switch(o){case"terminal":i=E.createWindow(o,t.title,"",t.icon),new R(i.querySelector(".window-content"),E);break;case"projects":e=`
        <div style="padding: 20px; display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px;">
          ${d.projects.map(s=>`
            <div class="repo-card" style="height: auto; min-height: 310px; display: flex; flex-direction: column;">
              <div class="card-image-banner" style="background-image: url('${s.image}');"></div>
              <div style="padding: 15px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                  <div class="repo-title" style="cursor: pointer;" onclick="window.open('${s.liveUrl}', '_blank')">${s.title}</div>
                  <div class="repo-desc">${s.description}</div>
                  <div style="display: flex; gap: 5px; flex-wrap: wrap; margin-bottom: 12px;">
                    ${s.tech.map(n=>`<span style="font-size:0.65rem; background:rgba(255,255,255,0.05); padding: 2px 6px; border-radius:4px; color:var(--primary-color);">${n}</span>`).join("")}
                  </div>
                </div>
                <div class="repo-footer" style="margin-top: 10px;">
                  <span style="font-size: 0.75rem; color: var(--text-muted);"><i class="fa-regular fa-star"></i> ${s.stars} Stars</span>
                  <div style="display: flex; gap: 6px;">
                    <button class="btn-linkedin-secondary" style="padding: 5px 10px; border-radius: 6px; font-size: 0.75rem; border-color: rgba(255,255,255,0.1);" onclick="window.open('${s.url}', '_blank')" title="View GitHub Code">
                      <i class="fa-brands fa-github"></i> Code
                    </button>
                    <button class="btn-github-profile" style="padding: 5px 10px; border-radius: 6px; font-size: 0.75rem; margin-top:0;" onclick="window.open('${s.liveUrl}', '_blank')" title="Launch Netlify Live Demo">
                      <i class="fa-solid fa-rocket"></i> Live
                    </button>
                  </div>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      `,E.createWindow(o,t.title,e,t.icon);break;case"github":i=E.createWindow(o,t.title,"",t.icon),new j(i.querySelector(".window-content"),I);break;case"linkedin":i=E.createWindow(o,t.title,"",t.icon),new G(i.querySelector(".window-content"),I);break;case"analytics":i=E.createWindow(o,t.title,"",t.icon),new U(i.querySelector(".window-content"));break;case"skills":i=E.createWindow(o,t.title,"",t.icon),i.style.width="480px",i.style.height="340px",new X(i.querySelector(".window-content"));break;case"music":i=E.createWindow(o,t.title,"",t.icon),i.style.width="300px",i.style.height="340px",new V(i.querySelector(".window-content"),I);break;case"calculator":i=E.createWindow(o,t.title,"",t.icon),i.style.width="320px",i.style.height="420px",new Y(i.querySelector(".window-content"));break;case"settings":Q();break;case"changelog":e=`
        <div class="changelog-container">
          ${d.changelog.map(s=>`
            <div class="changelog-item">
              <div class="changelog-header-row">
                <span class="changelog-badge">v${s.version}</span>
                <span class="changelog-date">${s.date}</span>
              </div>
              
              ${s.features?`
                <div class="changelog-group">
                  <div class="changelog-group-title add">Added Features</div>
                  <ul class="changelog-list">
                    ${s.features.map(n=>`<li>${n}</li>`).join("")}
                  </ul>
                </div>
              `:""}

              ${s.improvements?`
                <div class="changelog-group">
                  <div class="changelog-group-title imp">Improvements</div>
                  <ul class="changelog-list">
                    ${s.improvements.map(n=>`<li>${n}</li>`).join("")}
                  </ul>
                </div>
              `:""}

              ${s.fixes?`
                <div class="changelog-group">
                  <div class="changelog-group-title fix">Bug Fixes</div>
                  <ul class="changelog-list">
                    ${s.fixes.map(n=>`<li>${n}</li>`).join("")}
                  </ul>
                </div>
              `:""}
            </div>
          `).join("")}
        </div>
      `,E.createWindow(o,t.title,e,t.icon);break}}function Q(){const o=`
    <div class="settings-container">
      <!-- Theme Options -->
      <div class="settings-section">
        <h3>Theme Customization</h3>
        <div class="settings-grid">
          <div class="settings-row">
            <div>
              <strong>Visual Theme</strong>
              <div class="settings-desc">Choose styling profiles (glassmorphism/cyberpunk).</div>
            </div>
            <div class="theme-options">
              <button class="theme-btn theme-choice-btn" id="theme-btn-dark">Dark Glass</button>
              <button class="theme-btn theme-choice-btn" id="theme-btn-light">Light Glass</button>
              <button class="theme-btn theme-choice-btn" id="theme-btn-cyber">Cyberpunk</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Wallpaper Options -->
      <div class="settings-section">
        <h3>Desktop Wallpaper</h3>
        <div class="settings-grid">
          <div class="settings-row" style="flex-direction: column; align-items: flex-start; gap: 8px;">
            <div>
              <strong>Animated Effects</strong>
              <div class="settings-desc">Run dynamic canvas visualizer scripts.</div>
            </div>
            <div class="wallpaper-options" style="display: flex; gap: 6px; flex-wrap: wrap; width: 100%;">
              <button class="theme-btn wall-btn" data-wallpaper="particles" style="flex:1; min-width:70px; padding: 6px;">Particles</button>
              <button class="theme-btn wall-btn" data-wallpaper="matrix" style="flex:1; min-width:70px; padding: 6px;">Matrix</button>
              <button class="theme-btn wall-btn" data-wallpaper="grid" style="flex:1; min-width:70px; padding: 6px;">3D Grid</button>
              <button class="theme-btn wall-btn" data-wallpaper="aurora" style="flex:1; min-width:70px; padding: 6px;">Aurora</button>
            </div>
          </div>
          
          <div class="settings-row" style="flex-direction: column; align-items: flex-start; gap: 8px; margin-top: 10px;">
            <div>
              <strong>Premium Dark Wallpapers</strong>
              <div class="settings-desc">Sleek high-res photography backdrops.</div>
            </div>
            <div class="wallpaper-options" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; width: 100%;">
              <button class="theme-btn wall-btn" data-wallpaper="wall_forest" style="padding: 6px; font-size: 0.75rem;">Moody Forest</button>
              <button class="theme-btn wall-btn" data-wallpaper="wall_tokyo" style="padding: 6px; font-size: 0.75rem;">Tokyo Street</button>
              <button class="theme-btn wall-btn" data-wallpaper="wall_nebula" style="padding: 6px; font-size: 0.75rem;">Nebula Space</button>
              <button class="theme-btn wall-btn" data-wallpaper="wall_waves" style="padding: 6px; font-size: 0.75rem;">Abstract Wave</button>
              <button class="theme-btn wall-btn" data-wallpaper="wall_obsidian" style="padding: 6px; font-size: 0.75rem;">Black Wave</button>
              <button class="theme-btn wall-btn" data-wallpaper="wall_twilight" style="padding: 6px; font-size: 0.75rem;">Twilight Trees</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Configurable Developer details -->
      <div class="settings-section">
        <h3>Developer Profile Configuration</h3>
        <div class="settings-grid">
          <div class="settings-row">
            <div>
              <strong>Profile Name</strong>
              <div class="settings-desc">Display developer name on boot/start.</div>
            </div>
            <input type="text" class="settings-input" id="settings-username" value="${localStorage.getItem("os_user_name")||d.profile.name}">
          </div>

          <div class="settings-row">
            <div>
              <strong>GitHub Username</strong>
              <div class="settings-desc">Source API feeds for profile cards.</div>
            </div>
            <input type="text" class="settings-input" id="settings-github" value="${localStorage.getItem("os_github_username")||d.profile.github}">
          </div>

          <div class="settings-row">
            <div>
              <strong>LinkedIn URL</strong>
              <div class="settings-desc">Redirect social buttons click.</div>
            </div>
            <input type="text" class="settings-input" id="settings-linkedin" value="${localStorage.getItem("os_linkedin_url")||d.profile.linkedin}">
          </div>
        </div>
      </div>

      <!-- General System Options -->
      <div class="settings-section">
        <h3>System Settings</h3>
        <div class="settings-grid">
          <div class="settings-row">
            <div>
              <strong>Sound FX</strong>
              <div class="settings-desc">Enable subtle synthetic system sound effects.</div>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" id="settings-sound-switch" checked>
              <span class="slider-toggle"></span>
            </label>
          </div>
          
          <div class="settings-row">
            <div>
              <strong>Custom Cursor Follower</strong>
              <div class="settings-desc">Enable smooth custom magnetic cursor ring.</div>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" id="settings-cursor-switch" checked>
              <span class="slider-toggle"></span>
            </label>
          </div>
        </div>
      </div>
      
      <button class="btn-github-profile" id="settings-save-btn" style="width: 100%; text-align: center; justify-content: center; padding: 10px;">
        <i class="fa-solid fa-floppy-disk"></i> Save & Apply Changes
      </button>
    </div>
  `,t=E.createWindow("settings","Settings",o,"fa-solid fa-gear");t.style.width="450px",t.style.height="600px";const e=t.querySelector(".window-content"),i=c=>{document.documentElement.removeAttribute("data-theme"),c!=="dark"&&document.documentElement.setAttribute("data-theme",c),e.querySelectorAll(".theme-choice-btn").forEach(v=>v.classList.remove("active"))};e.querySelector("#theme-btn-dark").addEventListener("click",c=>{i("dark"),c.target.classList.add("active"),localStorage.setItem("os_theme","dark")}),e.querySelector("#theme-btn-light").addEventListener("click",c=>{i("light"),c.target.classList.add("active"),localStorage.setItem("os_theme","light")}),e.querySelector("#theme-btn-cyber").addEventListener("click",c=>{i("cyberpunk"),c.target.classList.add("active"),localStorage.setItem("os_theme","cyberpunk")});const s=c=>{localStorage.setItem("os_wallpaper",c),e.querySelectorAll(".wall-btn").forEach(v=>{v.classList.remove("active"),v.getAttribute("data-wallpaper")===c&&v.classList.add("active")}),_()};e.querySelectorAll(".wall-btn").forEach(c=>{c.addEventListener("click",()=>{const v=c.getAttribute("data-wallpaper");s(v)})});const n=localStorage.getItem("os_wallpaper")||"particles";e.querySelectorAll(".wall-btn").forEach(c=>{c.getAttribute("data-wallpaper")===n&&c.classList.add("active")});const a=localStorage.getItem("os_theme")||"dark";a==="light"?e.querySelector("#theme-btn-light").classList.add("active"):a==="cyberpunk"?e.querySelector("#theme-btn-cyber").classList.add("active"):e.querySelector("#theme-btn-dark").classList.add("active");const l=e.querySelector("#settings-sound-switch");l.checked=localStorage.getItem("os_sound_enabled")!=="false";const r=e.querySelector("#settings-cursor-switch"),h=document.getElementById("custom-cursor-follower"),f=document.getElementById("custom-cursor");r.checked=localStorage.getItem("os_cursor_enabled")!=="false",e.querySelector("#settings-save-btn").addEventListener("click",()=>{const c=e.querySelector("#settings-username").value.trim(),v=e.querySelector("#settings-github").value.trim(),y=e.querySelector("#settings-linkedin").value.trim();c&&(localStorage.setItem("os_user_name",c),document.getElementById("start-user-name").textContent=c),v&&localStorage.setItem("os_github_username",v),y&&localStorage.setItem("os_linkedin_url",y),localStorage.setItem("os_sound_enabled",l.checked),localStorage.setItem("os_cursor_enabled",r.checked),r.checked?(h.style.display="block",f.style.display="block"):(h.style.display="none",f.style.display="none"),I.pushNotification("Settings","System profile adjustments saved successfully!","⚙️"),E.closeWindow("settings")})}function tt(){const o=document.getElementById("btn-start"),t=document.getElementById("start-menu"),e=document.getElementById("start-search-trigger");o.addEventListener("click",a=>{a.stopPropagation(),t.classList.toggle("open")}),e.addEventListener("click",a=>{a.stopPropagation(),t.classList.remove("open"),D.openSearch()});const i=document.getElementById("start-pinned-grid");i.innerHTML=q.map(a=>`
    <div class="start-pinned-item" data-app="${a.id}">
      <div class="icon"><i class="${a.icon}" style="color: ${a.color};"></i></div>
      <div class="label">${a.title}</div>
    </div>
  `).join(""),i.querySelectorAll(".start-pinned-item").forEach(a=>{a.addEventListener("click",()=>{t.classList.remove("open"),T(a.getAttribute("data-app"))})});const s=document.getElementById("start-recent-list"),n=[{title:"Launch Terminal",action:()=>T("terminal")},{title:"View Analytics",action:()=>T("analytics")},{title:"Download Resume PDF",action:()=>window.open(d.profile.resumeUrl,"_blank")},{title:"Create Sticky Note",action:()=>z.createNewNote()}];s.innerHTML=n.map((a,l)=>`
    <div class="start-recent-item" data-idx="${l}">
      <i class="fa-solid fa-bolt" style="color: var(--primary-color); margin-right: 4px;"></i>
      <span>${a.title}</span>
    </div>
  `).join(""),s.querySelectorAll(".start-recent-item").forEach(a=>{a.addEventListener("click",()=>{t.classList.remove("open"),n[parseInt(a.getAttribute("data-idx"))].action()})}),document.getElementById("start-power-btn").addEventListener("click",()=>{t.classList.remove("open"),confirm("Are you sure you want to reboot Portfolio OS?")&&(document.body.innerHTML=`
        <div class="boot-screen" style="z-index:99999; justify-content:center;">
          <div class="boot-logo" style="margin-bottom:10px;">REBOOTING SYSTEM</div>
          <div style="font-family:var(--font-mono); font-size:0.9rem; color:var(--text-secondary);">Shutting down interfaces... Done.</div>
          <div style="font-family:var(--font-mono); font-size:0.9rem; color:var(--text-secondary); margin-top:5px;">Restarting kernel loops...</div>
        </div>
      `,setTimeout(()=>window.location.reload(),1500))}),document.addEventListener("click",a=>{!t.contains(a.target)&&a.target.id!=="btn-start"&&t.classList.remove("open")})}function et(){const o=document.getElementById("clock-time"),t=document.getElementById("clock-date"),e=document.getElementById("tray-time"),i=document.getElementById("tray-date");function s(){const n=new Date;o.textContent=n.toLocaleTimeString([],{hour12:!1}),t.textContent=n.toLocaleDateString([],{weekday:"long",month:"long",day:"numeric",year:"numeric"}),e.textContent=n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});const a=String(n.getDate()).padStart(2,"0"),l=String(n.getMonth()+1).padStart(2,"0"),r=n.getFullYear();i.textContent=`${l}/${a}/${r}`}s(),setInterval(s,1e3)}function it(){const o=document.getElementById("tray-volume");let t=!1;o.addEventListener("click",()=>{t=!t,t?(o.className="fa-solid fa-volume-xmark tray-icon",localStorage.setItem("os_sound_enabled","false"),I.pushToast("Audio Status","System sounds muted")):(o.className="fa-solid fa-volume-high tray-icon",localStorage.setItem("os_sound_enabled","true"),I.pushToast("Audio Status","System sounds enabled"))});const e=document.getElementById("custom-cursor-follower"),i=document.getElementById("custom-cursor"),s=document.getElementById("mouse-glow"),n=localStorage.getItem("os_cursor_enabled")!=="false";n||(e.style.display="none",i.style.display="none"),document.addEventListener("mousemove",l=>{const r=l.clientX,h=l.clientY;n&&(i.style.left=`${r}px`,i.style.top=`${h}px`,e.style.transform=`translate3d(${r}px, ${h}px, 0)`),s.style.left=`${r}px`,s.style.top=`${h}px`}),document.addEventListener("mouseover",l=>{(l.target.closest("button")||l.target.closest(".desktop-icon")||l.target.closest("a")||l.target.closest(".start-pinned-item"))&&(e.style.width="38px",e.style.height="38px",e.style.borderColor="var(--primary-color)")}),document.addEventListener("mouseout",l=>{(l.target.closest("button")||l.target.closest(".desktop-icon")||l.target.closest("a")||l.target.closest(".start-pinned-item"))&&(e.style.width="24px",e.style.height="24px",e.style.borderColor="var(--secondary-color)")}),document.querySelectorAll(".taskbar-pinned-icon").forEach(l=>{l.addEventListener("click",()=>{const r=l.getAttribute("data-app");r==="github"?(window.open(`https://github.com/${localStorage.getItem("os_github_username")||d.profile.github}`,"_blank"),I.pushToast("External Redirect","Opening GitHub Profile in default browser...")):r==="linkedin"?(window.open(localStorage.getItem("os_linkedin_url")||d.profile.linkedin,"_blank"),I.pushToast("External Redirect","Opening LinkedIn Profile in default browser...")):T(r)})}),localStorage.getItem("os_config_synced_v3")||(localStorage.removeItem("os_user_name"),localStorage.removeItem("os_github_username"),localStorage.removeItem("os_linkedin_url"),localStorage.setItem("os_config_synced_v3","true"));const a=localStorage.getItem("os_theme")||"dark";a!=="dark"&&document.documentElement.setAttribute("data-theme",a)}function st(){document.addEventListener("keydown",o=>{if(o.key==="Escape"){if(E.activeWindow){const t=E.activeWindow.getAttribute("data-app");E.closeWindow(t)}D.closeSearch()}if(o.key,o.ctrlKey)switch(o.key.toLowerCase()){case"`":o.preventDefault(),T("terminal");break;case"t":o.preventDefault(),T("terminal");break;case"p":o.preventDefault(),T("projects");break;case"g":o.preventDefault(),T("github");break;case"l":o.preventDefault(),T("linkedin");break;case"r":o.preventDefault(),window.open(d.profile.resumeUrl,"_blank"),I.pushToast("Resume CV","Initiating Resume PDF download...");break;case"s":o.preventDefault(),T("settings");break;case"f":o.preventDefault(),D.openSearch();break}})}let A=null;function _(){const o=document.getElementById("particles-canvas"),t=document.getElementById("desktop");if(!o||!t)return;const e=o.getContext("2d");t.classList.remove("wallpaper-space","wallpaper-aurora"),t.style.backgroundImage="",A&&(cancelAnimationFrame(A),A=null),e.clearRect(0,0,o.width,o.height);const i={wall_forest:"https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1920&q=80",wall_tokyo:"https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?auto=format&fit=crop&w=1920&q=80",wall_nebula:"https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=1920&q=80",wall_waves:"https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1920&q=80",wall_obsidian:"https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1920&q=80",wall_twilight:"https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1920&q=80"},s=localStorage.getItem("os_wallpaper")||"particles";let n=o.width=window.innerWidth,a=o.height=window.innerHeight;const l=()=>{n=o.width=window.innerWidth,a=o.height=window.innerHeight};if(window.removeEventListener("resize",l),window.addEventListener("resize",l),s in i){t.style.backgroundImage=`radial-gradient(circle, rgba(15, 23, 42, 0.45) 0%, rgba(11, 15, 25, 0.9) 100%), url('${i[s]}')`,t.style.backgroundRepeat="no-repeat",t.style.backgroundPosition="center center",t.style.backgroundSize="cover";return}if(s==="space"){t.classList.add("wallpaper-space");return}if(s==="aurora"){t.classList.add("wallpaper-aurora");return}const r={x:null,y:null,radius:120},h=c=>{r.x=c.clientX,r.y=c.clientY},f=()=>{r.x=null,r.y=null};if(window.removeEventListener("mousemove",h),window.removeEventListener("mouseout",f),window.addEventListener("mousemove",h),window.addEventListener("mouseout",f),s==="particles"){const c=[];for(let x=0;x<75;x++)c.push({x:Math.random()*n,y:Math.random()*a,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5,radius:Math.random()*2+1});const y=()=>{e.clearRect(0,0,n,a),e.lineWidth=.5;for(let x=0;x<c.length;x++){const u=c[x];if(u.x+=u.vx,u.y+=u.vy,(u.x<0||u.x>n)&&(u.vx*=-1),(u.y<0||u.y>a)&&(u.vy*=-1),r.x!==null&&r.y!==null){const p=u.x-r.x,k=u.y-r.y,g=Math.sqrt(p*p+k*k);if(g<r.radius){const S=(r.radius-g)/r.radius,m=Math.atan2(k,p);u.x+=Math.cos(m)*S*4,u.y+=Math.sin(m)*S*4}}e.beginPath(),e.arc(u.x,u.y,u.radius,0,Math.PI*2),e.fillStyle="rgba(56, 189, 248, 0.25)",e.fill();for(let p=x+1;p<c.length;p++){const k=c[p],g=u.x-k.x,S=u.y-k.y,m=Math.sqrt(g*g+S*S);m<100&&(e.beginPath(),e.moveTo(u.x,u.y),e.lineTo(k.x,k.y),e.strokeStyle=`rgba(56, 189, 248, ${.15*(1-m/100)})`,e.stroke())}}A=requestAnimationFrame(y)};y()}else if(s==="matrix"){let v=Math.floor(n/14),y=Array(v).fill(1);const x="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ$#@&%*+=-",u=()=>{e.fillStyle="rgba(0, 0, 0, 0.05)",e.fillRect(0,0,n,a),e.fillStyle="rgba(56, 189, 248, 0.5)",e.font="14px monospace";for(let p=0;p<y.length;p++){const k=x[Math.floor(Math.random()*x.length)];e.fillText(k,p*14,y[p]*14),y[p]*14>a&&Math.random()>.975&&(y[p]=0),y[p]++}A=requestAnimationFrame(u)};u()}else if(s==="grid"){let c=0;const v=()=>{e.clearRect(0,0,n,a),e.strokeStyle="rgba(129, 140, 248, 0.15)",e.lineWidth=1;const y=a*.45,x=30;for(let p=-x;p<=x;p++){const k=p*(n/15);e.beginPath(),e.moveTo(n/2,y),e.lineTo(n/2+k,a),e.stroke()}c=(c+.8)%40;let u=y;for(;u<a;){const p=(u-y)/(a-y),k=y+p*p*(a-y)+c*p;k>y&&k<a&&(e.beginPath(),e.moveTo(0,k),e.lineTo(n,k),e.strokeStyle=`rgba(129, 140, 248, ${.05+p*.25})`,e.stroke()),u+=25}A=requestAnimationFrame(v)};v()}}function nt(){const o=document.getElementById("tray-wifi");if(!o)return;function t(){navigator.onLine?(o.className="fa-solid fa-wifi tray-icon connected",o.title="Wi-Fi: Connected"):(o.className="fa-solid fa-wifi-slash tray-icon disconnected",o.title="Wi-Fi: Disconnected",I.pushToast("Network Offline","Connection lost! OS is running in offline mode.","⚠️"))}window.addEventListener("online",t),window.addEventListener("offline",t),t()}function at(){const o=document.getElementById("tray-battery-parent"),t=document.getElementById("tray-battery-icon"),e=document.getElementById("tray-battery-level");if(!o||!t||!e)return;function i(s){const n=Math.round(s.level*100);e.textContent=`${n}%`,o.title=`Battery: ${n}% ${s.charging?"(Charging)":"(Discharging)"}`,s.charging?(o.classList.add("charging"),t.className="fa-solid fa-battery-charging tray-icon"):(o.classList.remove("charging"),n>90?t.className="fa-solid fa-battery-full tray-icon":n>65?t.className="fa-solid fa-battery-three-quarters tray-icon":n>35?t.className="fa-solid fa-battery-half tray-icon":n>15?(t.className="fa-solid fa-battery-quarter tray-icon",o.classList.remove("low")):(t.className="fa-solid fa-battery-empty tray-icon",o.classList.add("low")))}navigator.getBattery?navigator.getBattery().then(s=>{i(s),s.addEventListener("levelchange",()=>i(s)),s.addEventListener("chargingchange",()=>i(s))}):i({level:1,charging:!0})}function ot(){const o=document.getElementById("tray-clock"),t=document.getElementById("system-calendar-panel"),e=document.getElementById("cal-month-year"),i=document.getElementById("calendar-days-grid"),s=document.getElementById("cal-prev-month"),n=document.getElementById("cal-next-month"),a=document.getElementById("calendar-selected-date-label"),l=document.getElementById("calendar-note-input");if(!o||!t||!e||!i)return;let r=new Date,h=r.getFullYear(),f=r.getMonth(),c=new Date;const v=()=>JSON.parse(localStorage.getItem("os_calendar_notes"))||{},y=g=>localStorage.setItem("os_calendar_notes",JSON.stringify(g));o.addEventListener("click",g=>{g.stopPropagation(),document.getElementById("notifications-panel").classList.remove("open"),document.getElementById("start-menu").classList.remove("open"),t.classList.toggle("open"),t.classList.contains("open")&&(u(),k(new Date))}),document.addEventListener("click",g=>{!t.contains(g.target)&&!o.contains(g.target)&&t.classList.remove("open")});const x=["January","February","March","April","May","June","July","August","September","October","November","December"];function u(){i.innerHTML="",e.textContent=`${x[f]} ${h}`;const g=new Date(h,f,1).getDay(),S=new Date(h,f+1,0).getDate(),m=new Date(h,f,0).getDate(),b=v(),w=new Date;for(let $=g;$>0;$--){const M=m-$+1,P=f===0?11:f-1,W=f===0?h-1:h;p(M,P,W,!0,b,w)}for(let $=1;$<=S;$++)p($,f,h,!1,b,w);const L=42-i.children.length;for(let $=1;$<=L;$++){const M=f===11?0:f+1,P=f===11?h+1:h;p($,M,P,!0,b,w)}}function p(g,S,m,b,w,C){const L=document.createElement("div");L.className="calendar-day",L.textContent=g,b&&L.classList.add("other-month"),g===C.getDate()&&S===C.getMonth()&&m===C.getFullYear()&&L.classList.add("current-day"),c&&g===c.getDate()&&S===c.getMonth()&&m===c.getFullYear()&&L.classList.add("selected-day");const $=`${m}-${String(S+1).padStart(2,"0")}-${String(g).padStart(2,"0")}`;w[$]&&L.classList.add("has-note"),L.addEventListener("click",()=>{c=new Date(m,S,g),u(),k(c)}),L.addEventListener("dblclick",()=>{l.focus()}),i.appendChild(L)}function k(g){const S=g.getFullYear(),m=g.getMonth(),b=g.getDate(),w=`${S}-${String(m+1).padStart(2,"0")}-${String(b).padStart(2,"0")}`;a.textContent=g.toLocaleDateString([],{month:"short",day:"numeric",year:"numeric"});const C=v();l.value=C[w]||""}l.addEventListener("keydown",g=>{if(g.key==="Enter"){const S=l.value.trim(),m=c.getFullYear(),b=c.getMonth(),w=c.getDate(),C=`${m}-${String(b+1).padStart(2,"0")}-${String(w).padStart(2,"0")}`,L=v();S?(L[C]=S,I.pushToast("Calendar Note",`Saved note for ${a.textContent}`)):(delete L[C],I.pushToast("Calendar Note",`Removed note for ${a.textContent}`)),y(L),u(),l.blur()}}),s.addEventListener("click",g=>{g.stopPropagation(),f--,f<0&&(f=11,h--),u()}),n.addEventListener("click",g=>{g.stopPropagation(),f++,f>11&&(f=0,h++),u()})}document.addEventListener("DOMContentLoaded",()=>{J()});
