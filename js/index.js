//var totalSum=sum(7,2);
//console.log(totalSum);

let cliks=0;

const TIMEOUT=5000;


const display=document.querySelector('#display');
const button=document.querySelector('#button');
const counter=document.querySelector('#counter');

const button1=document.querySelector('#button1');


button.onclick=start;
button1.onclick=restart;


function start(){
const startTime=Date.now();

display.textContent=formatTime(TIMEOUT);


    button.onclick=()=>counter.textContent=++cliks;

const interval=setInterval(()=>{
    const delta=Date.now()-startTime;
    display.textContent=formatTime(TIMEOUT-delta);
},100);

    const timeout=setTimeout(()=>{
        button.onclick=null;
        display.textContent='Game Over';
        button.textContent='Clicks';
        clearInterval(interval);
        clearTimeout(timeout);
      
    },TIMEOUT)
}


function formatTime(ms){
    return Number.parseFloat(ms/1000).toFixed(2);
}

function restart(){
    button.textContent='Clickrs';
    display.textContent='';
    counter.textContent=0;
    cliks=0;
    if( button.onclick==null){
        button.onclick=()=>counter.textContent=++cliks;
        start();
    }
}