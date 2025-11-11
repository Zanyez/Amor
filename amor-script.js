// --- Floating background hearts ---
const hearts = document.getElementById('hearts');

function spawnHeart(){
  const h = document.createElement('span');
  h.className = 'heart';
  h.style.setProperty('--x', Math.random()*100 + '%');
  h.style.setProperty('--s', (Math.random()*0.8 + 0.6).toFixed(2));
  h.style.setProperty('--t', (Math.random()*6 + 6).toFixed(2) + 's');
  hearts.appendChild(h);
  setTimeout(()=> h.remove(), 12000);
}

for (let i=0;i<14;i++) setTimeout(spawnHeart, i*350);
setInterval(spawnHeart, 1200);

// --- Cute typing line ---
const line = 'Prometo te amar, te cuidar e te agradecer todos os dias.';
const typed = document.getElementById('typed');
let i = 0;

function type(){
  if(i <= line.length){
    typed.textContent = line.slice(0, i++);
    setTimeout(type, 30 + Math.random()*60);
  }else{
    typed.insertAdjacentHTML('beforeend', '<span style="opacity:.8"> ▏</span>');
  }
}

setTimeout(type, 800);

// --- Confetti burst ---
const confetti = document.getElementById('confetti');

function boom(x = innerWidth/2, y = innerHeight/2){
  const n = 120;
  for(let k=0;k<n;k++){
    const p = document.createElement('span');
    p.className = 'piece';
    p.style.left = x + 'px';
    p.style.top = y + 'px';
    p.style.background = `hsl(${Math.random()*360}, 90%, 60%)`;
    const dx = (Math.random()*2-1) * 9; // x velocity
    const dy = (Math.random()*-1) * (8 + Math.random()*6); // y velocity up
    const rot = (Math.random()*720-360);
    const life = 120 + Math.random()*60;
    p.animate([
      {transform:`translate(0,0) rotate(0deg)`, opacity:1},
      {transform:`translate(${dx*life}px, ${dy*life}px) rotate(${rot}deg)`, opacity:0}
    ], {duration: 900 + Math.random()*600, easing:'cubic-bezier(.12,.68,.28,1)'});
    setTimeout(()=>p.remove(), 1600);
    confetti.appendChild(p);
  }
}

// Button interactions
const btn = document.getElementById('btn');
btn.addEventListener('click', e => {
  const r = btn.getBoundingClientRect();
  boom(r.left + r.width/2, r.top + r.height/2);
  pulseCard();
});

// Replay link
function replay(){
  typed.textContent = '';
  i = 0; 
  type();
  boom();
}

// Small card pulse effect
function pulseCard(){
  const card = document.querySelector('.card');
  card.animate([
    {transform:'scale(1)'},
    {transform:'scale(1.03)'},
    {transform:'scale(1)'}
  ], {duration:500, easing:'ease-out'});
}

// Allow click anywhere to confetti
window.addEventListener('click', (e)=>{
  if(!e.target.closest('.cta')) boom(e.clientX, e.clientY);
});
