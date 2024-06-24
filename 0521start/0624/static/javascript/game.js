



function timeStart(){
    setInterval(function(){
        time++;
        $("#step").text(`${time}초`)
    }, 1000);
}

function imgClick(){
    if(!clickStop) return;//두번 이상 연속 클릭 방지

    var idx = $(".item").index($(this));
    var clickImg =  $(".item").eq(idx).find("img");//클릭한 div의 img 태그
    
    //클릭한 이미지 화면에 표시
    $clickIng.removeClass("hide")
    $clickIng.addClass("select");

    //현재 홤녀에 클릭해서 보이는 이미지는 imgPlace배열의

    selecting.push({이미지 : imgPlace[idx] , div:idx});

    if(selectImg.length == 2){
        if (matching()){
            $(".item").eq(seleckImg[0].div).find("img").removeClass("select");
            $(".item").eq(seleckImg[1].div).find("img").removeClass("select")

            $(".item").eq(selectImg[0].div).off("click");
            $(".item").eq(selectImg[1].div).off("click");
        }else{
            clickstop =false
            setTimeout(function(div1,div2){
                $(".item").eq(seleckImg[0].div).find("img").removeClass("select");
                $(".item").eq(seleckImg[1].div).find("img").removeClass("select");
                $(".item").eq(seleckImg[0].div).find("img").addClass("hide");
                $(".item").eq(seleckImg[1].div).find("img").addClass("hide");
            clickstop = true
            })
        }
        selectImg = [];
    }
}

function updateState(){
    clickCount++;
    $("#score").text(`점수 : ${score}점`)
    $("#click").text(`클릭함수 : ${clickCount}/30`);

    if(clickCount ==31){
        (".item").off("click");
        alert("횟수초과로 게임오버")
    }
}


function matching(){
    if(selectImg[0].이미지 === selectImg[1].이미지)
        return true;
    else
        return false;
}