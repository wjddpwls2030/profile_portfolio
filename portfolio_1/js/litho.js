;(function($){
    var hongo = {
        btn: 0,
        
        init:function(){
            this.scrollEventFn();
            this.headerFn();
            this.section1Fn();
            this.section2Fn();
            this.section3Fn();
            this.section4Fn();
            this.section5Fn();
            this.section6Fn();
            this.section7Fn();
            this.section8Fn();
            this.section9Fn();
            this.section10Fn();
            this.footerFn();
        },
        scrollEventFn: function(){
          var scrollOld = 0;
          var scrollNew = 0;
          var $win      = $(window);
          var result    = null;
          var $header   = $('#header');
          var that = this; 

          function scrollEventfn(){

                  scrollNew = $win.scrollTop();
                 
                  var scr  = function(){                 
                      result = scrollOld-scrollNew > 0 ? 'UP' : 'DOWN';                        
                  }
                  
                  scr();                  
                  
                  if( $win.scrollTop() == 0 ){
                    $header.removeClass('addHide');
                    $header.removeClass('addWhite');
                  }
                  else{
                      //스크롤 올릴 때
                      if(result == 'UP'){
                        if( that.btn == 1 ){
                          $header.removeClass('addHide');
                          $header.addClass('addWhite');
                        }
                        else{
                          $header.removeClass('addHide');
                          $header.addClass('addWhite');
                        }

                      }
                      //스크롤 내릴 때
                      if(result == 'DOWN'){
                        if( that.btn == 1 ){
                          $header.removeClass('addWhite');
                          $header.removeClass('addHide'); 
                        }
                        else{
                          $header.removeClass('addWhite');
                          $header.addClass('addHide');   
                        }
                      }
                  }
                  scrollOld = scrollNew;
              }

              $win.scroll(function(){
                scrollEventfn();
              });
        },

        headerFn:function(){
            var $window    = $(window);
            var $mainBtn       = $('#header .main-menu');
            var $navUlLi       = $('#header #nav > ul > li');
            var $sub           = $('#header .sub');
            var $subBtn        = $('#header .sub-btn');
            var $subSub        = $('#header .sub-sub');
            var $mobileBtn     = $('.mobile-btn');
            var $bar           = $('.bar');
            var $nav           = $('#nav');
            var mobile         = 0;
            var pc             = 0;

            var that = this;


            //980px 초과
            function pcEventFn(){                   
              $nav.stop().show();
              $sub.stop().hide();
              $subSub.stop().hide();
              $nav.css({display:'inline-block'});

                $mainBtn.on({
                    mouseenter:function(event){
                    event.preventDefault();
                    $(this).next().stop().slideDown(400);
                    }
                });
                    
                $navUlLi.on({
                    mouseleave:function(event){
                      event.preventDefault();
                      $sub.stop().slideUp(400);
                      $subSub.stop().hide();
                    }
                });
                //서브서브
                $subBtn.on({
                    mouseenter:function(event){
                        event.preventDefault();
                        $subSub.stop().hide();
                        $(this).next().stop().show();
                    }    
                });

                $navUlLi.on({
                    mouseleave:function(event){
                        event.preventDefault();
                        $subSub.stop().hide();
                    }
                });
            } //PC 이벤트 종료

            //980 이하
            function mobileEventFn(){
              $sub.stop().hide();
              $subSub.stop().show();
              $bar.removeClass('addMobile');
              $nav.stop().slideUp(0);

              //이벤트 삭제하기
              $mainBtn.off('mouseenter');
              $navUlLi.off('mouseleave');
              $subBtn.off('mouseenter');
              $navUlLi.off('mouseleave');
              $subSub.off('mouseleave');
              
              
            }


              function pcMobileFn(){
                if( $window.innerWidth() > 980 ){                    
                  pc=1;
                  mobile=0;
                  pcEventFn();
                  that.btn = 0;
                }
                else{
                  pc=0;
                  mobile=1;
                  mobileEventFn();
                } 
              }
              setTimeout(pcMobileFn,100);
              
              //resize-pc/mobile
              $window.resize(function(){
                pcMobileFn();                  
              });
              mobileEventFn();

              //메인메뉴 버튼
              $mainBtn.on({
                click:function(event){
                  event.preventDefault();                      
                  if(mobile==1){
                    $sub.stop().slideUp(300);
                    $(this).next().stop().slideToggle(300);
                  }                  
                }
              });

              //3선메뉴 (햄버거메뉴)
              $mobileBtn.on({
                click:  function(event){
                  event.preventDefault();
                  $bar.toggleClass('addMobile');   
                  $nav.stop().slideToggle(300);

                  that.btn ==0 ? that.btn=1 :that.btn = 0;
                }
              });
            
              
                
                      
        },
        
        section1Fn:function(){
           
            var $slide     = $('#section1 .slide');
            var $window    = $(window);
            var $winW      = $(window).width();
            var $winH      = $(window).height();
            var $pageBtn   = $('#section1 .page-btn');
            var $slideWrap = $('#section1 .slide-wrap');
            var $slideView = $('#section1 .slide-view');
            var $section1  = $('#section1');
            var cnt        = 0;
            var n          = $('#section1 .slide').length-2;
            var setId      = null;
            var setId2     = null;
  
            function resizeFn(){
              $winW = $(window).width();                                
              $slide.css({width:$winW});
              $winH = $(window).height();

              if( window.orientation == 0 || window.orientation == 180  ){
                $winH = $winH;
              }
              else if( window.orientation == 90 || window.orientation == -90 ){        
                if($winW > 980){ 
                  $winH = $winH;
                }
                else{
                  $winH = 600;
                }
              }   

              $section1.css({width:$winW, height:$winH});
              mainSlideFn();
            }

            resizeFn();
            setTimeout(resizeFn, 100);

            $window.resize(function(){                
              setTimeout(resizeFn,100);
            });
                
                //1. 메인슬라이드함수
                function mainSlideFn(){
                  $slideWrap.stop().animate({left:- $winW*cnt }, 600,'easeInOutExpo',function(){
                    if(cnt>n-1){cnt=0}
                    if(cnt<0){cnt=n-1}
                    $slideWrap.stop().animate({left:- $winW*cnt }, 0);
                  });
                  pageBtnColorEventFn(); 
                }
  
                //2-1. 다음 슬라이드 카운트 함수
                function nextSlideCountFn(){
                    cnt++;
                    mainSlideFn(); 
                }
                
                //2-2. 이전 슬라이드 카운트 함수
                function prevSlideCountFn(){
                    cnt--;
                    mainSlideFn(); 
                }
  
                //3-1 페이지 버튼 이벤트
                function pageBtnColorEventFn(){
 
                  $pageBtn.removeClass('addPage');
                  $pageBtn.eq(cnt>n-1?0:cnt).addClass('addPage');
                }
                pageBtnColorEventFn(); 
                //3-2 페이지 버튼 클릭 이벤트
                 
                  $pageBtn.each(function(idx){
                    $(this).on({ 
                      click:function(){
                        cnt = idx;
                        mainSlideFn() 
                      }
                    });
                  });

                //4.터치 스와이프
                  $slideView.swipe({
                    swipeLeft:function(e){ 
                      e.preventDefault();
                      pauseTimerFn();
                      if( !$slideWrap.is(':animated')){
                        nextSlideCountFn();
                      }
                    },
                    swipeRight:function(e){
                      e.preventDefault();
                      pauseTimerFn();
                      if( !$slideWrap.is(':animated')){
                        prevSlideCountFn();
                      }
                    }
                  });

                  //5.자동 타이머
                  function autoTimerFn(){
                    setId = setInterval(nextSlideCountFn,4000);

                  }
                  autoTimerFn();

                  //6. 슬라이드에서 이벤트 발생 시 자동 타이머 일시 중지
                  function pauseTimerFn(){
                    var t = 0; 
                    clearInterval(setId);
                    clearInterval(setId2); 
                    setId2 = setInterval(function(){
                      t++;
                      if(t>=5){
                        t = 0;
                        clearInterval(setId2);
                        clearInterval(setId);
                        nextSlideCountFn();
                        autoTimerFn();
                      }
                    }, 1000);
                  }

                  //7.휠 이벤트
                  var delta = 0;
                  $slideWrap.on('mousewheel DOMMouseScroll',function(e){
                    e.preventDefault();
                    if(e.detail){
                      delta=e.detail*-40;
                    }
                    else{
                      delta=e.originalEvent.wheelDelta;
                    }
                    if(delta<0){
                      pauseTimerFn();
                      if(!$slideWrap.is(':animated')){
                        nextSlideCountFn();
                        if(cnt>3){
                          $('html,body').stop().animate({scrollTop:$('#section2').offset().top},600);
                        }
                      }
                    }
                    else{
                      pauseTimerFn();
                      if(!$slideWrap.is(':animated')){
                        prevSlideCountFn();
                        if(cnt==0){
                          $('html,body').stop().animate({scrollTop:$('#section2').offset().top},600);
                        }
                      }
                    }
                  });
        },
        section2Fn:function(){

         
            
        },
        section3Fn:function(){
         
        },
        section4Fn:function(){
          var $pageBtn         = $('#section4 .page-btn');
          var $bagWrapUl      = $('#section4 #bag-img-wrap > ul');
          var $bagWrapUlLi    = $('#section4 #bag-img-wrap > ul > li');
          var n               = $('#section4 #bag-img-wrap > ul > li').length;
          var $bagCon         = $('#section4 .bag-content');

          var winW = $(window).innerWidth()+11;
          var cols = 4; 
          var imgW = winW / cols;
          var imgH = imgW * 0.775;
          var rows = Math.ceil(n/cols);
          var btnNum = 0;

              //1. 반응형 갤러리 함수
              function  responseGalleryFn(){
                  winW = $(window).innerWidth()+11;
                  if(winW > 1200){
                      cols = 4;
                  }
                  else if(winW > 980){
                      cols = 3;
                  }
                  else if(winW > 680){
                      cols = 2;
                  }
                  else {
                      cols = 1;
                  }
                  imgW = winW / cols;
                  imgH = imgW * 0.775;

                  //버튼에 따른 이미지 배열
                  if(btnNum ==0){
                    n=4;
                    rows = Math.ceil(n/cols);
                    $bagWrapUl.css({width:winW, height:imgH*rows});
                    $bagWrapUlLi.css({width: imgW , height : imgH});
                    $bagCon.removeClass('addZoom');
                    $bagWrapUlLi.stop().hide();

                    switch(cols){
                        case 4:
                            $bagWrapUlLi.eq(0).stop().show().animate({left:imgW*0,top:imgH*0},300);
                            $bagWrapUlLi.eq(1).stop().show().animate({left:imgW*1,top:imgH*0},300);
                            $bagWrapUlLi.eq(2).stop().show().animate({left:imgW*2,top:imgH*0},300);
                            $bagWrapUlLi.eq(3).stop().show().animate({left:imgW*3,top:imgH*0},300);
                            
                        break;
                        case 3:
                            $bagWrapUlLi.eq(0).stop().show().animate({left:imgW*0,top:imgH*0},300);
                            $bagWrapUlLi.eq(1).stop().show().animate({left:imgW*1,top:imgH*0},300);
                            $bagWrapUlLi.eq(2).stop().show().animate({left:imgW*2,top:imgH*0},300);
                            
                            $bagWrapUlLi.eq(3).stop().show().animate({left:imgW*0,top:imgH*1},300);

                        break;
                        case 2:
                            $bagWrapUlLi.eq(0).stop().show().animate({left:imgW*0,top:imgH*0},300);
                            $bagWrapUlLi.eq(1).stop().show().animate({left:imgW*1,top:imgH*0},300);

                            $bagWrapUlLi.eq(2).stop().show().animate({left:imgW*0,top:imgH*1},300);
                            $bagWrapUlLi.eq(3).stop().show().animate({left:imgW*1,top:imgH*1},300);
                        break;
                        default:
                            $bagWrapUlLi.eq(0).stop().show().animate({left:imgW*0,top:imgH*0},300);

                            $bagWrapUlLi.eq(1).stop().show().animate({left:imgW*0,top:imgH*1},300);

                            $bagWrapUlLi.eq(2).stop().show().animate({left:imgW*0,top:imgH*2},300);

                            $bagWrapUlLi.eq(3).stop().show().animate({left:imgW*0,top:imgH*3},300);
                    }

                    $bagCon.eq(0).addClass('addZoom');
                    $bagCon.eq(1).addClass('addZoom');
                    $bagCon.eq(2).addClass('addZoom');
                    $bagCon.eq(3).addClass('addZoom');

                  }
                  else if(btnNum ==1){
                      n=4;
                      rows = Math.ceil(n/cols);
                      $bagWrapUl.css({width:winW, height:imgH*rows});
                      $bagWrapUlLi.css({width: imgW , height : imgH});
                      $bagCon.removeClass('addZoom');
                      $bagWrapUlLi.stop().hide();

                      switch(cols){
                          case 4:
                              $bagWrapUlLi.eq(4).stop().show().animate({left:imgW*0,top:imgH*0},300);
                              $bagWrapUlLi.eq(5).stop().show().animate({left:imgW*1,top:imgH*0},300);
                              $bagWrapUlLi.eq(6).stop().show().animate({left:imgW*2,top:imgH*0},300);
                              $bagWrapUlLi.eq(7).stop().show().animate({left:imgW*3,top:imgH*0},300);
                              
                          break;
                          case 3:
                              $bagWrapUlLi.eq(4).stop().show().animate({left:imgW*0,top:imgH*0},300);
                              $bagWrapUlLi.eq(5).stop().show().animate({left:imgW*1,top:imgH*0},300);
                              $bagWrapUlLi.eq(6).stop().show().animate({left:imgW*2,top:imgH*0},300);
                              
                              $bagWrapUlLi.eq(7).stop().show().animate({left:imgW*0,top:imgH*1},300);

                          break;
                          case 2:
                              $bagWrapUlLi.eq(4).stop().show().animate({left:imgW*0,top:imgH*0},300);
                              $bagWrapUlLi.eq(5).stop().show().animate({left:imgW*1,top:imgH*0},300);

                              $bagWrapUlLi.eq(6).stop().show().animate({left:imgW*0,top:imgH*1},300);
                              $bagWrapUlLi.eq(7).stop().show().animate({left:imgW*1,top:imgH*1},300);
                          break;
                          default:
                              $bagWrapUlLi.eq(4).stop().show().animate({left:imgW*0,top:imgH*0},300);

                              $bagWrapUlLi.eq(5).stop().show().animate({left:imgW*0,top:imgH*1},300);

                              $bagWrapUlLi.eq(6).stop().show().animate({left:imgW*0,top:imgH*2},300);

                              $bagWrapUlLi.eq(7).stop().show().animate({left:imgW*0,top:imgH*3},300);
                      }

                      $bagCon.eq(4).addClass('addZoom');
                      $bagCon.eq(5).addClass('addZoom');
                      $bagCon.eq(6).addClass('addZoom');
                      $bagCon.eq(7).addClass('addZoom');
                  }
                  else if(btnNum ==2){
                      n=4;
                      rows = Math.ceil(n/cols);
                      $bagWrapUl.css({width:winW, height:imgH*rows});
                      $bagWrapUlLi.css({width: imgW , height : imgH});
                      $bagCon.removeClass('addZoom');
                      $bagWrapUlLi.stop().hide();
                      switch(cols){
                          case 4:
                              $bagWrapUlLi.eq(8).stop().show().animate({left:imgW*0,top:imgH*0},300);
                              $bagWrapUlLi.eq(9).stop().show().animate({left:imgW*1,top:imgH*0},300);
                              $bagWrapUlLi.eq(10).stop().show().animate({left:imgW*2,top:imgH*0},300);
                              $bagWrapUlLi.eq(11).stop().show().animate({left:imgW*3,top:imgH*0},300);
                          break;
                          case 3:
                              $bagWrapUlLi.eq(8).stop().show().animate({left:imgW*0,top:imgH*0},300);
                              $bagWrapUlLi.eq(9).stop().show().animate({left:imgW*1,top:imgH*0},300);
                              $bagWrapUlLi.eq(10).stop().show().animate({left:imgW*2,top:imgH*0},300);

                              $bagWrapUlLi.eq(11).stop().show().animate({left:imgW*0,top:imgH*1},300);

                          break;
                          case 2:
                              $bagWrapUlLi.eq(8).stop().show().animate({left:imgW*0,top:imgH*0},300);
                              $bagWrapUlLi.eq(9).stop().show().animate({left:imgW*1,top:imgH*0},300);

                              $bagWrapUlLi.eq(10).stop().show().animate({left:imgW*0,top:imgH*1},300);
                              $bagWrapUlLi.eq(11).stop().show().animate({left:imgW*1,top:imgH*1},300);

                          break;
                          default:
                              $bagWrapUlLi.eq(8).stop().show().animate({left:imgW*0,top:imgH*0},300);

                              $bagWrapUlLi.eq(9).stop().show().animate({left:imgW*0,top:imgH*1},300);

                              $bagWrapUlLi.eq(10).stop().show().animate({left:imgW*0,top:imgH*2},300);

                              $bagWrapUlLi.eq(11).stop().show().animate({left:imgW*0,top:imgH*3},300);
                             

                      }
                      

                      $bagCon.eq(8).addClass('addZoom');
                      $bagCon.eq(9).addClass('addZoom');
                      $bagCon.eq(10).addClass('addZoom');
                      $bagCon.eq(11).addClass('addZoom');
                      
                  }
                  
              }
              responseGalleryFn();
              setTimeout(responseGalleryFn,100);

              //2. 열자마자 실행
              $(window).resize(function(){
                  setTimeout(responseGalleryFn,100);
              });

              //3. 갤러리 버튼 클릭 이벤트
              $pageBtn.each(function(idx){
                  $(this).on({
                      click :function(){
                          btnNum = idx;
                          responseGalleryFn();
                          $pageBtn.removeClass('addNav')
                          $(this).addClass('addNav')
                      }
                  });
              });
            
        },
        section5Fn:function(){
            
        },
        section6Fn:function(){
            
        },
        section7Fn:function(){
          var $clickBtn = $('.click-wrap');         
          var $slideSub = $('.video-content-gap');   

              $clickBtn.eq(0).addClass('addSlideDown');
              $clickBtn.eq(0).next().stop().slideDown(300);

              //아코디언 메뉴 버튼 클릭 이벤트
              $clickBtn.each(function(idx){
                  $(this).on({
                      click:function(e){
                          e.preventDefault();
                          
                          if($clickBtn.eq(idx).hasClass('addSlideDown') == false ){
                             $clickBtn.removeClass('addSlideDown');
                             $slideSub.stop().slideUp(300); 
                          }
                          
                          
                          $(this).toggleClass('addSlideDown');
                          $(this).next().stop().slideToggle(300);
  
                      }
                  });
              });
          var $slideW    = $('#section7 .slide').innerWidth();
          var $slideWrap = $('#section7 .slide-wrap');
          var $slideView = $('#section7 .slide-view');
          var $window    = $(window);
          var cnt        = 0;
          var setId      = null;
          var n          = $('#section7 .slide').length-(3+3)-1;

          //반응형 슬라이드
          function responseFn(){
              $slideW  = $('#section7 .slide').innerWidth();
              mainSlideFn();
          }

          setTimeout(responseFn,100);

          //2. 윈도우(window) 리사이즈
          $window.resize(function(){
              responseFn();
          });

          //1. 메인슬라이드함수
          function mainSlideFn(){
              $slideWrap.stop().animate({left:-$slideW*cnt},600,function(){
              if(cnt>n){cnt=0}
              if(cnt<0){cnt=n}
              
              $slideWrap.stop().animate({left:-$slideW*cnt},0);
              });
          }

          //2-1. 다음 슬라이드 카운트 함수
          function nextSlideCountFn(){
              cnt++;
              mainSlideFn()
          }
          //2-2. 이전 슬라이드 카운트 함수
          function prevSlideCountFn(){
              cnt--;
              mainSlideFn()
          }
          //4.터치이벤트
          $slideView.swipe({
              swipeLeft:function(){
              if( !$slideWrap.is(':animated')){
                  nextSlideCountFn();
              }
              },
              swipeRight:function(){
              if( !$slideWrap.is(':animated')){
                  prevSlideCountFn(); 
                  }
              }
          });

          //5.자동슬라이드
          function autoPlay(){
            setId = setInterval(nextSlideCountFn,3000);

          }
          autoPlay();
        },
        section8Fn:function(){
            
        },
        section9Fn:function(){
            
        },
        section10Fn:function(){
            
        },
        footerFn:function(){
            
        }
    }
    hongo.init();
})(jQuery);