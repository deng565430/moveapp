	//获得slider插件对象  轮播动画
	var gallery = mui('.mui-slider');
	gallery.slider({
	  interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
	});
	//打开新窗口
	mui('#dianjiyouwan').on('tap','#zhoubianyou',function() {
		//console.log(2)
		mui.openWindow({
		    url:'view/zhoubian.html',
		    id:'zhoubian.html',
		    styles:{
		      top:'0px',//新页面顶部位置
		      bottom:'0px',//新页面底部位置
		    },
		    extras:{
		    },
		    createNew:false,//是否重复创建同样id的webview，默认为false:不重复创建，直接显示
		    show:{
		      autoShow:true,//页面loaded事件发生后自动显示，默认为true
		     // aniShow:animationType,//页面显示动画，默认为”slide-in-right“；
		     // duration:animationTime//页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
		    },
		    waiting:{
		      autoShow:true,//自动显示等待框，默认为true
		      title:'正在加载...',//等待对话框上显示的提示内容
		      options:{
		      //  width:waiting-dialog-widht,//等待框背景区域宽度，默认根据内容自动计算合适宽度
		      //  height:waiting-dialog-height,//等待框背景区域高度，默认根据内容自动计算合适高度
		      }
		    }
		})
	});
	mui.init({
		swipeBack:true //启用右滑关闭功能
	});
	//下拉加载
	mui.init({  
              pullRefresh : {  
                container:".pulldown",//待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等  
                up : {  
                  height:50,//可选.默认50.触发上拉加载拖动距离  
                  auto:true,//可选,默认false.自动上拉加载一次  
                  contentrefresh : "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容  
                  contentnomore:'没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；  
                  callback :more //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；  
                }  
              }  
            });  
            var page=1;  
            function more(page){  
               /*document.getElementById('pulldownContents').innerHTML = page
                page+=1  */
                this.endPullupToRefresh(false);//false 还有更多数据  true还有更多数据  
            }
	
mui.init({
	swipeBack:true //启用右滑关闭功能
});