window.onload=function(){
    document.getElementById("표시").addEventListener( 'click' , function(){  
        random=Math.floor(Math.random()*50)+1
        랜덤(random);
    });
}

function 랜덤(a){
   return a
    
}
let sum=랜덤(a)


function 나열(div){
    for(i=1, i<=5; i++;){
        for(j=1, j<=4; j++;){
             sum = Math.floor(Math.random()*50)+1
        }
        
    }
    document.getElementById("입력").innerText=div;
}
