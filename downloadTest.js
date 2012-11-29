var Interface = Class(aBase,
                  {
               onCreate : function(){
                  this.downLoadBar = null;
               },
               
               init : function(){
                
                this.downLoadBar = (new LoadingBar({x:150, y:280})).init();
                this.downLoadBar.setTexture("bar.png");
                this.downLoadBar.setPercent(0);
                uiSystem.m_pCurScene.addWidget(this.downLoadBar);

                this.label3 = (new Label({x:240,y:280})).init();
                this.label3.setText("下载js重启之后的label、图片和Button, 测断点续传点我->>>");
                this.label3.setFontSize(18);
                this.label3.setBeTouchAble(true);
                uiSystem.m_pCurScene.addWidget(this.label3);
                
                this.button = (new Button({x:260, y:280})).init();
	            this.button.setBeTouchAble(true);
	            this.button.addReleaseUpListener(gListenerFactory.createListenerWithType(2,this,this.buttonRelease));

               },

	            buttonRelease: function(sender, handler) {
	                       
	                handler.initHttp();
	            },
               
               
               initHttp: function() {
                            //--InitHttp 共用信息--
                            http_init();                                 //--初始化 http--
                            //var path = "/Users/lvyile/Downloads/";    //--下载资源需要保存的指定路径--
                            //http_setFileSavePath(path);
                            http_setAllowResumeForFileDownloads(true); //--是否断点续传--
                            http_setConnectTimeOut(15);                //--申请连接延迟15秒--
                            http_setTimeOut(15);                       //--下载断线重连超时15秒--
                            http_addHeader( "User_Agent : cclv" );      //--添加http头信息--
                            http_addHeader( "ContineLen : 1024" );     //--添加http头信息--
                            
                            addr ＝ "http://upyun.cocimg.com/SP2/2012_11_26/SPII-SDK_v0.1.4.part01.rar";
                            var action = "lvTestFromDownloadJS";              //--随便下一个普通的资源的时候就协议随便定义就行--
                            http_downloadRequest( addr,action );
                            
                            },               
               });

var gInterface = new Interface();