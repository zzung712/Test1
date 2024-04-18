

$(".menu>ul>li").click(function(){
 let i = $(this).attr('data-filter');
 // attr >> attribute : 호출하다.
 // this에 menu>ul>li값을 담은 후 data-filter 값을 호출하여 i에 담아준다.

 $(this).addClass("active")
 // this == .menu>ul>li를 정의한것
 // this에 addClass >> 새로운 클래스 값을 부여
 // addClass("active") >> css에서 배경색과 글자색이 적용되어있음.
 $(this).siblings().removeClass("active")
 // siblings() > 형제
 // removeClass() >> 클래스 제거
 // 클릭된 li를 제외한 나머지 형제들에 class active값을 제거

  $(".gallery").isotope({ filter: i });
  // gallery 안에 있는 class값 (odd, even)을 찾아서 분류해준다.
})

setTimeout(function(){
 $(".gallery").isotope('layout')
},100)

const $grid = $('.gallery').isotope({
 // options
 itemSelector : '.gallery_box',
 columnWidth: '.gallery_box',
 transitionDuration : '0.5s'
});

//첫번째 gallery_box를 클릭하면 popup_wrap과 p1이 떠야함.
// 두번째 gallery_box를 클릭하면 popup_wrap과 p2가 보여야함.
// p_close를 클릭하면 닫히기

$(".gallery_box").click(function(){
  //갤러리 박스를 클릭했을 때,
  let Index = $(".gallery_box").index($(this));
  //$(".gallery_box").index($(this)); >> 몇번째 갤러리 박스를 클릭했는지 입력받은 후 this에 저장
  //위에 저장 된 값을 Index라는 변수에 저장
  $("body").css("height","100%");
  $("body").css("overflow","hidden");
  $(".popup_wrap").css("display","block");
  $(".popup").hide().eq(Index).show();
  // $("popup").hide()>> 모든 팝업창은 가려둔 후
  //.eq(Index) >> equals >> 같다
  // 세번째 갤러리를 선택했을 경우 3번째를 저장 후 팝업도 3번 째 항목을 불러서 .show() 보여준다.
})

//.index() >> 항목을 찾아주는 메서드

$(".p_close").click(function(){
  $("body").css("height","auto");
  $("body").css("overflow","auto");
  $(".popup_wrap").css("display","none");
})
