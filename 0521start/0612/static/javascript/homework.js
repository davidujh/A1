// for문 - 반복 횟수가 정해져 있는경우
// while문 - 반복횟수가 정해져 있지 않은 경우

// innerHTML은 변수와 비슷하다
//a=10; a=20; 인 경우에 변수에 10이 남아있지 않는다

function print(){
    let div = document.getElementById("result");

    div.innerHTML = makeRandom();
}



function makeRandom(){
    let 내용='';



    for(let i=0; i<5; i++){
        var line='';
        for(let j=0; j<4; j++){
            let randomNumber = Math.floor(Math.random() * 50 ) +1
            line = line+' '+randomNumber;
        }   
        내용 = 내용 + line+'<br>';
    }
    return 내용;
}
window.onload=function(){

}