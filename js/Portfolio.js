;(function($){
  var Profile  = {
      btn: 0,
      init:function(){
          this.loadingFn();
          this.headerFn();
          this.section1Fn();
          this.section2Fn();
          this.section3Fn();
          this.videoFn();
          this.videoControlFn();
      },
      loadingFn:function(){
        var $loadBox = $('#wrap .loading-wrap');
        var $html = $('html');

        $(document).ready(function(){
            //$html.addClass('addScroll');
            $loadBox.stop().fadeIn(300);

            setTimeout(function(){
                $loadBox.stop().fadeOut(2000);
            },1000);

            setTimeout(function(){
                //$html.removeClass('addScroll');
            },2000)
        });
      },
      headerFn:function(){
          $('#nav nav a').on('click', function(event) {
              $(this).parent().find('a').removeClass('active');
              $(this).addClass('active');
          });
          
          $(window).on('scroll', function() {
              $('.target').each(function() {
                  if($(window).scrollTop() >= $(this).offset().top) {
                      var id = $(this).attr('id');
                      $('#nav nav a').removeClass('active');
                      $('#nav nav a[href=#'+ id +']').addClass('active');
                  }
              });
          });
      },
      section1Fn:function(){
        var $window    = $(window);
        var $winW      = $(window).width();
        var $winH      = $(window).height();
        var $section1  = $('#section1');
        
        function resizeFn(){
          $winW = $(window).width();  
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
        }

        resizeFn();
        setTimeout(resizeFn, 100);

        $window.resize(function(){                
          setTimeout(resizeFn,100);
        });
      },  
      section2Fn:function(){

      },
      section3Fn:function(){
        
        var circle = $('#section3 .circle');
        var number =  $('#section3 .number');          
        var totLen = [];
        var percent = [.90, .90, .75, .90 , .90];
        var second = 3;    //4초
        var perLen = [];
        var piece = []; //초당 길이 마디
        var cnt = [0, 0, 0, 0 , 0]; //누적변수는 반드시 초기값 설정
        var setId = [];

            $.each(circle, function(idx, obj){
                totLen[idx] = Math.ceil( obj.getTotalLength() ); 
                
                obj.style.strokeDasharray = totLen[idx];
                obj.style.strokeDashoffset = totLen[idx];
                
                perLen[idx] = totLen[idx] * percent[idx];
                piece[idx] = (perLen[idx]/second)/100;


                setId[idx] = setInterval(countFn, 10);
                function countFn(){
                    cnt[idx] += piece[idx];

                    if( cnt[idx] > perLen[idx] ){
                      clearInterval( setId[idx] );
                    }
                    else{
                      $(obj).css({ strokeDashoffset: totLen[idx]-cnt[idx] }); 
                      number.eq(idx).html( Math.ceil(cnt[idx]/totLen[idx]*100) + '%' ); 
                    }
                }



            });
      },
      videoFn:function(){
        // var winW = 0;
        // var winH = 0;
        // var vidW = 0;
        // var vidH = 0;
        // var marT = 0;
        // var marL = 0;
        // var $mainVideo = $('#section4 .main-video');
        // var $section4 = $('#section4');

        //   //반응형
        //   function resizeFn(){
        //     winW = $(window).innerWidth();
        //     winH = $(window).innerHeight();
        //     vidW = $mainVideo.innerWidth();
        //     vidH = $mainVideo.innerHeight();
        //     marT = (winH-vidH)/2;//(969-1080)/2=-55.5
        //     marL = (winW-vidW)/2;//(1903-1920)/2= -8.5

        //     $section4.css({width:winW, height:winH});

        //     //창너비가 비디오 너비보다 크면
        //     if(winW > vidW){
        //       $mainVideo.css({width:winW,height:'auto'});
        //     }
        //     //창높이가 비디오 너비보다 크면
        //     if(winH > vidH){
        //       $mainVideo.css({width:'auto',height:winH});
        //     }
        //     $mainVideo.css({marginTop:marT,marginLeft:marL});
        //   }
        //   resizeFn();
        //   setTimeout(resizeFn,10);

        //   $(window).resize(function(){
        //     resizeFn();
        //   });
      },
      videoControlFn:function(){
        //비디어 컨트롤 재생 정지/사운드 켜기 끄기
        var $mainVideo = $('#section4 .main-video');
        var t = 0;
        var x=1; 

            $mainVideo.get(0).autoplay = true; //비디오 자동재생 true
            $mainVideo.get(0).muted = true; //사운드 꺼짐 true
            $mainVideo.get(0).loop = true; //반복재생 true
            $mainVideo.get(0).currentTime = 0; //재생 시점 위치를  지정 0 = 맨 처음
            x = Number(xspeed_form.xspeed.value);
            $mainVideo.get(0).playbackRate = x;

            //일시정지,재생
            $('.play-btn').on({
              click:function(){
                
                if(t==0){
                  t=1;
                  $('.control-box').addClass('addPlay');
                  $mainVideo.get(0).pause(); //pause();=정지 play();재생  
                }
                else if(t==1){
                  t=0;
                  $('.control-box').removeClass('addPlay');
                  $mainVideo.get(0).play(); //pause();=정지 play();재생

                }
              }
            });

            //리플레이
            $('.replay-btn').on({
              click:function(){
                $mainVideo.get(0).currentTime = 0;
                $mainVideo.get(0).play();
                $('.control-box').removeClass('addPlay');
                t=0; //초기화
              }
            });

            //배속 x0.75 x1 x1.25 x1.5 x1.75 x
            $('#xspeed').on({
              change:function(){
                x = Number(xspeed_form.xspeed.value);
                //배속 지정
                $mainVideo.get(0).playbackRate = x; //재생 시간 조절
              }
            });

            setId = setInterval(function(){
              console.log($mainVideo.get(0).currentTime)
              if($mainVideo.get(0).currentTime>=10){ //영상이 10초 이상이면
                $mainVideo.get(0).pause(); //끝내라
                $mainVideo.get(0).currentTime=0; //처음화면으로
                $('.control-box').addClass('addPlay');
                t=1; //정지 초기값
                clearInterval(setId);
              }
            },100);
      }
  }
  Profile.init();
})(jQuery);