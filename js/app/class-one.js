//图片轮播

	//获得slider插件对象  轮播动画
	var gallery = mui('.mui-slider');
	gallery.slider({
	  interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
	});
	
//四小板块
	
    	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
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
            
