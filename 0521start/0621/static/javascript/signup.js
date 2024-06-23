

$(function(){
    //회원가입 버튼클릭 이벤트 등록
    // $("signup").on('click',requiredCheck)
    $("signup").on('click',function(){

        // alert($("input[name=interest]").val())
        // alert(interest)
        // $("#signupForm").submit();
        let itr = $("input[name=interest]Lchecked");
        let value=[];
        for( var i=0; i<itr.length; i++){
            value.push(itr[i].val());
        }

        
    })
})
function requiredCheck(){// 필수 입력을 모두 입력했는가?
    var id = $("#userId"); //id.val()
    var pw = $("userPw");
    var re = $("pwRe");
    var email = $("email");
    var tel = $("tel");
    var addr = $("addr");

    if(id.val() == ''){
        alert("아이디를 입력하세요");
        id.focus(); //아이디 input태그에 포커스 넣기
    }else if(pw.val() == ''){
        alert("비밀번호를 입력하세요");
        pw.focus(); re.val
    }else if(re.val() == ''){
        alert("비밀번호를 다시 입력해주세요")
        re.focus();
    }else if(pw.val()!=re.val()){
        alert("비밀번호가 잘못되었습니다.")
        pw.val(''); re.val('');
        pw.focus
    }else if(email.val()==''){
        alert("이메일을 입력하세요")
        email.focus();
    }else if(tel.val() == ''){
        alert("연락처를 입력하세요")
        tel.focus();
    }else if(addr.val()== ''){
        alert("주소를 입력하세요");
        addr.focus();
    }else{
        $("#signupForm").submit();
    }

}