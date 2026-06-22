let timers=[];

function createTimer(){
let input=document.getElementById("time");
let seconds=Number(input.value);

if(seconds<=0)return;

let timer={
time:seconds,
interval:null
};

timers.push(timer);
render();

input.value="";
}

function render(){
let div=document.getElementById("timers");
div.innerHTML="";

timers.forEach((timer,index)=>{
div.innerHTML+=`
<div class="timer">
<h3>${timer.time}s</h3>
<button onclick="startTimer(${index})">Start</button>
<button onclick="stopTimer(${index})">Stop</button>
<button onclick="removeTimer(${index})">Delete</button>
</div>`;
});
}

function startTimer(index){
let timer=timers[index];

if(timer.interval)return;

timer.interval=setInterval(()=>{

if(timer.time>0){
timer.time--;
render();
}else{
clearInterval(timer.interval);
timer.interval=null;
}

},1000);
}

function stopTimer(index){
let timer=timers[index];

clearInterval(timer.interval);
timer.interval=null;
}

function removeTimer(index){
clearInterval(timers[index].interval);
timers.splice(index,1);
render();
}
