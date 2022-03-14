;(function($){

    var laneige = {  
        init: function(){
          this.scrollEventFn();
          this.mouseWheelFn();
          this.headerFn();
          this.slideFn();
          this.section1Fn();
          this.section2Fn();
          this.section3Fn();
          this.section4Fn();
          this.section5Fn();
          this.section6Fn();
          this.section7Fn();
          this.section8Fn();
          this.cookieFn();


        },
        cookieFn:function(){
          var start = null;
          var end   = null;
          var RegExp = /\s/g;

          function getCookieFn(name){
            var cookie = document.cookie.replace(RegExp,"").split(';');
              for(var i in cookie){
                start = 0;
                end = cookie[i].indexOf('=');
                if(cookie[i].slice(start,end)==name){
                  start = cookie[i].indexOf('=');
                  return cookie[i].slice(start+1);
                }
              }
              return '';

          }
          function openPopUpFn(){
            var isCookie = getCookieFn('popup_01');
              if(isCookie!=='no'){
                window.open('popup_01.html','popup_01','width=500,height=500,top=0,left=0')
              }
          } 
          openPopUpFn();

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
                    $header.removeClass('addBlack');
                  }
                  else{
                      //스크롤 올릴 때
                      if(result == 'UP'){
                        if( that.btn == 1 ){
                          $header.removeClass('addHide');
                          $header.addClass('addBlack');
                        }
                        else{
                          $header.removeClass('addHide');
                          $header.addClass('addBlack');
                        }
  
                      }
                      //스크롤 내릴 때
                      if(result == 'DOWN'){
                        if( that.btn == 1 ){
                          $header.removeClass('addBlack');
                          $header.removeClass('addHide'); 
                        }
                        else{
                          $header.removeClass('addBlack');
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
        mouseWheelFn:function(){
          var $section = $('.section');
          var wheelDelta = 0;
          $section.each(function(index){
              $(this).on('mousewheel DOMMouseScroll',function(event){
                  
                  event.preventDefault();
                  if(event.originalEvent.wheelDelta){
                      wheelDelta = event.originalEvent.wheelDelta;
                  }
                  else{
                      wheelDelta=event.detail*-1;
                  }

                  wheelDelta = event.originalEvent.wheelDelta;
                  if(wheelDelta < 0 ){
                      if(index < 2){
                          if(!$('html,body').is(':animated')){
                              $('html,body').stop().animate({scrollTop:$(this).next().offset().top},600,'easeInOutExpo');
                          }
                         
                      }
                      
                  }
                  else{ 
                      if(index > 0){
                          if(!$('html,body').is(':animated')){
                              $('html,body').stop().animate({scrollTop:$(this).prev().offset().top},600,'easeInOutExpo');
                          }
                          
                      }
                  }

              });
          });

      
      },
      slideFn:function(){
        $(function(){
          var count=1;
          var max=4;
          setInterval(function(){
              $('.homeMvBody').removeClass('mv'+count);
              $('.homeMvNum').removeClass('num'+count);
              count=count%max+1;
              $('.homeMvBody').addClass('mv'+count);
              $('.homeMvNum').addClass('num'+count);
          },4000);
      });
      },
        headerFn: function(){
          $('#toggle').click(function() {
            $('#toggle .bar').toggleClass('animate');
            $('#page').toggleClass('overlay');
          });
          
          
        },
        section1Fn:function(){
        },
        section2Fn:function(){
          var $section2= $('#section2 p');
          var $section2Img= $('#section2 .img1');
          var $section2Img2= $('#section2 .img2');
          var $section2Top = $('#section2').offset().top-600;
          var t = 0;

          function scrollFn(){
            $section2Img.addClass('addScrollAni1');
            $section2.addClass('addScrollAni');
            setTimeout(function(){
              $section2Img2.eq(0).addClass('addScrollAni3');
              setTimeout(function(){
                $section2Img2.eq(1).addClass('addScrollAni3');
                setTimeout(function(){
                  $section2Img2.eq(2).addClass('addScrollAni3');
                },200);
              },200);
            },200);
          }
          $(window).scroll(function(){
            if($(this).scrollTop()==0){
              t=0;
              $section2Img.removeClass('addScrollAni1');
              $section2.removeClass('addScrollAni');
              $section2Img2.removeClass('addScrollAni3');
            }
            if($(this).scrollTop()>=$section2Top){
              if(t==0){
                t=1;
                scrollFn()
              }
            }
          });

        },
        section3Fn:function(){
          var $section3 = $('#section3 .reservationContactBody');
          var $section3Top = $('#section3').offset().top-600;
          var t = 0;
          function scrollFn(){
            $section3.addClass('addAni');
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
          var $section4 = $('#section4 .item');
          var $section4Top = $('#section4').offset().top-400;
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
                          setTimeout(function(){
                            $section4.eq(7).addClass('addAni');
                          },200);
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
          var $section5Title = $('#section5 .section5Title');
          var $section5Before = $('#section5 .GuideItem');
          var $section5Img = $('#section5 .GuidePhoto img');
          var $section5Text = $('#section5 .GuideText');
          var $section5Top = $('#section5').offset().top-600;
          var t = 0;
          function scrollFn(){
            $section5Title.addClass('addAni');
            $section5Img.addClass('addAni');
            $section5Text.addClass('addAni');
            $section5Before.addClass('addAni');
          }
          $(window).scroll(function(){
            if($(this).scrollTop()==0){
              t=0;
              $section5Title.removeClass('addAni');
              $section5Img.removeClass('addAni');
              $section5Text.removeClass('addAni');
              $section5Before.removeClass('addAni');
            }
            if($(this).scrollTop()>=$section5Top){
              if(t==0){
                t=1;
                scrollFn();
              }
            }
          });
        },
        section6Fn:function(){
          var $section6 = $('#section6 .link');
          var $section6Top = $('#section6').offset().top-400;
          var t = 0;

          function scrollFn(){
            setTimeout(function(){
              $section6.eq(0).addClass('addAni');
              setTimeout(function(){
                $section6.eq(1).addClass('addAni');
                setTimeout(function(){
                  $section6.eq(2).addClass('addAni');
                  setTimeout(function(){
                    $section6.eq(3).addClass('addAni');
                  },200);
                },200);
              },200);
            },200);
          }
          $(window).scroll(function(){
            if($(this).scrollTop()==0){
              t=0;
              $section6.removeClass('addAni');
            }
            if($(this).scrollTop()>=$section6Top){
              if(t==0){
                t=1;
                scrollFn();
              }
            }
          });
        },
        section7Fn:function(){
          
        },
        section8Fn:function(){
        }
    } //객체 끝


    laneige.init();

})(jQuery);