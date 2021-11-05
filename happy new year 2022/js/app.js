/*==============================================
     days, months, minutes, seconds couunter
===============================================*/

const happyNewYear = "1 January 2022";

function countDown(){
  // DOM selection
  const days = document.querySelector('#days');
  const hours = document.querySelector('.count-down #hours');
  const minutes = document.querySelector('.count-down #minutes');
  const seconds = document.querySelector('.count-down #seconds');

  


  const newYear = new Date(happyNewYear);
  const currentDay = new Date();

  const totalTime = (newYear - currentDay)/1000;
  const day = Math.floor(totalTime / 3600/24); //jode total time k 3600 deya bag day tahola amara hourse paya jabo and hourse k 24 deya bag dela day paya jabo
  const hour = Math.floor((totalTime/3600) % 24); //jode total time k 3600 deya bag day tahola amara hourse paya jabo and hourse k 24 hourse % deya bag dela 1 din paya jabo
  const minute = Math.floor((totalTime/60) % 60); //jode total time k 60 deya bag deya and 60 % korlai minute paya jabo
  const second = Math.floor((totalTime) % 60);

 
  days.innerHTML = day;
  hours.innerHTML = hour;
  minutes.innerHTML = minute;
  seconds.innerHTML = second;
  
}
countDown();
setInterval(countDown, 1000);

