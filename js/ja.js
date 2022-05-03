const startingMinutes=1;
let time=startingMinutes*60;

const countdown=document.getElementById('countdown');

setInterval(updateCoultdown,1000);

function updateCoultdown(){
    let minutes=Math.floor(time/60);
    let seconds=time%60;

    seconds=seconds<10 ? '0'+seconds:seconds;
    minutes=minutes<10 ? '0'+minutes:minutes;
    countdown.innerHTML=`${minutes}:${seconds}`;
    time--;
    if(time==0){
        time=startingMinutes*60;
    }
}



const days=document.querySelector('#days');
const hours=document.querySelector('#hours');
const minutes=document.querySelector('#minutes');
const seconds=document.querySelector('#seconds');




let currentDate=new Date().getFullYear();
const nextYear=new Date(`January 01 ${currentDate +1} 00:00:00`);



const deadline = new Date(2022, 03, 23);
const deadline1 = new Date(2022, 03, 23);

function upop(){
  

    const currentTime=new Date();
    console.log(currentTime);
    const diff=deadline-currentTime;
    
    
    const daysLeft =Math.floor(diff/1000/60/60/24);
    console.log(daysLeft);
    
    let hoyrsLeft=Math.floor(diff/1000/60/60)%24;
    
    const minutesLeft=Math.floor(diff/1000/60)%60;
    
    const secondsLeft=Math.floor(diff/1000)%60;
    
    console.log(daysLeft,hoyrsLeft,minutesLeft,secondsLeft);
    
    hoyrsLeft=hoyrsLeft<10?'0'+hoyrsLeft:hoyrsLeft;
    days.innerHTML=daysLeft;
    hours.innerHTML=hoyrsLeft;
    minutes.innerHTML=minutesLeft;
    seconds.innerHTML=secondsLeft;
   
   

}

upop();
setInterval(upop,1000);

