
//localise the relod button 
const reload1 = document.getElementsByClassName("reload")[0];
const reload2 = document.getElementsByClassName("reload")[1];
const reload3 = document.getElementsByClassName("reload")[2];
//localise the buttons 
const btn1=document.getElementsByClassName("button")[0];
const btn2=document.getElementsByClassName("button")[1];
const btn3=document.getElementsByClassName("button")[2];
//localise the ocurence
const occ1=document.getElementsByClassName("occ")[0];
const occ2=document.getElementsByClassName("occ")[1];
const occ3=document.getElementsByClassName("occ")[2];


//events handlers of the reload 
reload1.addEventListener("click",function(){
   occ1.innerHTML=33;
   document.getElementById("card1").style.removeProperty('background-color');
});
reload2.addEventListener("click",function(){
    occ2.innerHTML=33;
    document.getElementById("card2").style.removeProperty('background-color');
 });
reload3.addEventListener("click",function(){
    occ3.innerHTML=33;
    document.getElementById("card3").style.removeProperty('background-color');
 });
 //decrementing the counter 1
 btn1.addEventListener("click",function(){
     
     var x=parseInt(occ1.innerHTML) ;
     if (x>0) {
    x--;
    occ1.innerHTML=x;
   }else{
    document.getElementById("card1").style.backgroundColor="rgb(55, 161 ,85)";
    
   }
  
})
//decrementing the counter 2
btn2.addEventListener("click",function(){
     
    var x=parseInt(occ2.innerHTML) ;
    if (x>0) {
   x--;
   occ2.innerHTML=x;
  }else{
   document.getElementById("card2").style.backgroundColor="rgb(55, 161 ,85)";
   
  }
 
})

//decrementing the counter 3
btn3.addEventListener("click",function(){
     
    var x=parseInt(occ3.innerHTML) ;
    if (x>0) {
   x--;
   occ3.innerHTML=x;
  }else{
   document.getElementById("card3").style.backgroundColor="rgb(55, 161 ,85)";
   
  }
 
})