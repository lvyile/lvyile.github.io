var Interface = Class(aBase,
                      {
                   onCreate : function(){
                      this.downLoadBar = null;
                   },
                   
                   init : function(){
//*
                      this.downLoadBar = new LoadingBar();
                      this.downLoadBar.init();
                      this.downLoadBar.setTexture("bar.png");
                      var barPos = new UIPoint();
                      barPos.x = 0;
                      barPos.y = 280;
                      this.downLoadBar.setPosition(barPos);
                      this.downLoadBar.setPercent(80);
                      uiSystem.m_pCurScene.addWidget(this.downLoadBar);
                      cc.log("load loadingbar");
                     //*/ 
                      this.label = new Label();
                      this.label.init();
                      var labelPos = new UIPoint();
                      labelPos.x = 240;
                      labelPos.y = 280;
                      this.label.setPosition(labelPos);
                      this.label.setText("下载js完成之后的label ");
                      this.label.setFontSize(20);
                      this.label.setBeTouchAble(true);
                      this.label.setTouchScaleChangeAble(true);
                      uiSystem.m_pCurScene.addWidget(this.label);
                      cc.log("load label....");                      
                   }
                   });

var gInterface = new Interface();