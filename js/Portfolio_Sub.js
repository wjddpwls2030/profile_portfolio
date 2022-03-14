;(function($){
  var Profile  = {
      btn: 0,
      init:function(){
          this.videoFn();
          this.videoControlFn();
          this.GoTopFn();
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
        var $mainVideo = $('.main-video');
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
      },
      GoTopFn:function(){
        $(function () {
          $('.top').click(function () {
              $('html, body').animate({
                  scrollTop: 0
              }, 800);
          });
      });
      }
  }
  Profile.init();
})(jQuery);