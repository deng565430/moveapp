 

/*function donghua(){
				//读取本地存储，检查是否为首次启动
				var showGuide = plus.storage.getItem("lauchFlag");
				if(showGuide){ 
					//有值，说明已经显示过了，无需显示；
					//关闭splash页面；
					plus.navigator.closeSplashscreen();
					plus.navigator.setFullscreen(false);
					console.log(showGuide)
				}else{
					//显示启动导航
					mui.openWindow({
					    url:'shuffling.html',
					    id:'shuffling',
					    styles:{
					      top:'0px',//新页面顶部位置
					      bottom:'0px',//新页面底部位置
					    },
					    extras:{
					    },
					    createNew:false,//是否重复创建同样id的webview，默认为false:不重复创建，直接显示
					    show:{
					      autoShow:true,//页面loaded事件发生后自动显示，默认为true
					      //aniShow:slide-in-right,//页面显示动画，默认为”slide-in-right“；
					      //duration:animationTime//页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
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
				}
	
}*/


 mui.init({
          
                    subpages:[//先加载首页  
                        {  
                          url:'shuffling.html',  
                          id:'shuffling',  
                          styles:{  
                             top:'0',  
                             bottom:'0',
                        
                          },
                        }  
                    ],  
                    preloadPages:[//缓存其他页面  
                   		 {  
                          url:'info-register-1.html',  
                          id:'info-register-1',  
                          styles:{  
                             top:'0',  
                            bottom:'0'  
                          }  
                        },  
                    	{  
                          url:'home.html',  
                          id:'home',  
                          styles:{  
                             top:'60px',  
                            bottom:'60px'  
                          }  
                        },  
                        {  
                          url:'classify.html',  
                          id:'classify',  
                          styles:{  
                             top:'60px',  
                            bottom:'60px'  
                          }  
                        },  
                        {  
                          url:'destination.html',  
                          id:'destination',  
                          styles:{  
                             top:'60px',  
                            bottom:'60px'  
                          }  
                        },
                        {  
                          url:'panicBuying.html',  
                          id:'panicBuying',  
                          styles:{  
                             top:'60px',  
                            bottom:'60px'  
                          }  
                        },
                        {  
                          url:'info.html',  
                          id:'info',  
                          styles:{  
                             top:'60px',  
                            bottom:'60px'  
                          }  
                        },
                        {  
                          url:'view/city.html',  
                          id:'city.html',  
                          styles:{  
                             top:'0',  
                            bottom:'0'  
                          }  
                        },
                    ],
                       
                });
           
        <!--执行分页展示-->
        	  function plusReady(){
        	   // donghua() 
        	  	plus.webview.getWebviewById("home").show()
                 mui.plusReady(function(){
                 	
                 	plus.webview.getWebviewById("shuffling").hide()
                 	plus.webview.getWebviewById("info-register-1").hide()
                // 获取所有Webview窗口  
                var winAll=plus.webview.all();//获取所有窗体  
                //console.log(JSON.stringify(winAll))   
                var a1,a2,a3,a4,a5,a6;  
                //首先加载页面的时候显示主页
                mui("#footer").on("tap","#home",function(){//点击触发   
                    a1=plus.webview.getWebviewById("home");  
                    //console.log(JSON.stringify(a1))   
                    a1.show()  
                    a2.hide()//这一步必须有  
                    a3.hide()//这一步必须有  
                    a4.hide()
                    a5.hide()
                })  
                mui("#footer").on("tap","#classify",function(){//点击触发  
                    a2=plus.webview.getWebviewById("classify");  
                    a2.show()
                      
                })  
                mui("#footer").on("tap","#destination",function(){//点击触发  
                    a3=plus.webview.getWebviewById("destination");  
                    a3.show()  
                      
                })
                 mui("#footer").on("tap","#panicBuying",function(){//点击触发  
                    a4=plus.webview.getWebviewById("panicBuying");  
                    a4.show()  
                      
                })  
                 mui("#footer").on("tap","#info",function(){//点击触发  
                    a5=plus.webview.getWebviewById("info");  
                    a5.show()  
                      
                })
                
            });
           
             	
           }
             if(window.plus){
                plusReady();
               // console.log("window.plus");
            }else{
                document.addEventListener("plusready",plusReady,false);
                //console.log("plusReady");
            }
            
            
            /*打开主页*/
           
/*打开城市列表*/
//打开新窗口
	mui('#nav').on('tap','#citys', function() {
		mui.openWindow({
		    url:'view/city.html',
		    id:'citys',
		    styles:{
		      top:'0px',//新页面顶部位置
		      bottom:'0px',//新页面底部位置
		    },
		    extras:{
		    },
		    createNew:false,//是否重复创建同样id的webview，默认为false:不重复创建，直接显示
		    show:{
		      autoShow:true,//页面loaded事件发生后自动显示，默认为true
		      //aniShow:slide-in-right,//页面显示动画，默认为”slide-in-right“；
		      //duration:animationTime//页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
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
	
