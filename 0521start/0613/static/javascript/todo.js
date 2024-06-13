$(function(){
    $("#enroll").click(function(){
        let todo =$("#work").val();
        let time =$("#time").val();
        let state =$("#state").val();
        addList(todo,time,state);
        

    });

    
    $("#state").keyup(function(){
        var stat = $("#state").val();
        console.log(stat);
        if(stat === "완료" || stat === "진행중"){
            $("#enroll").removeAttr('disabled');
            
        }else{
            $("#enroll").attr('disabled','disabled');
           
        }
    });
   


});
function addList(todo,time,state){
    $(".todo").append('<li>'+todo+'<li>');
    $(".todoTime").append('<li>'+time+'<li>');
    $(".todoState").append('<li>'+state+'<li>');
}

