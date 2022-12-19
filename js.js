function updateTIme(){
const currentYear = new Date().getFullYear();
const newYear = new Date(`january 1 ${currentYear+1} 00:00:00`);
const currentDate = new Date();
diff = newYear-currentDate;
console.log(diff);
const d = Math.floor((diff/1000/60/60/24));
const h =  Math.floor((diff/1000/60/60)%24);
const m =  Math.floor((diff/1000/60)%60);
const s = Math.floor((diff/1000)%60);
console.log(d);

console.log(h);

console.log(m);

console.log(s);

const days = document.getElementById('day');
const hours = document.getElementById('hour');
const minutes = document.getElementById('minute');
const seconds = document.getElementById('second');

days.innerHTML=d<10?'0'+d:d;
hours.innerHTML=h<10?'0'+h:h;
minutes.innerHTML=m<10?'0'+m:m;
seconds.innerHTML=s<10?'0'+s:s;
}
setInterval(updateTIme,1000);