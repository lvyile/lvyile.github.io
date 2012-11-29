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
                this.label3.setText("我是下载js完成之后的label, 点击右侧开始下载大型文件，测断点续传->");
                this.label3.setFontSize(18);
                this.label3.setBeTouchAble(true);

                  uiSystem.m_pCurScene.addWidget(this.label3);
                  cc.log("load label....");                      
               }
               });

var gInterface = new Interface();