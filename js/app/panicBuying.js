mui.init();

var happyWeek=document.getElementById("happyWeek");
var everyDayHappy=document.getElementById("everyDayHappy");
var yiYuanHappy=document.getElementById("yiYuanHappy");

var panicBuyingContent=document.getElementsByClassName("panicBuyingContent")[0];
var everyDay=document.getElementsByClassName("everyDay")[0];
var yiYuan=document.getElementsByClassName("yiYuan")[0];

var hourss=2;
var minute=59;
var secondss=59;

var hours=document.getElementsByClassName("hour");
var minutes=document.getElementsByClassName("minutes");
var seconds=document.getElementsByClassName("seconds");
//倒计时
//秒的定时器
var timer=setInterval(function(){
    for(var i=0;i<hours.length;i++){
        hours[i].innerText=hourss;
    };
    for(var i=0;i<minutes.length;i++){
        minutes[i].innerText=minute;
    };
    for(var i=0;i<seconds.length;i++){
        seconds[i].innerText=secondss;
    }
    secondss--;
    if(secondss<0){
        minute--;
        secondss=59;
    }
    if(minute<0){
        hourss--;
        minute=59;
    }
    if(hourss==0&&minute==0&&secondss==0){
        clearInterval(timer);
        panicBuyingContent.innerText="很抱歉，暂时没有能抢购的物品";
    };
},1000);

//天天特价里面的倒计时
var everyDayhour=12;
var everyDayminute=30;
var everyDaysecond=59;
var everyDayHour=document.getElementsByClassName("everyDayhour");
var everyDayMinute=document.getElementsByClassName("everyDayminute");
var timers=setInterval(function(){
    for(var i=0;i<everyDayHour.length;i++){
        everyDayHour[i].innerText=everyDayhour;
    };
    for(var i=0;i<everyDayMinute.length;i++){
        everyDayMinute[i].innerText=everyDayminute;
    };
    everyDaysecond--;
    if(everyDaysecond<0){
        everyDaysecond=59;
        everyDayminute--;
    };
    if(everyDayminute<0){
        everyDayminute==59;
        everyDayhour--;
    }
    if(everyDayhour==0&&everyDayminute==0){
        clearInterval(timers);
        everyDay.innerText="Sorry，特价已经抢完，请等待下一批特价商品的到来！";
    }
},1000);


//页面的切换
mui(".everyDaynav").on("tap","#happyWeek",function(){
    everyDay.style.display="none";
    yiYuan.style.display="none";
    panicBuyingContent.style.display="block";

    happyWeek.style.background="#fff";
    everyDayHappy.style.background="rgb(229,229,229)";
    yiYuanHappy.style.background="rgb(229,229,229)";
});
mui(".everyDaynav").on("tap","#everyDayHappy",function(){
      yiYuan.style.display="none";
      panicBuyingContent.style.display="none";
      everyDay.style.display="block";

      happyWeek.style.background="rgb(229,229,229)";
      everyDayHappy.style.background="#fff";
      yiYuanHappy.style.background="rgb(229,229,229)";
  });
mui(".everyDaynav").on("tap","#yiYuanHappy",function(){
    everyDay.style.display="none";
    panicBuyingContent.style.display="none";
    yiYuan.style.display="block";

    happyWeek.style.background="rgb(229,229,229)";
    everyDayHappy.style.background="rgb(229,229,229)";
    yiYuanHappy.style.background="#fff";
});

//天天特价上面的more
var more=document.getElementsByClassName("more")[0];
var everyDayMore=document.getElementsByClassName("everyDayMore")[0];
var everyDayGt=document.getElementsByClassName("everyDayGt")[0];
var everyDayContent=document.getElementsByClassName("everyDayContent")[1];
mui(".everyDayGt").on("tap","p",function(){
    console.log(more.innerText);
    everyDayContent.style.display="block";
    everyDayGt.style.display="none";
    more.innerText="收起>>"
});
mui(".everyDayMore").on("tap","button",function(){
    if(more.innerText=="更多>>"){
        everyDayContent.style.display="block";
        everyDayGt.style.display="none";
        more.innerText="收起>>";
    }else{
        everyDayContent.style.display="none";
        everyDayGt.style.display="block";
        more.innerText="更多>>";
    }
});
mui(".panicBuyingContent").on("tap","li",function(){
    location.href="spanicBuying-detail.html";
});
mui(".everyDayContent").on("tap","li",function(){
    location.href="spanicBuying-detail.html";
})
