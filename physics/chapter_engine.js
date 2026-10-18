/* =========================================================================
   Physics chapter engine — mirrors the rich Grade-8 Math chapter page (ch01.html)
   Same UI / structure / interactives, driven by PHYSICS_DATA.
   CH is provided by the host page (e.g. <script>const CH='ch01';</script>).
   ========================================================================= */
(function(){
'use strict';

const PORTAL='../index.html';
const HOME='home.html';

/* ---- locate the chapter ---- */
const CHG = (typeof PHYSICS_DATA!=='undefined') ? (PHYSICS_DATA.find(c=>c.id===CH) || PHYSICS_DATA[0]) : null;
if(!CHG){ document.getElementById('main').innerHTML='<p>Chapter data not found.</p>'; return; }
const chNo = String(PHYSICS_DATA.indexOf(CHG)+1).padStart(2,'0');

/* ---- state ---- */
const KEY='phys8_'+CH+'_state';
let S=load();
function load(){try{return JSON.parse(localStorage.getItem(KEY))||{};}catch(e){return {};}}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}}
function st(id){return S[id]||(S[id]={diag:null,prac:{ok:0,tot:0},vid:{},done:false});}

/* ---- bilingual helper ---- */
function L(a,b){return '<span class="en">'+a+'</span><span class="zh">'+(b==null?a:b)+'</span>';}

/* ---- lessons (sidebar) ---- */
const LESSONS=[{id:'intro',t:'Intro',cz:'概览',n:'🏠'}];
CHG.subtopics.forEach((st,i)=>{ const parts=st.name.split('·'); LESSONS.push({id:'s'+i, t:st.name, cz:parts[0].trim(), n:'§'+(i+1)}); });
LESSONS.push({id:'test',t:'Chapter check',cz:'章末自己测',n:''});

/* ---- question pools ---- */
function subRaw(idx){
  const sub=CHG.subtopics[idx]; const qs=[];
  (sub.pq||[]).forEach(i=>{ if(CHG.practice&&CHG.practice[i]) qs.push(CHG.practice[i]); });
  (sub.pq2||[]).forEach(i=>{ if(CHG.practice2&&CHG.practice2[i]) qs.push(CHG.practice2[i]); });
  return qs;
}
const ALLQ=[];
(CHG.practice||[]).forEach(q=>ALLQ.push(q));
(CHG.practice2||[]).forEach(q=>ALLQ.push(q));
(CHG.quiz||[]).forEach(q=>ALLQ.push(q));
const SUBQ=CHG.subtopics.map((st,i)=>subRaw(i));
const emptyIdx=SUBQ.map((q,i)=>q.length===0?i:-1).filter(i=>i>=0);
emptyIdx.forEach((i,k)=>{ if(ALLQ.length){ SUBQ[i]=[ALLQ[k%ALLQ.length]]; } });

/* ---- formula interactives ("Have a go") ---- */
const FORMULAS={
  _default:{title:{en:'Explore',zh:'动手试'},lead:{en:'Change the values and see what happens.',zh:'改一改数值，看看会怎样。'},
    vars:[{k:'a',lab:{en:'a',zh:'a'},min:1,max:10,val:3,step:1,unit:''},{k:'b',lab:{en:'b',zh:'b'},min:1,max:10,val:4,step:1,unit:''}],
    calc:o=>({eq:'a + b = '+(o.a+o.b)}),note:{en:'Try a few values.',zh:'试几个数看看。'}},
  ch01:{title:{en:'Speed',zh:'速度'},lead:{en:'Speed = distance ÷ time. Drag the sliders.',zh:'速度 = 路程 ÷ 时间。拖动滑块。'},
    vars:[{k:'s',lab:{en:'distance s',zh:'路程 s'},min:10,max:300,val:100,step:5,unit:'m'},{k:'t',lab:{en:'time t',zh:'时间 t'},min:2,max:30,val:10,step:1,unit:'s'}],
    calc:o=>({eq:'v = s / t = '+o.s+' / '+o.t+' = '+(o.s/o.t).toFixed(1)+' m/s'}),
    note:{en:'A car at 72 km/h travels 20 m every second.',zh:'72 km/h 的车每秒走 20 米。'}},
  ch02:{title:{en:'Wave speed',zh:'波速'},lead:{en:'v = wavelength × frequency. The speed of sound in air is about 340 m/s.',zh:'v = 波长 × 频率。空气中声速约 340 m/s。'},
    vars:[{k:'lam',lab:{en:'wavelength λ',zh:'波长 λ'},min:0.1,max:10,val:1.0,step:0.1,unit:'m'},{k:'f',lab:{en:'frequency f',zh:'频率 f'},min:50,max:2000,val:340,step:10,unit:'Hz'}],
    calc:o=>({eq:'v = λ × f = '+o.lam.toFixed(1)+' × '+o.f+' = '+(o.lam*o.f).toFixed(0)+' m/s'}),
    note:{en:'Higher pitch means higher frequency.',zh:'音调越高，频率越大。'}},
  ch03:{title:{en:'Heat transfer',zh:'热量'},lead:{en:'Q = c × m × ΔT. Here c is water (4200 J/kg·°C).',zh:'Q = c × m × ΔT。这里 c 取水（4200 J/kg·°C）。'},
    vars:[{k:'m',lab:{en:'mass m',zh:'质量 m'},min:0.1,max:5,val:1.0,step:0.1,unit:'kg'},{k:'dt',lab:{en:'ΔT',zh:'温差 ΔT'},min:0,max:100,val:50,step:5,unit:'°C'}],
    calc:o=>({eq:'Q = c·m·ΔT = 4200 × '+o.m.toFixed(1)+' × '+o.dt+' = '+(4200*o.m*o.dt).toFixed(0)+' J'}),
    note:{en:'Boiling water stays at 100°C while it boils.',zh:'水沸腾时温度停在 100°C。'}},
  ch04:{title:{en:'Refraction (Snell)',zh:'折射（斯涅尔）'},lead:{en:'n = sin(i) ÷ sin(r). Try different angles of incidence.',zh:'n = sin i ÷ sin r。试试不同入射角。'},
    vars:[{k:'i',lab:{en:'incident i',zh:'入射角 i'},min:10,max:80,val:30,step:5,unit:'°'},{k:'n',lab:{en:'index n',zh:'折射率 n'},min:1.0,max:2.0,val:1.5,step:0.05,unit:''}],
    calc:o=>{const r=Math.asin(Math.sin(o.i*Math.PI/180)/o.n)*180/Math.PI; return {eq:'n = sin '+o.i+'° / sin r → r = '+r.toFixed(1)+'°'};},
    note:{en:'Light bends when it crosses into a new material.',zh:'光进入不同介质时会弯折。'}},
  ch05:{title:{en:'Lens formula',zh:'透镜公式'},lead:{en:'1/f = 1/u + 1/v. Need u > f for a real image.',zh:'1/f = 1/u + 1/v。要成实像需 u > f。'},
    vars:[{k:'u',lab:{en:'object u',zh:'物距 u'},min:10,max:80,val:30,step:5,unit:'cm'},{k:'f',lab:{en:'focal f',zh:'焦距 f'},min:5,max:40,val:15,step:5,unit:'cm'}],
    calc:o=>{const d=1/o.f-1/o.u; if(d<=0) return {eq:'u ≤ f → no real image (virtual)'}; const v=1/d; return {eq:'1/'+o.f+' = 1/'+o.u+' + 1/v → v = '+v.toFixed(1)+' cm'};},
    note:{en:'A magnifying glass uses u < f.',zh:'放大镜用的是 u < f。'}},
  ch06:{title:{en:'Density',zh:'密度'},lead:{en:'ρ = m ÷ V. Gold is ~19.3, water is 1 (g/cm³).',zh:'ρ = m ÷ V。金约 19.3，水为 1（g/cm³）。'},
    vars:[{k:'m',lab:{en:'mass m',zh:'质量 m'},min:1,max:1000,val:100,step:10,unit:'g'},{k:'v',lab:{en:'volume V',zh:'体积 V'},min:1,max:1000,val:100,step:10,unit:'cm³'}],
    calc:o=>({eq:'ρ = m / V = '+o.m+' / '+o.v+' = '+(o.m/o.v).toFixed(2)+' g/cm³'}),
    note:{en:'Same volume, very different mass.',zh:'同样体积，质量却差很多。'}},
  ch07:{title:{en:'Weight (Gravity)',zh:'重力'},lead:{en:'G = m × g, with g ≈ 9.8 N/kg on Earth.',zh:'G = m × g，地球上 g ≈ 9.8 N/kg。'},
    vars:[{k:'m',lab:{en:'mass m',zh:'质量 m'},min:1,max:100,val:10,step:1,unit:'kg'}],
    calc:o=>({eq:'G = m × g = '+o.m+' × 9.8 = '+(o.m*9.8).toFixed(1)+' N'}),
    note:{en:'Mass stays the same everywhere; weight changes with gravity.',zh:'质量处处不变，重量随引力变化。'}},
  ch08:{title:{en:'Newton’s 2nd law',zh:'牛顿第二定律'},lead:{en:'a = F ÷ m. More force → more acceleration.',zh:'a = F ÷ m。力越大，加速度越大。'},
    vars:[{k:'F',lab:{en:'force F',zh:'力 F'},min:1,max:200,val:50,step:5,unit:'N'},{k:'m',lab:{en:'mass m',zh:'质量 m'},min:1,max:50,val:10,step:1,unit:'kg'}],
    calc:o=>({eq:'a = F / m = '+o.F+' / '+o.m+' = '+(o.F/o.m).toFixed(2)+' m/s²'}),
    note:{en:'Balanced forces give zero acceleration.',zh:'受力平衡时加速度为零。'}},
  ch09:{title:{en:'Pressure',zh:'压强'},lead:{en:'p = F ÷ S. A smaller area means higher pressure.',zh:'p = F ÷ S。面积越小，压强越大。'},
    vars:[{k:'F',lab:{en:'force F',zh:'压力 F'},min:10,max:2000,val:500,step:10,unit:'N'},{k:'S',lab:{en:'area S',zh:'面积 S'},min:0.01,max:2,val:0.5,step:0.01,unit:'m²'}],
    calc:o=>({eq:'p = F / S = '+o.F+' / '+o.S.toFixed(2)+' = '+(o.F/o.S).toFixed(0)+' Pa'}),
    note:{en:'Skis spread your weight over a big area.',zh:'滑雪板把体重摊在大面积上。'}},
  ch10:{title:{en:'Buoyant force',zh:'浮力'},lead:{en:'F = ρ_liquid × g × V_displaced.',zh:'F = ρ_液 × g × V_排。'},
    vars:[{k:'rho',lab:{en:'ρ liquid',zh:'液体密度 ρ'},min:500,max:1100,val:1000,step:10,unit:'kg/m³'},{k:'V',lab:{en:'V displaced',zh:'V 排'},min:0.001,max:0.02,val:0.005,step:0.001,unit:'m³'}],
    calc:o=>({eq:'F = ρ·g·V = '+o.rho+' × 9.8 × '+o.V.toFixed(3)+' = '+(o.rho*9.8*o.V).toFixed(1)+' N'}),
    note:{en:'Float if buoyancy ≥ weight.',zh:'浮力 ≥ 重力就上浮。'}},
  ch11:{title:{en:'Work',zh:'功'},lead:{en:'W = F × s. Lifting a box takes work.',zh:'W = F × s。搬起箱子要做功。'},
    vars:[{k:'F',lab:{en:'force F',zh:'力 F'},min:10,max:2000,val:200,step:10,unit:'N'},{k:'s',lab:{en:'distance s',zh:'距离 s'},min:1,max:50,val:10,step:1,unit:'m'}],
    calc:o=>({eq:'W = F × s = '+o.F+' × '+o.s+' = '+(o.F*o.s).toFixed(0)+' J'}),
    note:{en:'No motion in the force direction → no work.',zh:'力方向上没位移就不做功。'}},
  ch12:{title:{en:'Lever balance',zh:'杠杆平衡'},lead:{en:'F₁×L₁ = F₂×L₂. Trade force for distance.',zh:'F₁×L₁ = F₂×L₂。用距离换力气。'},
    vars:[{k:'F2',lab:{en:'load F₂',zh:'阻力 F₂'},min:10,max:500,val:100,step:10,unit:'N'},{k:'L2',lab:{en:'L₂',zh:'L₂'},min:0.1,max:2,val:0.5,step:0.1,unit:'m'},{k:'L1',lab:{en:'L₁',zh:'L₁'},min:0.1,max:2,val:1.0,step:0.1,unit:'m'}],
    calc:o=>({eq:'F₁×'+o.L1.toFixed(1)+' = '+o.F2+' × '+o.L2.toFixed(1)+' → F₁ = '+(o.F2*o.L2/o.L1).toFixed(0)+' N'}),
    note:{en:'Longer arm on your side → less force needed.',zh:'自己这边臂越长，越省力。'}}
};

const REALLIFE={
  ch01:{en:'A phone screen is sold by its diagonal; a runner’s speed decides who wins.',zh:'手机屏按对角线标尺寸；跑步速度决定谁先到。'},
  ch02:{en:'Ultrasound sees a baby; sonar finds the seabed; your voice is vibrating air.',zh:'超声看胎儿；声呐测海床；说话是振动的空气。'},
  ch03:{en:'Ice melts, water boils, steam rises — every state change moves heat in your kitchen.',zh:'冰融化、水沸腾、蒸汽升——物态变化都在搬动热量。'},
  ch04:{en:'A mirror flips your image; a straw in water looks bent; a prism makes a rainbow.',zh:'镜子颠倒影像；水中吸管显弯；棱镜分出彩虹。'},
  ch05:{en:'A camera, a projector, your eye — all bend light to make images.',zh:'相机、投影仪、眼睛——都靠折射成像。'},
  ch06:{en:'Gold sinks, wood floats; the same size can weigh very differently.',zh:'金沉木浮；同样大小轻重却差很多。'},
  ch07:{en:'Kick a ball, pull a cart, feel your weight — that is force.',zh:'踢球、拉车、感受体重——都是力。'},
  ch08:{en:'A seatbelt saves you because your body wants to keep moving.',zh:'安全带救人，因为身体想保持运动。'},
  ch09:{en:'Skis spread your weight on snow; a needle presses hard with a tiny tip.',zh:'滑雪板摊开体重；针尖虽小压强却大。'},
  ch10:{en:'A ship floats because the water pushes up as hard as its weight.',zh:'船浮起，因水向上推力等于其重量。'},
  ch11:{en:'Climbing stairs, lifting a box — work and power are everywhere.',zh:'爬楼梯、搬箱子——功和功率无处不在。'},
  ch12:{en:'A crowbar, a seesaw, a pulley — simple machines trade force for distance.',zh:'撬棍、跷跷板、滑轮——简单机械用距离换力。'}
};

/* ---- question rendering (single / multi / graph) ---- */
function graphSVG(dia){
  const W=360,H=240,padL=44,padB=34,padT=14,padR=14;
  const xr=dia.xRange,yr=dia.yRange;
  const sx=v=>padL+(v-xr[0])/(xr[1]-xr[0])*(W-padL-padR);
  const sy=v=>H-padB-(v-yr[0])/(yr[1]-yr[0])*(H-padT-padB);
  let g=`<svg viewBox="0 0 ${W} ${H}" width="100%" style="max-width:360px;background:#fff">`;
  for(let x=xr[0];x<=xr[1];x+=dia.xStep){ g+=`<line x1="${sx(x)}" y1="${padT}" x2="${sx(x)}" y2="${H-padB}" stroke="#eef2f7"/>`; g+=`<text x="${sx(x)}" y="${H-padB+15}" font-size="10" fill="#5b6472" text-anchor="middle">${x}</text>`; }
  for(let y=yr[0];y<=yr[1];y+=dia.yStep){ g+=`<line x1="${padL}" y1="${sy(y)}" x2="${W-padR}" y2="${sy(y)}" stroke="#eef2f7"/>`; g+=`<text x="${padL-6}" y="${sy(y)+3}" font-size="10" fill="#5b6472" text-anchor="end">${y}</text>`; }
  g+=`<line x1="${padL}" y1="${padT}" x2="${padL}" y2="${H-padB}" stroke="#1c2430" stroke-width="1.5"/>`;
  g+=`<line x1="${padL}" y1="${H-padB}" x2="${W-padR}" y2="${H-padB}" stroke="#1c2430" stroke-width="1.5"/>`;
  g+=`<text x="${(padL+W-padR)/2}" y="${H-4}" font-size="10" fill="#1c2430" text-anchor="middle">${dia.xLabel||''}</text>`;
  g+=`<text x="13" y="${(padT+H-padB)/2}" font-size="10" fill="#1c2430" text-anchor="middle" transform="rotate(-90 13 ${(padT+H-padB)/2})">${dia.yLabel||''}</text>`;
  (dia.lines||[]).forEach(line=>{
    const pts=line.pts.map(p=>`${sx(p[0])},${sy(p[1])}`).join(' ');
    g+=`<polyline points="${pts}" fill="none" stroke="#2563eb" stroke-width="2.5"/>`;
    line.pts.forEach(p=>{g+=`<circle cx="${sx(p[0])}" cy="${sy(p[1])}" r="3" fill="#2563eb"/>`;});
  });
  g+='</svg>';
  return g;
}
function renderQ(el,q,onAns){
  const multi = q.multi || (typeof q.ansIdx==='string' && String(q.ansIdx).indexOf(',')>=0);
  const correctIdx = (typeof q.ansIdx==='string') ? String(q.ansIdx).split(',').map(s=>parseInt(s.trim(),10)) : [q.ansIdx];
  let opts = q.options.map((txt,i)=>({txt, correct: correctIdx.indexOf(i)>=0}));
  for(let i=opts.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[opts[i],opts[j]]=[opts[j],opts[i]];}
  let html='<div class="q">';
  if(q.dia) html+='<div class="fig" style="max-width:380px;margin:0 auto 12px">'+graphSVG(q.dia)+'</div>';
  html+='<div class="qt">'+L(q.q,q.q)+'</div><div id="opts"></div>';
  if(multi) html+='<div class="row"><button class="ghost" id="chk">'+L('Check answer','核对答案')+'</button></div>';
  html+='<div class="row"><button class="ghost" id="hb">'+L('Hint','提示')+'</button></div>';
  html+='<div class="hint" id="hint">'+L(q.hint||'',q.hint||'')+'</div>';
  html+='<div class="fb" id="fb"></div></div>';
  el.innerHTML=html;
  const od=el.querySelector('#opts');
  const sel=new Set(); let graded=false;
  function fb(ok){
    const f=el.querySelector('#fb');
    if(ok){f.className='fb ok';f.innerHTML=L('✓ Correct. ','✓ 对了。')+L(q.sol||'',q.sol||'');}
    else{f.className='fb bad';f.innerHTML=L('✗ Not quite. ','✗ 不太对。')+L(q.sol||'',q.sol||'');}
    if(onAns) onAns(ok);
  }
  opts.forEach(o=>{
    const b=document.createElement('button'); b.className='opt'; b.innerHTML=o.txt; b.dataset.correct=o.correct?'1':'0';
    b.onclick=()=>{
      if(graded) return;
      if(multi){
        if(sel.has(b)){sel.delete(b);b.classList.remove('sel-ok');}
        else{sel.add(b);b.classList.add('sel-ok');}
      } else {
        graded=true; od.querySelectorAll('.opt').forEach(x=>x.disabled=true);
        if(b.dataset.correct==='1'){b.classList.add('sel-ok');fb(true);}
        else{b.classList.add('sel-bad'); od.querySelectorAll('.opt').forEach(x=>{if(x.dataset.correct==='1')x.classList.add('sel-ok');}); fb(false);}
      }
    };
    od.appendChild(b);
  });
  if(multi){
    el.querySelector('#chk').onclick=()=>{
      if(graded) return; graded=true;
      const chosen=[...sel];
      const ok = chosen.length===correctIdx.length && chosen.every(b=>b.dataset.correct==='1');
      od.querySelectorAll('.opt').forEach(x=>x.disabled=true);
      chosen.forEach(b=>{if(b.dataset.correct!=='1')b.classList.add('sel-bad');});
      od.querySelectorAll('.opt').forEach(x=>{if(x.dataset.correct==='1')x.classList.add('sel-ok');});
      fb(ok);
    };
  }
  el.querySelector('#hb').onclick=()=>el.querySelector('#hint').classList.add('on');
}

/* ---- "Have a go" interactive ---- */
function microInteractive(el, chId){
  const F=FORMULAS[chId]||FORMULAS._default;
  let html='<div class="step">'+L('Have a go','动手试')+'</div>';
  html+='<h3>'+L(F.title.en,F.title.zh)+'</h3>';
  html+='<div class="lead">'+L(F.lead.en,F.lead.zh)+'</div>';
  html+='<div class="slider-row">';
  F.vars.forEach(v=>{ html+='<label>'+L(v.lab.en,v.lab.zh)+' <input type="range" id="sl_'+v.k+'" min="'+v.min+'" max="'+v.max+'" step="'+v.step+'" value="'+v.val+'"><span class="val" id="vv_'+v.k+'">'+v.val+'</span> '+(v.unit||'')+'</label>'; });
  html+='</div><div class="eqbox" id="eqbox"></div><div class="box">'+L(F.note.en,F.note.zh)+'</div>';
  el.innerHTML=html;
  const calc=()=>{
    const o={}; F.vars.forEach(v=>{const inp=el.querySelector('#sl_'+v.k); o[v.k]=parseFloat(inp.value); el.querySelector('#vv_'+v.k).textContent=inp.value;});
    el.querySelector('#eqbox').innerHTML=F.calc(o).eq;
  };
  F.vars.forEach(v=>{ el.querySelector('#sl_'+v.k).oninput=calc; });
  calc();
}

/* ---- videos ---- */
function videos(el, list, subId){
  if(!list || !list.length){ el.innerHTML='<h3>'+L('Videos','视频')+'</h3><div class="lead">'+L('No clips linked here yet — open the Khan Academy chapter below.','本节暂未关联视频，可前往下方 Khan Academy 章节。')+'</div>'; return; }
  el.innerHTML='<h3>'+L('Videos','视频')+'</h3><div class="lead">'+L('Watch on Khan Academy, or play the clip here.','在 Khan Academy 观看，或在此播放片段。')+'</div>';
  list.forEach((v,i)=>{
    const d=document.createElement('div'); d.className='vid-item';
    d.innerHTML=`<div class="t"><b>${L(v.t,v.t)}</b><small>${v.ka?'Khan Academy':''}</small></div>`;
    const s=st(subId); s.vid=s.vid||{};
    const play=document.createElement('button'); play.className='ghost'; play.innerHTML='<span class="en">▶ Play</span><span class="zh">▶ 播放</span>';
    play.onclick=()=>{ let p=d.querySelector('iframe'); if(!p && v.yt){ p=document.createElement('iframe'); p.width=320;p.height=180;p.style.borderRadius='8px';p.allowFullscreen=true; p.src='https://www.youtube.com/embed/'+v.yt; d.appendChild(p); p.scrollIntoView({behavior:'smooth',block:'center'}); } s.vid[i]=true; save(); renderNav(); };
    const khan=document.createElement('a'); khan.href=v.ka||'#'; khan.target='_blank'; khan.className='ghost'; khan.style.marginLeft='8px'; khan.innerHTML='<span class="en">Khan ↗</span><span class="zh">Khan ↗</span>';
    d.appendChild(play); d.appendChild(khan); el.appendChild(d);
  });
}

/* ---- diagnostic ---- */
function diag(el,id,qs){
  const s=st(id);
  if(s.diag){ el.innerHTML=`<div class="box"><b>${L('Quick check','小测')}: </b>${s.diag.pass?L('✓ all correct — go straight to practice.','✓ 全对，直接去练习。'):L('Done, with some wrong — watch the lesson first.','已完成，有错的先看微课。')}</div>`; return; }
  if(!qs.length){ el.innerHTML=''; return; }
  const show=qs.slice(0,3);
  el.innerHTML='<div class="step">'+L('Quick check','小测一下')+'</div><div class="lead">'+L('A few questions. All correct means you already have this.','几个问题，全对说明你已掌握。')+'</div><div id="dq"></div><div class="row"><button id="ddone" disabled>'+L('Submit','提交')+'</button></div>';
  const box=el.querySelector('#dq'); let ok=0,done=0;
  show.forEach(q=>{ const d=document.createElement('div'); box.appendChild(d); renderQ(d,q,r=>{ if(r)ok++; done++; if(done===show.length) el.querySelector('#ddone').disabled=false; },true); });
  el.querySelector('#ddone').onclick=()=>{ s.diag={ok,tot:show.length,pass:ok===show.length}; save(); el.innerHTML=`<div class="box"><b>${L('Result','结果')}: ${ok}/${show.length}</b><br>${ok===show.length?L('✓ all correct — go straight to practice.','✓ 全对，直接去练习。'):L('Watch the lesson and videos first, then practice.','先看看微课和视频，再练习。')}</div>`; };
}

/* ---- practice (5-in-a-row) ---- */
function prac(el,id,qs,need){
  const s=st(id);
  if(!qs.length){ el.innerHTML='<div class="step">'+L('Practice','练习')+'</div><div class="lead">'+L('No practice questions for this section yet — try the chapter check.','本节暂无数题，可试章末自测。')+'</div>'; return; }
  el.innerHTML='<div class="step">'+L('Practice','练习')+'</div><div class="lead">'+L('Questions regenerate. Get '+need+' in a row to clear this section.','题目会刷新。连对 '+need+' 题即过关。')+'</div><div class="stat"><span>'+L('Streak','连对')+': <b id="streak">0</b>/'+need+'</span><span>'+L('Total','总数')+': <b id="cum">'+s.prac.ok+'/'+s.prac.tot+'</b></span><span id="mast"></span></div><div class="prog"><i id="pb" style="width:0%"></i></div><div id="pq"></div><div class="row"><button id="nq">'+L('Next question','下一题')+'</button><button class="ghost" id="reset">'+L('Reset progress','重置进度')+'</button></div>';
  let streak=0;
  const upd=()=>{ el.querySelector('#streak').textContent=streak; el.querySelector('#cum').textContent=s.prac.ok+'/'+s.prac.tot; el.querySelector('#pb').style.width=Math.min(100,streak/need*100)+'%';
    const p=s.prac||{}; const L2=s.done?['m-mas',L('Mastered','已掌握')]:(p.tot>=need&&p.ok/p.tot>=0.8?['m-pro',L('Proficient','熟练')]:(p.tot>0?['m-fam',L('Familiar','较熟')]:((Object.keys(s.vid||{}).length||s.diag!=null)?['m-att',L('Attempted','尝试过')]:['m-none',L('Not started','未开始')])));
    el.querySelector('#mast').innerHTML=`<span class="mastery ${L2[0]}">${L2[1]}</span>`; };
  const next=()=>{ const box=el.querySelector('#pq'); box.innerHTML=''; const d=document.createElement('div'); box.appendChild(d); const q=qs[Math.floor(Math.random()*qs.length)]; renderQ(d,q,r=>{ s.prac.tot++; if(r){s.prac.ok++;streak++;} else {streak=0;} if(streak>=need){s.done=true;save();renderNav();} save(); upd(); },true); upd(); };
  el.querySelector('#nq').onclick=next;
  el.querySelector('#reset').onclick=()=>{ s.prac={ok:0,tot:0}; s.done=false; streak=0; save(); upd(); renderNav(); };
  next();
}

/* ---- chapter check ---- */
function chTest(el){
  const all=[]; (CHG.practice||[]).forEach(q=>all.push(q)); (CHG.practice2||[]).forEach(q=>all.push(q)); (CHG.quiz||[]).forEach(q=>all.push(q));
  const seen=new Set(); const uniq=[]; all.forEach(q=>{const k=JSON.stringify(q); if(!seen.has(k)){seen.add(k);uniq.push(q);}});
  const qs=uniq;
  el.innerHTML='<div class="step">'+L('Chapter check','章末自己测')+'</div><div class="lead">'+L('Questions covering this chapter. Do them on your own, no hints.','本章综合题，独立完成，不看提示。')+'</div><div id="tq"></div><div class="row"><button id="sub">'+L('Submit','提交')+'</button></div><div id="res"></div>';
  const box=el.querySelector('#tq'); const ans=[];
  qs.forEach((q,i)=>{
    const multi=q.multi||(typeof q.ansIdx==='string'&&String(q.ansIdx).indexOf(',')>=0);
    const correctIdx=(typeof q.ansIdx==='string')?String(q.ansIdx).split(',').map(s=>parseInt(s.trim(),10)):[q.ansIdx];
    const d=document.createElement('div'); d.innerHTML=`<div class="q"><div class="qt"><b>Q${i+1}.</b> ${L(q.q,q.q)}</div><div id="o"></div></div>`; box.appendChild(d);
    const od=d.querySelector('#o');
    let opts=q.options.map((t,j)=>({t,c:correctIdx.indexOf(j)>=0}));
    for(let k=opts.length-1;k>0;k--){const j=Math.floor(Math.random()*(k+1));[opts[k],opts[j]]=[opts[j],opts[k]];}
    if(multi) ans[i]=new Set();
    opts.forEach(o=>{ const b=document.createElement('button'); b.className='opt'; b.innerHTML=o.t;
      b.onclick=()=>{ if(multi){ if(ans[i].has(o.c)){ans[i].delete(o.c);b.classList.remove('sel-ok');} else {ans[i].add(o.c);b.classList.add('sel-ok');} }
        else { od.querySelectorAll('.opt').forEach(x=>x.classList.remove('sel-ok')); b.classList.add('sel-ok'); ans[i]=o.c; } };
      od.appendChild(b); });
  });
  el.querySelector('#sub').onclick=()=>{
    let ok=0;
    qs.forEach((q,i)=>{ const multi=q.multi||(typeof q.ansIdx==='string'&&String(q.ansIdx).indexOf(',')>=0);
      let right;
      if(multi){ const set=ans[i]; right = set && set.size===correctIdxLen(q) && [...set].every(x=>x); }
      else { right = ans[i]===true; }
      if(right) ok++;
    });
    S.test={ok,tot:qs.length}; save(); renderNav();
    let r=`<div class="box"><b>${L('Score','得分')}: ${ok}/${qs.length}</b><br>${ok>=Math.ceil(qs.length*0.8)?L('✓ You have this chapter down.','✓ 这一章掌握得不错。'):ok>=Math.ceil(qs.length*0.6)?L('△ Nearly there.','△ 还差一点。'):L('✗ Go through the chapter again.','✗ 再复习一遍本章。')}</div>`;
    qs.forEach((q,i)=>{ r+=`<div class="q"><b>Q${i+1}</b> ${L(q.q,q.q)}<br><span class="cn-tag">${L(q.sol||'',q.sol||'')}</span></div>`; });
    el.querySelector('#res').innerHTML=r;
  };
  function correctIdxLen(q){ return (typeof q.ansIdx==='string')?String(q.ansIdx).split(',').map(s=>s.trim()).filter(s=>s.length).length:1; }
}

/* ---- intro lobby ---- */
function introRender(main){
  const pts=LESSONS.filter(l=>l.id!=='test'&&l.id!=='intro');
  let h='<div class="intro-h">'+L('What this chapter covers','本章学什么')+'</div><div class="intro-sub">'+L('Here is what this chapter walks you through, in order.','下面是这一章要走的全部内容，按顺序排好。')+'</div><div class="kp">';
  pts.forEach((l,idx)=>{ const s=st(l.id); const note=(CHG.notes&&CHG.notes[idx])?CHG.notes[idx]:''; const badge=s.done?' <span class="st ok">✓ done</span>':(s.prac&&s.prac.tot>0?' <span class="st">'+s.prac.ok+'/'+s.prac.tot+'</span>':''); h+='<div class="kp-c"><div class="n">'+l.n+'</div><div class="t">'+l.t+(l.cz?' <span class="cn-tag">'+l.cz+'</span>':'')+'</div><div class="d">'+note+'</div>'+badge+'</div>'; });
  h+='</div>';
  const rl=REALLIFE[CH]||{en:'',zh:''};
  h+='<div class="why"><b>'+L('Where this shows up in real life','在真实生活里哪里会用到')+'</b><br>'+L(rl.en,rl.zh)+'</div>';
  h+='<div class="box"><b>'+L('How this chapter works','本章怎么学')+'</b><div class="how">① <b>'+L('Watch the lesson','看微课')+'</b> '+L('a few minutes to get what the section is about','花几分钟了解本节内容')+'<br>② <b>'+L('Practice','练一练')+'</b> '+L('5 correct in a row clears it','连对 5 题就算过关')+'<br>③ <b>'+L('Next section','下一节')+'</b> '+L('on the left, open whichever you want','在左侧，打开想看的节')+'</div></div>';
  h+='<div class="big-start"><button id="startBtn">'+pts[0].n+' '+L(pts[0].t,pts[0].cz)+' →</button></div>';
  main.innerHTML=h;
  main.querySelector('#startBtn').onclick=()=>{ cur=pts[0].id; render(); };
}

/* ---- nav + render ---- */
let cur='intro';
function goLesson(id){cur=id;render();}
function renderNav(){
  const n=document.getElementById('nav'); n.innerHTML='';
  LESSONS.forEach(l=>{
    const s=st(l.id); let badge='';
    if(l.id==='test'){ if(S.test&&S.test.tot!=null) badge=`<span class="st">${S.test.ok}/${S.test.tot}</span>`; }
    else if(s.done) badge='<span class="st">✓</span>';
    else if(s.prac&&s.prac.tot>0) badge=`<span class="st">${s.prac.ok}/${s.prac.tot}</span>`;
    const d=document.createElement('div'); d.className='nav-i'+(l.id===cur?' on':'');
    d.innerHTML=`<span><b>${l.n}</b> <span class="en">${l.t}</span><span class="zh">${l.cz||l.t}</span></span>${badge}`;
    d.onclick=()=>{cur=l.id;render();}; n.appendChild(d);
  });
}
function render(){
  renderNav();
  const hd=document.getElementById('hd');
  hd.innerHTML=`<h1><span class="en">Chapter ${chNo} · ${CHG.subtitle}</span><span class="zh">第 ${chNo} 章 · ${CHG.title}</span></h1><div class="sub"><span class="en">Grade 8 · ${CHG.subtopics.length} lessons</span><span class="zh">八年级 · ${CHG.subtopics.length} 节</span></div>`;
  const m=document.getElementById('main'); m.innerHTML='';
  if(cur==='intro'){ introRender(m); window.scrollTo({top:0,behavior:'smooth'}); return; }
  if(cur==='test'){ const d=document.createElement('div'); chTest(d); m.appendChild(d); window.scrollTo({top:0,behavior:'smooth'}); return; }
  const idx=+cur.slice(1); const sub=CHG.subtopics[idx]; const qs=SUBQ[idx];
  const h=document.createElement('h2'); h.innerHTML=`<b>${LESSONS[idx+1].n}</b> <span class="en">${sub.name.split('·').pop().trim()}</span><span class="zh">${sub.name.split('·')[0].trim()}</span>`; m.appendChild(h);
  const d=document.createElement('div'); microInteractive(d,CH); m.appendChild(d);
  const v=document.createElement('div'); videos(v, sub.vids.map(i=>CHG.videos[i]).filter(Boolean), 's'+idx); m.appendChild(v);
  const p=document.createElement('div'); diag(p,'s'+idx, qs.slice(0,3)); m.appendChild(p);
  const pr=document.createElement('div'); prac(pr,'s'+idx, qs, Math.min(5, Math.max(qs.length,1))); m.appendChild(pr);
  window.scrollTo({top:0,behavior:'smooth'});
}

/* ---- language + theme (phys8_ keys, same behaviour as Math) ---- */
const LKEY='phys8_lang';
function getLang(){return localStorage.getItem(LKEY)||'en';}
function setLang(l){localStorage.setItem(LKEY,l);applyLang();}
function applyLang(){const l=getLang();document.body.className=(' '+document.body.className+' ').replace(/\s+lang-(en|mix|zh)\b/g,' ').trim();if(l==='mix'||l==='zh')document.body.classList.add('lang-'+l);document.querySelectorAll('.langseg button').forEach(b=>{b.classList.toggle('on',b.dataset.lang===l);});}
applyLang();
var TKEY='phys8_theme';
function getTheme(){try{return localStorage.getItem(TKEY)||'auto';}catch(e){return 'auto';}}
function setTheme(t){try{localStorage.setItem(TKEY,t);}catch(e){}applyTheme();}
function applyTheme(){ var t=getTheme(); document.documentElement.setAttribute('data-theme',t); var bs=document.querySelectorAll('.themseg button'); for(var i=0;i<bs.length;i++){var on=(bs[i].getAttribute('data-theme')===t); if(on){bs[i].classList.add('on');}else{bs[i].classList.remove('on');}} }
applyTheme();

try{ if(new URLSearchParams(location.search).get('go')==='test'){cur='test';} }catch(e){}
render();

})();
