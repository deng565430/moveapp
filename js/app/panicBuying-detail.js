mui.init();
var gallery = mui('.mui-slider');
gallery.slider({
    interval:3000//自动轮播周期，若为0则不自动播放，默认为0；
});
var liJianNone=document.getElementsByClassName("liJianNone")[0];
mui(".teMai").on("tap",".liJian",function(){
    liJianNone.style.display="block";
});
mui(".liJianNone").on("tap",".liJianNone1",function(){
    liJianNone.style.display="none";
});
var detailNav=document.getElementsByClassName("detailNav")[0];
var mTop=detailNav.offsetTop;
var sTop=0;
var mm=document.getElementsByClassName("detail1")[0];
var aa=document.getElementsByClassName("detail2")[0];
var bb=document.getElementsByClassName("detail3")[0];
document.body.onscroll=function(){
   sTop=document.body.scrollTop;
    if(sTop>=515){
        detailNav.style.position="fixed";
        detailNav.style.top="-.7rem";
    }else{
        detailNav.style.position="static";
    }
    if(sTop>=0&&sTop<980){
        mm.getElementsByTagName("a")[0].style.color="blue";
        mm.style.borderBottom=".3rem solid blue";
        aa.getElementsByTagName("a")[0].style.color="black";
        aa.style.borderBottom="none";
        bb.getElementsByTagName("a")[0].style.color="black";
        bb.style.borderBottom="none";
    }else if(sTop>=980&&sTop<1400){
        mm.getElementsByTagName("a")[0].style.color="black";
        mm.style.borderBottom="none";
        aa.getElementsByTagName("a")[0].style.color="blue";
        aa.style.borderBottom=".3rem solid blue";
        bb.getElementsByTagName("a")[0].style.color="black";
        bb.style.borderBottom="none";
    }else{
        mm.getElementsByTagName("a")[0].style.color="black";
        mm.style.borderBottom="none";
        aa.getElementsByTagName("a")[0].style.color="black";
        aa.style.borderBottom="none";
        bb.getElementsByTagName("a")[0].style.color="blue";
        bb.style.borderBottom=".3rem solid blue";
    }
};
mui(".detailLunbo").on("tap",".back",function(){
    location.href="panicBuying.html";
})



