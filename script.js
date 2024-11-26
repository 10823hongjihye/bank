//1첫번째 문제
//메인메뉴안에 있는 li태그한테 마우스를 올리면, sub메뉴 등장 (+마우스가 떠나면, sub사라짐)
$(".main-menu>li").mouseenter(function(){
    $(this).children(".sub-menu").stop().show();
})
$(".main-menu>li").mouseleave(function(){
    $(this).children(".sub-menu").stop().hide();
})


//2번째 문제
$(".gallery").hide();

//갤러리 버튼을 클릭하면 갤러리 영역이 보이고 공지사항 영역이 사라진다.
$(".btn-gallery").click(function(){
    $(".gallery").show();
    $(".news").hide();
})
//공지사항 버튼을 클릭하면 공지사항 영역이 보이고 갤러리 영역이 사라진다.
$(".btn-news").click(function(){
    $(".news").show();
    $(".gallery").hide();
})





//세번째 문제
//첫번째 공지사항(open-modal)을 클릭하면, modal창이 나타난다.
$(".open-modal").click(function(){
    $(".modal").show();
})
//닫기 버튼(close-modal)을 클릭하면, modal창이 사라진다.
$(".close-modal").click(function(){
    $(".modal").hide();
})