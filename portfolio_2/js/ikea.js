;(function($){
  var ikea = {
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
          this.smoothScrollFn();
          this.mainMenuFn();
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
        var $mainBtn   = $('#header .main-btn');
        var $subBtn    = $('#header .sub-btn');
        var $navUlLi   = $('#header #nav>ul>li');
        var $sub       = $('#header .sub'); 
        var $mobileBtn = $('#header .mobile-btn');
        var $bar       = $('#header .bar');
        var $nav       = $('#header #nav');
        var pc         = 0;
        var mobile     = 0;

        var that = this;



        //980PX 초과
        function pcEvemtFm(){
            $nav.css({display:'inline-block'});
        }


        //980PX 이하
        //모바일 메뉴

        function mobileEventFn(){
            $sub.stop().hide();
            $bar.removeClass('addMobile');
            $nav.stop().slideUp(0);


            //이벤트 삭제하기
            $mainBtn.off('mouseenter');
            $navUlLi.off('mouseleave');
            $subBtn.off('mouseenter');
            $navUlLi.off('mouseleave');
            
            
        }//mobile Event end


        function pcMobileFn(){
          if( $window.innerWidth() > 980 ){                    
            pc=1;
            mobile=0;
            pcEvemtFm();
            that.btn = 0;
          }
          else{
            pc=0;
            mobile=1;
            mobileEventFn();
          } 
        }
        setTimeout(pcMobileFn,100);
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

        $mobileBtn.on({
          click:  function(event){
            event.preventDefault();
            $bar.toggleClass('addMobile');   
            $nav.stop().slideToggle(300);

            that.btn == 0 ? that.btn = 1 : that.btn = 0 ; 
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
                    puaseTimerFn();
                    cnt = idx;
                    mainSlideFn() 
                  }
                });
              });
              //4. 터치 스와이프
              var touchStart = 0;
              var touchEnd = 0;
              var mouseDown = 0;
              var touchYstart = 0;
              var touchYend = 0;

              $slideView.on({
                mousedown: function(e){
                  mouseDown = 1;
                  e.preventDefault();

                    puaseTimerFn();
                    touchStart = e.pageX; 
                    touchYstart = e.pageY;
                },
                touchstart:function(e){
                  mouseDown = 1;
                  e.preventDefault();
                  puaseTimerFn();
                  touchStart  = e.originalEvent.changedTouches[0].pageX;
                  touchYstart = e.originalEvent.changedTouches[0].pageY;
                  
                },
                mouseup:function(e){
                  mouseDown = 0;
                  e.preventDefault();
                    puaseTimerFn();
                    touchEnd = e.pageX;
                    touchYend = e.pageY;
                    touchSwipeFn();

                    if( touchYstart-touchYend < -50 ){ 
                      $('html,body').stop().animate({scrollTop: 0}, 1000);
                    }
                    if( touchYstart-touchYend > 50 ){ 
                      $('html,body').stop().animate({scrollTop: $('#section2').offset().top }, 1000);
                    }   
                },
                touchend:function(e){
                  mouseDown = 0;
                  e.preventDefault();
                    puaseTimerFn();
                    touchEnd  = e.originalEvent.changedTouches[0].pageX;
                    touchYend = e.originalEvent.changedTouches[0].pageY;
                    touchSwipeFn();

                  if(touchYstart - touchYend < -50){
                    $('html,body').stop().animate({scrollTop:0},1000);
                  }
                  if(touchYstart - touchYend > 50){
                    $('html,body').stop().animate({scrollTop:$('#section2').offset().top},1000);
                  }
                  return false;
                },
                mouseleave:function(e){
                  e.preventDefault();
                  puaseTimerFn();
                  if(mouseDown == 1){ 
                    mouseDown = 0;
                    touchEnd = e.pageX;
                    touchSwipeFn();
                  }
                }
                
              });
              function touchSwipeFn(){

                if( (touchStart-touchEnd) > 0){
                  if( !$slide.is(':animated')){
                    nextSlideCountFn();
                  }
                }
                if( (touchStart-touchEnd) < 0){
                  if( !$slideWrap.is(':animated')){
                    prevSlideCountFn();
                  }
                }
              }

              //5.자동 타이머
              function autoTimerFn(){
                setId = setInterval(nextSlideCountFn,4000);

              }
              autoTimerFn();

              //6. 슬라이드에서 이벤트 발생 시 자동 타이머 일시 중지
              function puaseTimerFn(){
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
      },
      section2Fn:function(){
        var $section2 = $('#section2 ul li');
        var $section2Top = $('#section2').offset().top-400;
        var t = 0;

        function scrollFn(){
          setTimeout(function(){
            $section2.eq(0).addClass('addAni');
            setTimeout(function(){
              $section2.eq(1).addClass('addAni');
              setTimeout(function(){
                $section2.eq(2).addClass('addAni');
              },200);
            },200);
          },200);
        }
        $(window).scroll(function(){
          if($(this).scrollTop()==0){
            t=0;
            $section2.removeClass('addAni');
          }
          if($(this).scrollTop()>=$section2Top){
            if(t==0){
              t=1;
              scrollFn();
            }
          }
        });
      },
      section3Fn:function(){
        var $productBox = $('#section3 .product-box');

        $productBox.on({
            mouseenter:function(){
                $productBox.removeClass('addImg');
                $(this).addClass('addImg');
            },
            mouseleave:function(){
                $(this).removeClass('addImg');
            },
            click:function(event){
                event.preventDefault();
                $productBox.removeClass('addImg');
                $(this).toggleClass('addImg');
            }
        });
        var $section3 = $('#section3 ul li');
        var $section3Top = $('#section3 ul li').offset().top-1000;
        var t = 0;

        function scrollFn(){
          setTimeout(function(idx){
            $section3.eq(0).addClass('addAni');
            setTimeout(function(){
              $section3.eq(1).addClass('addAni');
              setTimeout(function(){
                $section3.eq(2).addClass('addAni');
                setTimeout(function(){
                  $section3.eq(3).addClass('addAni');
                  setTimeout(function(){
                    $section3.eq(4).addClass('addAni');
                    setTimeout(function(){
                      $section3.eq(5).addClass('addAni');
                      setTimeout(function(){
                        $section3.eq(6).addClass('addAni');
                        setTimeout(function(){
                          $section3.eq(7).addClass('addAni');
                        },200)
                      },200)
                    },200)
                  },200)
                },200)
              },200)
            },200)
          },200)
        }
        $(window).scroll(function(){
          if($(this).scrollTop()==0){
            t=0;
            $section3.removeClass('addAni');
          }
          if($(this).scrollTop()>=$section3Top){
            if(t==0){
              t=1;
              scrollFn();
            }
          }
        });
        
      },
      section4Fn:function(){
        var $section4 = $('#section4 ul li');
        var $section4Top = $('#section4').offset().top-900;
        var t = 0;

        function scrollFn(){
          setTimeout(function(){
            $section4.eq(0).addClass('addAni');
            setTimeout(function(){
              $section4.eq(1).addClass('addAni');
              setTimeout(function(){
                $section4.eq(2).addClass('addAni');
                setTimeout(function(){
                  $section4.eq(3).addClass('addAni');
                  setTimeout(function(){
                    $section4.eq(4).addClass('addAni');
                    setTimeout(function(){
                      $section4.eq(5).addClass('addAni');
                      setTimeout(function(){
                        $section4.eq(6).addClass('addAni');
                      },200);
                    },200);
                  },200);
                },200);
              },200);
            },200);
          },200);
        }
        $(window).scroll(function(){
          if($(this).scrollTop()==0){
            t=0;
            $section4.removeClass('addAni');
          }
          if($(this).scrollTop()>=$section4Top){
            if(t==0){
              t=1;
              scrollFn();
            }
          }
        });
      },
      section5Fn:function(){
          
      },
      section6Fn:function(){
          var $section6 = $('#section6');
          var $section6Top = $('#section6').offset().top-600;
          var t = 0;
          function scrollFn(){
            $section6.addClass('addAni');
          }
          $(window).scroll(function(){
            if($(this).scrollTop()==0){
              t=0;
              $section6.removeClass('addAni');
            }
            if($(this).scrollTop()>=$section6Top){
              if(t==0){
                t=1;
                scrollFn()
              }
            }
          })
          
        },
      section7Fn:function(){
        var $productBox = $('#section7 .product-box');

        $productBox.on({
            mouseenter:function(){
                $productBox.removeClass('addImg');
                $(this).addClass('addImg');
            },
            mouseleave:function(){
                $(this).removeClass('addImg');
            },
            click:function(event){
                event.preventDefault();
                $productBox.removeClass('addImg');
                $(this).toggleClass('addImg');
            }
        });
        $(window).scroll(function(){
            if($(window).scrollTop() >= $('#section7').offset().top-700){
                
                $productBox.each(function(idx){
                    var that = $(this)
                    setTimeout(function(){
                        that.addClass('addScroll');
                    },100*idx);
                });
            }
            else if($(window).scrollTop() <= 10){
                $productBox.each(function(idx){
                    if($productBox.eq(idx).hasClass('addScroll')==true){
                        $productBox.removeClass('addScroll');
                    }
                });
            }
            
        });
        //메뉴 클릭 시 페이지 이동
        var $page1 = $('#section7 .page1');
        var $page2 = $('#section7 .page2');
        var $page3 = $('#section7 .page3');
        var $page4 = $('#section7 .page4');
        var $page5 = $('#section7 .page5');
        var $page6 = $('#section7 .page6');

        var $pageBtn = $('#section7 .page-btn');

       $pageBtn.eq(0).on({
           click:function(){
               $page2.removeClass('addPage');
               $page3.removeClass('addPage');
               $page4.removeClass('addPage');
               $page5.removeClass('addPage');
               $page6.removeClass('addPage');
               $page1.addClass('addPage');
           }
       });
       $pageBtn.eq(1).on({
           click:function(){
               $page1.removeClass('addPage');
               $page3.removeClass('addPage');
               $page4.removeClass('addPage');
               $page5.removeClass('addPage');
               $page6.removeClass('addPage');
               $page2.addClass('addPage');
           }
       });
       $pageBtn.eq(2).on({
           click:function(){
               $page1.removeClass('addPage');
               $page2.removeClass('addPage');
               $page4.removeClass('addPage');
               $page5.removeClass('addPage');
               $page6.removeClass('addPage');
               $page3.addClass('addPage');
           }
       });
       $pageBtn.eq(3).on({
           click:function(){
               $page1.removeClass('addPage');
               $page2.removeClass('addPage');
               $page3.removeClass('addPage');
               $page5.removeClass('addPage');
               $page6.removeClass('addPage');
               $page4.addClass('addPage');
           }
       });
       $pageBtn.eq(4).on({
           click:function(){
               $page1.removeClass('addPage');
               $page2.removeClass('addPage');
               $page3.removeClass('addPage');
               $page4.removeClass('addPage');
               $page6.removeClass('addPage');
               $page5.addClass('addPage');
           }
       });
       $pageBtn.eq(5).on({
           click:function(){
               $page1.removeClass('addPage');
               $page2.removeClass('addPage');
               $page3.removeClass('addPage');
               $page4.removeClass('addPage');
               $page5.removeClass('addPage');
               $page6.addClass('addPage');
           }
       });
    
       $pageBtn.each(function(idx){
           $(this).on({
               click:function(){
                   $pageBtn.removeClass('addChk');
                   $pageBtn.eq(idx).addClass('addChk');
               }
           });
       })
       //cube event
        var $radio = $('input[type="radio"]');
        var faceName = '.'+$radio.eq(0).val();
        var $pageBtn = $('#section7 .page-btn');
        var $cube = $('#section7 .cube');
        var setId = null;
        var btn = $('#section7 .page-btn').attr('id');
        var faceName = '.'+ btn;

        function faceNameFn(){
          $(faceName).stop().animate({opacity:.5},0).animate({opacity:1},1000);
        }
        //버튼클릭이벤트
        $radio.each(function(){
            $(this).on({
                click:function(){
                    $radio.removeClass('addChk');
                    $(this).addClass('addChk');
                    $cube.removeClass('addAuto');
                    btn = $(this).attr('id');
                    faceName ='.'+$(this).val();
                    faceNameFn();
                    timerFn();
                }
            });
        });
        function timerFn(){
          clearInterval(setId);
          var t = 0;
          setId = setInterval(function(){
              t++;
              if(t>3){
                  $cube.addClass('addAuto');
              }
          },1000);
      }

      
      

      },
      section8Fn:function(){
        var $galBtn         = $('#section8  .gal-btn');
        var $galWrapUl      = $('#section8  #gallery-wrap > ul');
        var $galWrapUlLi    = $('#section8  #gallery-wrap > ul > li');
        var n               = $('#section8  #gallery-wrap > ul > li').length;
        var $galCon         = $('#section8  .gallery-content');

        var winW = $(window).innerWidth();
        var cols = 4; //칸 수
        var imgW = winW / cols;
        var imgH = imgW * 1.1;
        var rows = Math.ceil(n/cols);
        var btnNum = 0; //초기값 첫번째 버튼 ALL 클릭한 버튼 번호 전달해주는 매개변수

            //1. 반응형 갤러리 함수
            function  responseGalleryFn(){
                winW = $(window).innerWidth()+11;
                if(winW > 1200){
                    cols = 3;
                }
                else if(winW > 980){
                    cols = 2;
                }
                else { //나머지 경우
                    cols = 1;
                }
                imgW = winW / cols;  //이미지 너비
                imgH = imgW * 1.1; //이미지 높이
                

                

                //갤러리 li(이미지 칸)적용

                //버튼 번호 별 이미지 갯수
                if(btnNum ==0){
                    n=15;
                    rows = Math.ceil(n/cols);
                    $galWrapUl.css({width:winW, height:imgH*rows});
                    $galWrapUlLi.css({width: imgW , height : imgH});
                    $galCon.removeClass('addZoom');

                    if(cols==3){
                        $galWrapUlLi.eq(0).stop().show().animate({left:imgW*0,top:imgH*0},300);
                        $galWrapUlLi.eq(1).stop().show().animate({left:imgW*1,top:imgH*0},300);
                        $galWrapUlLi.eq(2).stop().show().animate({left:imgW*2,top:imgH*0},300);

                        $galWrapUlLi.eq(3).stop().show().animate({left:imgW*0,top:imgH*1},300);
                        $galWrapUlLi.eq(4).stop().show().animate({left:imgW*1,top:imgH*1},300);
                        $galWrapUlLi.eq(5).stop().show().animate({left:imgW*2,top:imgH*1},300);

                        $galWrapUlLi.eq(6).stop().show().animate({left:imgW*0,top:imgH*2},300);
                        $galWrapUlLi.eq(7).stop().show().animate({left:imgW*1,top:imgH*2},300);
                        $galWrapUlLi.eq(8).stop().show().animate({left:imgW*2,top:imgH*2},300);

                        $galWrapUlLi.eq(9).stop().show().animate({left:imgW*0,top:imgH* 3},300);
                        $galWrapUlLi.eq(10).stop().show().animate({left:imgW*1,top:imgH*3},300);
                        $galWrapUlLi.eq(11).stop().show().animate({left:imgW*2,top:imgH*3},300);

                        $galWrapUlLi.eq(12).stop().show().animate({left:imgW*0,top:imgH*4},300);
                        $galWrapUlLi.eq(13).stop().show().animate({left:imgW*1,top:imgH*4},300);
                        $galWrapUlLi.eq(14).stop().show().animate({left:imgW*2,top:imgH*4},300);
                    }
                    else if(cols==2){
                        $galWrapUlLi.eq(0).stop().show().animate({left:imgW*0,top:imgH*0},300);
                        $galWrapUlLi.eq(1).stop().show().animate({left:imgW*1,top:imgH*0},300);

                        $galWrapUlLi.eq(2).stop().show().animate({left:imgW*0,top:imgH*1},300);
                        $galWrapUlLi.eq(3).stop().show().animate({left:imgW*1,top:imgH*1},300);

                        $galWrapUlLi.eq(4).stop().show().animate({left:imgW*0,top:imgH*2},300);
                        $galWrapUlLi.eq(5).stop().show().animate({left:imgW*1,top:imgH*2},300);

                        $galWrapUlLi.eq(6).stop().show().animate({left:imgW*0,top:imgH*3},300);
                        $galWrapUlLi.eq(7).stop().show().animate({left:imgW*1,top:imgH*3},300);

                        $galWrapUlLi.eq(7).stop().show().animate({left:imgW*0,top:imgH*4},300);
                        $galWrapUlLi.eq(8).stop().show().animate({left:imgW*1,top:imgH*4},300);

                        $galWrapUlLi.eq(9).stop().show().animate({left:imgW*0,top:imgH* 5},300);
                        $galWrapUlLi.eq(10).stop().show().animate({left:imgW*1,top:imgH*5},300);

                        $galWrapUlLi.eq(11).stop().show().animate({left:imgW*0,top:imgH*6},300);
                        $galWrapUlLi.eq(12).stop().show().animate({left:imgW*1,top:imgH*6},300);

                        $galWrapUlLi.eq(13).stop().show().animate({left:imgW*0,top:imgH*7},300);
                        $galWrapUlLi.eq(14).stop().show().animate({left:imgW*1,top:imgH*7},300);
                    }
                    else {
                        $galWrapUlLi.eq(0).stop().show().animate({left:imgW*0,top:imgH*0},300);
                        $galWrapUlLi.eq(1).stop().show().animate({left:imgW*0,top:imgH*1},300);
                        $galWrapUlLi.eq(2).stop().show().animate({left:imgW*0,top:imgH*2},300);
                        $galWrapUlLi.eq(3).stop().show().animate({left:imgW*0,top:imgH*3},300);
                        $galWrapUlLi.eq(4).stop().show().animate({left:imgW*0,top:imgH*4},300);
                        $galWrapUlLi.eq(5).stop().show().animate({left:imgW*0,top:imgH*5},300);
                        $galWrapUlLi.eq(6).stop().show().animate({left:imgW*0,top:imgH*6},300);
                        $galWrapUlLi.eq(7).stop().show().animate({left:imgW*0,top:imgH*7},300);
                        $galWrapUlLi.eq(8).stop().show().animate({left:imgW*0,top:imgH*8},300);
                        $galWrapUlLi.eq(9).stop().show().animate({left:imgW*0,top:imgH*9},300);
                        $galWrapUlLi.eq(10).stop().show().animate({left:imgW*0,top:imgH*10},300);
                        $galWrapUlLi.eq(11).stop().show().animate({left:imgW*0,top:imgH*11},300);
                        $galWrapUlLi.eq(12).stop().show().animate({left:imgW*0,top:imgH*12},300);
                        $galWrapUlLi.eq(13).stop().show().animate({left:imgW*0,top:imgH*13},300);
                        $galWrapUlLi.eq(14).stop().show().animate({left:imgW*0,top:imgH*14},300);
                    }
                    $galCon.addClass('addZoom');

                }
              
                else if(btnNum ==1){
                    n=3;
                    rows = Math.ceil(n/cols);
                    $galWrapUl.css({width:winW, height:imgH*rows});
                    $galWrapUlLi.css({width: imgW , height : imgH});
                    $galCon.removeClass('addZoom');
                    $galWrapUlLi.stop().hide();

                    switch(cols){
                        case 3:
                            $galWrapUlLi.eq(0).stop().show().animate({left:imgW*0,top:imgH*0},300);
                            $galWrapUlLi.eq(1).stop().show().animate({left:imgW*1,top:imgH*0},300);
                            $galWrapUlLi.eq(2).stop().show().animate({left:imgW*2,top:imgH*0},300);
                            
                        break;
                        case 2:
                            $galWrapUlLi.eq(0).stop().show().animate({left:imgW*0,top:imgH*0},300);
                            $galWrapUlLi.eq(1).stop().show().animate({left:imgW*1,top:imgH*0},300);

                            $galWrapUlLi.eq(2).stop().show().animate({left:imgW*0,top:imgH*1},300);

                        break;
                        default:
                            $galWrapUlLi.eq(0).stop().show().animate({left:imgW*0,top:imgH*0},300);

                            $galWrapUlLi.eq(1).stop().show().animate({left:imgW*0,top:imgH*1},300);

                            $galWrapUlLi.eq(2).stop().show().animate({left:imgW*0,top:imgH*2},300);
                    }

                    $galCon.eq(0).addClass('addZoom');
                    $galCon.eq(1).addClass('addZoom');
                    $galCon.eq(2).addClass('addZoom');
                }
                else if(btnNum ==2){
                 
                  n=3;
                  rows = Math.ceil(n/cols);
                  $galWrapUl.css({width:winW, height:imgH*rows});
                  $galWrapUlLi.css({width: imgW , height : imgH});
                  $galCon.removeClass('addZoom');
                  $galWrapUlLi.stop().hide();
                  switch(cols){
                      case 3:
                          $galWrapUlLi.eq(3).stop().show().animate({left:imgW*0,top:imgH*0},300);
                          $galWrapUlLi.eq(4).stop().show().animate({left:imgW*1,top:imgH*0},300);
                          $galWrapUlLi.eq(5).stop().show().animate({left:imgW*2,top:imgH*0},300);

                      break;
                      case 2:
                          $galWrapUlLi.eq(3).stop().show().animate({left:imgW*0,top:imgH*0},300);
                          $galWrapUlLi.eq(4).stop().show().animate({left:imgW*1,top:imgH*0},300);

                          $galWrapUlLi.eq(5).stop().show().animate({left:imgW*0,top:imgH*1},300);

                      break;
                      default:
                          $galWrapUlLi.eq(3).stop().show().animate({left:imgW*0,top:imgH*0},300);
                          $galWrapUlLi.eq(4).stop().show().animate({left:imgW*0,top:imgH*1},300);
                          $galWrapUlLi.eq(5).stop().show().animate({left:imgW*0,top:imgH*2},300);
                         

                  }
                    $galCon.eq(3).addClass('addZoom');
                    $galCon.eq(4).addClass('addZoom');
                    $galCon.eq(5).addClass('addZoom');
                }
                else if(btnNum ==3){
                  n=3;
                  rows = Math.ceil(n/cols);
                  $galWrapUl.css({width:winW, height:imgH*rows});
                  $galWrapUlLi.css({width: imgW , height : imgH});
                  $galCon.removeClass('addZoom');
                  $galWrapUlLi.stop().hide();
                  switch(cols){
                      case 3:
                          $galWrapUlLi.eq(6).stop().show().animate({left:imgW*0,top:imgH*0},300);
                          $galWrapUlLi.eq(7).stop().show().animate({left:imgW*1,top:imgH*0},300);
                          $galWrapUlLi.eq(8).stop().show().animate({left:imgW*2,top:imgH*0},300);

                      break;
                      case 2:
                          $galWrapUlLi.eq(6).stop().show().animate({left:imgW*0,top:imgH*0},300);
                          $galWrapUlLi.eq(7).stop().show().animate({left:imgW*1,top:imgH*0},300);

                          $galWrapUlLi.eq(8).stop().show().animate({left:imgW*0,top:imgH*1},300);

                      break;
                      default:
                          $galWrapUlLi.eq(6).stop().show().animate({left:imgW*0,top:imgH*0},300);
                          $galWrapUlLi.eq(7).stop().show().animate({left:imgW*0,top:imgH*1},300);
                          $galWrapUlLi.eq(8).stop().show().animate({left:imgW*0,top:imgH*2},300);
                         

                  }
                  

                  $galCon.eq(6).addClass('addZoom');
                  $galCon.eq(7).addClass('addZoom');
                  $galCon.eq(8).addClass('addZoom');
                    
                }
                else if(btnNum ==4){
                  n=3;
                  rows = Math.ceil(n/cols);
                  $galWrapUl.css({width:winW, height:imgH*rows});
                  $galWrapUlLi.css({width: imgW , height : imgH});
                  $galCon.removeClass('addZoom');
                  $galWrapUlLi.stop().hide();

                  switch(cols){
                      case 3:
                          $galWrapUlLi.eq(9).stop().show().animate({left:imgW*0,top:imgH*0},300);
                          $galWrapUlLi.eq(10).stop().show().animate({left:imgW*1,top:imgH*0},300);
                          $galWrapUlLi.eq(11).stop().show().animate({left:imgW*2,top:imgH*0},300);
                          break;
                      case 2:
                          $galWrapUlLi.eq(9).stop().show().animate({left:imgW*0,top:imgH*0},300);
                          $galWrapUlLi.eq(10).stop().show().animate({left:imgW*1,top:imgH*0},300);
                          $galWrapUlLi.eq(11).stop().show().animate({left:imgW*0,top:imgH*1},300);
                          break;
                      default:
                          $galWrapUlLi.eq(9).stop().show().animate({left:imgW*0,top:imgH*0},300);

                          $galWrapUlLi.eq(10).stop().show().animate({left:imgW*0,top:imgH*1},300);

                          $galWrapUlLi.eq(11).stop().show().animate({left:imgW*0,top:imgH*2},300);
                  }


                  $galCon.eq(9).addClass('addZoom');
                  $galCon.eq(10).addClass('addZoom');
                  $galCon.eq(11).addClass('addZoom');
                }
                else if(btnNum ==5){
                  n=3;
                  rows = Math.ceil(n/cols);
                  $galWrapUl.css({width:winW, height:imgH*rows});
                  $galWrapUlLi.css({width: imgW , height : imgH});
                  $galCon.removeClass('addZoom');
                  $galWrapUlLi.stop().hide();

                  switch(cols){
                      case 3:
                          $galWrapUlLi.eq(12).stop().show().animate({left:imgW*0,top:imgH*0},300);
                          $galWrapUlLi.eq(13).stop().show().animate({left:imgW*1,top:imgH*0},300);
                          $galWrapUlLi.eq(14).stop().show().animate({left:imgW*2,top:imgH*0},300);
                          break;
                      case 2:
                          $galWrapUlLi.eq(12).stop().show().animate({left:imgW*0,top:imgH*0},300);
                          $galWrapUlLi.eq(13).stop().show().animate({left:imgW*1,top:imgH*0},300);
                          $galWrapUlLi.eq(14).stop().show().animate({left:imgW*0,top:imgH*1},300);
                          break;
                      default:
                          $galWrapUlLi.eq(12).stop().show().animate({left:imgW*0,top:imgH*0},300);

                          $galWrapUlLi.eq(13).stop().show().animate({left:imgW*0,top:imgH*1},300);

                          $galWrapUlLi.eq(14).stop().show().animate({left:imgW*0,top:imgH*2},300);
                  }


                  $galCon.eq(12).addClass('addZoom');
                  $galCon.eq(13).addClass('addZoom');
                  $galCon.eq(14).addClass('addZoom');
                }

           
                
            }
            responseGalleryFn();
            setTimeout(responseGalleryFn,100);

            //2. 윈도우 반응형 메서드 실시간 반응형 적용
            $(window).resize(function(){
                // responseGalleryFn();
                setTimeout(responseGalleryFn,100);
            });

            //3. 갤러리 버튼 클릭 이벤트
            $galBtn.each(function(idx){
                $(this).on({
                    click :function(){
                        btnNum = idx;
                        responseGalleryFn();
                        $galBtn.removeClass('addNav')
                        $(this).addClass('addNav')
                    }
                });
            });
      },
      section9Fn:function(){
          var $section9 = $('#section9 .content > ul > li');
          var $section9Top = $('#section9 .content > ul > li').offset().top-400;
          var t = 0;

          function scrollFn(){
            setTimeout(function(){
              $section9.eq(0).addClass('addAni');
                setTimeout(function(){
                  $section9.eq(1).addClass('addAni');
                    setTimeout(function(){
                      $section9.eq(2).addClass('addAni');
                    },200);
                },200);
            },200);             
        }
        $(window).scroll(function(){
          if( $(this).scrollTop() >= $section9Top ){
              if(t==0){
                  t=1;
                  scrollFn();
              }
          }
      });
      },
      section10Fn:function(){
          
      },
      footerFn:function(){
        var $clickBtn = $('.click-wrap');      
        var $slideSub = $('.slide-down-gap');
            
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
      },
      smoothScrollFn:function(){
        var $mainMenu  = $('#mainMenu');
        var smoothBtn = $('.smoothBtn');
        var $goTopBtnWrap = $('.goTopBtn-wrap');
        var t = 0;

        smoothBtn.on({
          click:function(e){
            e.preventDefault();
            var url = $(this).attr('href');
                $('html,body').stop().animate({scrollTop:$(url).offset().top},600);
              }
        
        });
        $(window).scroll(function(){
          if($(this).scrollTop()>=100){
            if(t==0){
              t=1;
              $goTopBtnWrap.stop().fadeIn(1000);
            }
          }
          else{
            if(t==1){
              t=0;
              $goTopBtnWrap.stop().fadeOut(1000);
            }
          }
        });
        function resizeFn(){
          if($(window).innerWidth()>980){
            $mainMenu.stop().fadeIn(1000);
          }
          else{
            $mainMenu.stop().fadeOut(1000);
          }
        }
        resizeFn();
        setTimeout(resizeFn,100);
        $(window).resize(function(){
          resizeFn();
        })

      },
      mainMenuFn:function(){
          var $html       = $('html');
          var $header     = $('#header');
          var $mainMenu  = $('#mainMenu');
          var $menuBtn   = $('.menu-btn');
          var $document   = $(document);

              $menuBtn.on({
                click: function(event){
                    event.currentTarget 
                    event.stopPropagation();

                    $html     .toggleClass('addMenu');
                    $header   .toggleClass('addHide');
                    $mainMenu.toggleClass('addMenu');                  
                }
              });

              //모달창 전체 이벤트
              $mainMenu.on({
                click:  function(event){
                    event.stopPropagation();
                    return false;
                }
              });
              $document.on({
                click:  function(event){            
                  if( event.target !== event.currentTarget ){
                    $html     .removeClass('addMenu');
                    $header   .removeClass('addHide');
                    $mainMenu.removeClass('addMenu');   
                  }

                }
              });

           //메뉴 클릭 시 페이지 이동
           var $page1 = $('#mainMenu .page1');
           var $page2 = $('#mainMenu .page2');
           var $page3 = $('#mainMenu .page3');
           var $pageBtn = $('#mainMenu .page-btn');
           var $prevBtn = $('#mainMenu .prev-btn');

           $pageBtn.eq(0).on({
            click:function(){
                $page2.removeClass('addPage');
                $page3.removeClass('addPage');
                $page1.removeClass('addPage');
                $page2.addClass('addPage');
            }
          });
          $pageBtn.eq(1).on({
              click:function(){

                  $page1.removeClass('addPage');
                  $page3.removeClass('addPage');
                  $page2.removeClass('addPage');
                  $page3.addClass('addPage');
              }
          });

           $prevBtn.eq(0).on({
            click:function(){
                $page2.removeClass('addPage');
                $page1.addClass('addPage');
            }
          });
          $prevBtn.eq(1).on({
              click:function(){
                  $page3.removeClass('addPage');
                  $page1.addClass('addPage');
              }
          });
            
      }
  }
  ikea.init();
})(jQuery);