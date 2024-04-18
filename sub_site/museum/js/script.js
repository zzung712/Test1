let Wrap = document.querySelector(".wrap");
let MBtn = document.querySelector("#mo_btn");
let SideMenuWrap = document.querySelector(".side_menu_wrap");
let SideMenu = document.querySelector(".side_menu");
let SideX = document.querySelector(".side_x");

function MBtnClick(){
 Wrap.style.height="100vh";
 Wrap.style.overflow="hidden";
 SideMenuWrap.style.zIndex="100";
 SideMenu.style.right="0";
 SideMenu.style.transition="all 0.5s";
}
MBtn.addEventListener("click",MBtnClick);

function SideXClick(){
 Wrap.style.height="auto";
 Wrap.style.overflow="hidden";
 SideMenuWrap.style.zIndex="-1";
 SideMenuWrap.style.transition="all 0.5s";
 SideMenu.style.right="-350px";
 SideMenu.style.transition="all 0.5s";
}
SideX.addEventListener("click",SideXClick);

$(".s_menu>ul>li").click(function(){
   // 사이드메뉴를 클릭했을 때,
   let Ssubmenu = $(this).children(".s_submenu");
   //사이드 메뉴의 서브메뉴가 한개씩 내려옴.
   $(".s_submenu").not(Ssubmenu).slideUp();
   // 다른 사이드메뉴를 클릭했을 때, 내려와 있는 서브메뉴는 올라가야함.
   Ssubmenu.stop().slideToggle();
   // 서브메뉴가 토글(스위치)되어 클릭하면 슬라이드 되서 내려오고 클릭하면 슬라이드 되서 올라감.
   $(this).toggleClass("active");
   // 클릭했을때, 새로운 스위치클래스 부여
})