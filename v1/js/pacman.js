console.log('Pacman Mini‑dApp avviata');
const canvas=document.getElementById('game');const ctx=canvas.getContext('2d');
let x=280,y=310,dx=0,dy=0,score=0;
const scoreEl=document.getElementById('score');
function draw(){ctx.fillStyle='#000';ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.fillStyle='#ffcd00';ctx.beginPath();ctx.arc(x,y,15,0,Math.PI*2);ctx.fill();}
function update(){x+=dx;y+=dy;if(x<15)x=15;if(x>545)x=545;if(y<15)y=15;if(y>605)y=605;draw();requestAnimationFrame(update);}
update();
window.addEventListener('keydown',e=>{if(e.key==='ArrowUp'){dx=0;dy=-2;}if(e.key==='ArrowDown'){dx=0;dy=2;}if(e.key==='ArrowLeft'){dx=-2;dy=0;}if(e.key==='ArrowRight'){dx=2;dy=0;}});
// Controlli touch
(()=>{const t=document.getElementById('touch-controls');if(!t)return;const m={up:[0,-2],down:[0,2],left:[-2,0],right:[2,0]};
t.querySelectorAll('button').forEach(b=>b.addEventListener('touchstart',e=>{const d=m[e.target.dataset.dir];if(!d)return;dx=d[0];dy=d[1];e.preventDefault();},{passive:false}));})();