




let box1=document.getElementById("item1");
let box2=document.getElementById("item2");
let box3=document.getElementById("item3");
let box4=document.getElementById("item4");
let box5=document.getElementById("item5");
let box6=document.getElementById("item6");
let box7=document.getElementById("item7");
let box8=document.getElementById("item8");
let box9=document.getElementById("item9");

let a1=0;
let a2=0;
let a3=0;
let a4=0;
let a5=0;
let a6=0;
let a7=0;
let a8=0;
let a9=0;
let id;
let bgcolor=["none","#0003ff36","#ff00342c"]
let bgcolorno;






function rule1(){    
document.getElementById("rulebox").innerHTML="Find the dependence of one square upon others and you will solve this puzzle. Each cell changes its neighbours too. Try to change the squares symmetrically. Create normal picture not red nor blue. There is no entry stranger"
document.getElementById("b").innerHTML=
`<button type="button" id="rulebutton" onclick="rule2()">Rule</button>`
}

function rule2(){   
document.getElementById("rulebox").innerHTML=""
document.getElementById("b").innerHTML=
`<button type="button" id="rulebutton" onclick="rule1()">Rule</button>`
}





let start=()=>{


a1= Math.floor(Math.random()*3)
a2= Math.floor(Math.random()*3)
a3= Math.floor(Math.random()*3)
a4= Math.floor(Math.random()*3)
a5= Math.floor(Math.random()*3)
a6= Math.floor(Math.random()*3)
a7= Math.floor(Math.random()*3)
a8= Math.floor(Math.random()*3)
a9= Math.floor(Math.random()*3)

bgcolorno=a1%3;
box1.style.background=bgcolor[bgcolorno];

bgcolorno=a2%3;
box2.style.background=bgcolor[bgcolorno];

bgcolorno=a3%3;
box3.style.background=bgcolor[bgcolorno];

bgcolorno=a4%3;
box4.style.background=bgcolor[bgcolorno];

bgcolorno=a5%3;
box5.style.background=bgcolor[bgcolorno];

bgcolorno=a6%3;
box6.style.background=bgcolor[bgcolorno];

bgcolorno=a7%3;
box7.style.background=bgcolor[bgcolorno];

bgcolorno=a8%3;
box8.style.background=bgcolor[bgcolorno];

bgcolorno=a9%3;
box9.style.background=bgcolor[bgcolorno];





let i=1
while(i<10){
let id="item"+i    
document.getElementById(id).addEventListener("click",touch)
console.log(id)
i++    
}
document.getElementById("button").innerHTML=null;


}






function touch(){
console.log(1)    
id=event.target.id;       

if(id=="item1"){

a1=a1+1
bgcolorno=a1%3;
box1.style.background=bgcolor[bgcolorno];

a2=a2+1
bgcolorno=a2%3;
box2.style.background=bgcolor[bgcolorno];

a4=a4+1
bgcolorno=a4%3;
box4.style.background=bgcolor[bgcolorno];

win()

}    


else if(id=="item2"){

a2=a2+1
bgcolorno=a2%3;
box2.style.background=bgcolor[bgcolorno];

a1=a1+1
bgcolorno=a1%3;
box1.style.background=bgcolor[bgcolorno];

a3=a3+1
bgcolorno=a3%3;
box3.style.background=bgcolor[bgcolorno];

win()

}    


else if(id=="item3"){

a3=a3+1
bgcolorno=a3%3;
box3.style.background=bgcolor[bgcolorno];

a2=a2+1
bgcolorno=a2%3;
box2.style.background=bgcolor[bgcolorno];

a6=a6+1
bgcolorno=a6%3;
box6.style.background=bgcolor[bgcolorno];

win()

}    


else if(id=="item4"){

a4=a4+1
bgcolorno=a4%3;
box4.style.background=bgcolor[bgcolorno];

a1=a1+1
bgcolorno=a1%3;
box1.style.background=bgcolor[bgcolorno];

a7=a7+1
bgcolorno=a7%3;
box7.style.background=bgcolor[bgcolorno];

win()
}    



else if(id=="item5"){

a5=a5+1
bgcolorno=a5%3;
box5.style.background=bgcolor[bgcolorno];

a2=a2+1
bgcolorno=a2%3;
box2.style.background=bgcolor[bgcolorno];

a4=a4+1
bgcolorno=a4%3;
box4.style.background=bgcolor[bgcolorno];

a6=a6+1
bgcolorno=a6%3;
box6.style.background=bgcolor[bgcolorno];

a8=a8+1
bgcolorno=a8%3;
box8.style.background=bgcolor[bgcolorno];

win()

}



else if(id=="item6"){

a6=a6+1
bgcolorno=a6%3;
box6.style.background=bgcolor[bgcolorno];

a3=a3+1
bgcolorno=a3%3;
box3.style.background=bgcolor[bgcolorno];

a9=a9+1
bgcolorno=a9%3;
box9.style.background=bgcolor[bgcolorno];

win()

}    



else if(id=="item7"){

a7=a7+1
bgcolorno=a7%3;
box7.style.background=bgcolor[bgcolorno];

a4=a4+1
bgcolorno=a4%3;
box4.style.background=bgcolor[bgcolorno];

a8=a8+1
bgcolorno=a8%3;
box8.style.background=bgcolor[bgcolorno];

win()

}    




else if(id=="item8"){

a8=a8+1
bgcolorno=a8%3;
box8.style.background=bgcolor[bgcolorno];

a7=a7+1
bgcolorno=a7%3;
box7.style.background=bgcolor[bgcolorno];

a9=a9+1
bgcolorno=a9%3;
box9.style.background=bgcolor[bgcolorno];


win()
}    


else if(id=="item9"){

a9=a9+1
bgcolorno=a9%3;
box9.style.background=bgcolor[bgcolorno];

a6=a6+1
bgcolorno=a6%3;
box6.style.background=bgcolor[bgcolorno];

a8=a8+1
bgcolorno=a8%3;
box8.style.background=bgcolor[bgcolorno];

win()
}    







    

}    
   
   
      
    
    
    




let win=()=>{



    
if( a1%3==0 && a2%3==0 && a3%3==0 && a4%3==0 && a5%3==0 && a6%3==0 && a7%3==0 && a8%3==0 && a9%3==0){
 
let i=1
while(i<10){
let id="item"+i    
document.getElementById(id).removeEventListener("click",touch)
console.log(id)
i++    
}
document.getElementById("button").innerHTML=' <p id="win">You Won</p><button id="start" onclick="start()">Start</button>';
 
    
}
    
    
    
    
    
    
    
}







    
    
    
    
    



