/* All editable wedding details live here. Update this single object before deployment. */
const wedding = {
  groom: 'رامي', bride: 'ليان',
  date: '2026-12-20T20:00:00+02:00', dateLabel: 'السبت، 20 ديسمبر 2026', time: 'الثامنة مساءً',
  venue: 'قاعة قصر النخيل', location: 'https://maps.google.com/?q=30.0444,31.2357',
  /* تلاوة الآية 21 من سورة الروم. يمكن استبدال الرابط بملف MP3 محلي داخل assets/music عند الحاجة. */
  music: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/301021.mp3', title: 'دعوة زفاف رامي و ليان', description: 'نتشرف بدعوتكم لمشاركتنا ليلة العمر.'
};
const $ = (s) => document.querySelector(s);
function nameFromQuery(){ return new URLSearchParams(location.search).get('guest')?.trim(); }
function showCurtain(){ const c=$('#curtain'); setTimeout(()=>{c.style.opacity='0';c.style.visibility='hidden'}, 1450); }
function launch(name){
  const guest = name || 'ضيفنا الكريم'; $('#envelopeName').textContent=guest; $('#cardGuest').textContent=guest;
  $('#nameGate').classList.add('hidden'); $('#experience').classList.remove('hidden'); showCurtain();
  document.title = `${wedding.title} — ${guest}`;
  setTimeout(()=> { if(window.gsap) gsap.from('.envelope-stage',{opacity:0,y:45,duration:1.3,ease:'power3.out'}); },300);
}
document.addEventListener('DOMContentLoaded',()=>{
  $('#groomName').textContent=wedding.groom; $('#brideName').textContent=wedding.bride; $('#weddingDate').textContent=wedding.dateLabel; $('#weddingTime').textContent=wedding.time; $('#weddingVenue').textContent=wedding.venue; $('#mapButton').href=wedding.location;
  const guest=nameFromQuery(); if(guest) launch(guest); else { $('#curtain').classList.add('hidden'); $('#openInvitation').addEventListener('click',()=>{ const name=$('#guestInput').value.trim(); const url=new URL(location); if(name)url.searchParams.set('guest',name); history.replaceState({},'',url); launch(name); }); $('#guestInput').addEventListener('keydown',e=>{if(e.key==='Enter')$('#openInvitation').click()}); }
  makeAtmosphere();
});
function makeAtmosphere(){ const p=$('#particles'), f=$('#petals'); for(let i=0;i<26;i++){let e=document.createElement('i');e.className='particle';e.style.cssText=`--x:${Math.random()*100}vw;--duration:${9+Math.random()*10}s;--delay:${-Math.random()*15}s`;p.append(e)}for(let i=0;i<10;i++){let e=document.createElement('i');e.className='petal';e.style.cssText=`--x:${Math.random()*100}vw;--duration:${12+Math.random()*11}s;--delay:${-Math.random()*15}s`;f.append(e)}}
