const animals=[
['🐶','Perro','Dog'],['🐱','Gato','Cat'],['🐮','Vaca','Cow'],
['🦆','Pato','Duck'],['🦁','León','Lion'],['🐴','Caballo','Horse'],
['🐑','Oveja','Sheep'],['🐷','Cerdo','Pig'],['🐓','Gallo','Rooster'],
['🐘','Elefante','Elephant']
];
let en=false;
const grid=document.getElementById('grid');
const btn=document.getElementById('lang');

function speak(t){
 const u=new SpeechSynthesisUtterance(t);
 u.lang=en?'en-US':'es-ES';
 speechSynthesis.speak(u);
}
function render(){
 grid.innerHTML='';
 animals.forEach(a=>{
  const d=document.createElement('div');
  d.className='card';
  d.innerHTML=`<div style="font-size:72px">${a[0]}</div><div>${en?a[2]:a[1]}</div>`;
  d.onclick=()=>speak(en?a[2]:a[1]);
  grid.appendChild(d);
 });
 btn.textContent=en?'Español':'English';
}
btn.onclick=()=>{en=!en;render();};
render();