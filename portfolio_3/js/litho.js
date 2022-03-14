;(function($){

    var litho = {      
        btn: 0, //헤더 영역에서 모바일 버튼 클릭시 변경 (btn = 1) 프로퍼티 == 멤버변수
       
        init: function(){  //메서드  == 리터럴 함수 == 객체함수 == 멤버함수
            this.scrollEventFn(); //여기에서 btn 멤버변수 가져다가 사용함.
            this.heaerFn();
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
            this.demoModalFn();
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
                 
                  var scr  = function(){ //리터럴 함수(익명함수)  양수  UP // 음수  DOWN                     
                      result = scrollOld-scrollNew > 0 ? 'UP' : 'DOWN';                        
                  }
                  
                  scr();                  
                  
                  if( $win.scrollTop() == 0 ){
                    $header.removeClass('addHide');
                    $header.removeClass('addBlack');
                    $header.removeClass('addWhite');
                  }
                  else{
                      //조건문
                      if(result == 'UP'){

                        //모바일 햄버거 버튼이 클릭된 상태의 이벤트
                        if( that.btn == 1 ){
                          $header.removeClass('addHide');
                          $header.addClass('addBlack');
                          $header.addClass('addWhite');
                        }
                        else{
                          $header.removeClass('addWhite');
                          $header.removeClass('addHide');
                          $header.addClass('addBlack');
                        }

                      }
                      if(result == 'DOWN'){
 
                        //모바일 햄버거 버튼이 클릭된 상태의 이벤트
                        if( that.btn == 1 ){
                          $header.removeClass('addBlack');
                          $header.removeClass('addHide'); 
                          $header.addClass('addWhite');
                        }
                        else{
                          $header.removeClass('addWhite');
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
        heaerFn:function(){

              //메인메뉴, 서브메뉴 객체와 배열
              var lithoNav = {
                  sub1:[
                    {sub:["Corporate","Startup","Business","Corporate","Finance","Application","Consulting","Digital agency","SEO agency","Events & conference","Marketing agency"]},
                    {sub:["Specialized","Restaurant","Architecture","Hotel & resort","Travel agency","Yoga & meditation","Gym & fitness","Spa salon","Cafe","Home decor","Interior design"]},
                    {sub:["Portfolio","Design agency","Web agency","Creative agency","Freelancer","Branding agency","Photography","Personal portfolio","Vertical portfolio","Interactive portfolio","Split portfolio","Creative portfolio"]},
                    {sub:["Other","Furniture shop","Fashion shop","Magazine","Lifestyle blog","Classic blog","Blog metro"]}
                  ],
                  sub2:[
                    {sub:"About", subsub:["About me","About us","Our story","Who we are"]},
                    {sub:"Services", subsub:["Our services","What we offer","Our process"]},
                    {sub:"Contact", subsub:["Contact simple","Contact classic","Contact modern"]},
                    {sub:"Additional pages", subsub:["Our team","Latest news","Pricing packages","Error 404","Maintenance","Coming soon","Coming soon - V2","FAQ's","Search result"]}
                  ],
                  sub3:[
                    {sub:"Portfolio classic", subsub:["Classic 2 column","Classic 3 column","Classic 4 column","Classic masonry","Classic metro"]},
                    {sub:"Portfolio boxed", subsub:["Boxed 2 column","Boxed 3 column","Boxed 4 column","Boxed masonry","Boxed metro"]},
                    {sub:"Portfolio colorful", subsub:["Colorful 2 column","Colorful 3 column","Colorful 4 column","Colorful masonry","Colorful metro"]},
                    {sub:"Portfolio bordered", subsub:["Bordered 2 column","Bordered 3 column","Bordered 4 column","Bordered masonry","Bordered metro"]},
                    {sub:"Portfolio overlay", subsub:["Overlay 2 column","Overlay 3 column","Overlay 4 column","Overlay masonry","Overlay metro"]},
                    {sub:"Portfolio switch image", subsub:["Switch image 2 column","Switch image 3 column","Switch image 4 column","Switch image masonry","Switch image metro"]},
                    {sub:"Portfolio other", subsub:["Portfolio scattered","Justified gallery","Portfolio slider"]},
                    {sub:"Single project page", subsub:["Single project page 01","Single project page 02","Single project page 03","Single project page 04","Single project page 05"]}
                  ],
                  sub4:[
                    {sub:["General","Accordions","Buttons","Team","Team carousel","Clients","Client carousel","Subscribe","Call to action","Tab","Google map","Contact form","Image gallery"]},
                    {sub:["Content & infographics","Progress bar","Icon with text","Over line icon box","Custom icon with text","Counters","Countdown","Pie charts","Fancy text box","Text box","Fancy text"]},
                    {sub:["Interactive","Testimonials","Testimonials carousel","Video","Interactive banners","Services","Info banner","Rotate box","Process step","Instagram","Parallax scrolling","Text slider"]},
                    {sub:["Text & containers","Heading","Drop caps","Columns","Blockquote","Highlights","Message box","Social icons","Lists","Separators","Pricing table"]}
                  ],
                  sub5:[
                    {
                      sub:"Header and menu",
                      subsub:["Transparent header","White header","Dark header","Header with top bar","Header with push","Center navigation","Center logo","Top logo","One page navigation","Hamburger menu","Left menu","Header type","Mobile menu"],
                      subsubsub:{
                        subsubsub1:["Hamburger menu","Hamburger menu modern","Hamburger menu hal"],
                        subsubsub2:["Left menu classic","Left menu modern"],
                        subsubsub3:["Always fixed","Disable fixed","Reverse scroll","Responsive sticky"],
                        subsubsub4:["Classic","Modern","Full screen"]
                      }               
                    },
                    {
                      sub:"Footer", 
                      subsub:["Footer style 01","Footer style 02","Footer style 03","Footer style 04","Footer style 05","Footer style 06","Footer style 07","Footer style 08","Footer style 09","Footer style 10","Footer style 11","Footer style 12"]
                    },
                    {
                      sub:"Page title", 
                      subsub:["Left alignment","Right alignment","Center alignment","Colorful style","Big typography","Parallax background","Separate breadcrumbs","Gallery background","Background video","Mini version"]
                    },
                    {
                      sub:"Modal popup", 
                      subsub:["Simple modal","Subscription","Contact form","Youtube video","Vimeo video","Google map"]
                    },
                    {
                      sub:"Icon packs", 
                      subsub:["Icons mind line","Icons mind solid","Feather","Font awesome","ET line","Themify","Simple line"]
                    },
                    {
                      sub:"Animations"
                    }
                  ], 
                  sub6:[
                    {sub:"Blog grid"},                      
                    {sub:"Blog masonry"},                      
                    {sub:"Blog classic"},                      
                    {sub:"Blog simple"},                      
                    {sub:"Blog side image"},                      
                    {sub:"Blog metro"},                      
                    {sub:"Blog overlay image"},                      
                    {sub:"Blog modern"},                      
                    {sub:"Blog clean"},                      
                    {sub:"Blog widget"},                      
                    {sub:"Blog standard"},                      
                    {sub:"Post layout", subsub:["Blog post layout 01","Blog post layout 02","Blog post layout 03","Blog post layout 04","Blog post layout 05"]},                      
                    {sub:"Post types", subsub:["Standard post","Gallery post","Slider post","HTML5 video post","Youtube video post","Vimeo video post","Audio post","Blockquote post","Full width pos"]},                      
                  ],
                  sub7:[
                    {sub:["Shop layout","Shop wide","Left sidebar","Right sidebar","Only categories","Single product","Utility pages","Shopping cart","Checkout","Login / Register"]},
                    {sub:["menu-banner-01.jpg"]},
                    {sub:["menu-banner-02.jpg"]}
                  ]
              }  //litho 객체 배열 메뉴


              function subObjectArrayFn(){

                //litho 객체 배열 서브 메뉴를 
                //콤포넌트 요소에 넣기
                //서브1 코딩
                var $col = $('#nav .col');
                var txt = '';

                    //sub1 :  4열
                    //서브1 그룹 : 1~4열 반복
                    for(var i in lithoNav.sub1){
                      for(var j in lithoNav.sub1[i].sub){
                        if(j==0){
                          txt =  "<dt>" + lithoNav.sub1[i].sub[j] + "</dt>"; //서브메뉴 타이틀
                        }
                        else{
                          txt += "<dd><a href='#'>" + lithoNav.sub1[i].sub[j] + "</a></dd>"; //서브메뉴 목록                  
                        }
                      }
                      $col.eq(i).html( txt );
                      txt ='';
                    }

                    //sub2 :  4행
                    //subsub 
                    ///////////////////////////////////////////////  
                    //서브2
                    var $subBtn = $('.sub2 .sub-btn'); //서브메뉴버튼 텍스트만
                    var $subsubUl = $('.sub2 .subsub'); //li a 서브서브메뉴 텍스트

                    //서브메뉴
                    for(var i in lithoNav.sub2){ // 0 ~ 3 (4행 반복)
                      txt = lithoNav.sub2[i].sub;
                      $subBtn.eq(i).html(txt);
                      txt = '';
                    }

                    //서브서브메뉴
                    //서브2 : sub2[0] > subsub[0 ~ 3]
                    for(var i in lithoNav.sub2){
                      for(var j in lithoNav.sub2[i].subsub){
                        txt += "<li><a href='#'>" + lithoNav.sub2[i].subsub[j] + "</a></li>"
                      }
                      $subsubUl.eq(i).html(txt); //<ul></ul> 태그 사이에 추가(Append)
                      txt = "";  
                    }

                    //서브3 
                    var $sub3Btn =  $('.sub3 .sub-btn');
                    var $sub3Sub =  $('.sub3 .subsub'); //ul
                    var imsi = '';
                        //서브3 > 서브메뉴
                        for(var i in lithoNav.sub3){
                          txt = lithoNav.sub3[i].sub; //서브3 > 서브메뉴
                          imsi = $sub3Btn.eq(i).html(); //버튼 내용이 임시에 저장
                          txt += imsi;  //우측에 화살모양 아이콘 추가 i태그
                          $sub3Btn.eq(i).html( txt );
                          txt = '';  
                        }

                        //서브3 > 서브서브메뉴 8개
                        for(var i in lithoNav.sub3){ //행 0 ~ 7
                          for(var j in lithoNav.sub3[i].subsub){ //열
                            txt += "<li><a href='#'>"+lithoNav.sub3[i].subsub[j]+"</a></li>";
                          }
                          $sub3Sub.eq(i).html(txt);
                          txt = '';
                        }
                        
                    //서브4
                    var $sub4Menu = $('.sub4 .sub-menu');

                        for(var i in lithoNav.sub4){
                          for(var j in lithoNav.sub4[i].sub){
                            if(j==0){
                              txt += "<dt>" + lithoNav.sub4[i].sub[j] + "</dt>";
                            }
                            else{
                              txt += "<dd><a href='#'>" + lithoNav.sub4[i].sub[j] + "</a></dd>";
                            }
                          }
                         $sub4Menu.eq(i).html( txt );
                          txt ='';
                        }

                    //sub5
                    var $sub5Btn = $('.sub5 .sub-btn');    
                    var $sub5Menu = $('.sub5 .sub-menu');    
                        
                        for(idx in lithoNav.sub5){ //0~5
                          txt = lithoNav.sub5[idx].sub; //서브메뉴 가져오기
                          imsi = $sub5Btn.eq(idx).html(); //아이콘 가져오기
                          txt += imsi;
                          $sub5Btn.eq(idx).html(txt);
                          txt = '';

                          if(idx==0){  //0 서브서브서브

                            for(i in lithoNav.sub5[idx].subsub){
                              if(i < 9){ //0 ~ 8
                                txt += "<li><a href='#' class='sub-sub-btn'>" + lithoNav.sub5[idx].subsub[i] +"</a></li>"; //서브서브 가져오기
                              }
                              else{ //9 ~ 12
                                txt += "<li><a href='#' class='sub-sub-btn'>" + lithoNav.sub5[idx].subsub[i] +"<i class='fas fa-angle-right'></i></a></li>"; //서브서브 가져오기
                              }
                              
                            }                   
                            $sub5Menu.eq(idx).html(txt);
                            txt = '';
    
                            //4Depth
                            //서브서브서브 메뉴 10번째
                            txt += $('.sub5-sub1>div>ul>li').eq(9).html(); //10번째 내용 가져오기                       
                            txt += "<div class='sub-sub-sub  sub5-sub1-sub10'>";
                            txt += "  <div class='sub-sub-sub-gap'>";
                            txt += "      <ul>";
                            txt += "          <li><a href='#'>Hamburger menu</a></li>";
                            txt += "          <li><a href='#'>Hamburger menu modern</a></li>";
                            txt += "          <li><a href='#'>Hamburger menu half</a></li>";
                            txt += "      </ul>";
                            txt += "  </div>";
                            txt += "</div>";
                            $('.sub5-sub1>div>ul>li').eq(9).html( txt );
                            txt = '';                        
    
    
                            //서브서브서브 메뉴 11번째
                            txt += $('.sub5-sub1>div>ul>li').eq(10).html(); //11번째 내용 가져오기                       
                            txt += "<div class='sub-sub-sub  sub5-sub1-sub11'>";
                            txt += "  <div class='sub-sub-sub-gap'>";
                            txt += "      <ul>";
                            txt += "          <li><a href='#'>Hamburger menu</a></li>";
                            txt += "          <li><a href='#'>Hamburger menu modern</a></li>";
                            txt += "      </ul>";
                            txt += "  </div>";
                            txt += "</div>";
                            $('.sub5-sub1>div>ul>li').eq(10).html( txt );
                            txt = '';
    
                            //서브서브서브 메뉴 12번째
                            txt += $('.sub5-sub1>div>ul>li').eq(11).html(); //12번째 내용 가져오기                       
                            txt += "<div class='sub-sub-sub  sub5-sub1-sub12'>";
                            txt += "  <div class='sub-sub-sub-gap'>";
                            txt += "      <ul>";
                            txt += "          <li><a href='#'>Hamburger menu</a></li>";
                            txt += "          <li><a href='#'>Hamburger menu modern</a></li>";
                            txt += "          <li><a href='#'>Hamburger menu half</a></li>";
                            txt += "      </ul>";
                            txt += "  </div>";
                            txt += "</div>";
                            $('.sub5-sub1>div>ul>li').eq(11).html( txt );
                            txt = '';
    
    
                            //서브서브서브 메뉴 13번째
                            txt += $('.sub5-sub1>div>ul>li').eq(12).html(); //13번째 내용 가져오기                       
                            txt += "<div class='sub-sub-sub  sub5-sub1-sub13'>";
                            txt += "  <div class='sub-sub-sub-gap'>";
                            txt += "      <ul>";
                            txt += "          <li><a href='#'>Hamburger menu</a></li>";
                            txt += "          <li><a href='#'>Hamburger menu modern</a></li>";
                            txt += "          <li><a href='#'>Hamburger menu half</a></li>";
                            txt += "      </ul>";
                            txt += "  </div>";
                            txt += "</div>";
                            $('.sub5-sub1>div>ul>li').eq(12).html( txt );
                            txt = '';
                            //서브서브서브 메뉴 13번째 끝
                            //sub5-sub1 끝
    
                          }
                          else if(idx>0 && idx<5){  //1 ~ 4
                            for(i in lithoNav.sub5[idx].subsub){
                              txt += "<li><a href='#' class='sub-sub-btn'>" + lithoNav.sub5[idx].subsub[i] +"</a></li>"; //서브서브 가져오기
                            }
                            $sub5Menu.eq(idx).html(txt);
                            txt = '';    
                          }

                        }

                      //서브6
                      var $sub6Btn = $('.sub6 .sub-btn'); //서브메뉴버튼 텍스트만
                      var $ul12 = $('.sub6 .sub6-sub12 ul');    //li a 서브서브메뉴 텍스트
                      var $ul13 = $('.sub6 .sub6-sub13 ul');    //li a 서브서브메뉴 텍스트

                          //서브
                          for(i in lithoNav.sub6){ //0 ~ 12
                              if(i<11){ //0 ~ 10
                                $sub6Btn.eq(i).html( lithoNav.sub6[i].sub );
                              }
                              else{
                                $sub6Btn.eq(i).html( lithoNav.sub6[i].sub + "<i class='fas fa-angle-right'></i>" );      
                              }
                          }                          

                          //서브서브 12
                          for(i in lithoNav.sub6[11].subsub){
                            txt += "<li><a href='#'>" + lithoNav.sub6[11].subsub[i] + "</a></li>";   
                          }                         
                          $ul12.html( txt );
                          txt = '';

                          //서브서브 13
                          for(i in lithoNav.sub6[12].subsub){
                            txt += "<li><a href='#'>" + lithoNav.sub6[12].subsub[i] + "</a></li>";   
                          }                         
                          $ul13.html( txt );
                          txt = '';


                          //sub7
                          var $sub7Dl1 = $('.sub7 dl').eq(0);
                          var $sub7Img = $('.sub7 dl img');    //이미지 2개
                          

                              for(i in lithoNav.sub7[0].sub){ //0 ~ 9
                                if( i==0 || i==6 ){ // || or 0 또는 6
                                  txt += "<dt>" + lithoNav.sub7[0].sub[i] + "</dt>";
                                }
                                else{ //나머지  1 2 3 4 5 7 8 9
                                  txt += "<dd><a href='#'>" + lithoNav.sub7[0].sub[i] + "</a></dd>";
                                }
                              }
                              $sub7Dl1.html( txt );
                              txt = '';

                              //이미지  
                              for(var i=0; i<$sub7Img.length; i++){
                                txt = $sub7Img.eq(i).attr('src'); //./img/
                                txt += lithoNav.sub7[i+1].sub[0];   //menu-banner-01.jpg  
                                $sub7Img.eq(i).attr('src', txt ); //./img/menu-banner-01.jpg 
                                txt = '';
                              }

              }
              subObjectArrayFn();


              //네비게이션
              var $window    = $(window);
              var $mainBtn   = $('#header .main-btn');
              var $subBtn    = $('#header .sub-btn');
              var $subSubBtn = $('#header .sub-sub-btn');
              var $navUlLi   = $('#header #nav>ul>li');
              var $sub       = $('#header .sub');
              var $subSub    = $('#header .sub-sub');
              var $subSubSub = $('#header .sub-sub-sub');  
              var $mobileBtn = $('#header .mobile-btn');
              var $bar       = $('#header .bar');
              var $nav       = $('#header #nav');
              var pc         = 0;
              var mobile     = 0;
              var $logoImg   = $('#header #logo a img');

              var that = this;  //litho 객체



              //980PX 초과에서만 클릭 이벤트            
              //1Depth 이벤트
              function pcEvemtFm(){                    
                  $nav.stop().show();
                  $sub.stop().hide();
                  $subSub.stop().hide();
                  $subSubSub.stop().hide();
                  $nav.css({display:'inline-block'});

                  $logoImg.attr('src','./img/logo-yellow-ochre-light-alt.png');

                  $mainBtn.on({
                    mouseenter:function(event){
                      event.preventDefault();
                      $(this).next().stop().show(); //2Depth 보여라
                    }
                  });

                  //메인메뉴와 서브메뉴 영역을 마우스가 떠나면 해당 서브메뉴 숨겨라
                  $navUlLi.on({
                    mouseleave:function(event){
                      event.preventDefault();
                      $sub.stop().hide();
                    }
                  });                    

                  //2Depth 이벤트
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

                  //3Depth 이벤트
                  $subSubBtn.on({
                    mouseenter:function(event){
                      event.preventDefault();
                      $subSubSub.stop().hide();
                      $(this).next().stop().show();
                    }
                  });

                  $subSub.on({
                    mouseleave:function(event){
                      event.preventDefault();
                      $subSubSub.stop().hide();
                    }
                  });

              } //pc Event end


              //980PX 이하에서만 클릭 이벤트  
              //모바일 메뉴

              function mobileEventFn(){
                  $sub.stop().hide();
                  $subSub.stop().show();
                  $subSubSub.stop().show();
                  $bar.removeClass('addMobile');
                  $nav.stop().slideUp(0);
                
                  $logoImg.attr('src','./img/logo-yellow-ochre-alt.png');


                  //이벤트 삭제하기
                  $mainBtn.off('mouseenter');
                  $navUlLi.off('mouseleave');
                  $subBtn.off('mouseenter');
                  $navUlLi.off('mouseleave');
                  $subSubBtn.off('mouseenter');
                  $subSub.off('mouseleave');
                  
                  
              }//mobile Event end


              function pcMobileFn(){
                if( $window.innerWidth() > 980 ){                    
                  pc=1;
                  mobile=0;
                  pcEvemtFm();
                  that.btn = 0; //pc 데스크탑에서 초기화
                }
                else{
                  pc=0;
                  mobile=1;
                  mobileEventFn();
                } 
              }
              setTimeout(pcMobileFn,100); //로딩시
              
              //PC MODE / MOBILE MODE
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
                    $(this).next().stop().slideToggle(300); //서브메뉴 펼치기  
                  }                  
                }
              });


              //모바일에서만 동작 
              //3선메뉴 (햄버거메뉴)
              $mobileBtn.on({
                click:  function(event){
                  event.preventDefault();
                  $bar.toggleClass('addMobile');   
                  $nav.stop().slideToggle(300);

                  that.btn == 0 ? that.btn = 1 : that.btn = 0 ; //전역 변수(전역 멤버변수)
                  
                  // if( that.btn == 0 ){
                  //   that.btn = 1;
                  // }
                  // else{
                  //   that.btn = 0;
                  // }

                  // console.log( that.btn );
                }
              });
              
        },
        section1Fn:function(){

          var $slide     = $('#section1 .slide');
          var $window    = $(window);
          var $winW      = $(window).width();
          var $winH      = $(window).height();
          var $nextBtn   = $('#section1 .next-btn');
          var $prevBtn   = $('#section1 .prev-btn');
          var $pageBtn   = $('#section1 .page-btn');
          var $slideWrap = $('#section1 .slide-wrap');
          var $slideView = $('#section1 .slide-view'); //터치 선택자(Touch Selector)
          var $section1  = $('#section1');
          var cnt        = 0;
          var n          = $('#section1 .slide').length;
          var setId      = null;
          var setId2     = null;

              function resizeFn(){
                $winW = $(window).width();
                $slide.css({width:$winW});
                $winH = $(window).height();

                if( window.orientation == 0 || window.orientation == 180  ){ //Portrait
                  $winH = $winH;
                }
                else if( window.orientation == 90 || window.orientation == -90 ){ //Landscape                  
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




              //메인슬라이드
              //1-1. 메인슬라이드함수 - 다음 슬라이드 함수있음
                function mainNextSlideFn(){
                  $slide.css({ zIndex:1 });
                  $slide.eq(cnt==0?2:cnt-1).css({ zIndex:2 });
                  $slide.eq(cnt).css({ zIndex:3 }).find('.col').stop().animate({width:0},0).animate({width:20+'%'},1000);
                  pageBtnColorEventFn();
                }
              //1-2. 메인슬라이드함수 - 이전 슬라이드 함수
                function mainPrevSlideFn(){
                  $slide.css({ zIndex:1 }).find('.col').stop().animate({width:20+'%'},0);
                  $slide.eq(cnt).css({ zIndex:2 });
                  $slide.eq(cnt==2?0:cnt+1).css({ zIndex:3 }).find('.col').stop().animate({width:20+'%'},0).animate({width:0},1000);
                  pageBtnColorEventFn();
                }
              //2-1. 다음 슬라이드 카운트 함수
              function nextSlidCountFn(){
                  cnt++;
                  if(cnt>2){ //2보다 크면 0으로 다시 돌아가라
                    cnt=0;
                  }
                  mainNextSlideFn(); //메인 다음 슬라이드 함수 호출
              }
              
              //2-2. 이전 슬라이드 카운트 함수
              function prevSlidCountFn(){
                  cnt--;
                  if(cnt<0){ //0보다 작으면 2로 다시 돌아가라
                    cnt=2; 
                  }
                  mainPrevSlideFn(); //메인 이전 슬라이드 함수 호출
              }
              
              //3-1. 다음 화살 버튼 클릭 이벤트
              $nextBtn.on({
                click:  function(){
                  puaseTimerFn();
                  if( !$('.col').is(':animated')){
                    nextSlidCountFn(); //다음 슬라이드 카운트 함수 호출
                  }                  
                }
              });

              //3-2. 이전 화살 버튼 클릭 이벤트
              $prevBtn.on({
                click:  function(){
                  puaseTimerFn();
                  if( !$('.col').is(':animated')){
                    prevSlidCountFn(); //이전 슬라이드 카운트 함수 호출
                  }
                }
              });


              //4-1 페이지 버튼 이벤트 : 해당 슬라이드에 버튼에 색상 변경
              //페이지 버튼 색상변경 이벤트 함수
              function pageBtnColorEventFn(){
                $pageBtn.removeClass('addPage');
                $pageBtn.eq(cnt > n-1 ? 0 : cnt).addClass('addPage'); //0 1 2 0 1 2
              }
              pageBtnColorEventFn(); //로딩시 페이지함수 실행

              //4-2 페이지 버튼 클릭 이벤트
              $pageBtn.each(function(idx){                  
                $(this).on({  //첫번째 슬라이드 호출
                  click:  function(){
                    puaseTimerFn(); //타이머 중지
                    if( cnt > idx ){ //ex) cnt = 2, idx = 0 cnt가 더 클 경우는 이전슬라이드
                      //이전 슬라이드 호출
                      cnt = idx; //내가 클릭한 번호가 전달됨
                      mainPrevSlideFn()
                    }
                    else if( cnt < idx ){//ex)cnt = 0 , idx = 1 cnt가 작은 경우는 다음 슬라이드//else는 쓰면 안됨 .else if나 if
                      //다음 슬라이드 호출
                      cnt = idx;
                      mainNextSlideFn()
                    }
                   
                  }
                });
              });


              //5 터치 스와이프
              $slideView.swipe({
                swipeLeft:function(e){ //오른쪽에서 왼쪽으로 터치
                  e.preventDefault();
                  puaseTimerFn();
                  if( !$slideWrap.is(':animated')){
                    nextSlidCountFn();
                  }
                },
                swipeRight:function(e){ //왼쪽에서 오른쪽으로 터치
                  e.preventDefault();
                  puaseTimerFn();
                  if( !$slideWrap.is(':animated')){
                    prevSlidCountFn();
                  }
                }
              });


              //6. 자동 타이머 함수 4초 간격으로 타이머가 반복 실행
              // function autoTimerFn(){
              //   setId = setInterval(nextSlidCountFn, 4000);
              // }

              // autoTimerFn();

              //7. 슬라이드에서 이벤트(터치, 클릭) 발생 시 자동 타이머를 일시중지

              function puaseTimerFn(){
                var t = 0;
                clearInterval(setId);
                clearInterval(setId2); //초기화
                // 5초동안 아무 이벤트 없으면 다시 자동 타이머 실행
                setId2 = setInterval(function(){
                  t++;
                  if( t>=5 ){   
                    t = 0;                 
                    clearInterval(setId2);   
                    clearInterval(setId);  
                    nextSlidCountFn();               
                    autoTimerFn();
                  }
                }, 1000);
              }

        },

        section2Fn:function(){
            //스크롤 시 
            //3칸 좌측에서 우측으로 차례로 페이드 인 효과
            //첫번째칸 페이드 아웃(css opascity:0)페이드 인(css opascity:1)

            //1.선택자 변수
            var col = $('#section2 .container > ul > li ');
            var t = 0 ; //스크롤 이벤트 토글 변수
            function fadeInFn(){
              col.eq(0).stop().animate({opacity:1},400,function(){
                col.eq(1).stop().animate({opacity:1},400,function(){
                  col.eq(2).stop().animate({opacity:1},400)
                });
              });
            }

            //새로고침 시 실행
            //fadeInFn();

            //상단 섹션1에서 스크롤 탑 값이 200픽셀 아래로 내려오면
            //섹션2의 페럴럭스 애니메이션 수행
             $(window).scroll(function(){

              //맨 위에 도달 시 초기화
              if($(this).scrollTop() == 0){
                t=0;
                col.stop().animate({opacity:0},0);
              }
              if($(this).scrollTop()>400){
                if(t==0){
                  t=1;
                  fadeInFn();
                }
              }
             });

                
        },
        section3Fn:function(){
          var $prevBtn    = $('#section3 .prev-btn');
          var $nextBtn    = $('#section3 .next-btn');
          var $slideWrap  = $('#section3 .slide-wrap');
          var $slideView  = $('#section3 .slide-view');
          var cnt         = 0; //카운트 변수는 반드시 숫자로 지정
          var setId       = null; //메모리 할당 전형 안한 상태
          var setId2      = null; //메모리 할당 전형 안한 상태
          var n           = $('#section3 .slide').length-(4+4)-1; //4개(0,1,2,3)
          var $slideW     = $('#section3 .slide').innerWidth();
          var $window     = $(window);
          var t = 0;
          var $section3   =$('#section3');
              //페럴럭스
              function scrollFn(){
                $section3.addClass('addAni');
              }
              $window.scroll(function(){
                //초기화
                if($(this).scrollTop()===0){
                  t=0;
                  $section3.removeClass('addAni');
                }
                if($(this).scrollTop()>800){
                  if(t==0){
                    t=1;
                    scrollFn();
                  }
                }
              });
              //1.
              function responseFn(){
                $slideW  = $('#section3 .slide').innerWidth();
                mainSlideFn();
              }

              setTimeout(responseFn, 100);

              //2.
              $window.resize(function(){
                responseFn();
              });



              //1
              function mainSlideFn(){                
                $slideWrap.stop().animate({left:-$slideW*cnt},600,'easeInOutSine', function(){
                  if(cnt>n){cnt=0}
                  if(cnt<0){cnt=n}
                  $slideWrap.stop().animate({left:-$slideW*cnt},0);
                });
              }

              //2 
              function nextCountFn(){
                cnt++;
                mainSlideFn();
              }
              //2 
              function prevCountFn(){
                cnt--;
                mainSlideFn();
              }

              //3 
              $nextBtn.on({
                click:function(){   
                  timerFn();
                  if(!$slideWrap.is(':animated')){
                    nextCountFn();
                  }                  
                }
              });

              //3 
              $prevBtn.on({
                click:function(){  
                  timerFn();                              
                  if(!$slideWrap.is(':animated')){
                    prevCountFn();
                  }                  
                }
              });

              
              //4 터치 스와이프
              var touchStart = 0;
              var touchEnd = 0;
              var mouseDown = 0;
              
              $slideView.on({
                mousedown: function(e){
                  mouseDown = 1;
                  e.preventDefault();                    
                    timerFn();
                    touchStart = e.clientX;                                  
                },
                touchstart: function(e){
                  mouseDown = 1;
                  e.preventDefault();                    
                    timerFn();
                    touchStart = e.originalEvent.changedTouches[0].clientX;
                },
                mouseup: function(e){
                  mouseDown = 0;
                  e.preventDefault();
                    timerFn();
                    touchEnd = e.clientX;
                    touchSwipeFn();
                },
                touchend: function(e){
                  mouseDown = 0;
                  e.preventDefault();
                    timerFn();
                    touchEnd = e.originalEvent.changedTouches[0].clientX;
                    touchSwipeFn();
                },
                mouseleave: function(e){
                  e.preventDefault();
                  if(mouseDown == 1){
                      mouseDown = 0;                  
                      timerFn();
                      touchEnd = e.clientX;
                      touchSwipeFn()
                  }                 
                }
              });

              function touchSwipeFn(){

                if( (touchStart-touchEnd) > 0 ){                      
                    if(!$slideWrap.is(':animated')){
                      nextCountFn();
                    }  
                }
                if( (touchStart-touchEnd) < 0 ){
                    if(!$slideWrap.is(':animated')){
                      prevCountFn();
                    }  
                } 
            }

              //5
              function autoPlay(){
                setId = setInterval(nextCountFn, 4000); 
              }
              autoPlay(); //로딩시 4초후에 4초간격으로 재생

            //콜백 타이머
            
            //0타이머 함수

            //1 이벤트(클릭 이벤트와 터치 이벤트) 발생하면 애니메이션 일시중지
            //2 그리고 4초간 이벤트(클릭 이벤트와 터치 이벤트)가 없으면
            //3 다음 슬라이드 곧바로 실행 nextCountFn()
            //4 자동 타이머 실행 autoPlay() 

            function timerFn(){
              var t = 0;
              clearInterval(setId);
              clearInterval(setId2);
              setId2 = setInterval(function(){
                t++;
                if( t>=4 ){
                  t = 0;
                  clearInterval(setId);
                  clearInterval(setId2);
                  nextCountFn();
                  autoPlay();
                }
              }, 1000);
            }
              
        },
        section4Fn:function(){
          var $sec4     = $('#section4');
          var $left     = $('.left-wrap');
          var $right     = $('.right-wrap');
          var $smallImg = $('.small-img');
          var $largeImg = $('.large-img');
          var x         = 0;    
          var y         = 0;
          var t         = 0;
          var section4Top = $('#section4').offset().top; //섹션4의 탑값
          var section5Top = $('#section5').offset().top; //섹션5의 탑값
          var imgTop      = -20;
          var oldscrollTop   = 0; //이전 스크롤
          var newscrollTop   = 0; // 새로운 스크롤 값
             
            //페럴럭스
            function scrollFn(){
              $left.addClass('addAni');
                setTimeout(function(){
                  $right.addClass('addAni');
                },200);
            }

            $(window).scroll(function(){
              if($(window).scrollTop() >section4Top-400){ //섹션4보다 400만큼 올라갔을 때
                if(t==0){
                  t=1;
                  scrollFn();
                }
              }
              if($(window).scrollTop() >= section4Top-400 && $(window).scrollTop() < section5Top+400){
                newscrollTop = $(window).scrollTop();
                
                if( (oldscrollTop -  newscrollTop) > 0 ){
                  console.log('위로',(oldscrollTop -  newscrollTop));
                  //스크롤이 위로 올라가면 이미지는 아래로 내려간다.
                  imgTop+=3; //1씩 증가 -20+1 -19+1 -18+1 > 아래로 내려감
                  $largeImg.css({transition:'none',top:imgTop});
                }

                if( (oldscrollTop -  newscrollTop) < 0 ){
                  console.log('아래로',(oldscrollTop -  newscrollTop));
                  //스크롤이 아래로 내려가면 이미지는 위로 올라감
                  imgTop-=3; //1씩 감소 -20+-1 -19-1 > 위로 올라감
                  $largeImg.css({transition:'none',top:imgTop});
                }
                oldscrollTop = newscrollTop;



              }
            });



              //마우스 무브(mousemove) 이벤트
              //작은 이미지($smallImg)를 마우스의 움직임에 의해서
              //상하(마우스의 수직이동) : Y(대문자사용)좌표 
              //좌우(마우스의 수평이동) : X(대문자사용)좌표
              //이벤트를 확인(좌표 clientX, clientY, pageX or pageY, screenX or pageY )
              //좌표이동을 이용한 애니메이션 효과

              //1. 선택자( $smallImg ) 마우스 무브(mousemove) 이벤트
              //2. 타겟의 좌표를 가져와서 거기에서 움직임을 준다.
              // $sec4.on({
              //   mousemove:function(event){
              //     x = event.clientX*.03;
              //     y = event.clientY*.03;
              //     // x = event.screenX*.03;
              //     // y = event.screenY*.03;
              //     // x = ($smallImg.offset().left-event.pageX)*.03; //현재위치 좌표
              //     // y = ($smallImg.offset().top-event.pageY)*.03;  //현재위치 좌표


              //     $smallImg.css({ bottom: y+70 , left: x });
              //     $largeImg.css({ top: -y*1.2 , left: -x*1.2 });
              //     //좌표값이 음수이면 마우스 움직의 반대로 이동한다.
              //     //좌표값이 양수이면 마우스 움직의 같은방향으로 이동한다.
              //   }
              // });

              // console.log('푸터의 탑 위치 offset().top ', $('#footer').offset().top );
              // console.log('footer 높이 ', $('#footer').height() );
              // console.log('창 높이 ', $(window).height() );
              // console.log('웹문서 전체 높이 ', $(document).height() );
              // console.log('웹문서 전체 너비 ', $(document).width() );







        },
        section5Fn:function(){
            var $section5  = $('#section5');
            var $section5Top  = $('#section5').offset().top-400;
            var $slideWrap = $('#section5 .slide-wrap');
            var $slideW    = 445; //-445*1   //-445*2 + -235  //-445*3 + -235  //-445*0+0
            var n          = $('#section5 .slide').length-8-1; //0 ~ 3
            var aBtn       = $('#section5 .slide a');
            var cnt        = 0;
            var a          = 0; //2번쩨 슬라이드 680 너비 추가하기 위해서 사용   
            var $slideView = $('#section5 .slide-view');
            var setId      = null;
            var setId2     = null;
            var t = 0;

                //페럴럭스
                function scrollFn(){
                  $section5.addClass('addAni');
                }

                $(window).scroll(function(){
                  if($(this).scrollTop() == 0){ //스크롤이 맨 위로 (0) 부딪히면 애니메이션 초기화
                    t=0;
                    $section5.removeClass('addAni');
                  }
                  if($(this).scrollTop()>= $section5Top){
                    if(t==0){
                      t=1;
                      scrollFn(); //확인 페이드 인 효과
                    }
                  }
                });


                //1. 메인 슬라이드 함수
                function mainSlideFn(){
                  cnt>=2 ? a=-235 : a=0;
                  $slideWrap.stop().animate({left:(-$slideW*cnt)+a},600, function(){
                    if(cnt>n){
                      cnt=0;
                      a=0;   //마지막 슬라이드에서 초기화 0으로
                    }
                    if(cnt<0){
                      cnt=n;
                      a=-235; // 4 3 2 
                    }
                    $slideWrap.stop().animate({left:(-$slideW*cnt)+a},0);
                  });
                }

                //2. next 카운트 함수
                function nextCountFn(){
                  cnt++;
                  mainSlideFn();
                }
                //2. prev 카운트 함수
                function prevCountFn(){
                  cnt--;
                  mainSlideFn();
                }

                //3. 자동 슬라이드 함수
                function autoSlideFn(){
                 setId = setInterval(nextCountFn, 4000);
                }

                autoSlideFn();

                //4 터치 스와이프
                var touchStart = 0;
                var touchEnd = 0;
                var mouseDown = 0;
                    
                    $slideView.on({                
                      mousedown: function(e){
                        mouseDown = 1;
                        e.preventDefault();
                          
                          timerFn();
                          touchStart = e.clientX; //e.pageX                                       
                      },
                      touchstart: function(e){
                        mouseDown = 1;
                        e.preventDefault();
                          
                          timerFn();
                          touchStart = e.originalEvent.changedTouches[0].clientX; //e.pageX 
                      },
                      mouseup: function(e){
                        mouseDown = 0;
                        e.preventDefault();
                          timerFn();

                          touchEnd = e.clientX;
                          touchSwipeFn();
                      },                      
                      touchend: function(e){
                        mouseDown = 0;
                        e.preventDefault();
                          timerFn();

                          touchEnd = e.originalEvent.changedTouches[0].clientX; //e.pageX ;
                          touchSwipeFn();
                      },                      
                      mouseleave: function(e){
                        e.preventDefault();                        
                        if( mouseDown==1 ){
                            mouseDown = 0;
                            timerFn();
                            touchEnd = e.clientX;
                            touchSwipeFn();
                        }
                      }
                    });

                    function touchSwipeFn(){

                        if( (touchStart-touchEnd) > 0 ){                      
                            if(!$slideWrap.is(':animated')){
                              nextCountFn();
                            }  
                        }
                        if( (touchStart-touchEnd) < 0 ){
                            if(!$slideWrap.is(':animated')){
                              prevCountFn();
                            }  
                        } 
                    }

                



                //5. 정지상태인 슬라이드 다시 실행하는 타이머 함수
                function timerFn(){
                  var tcnt = 0;
                      clearInterval(setId);
                      clearInterval(setId2);
                      setId2 = setInterval(function(){
                        tcnt++;
                        if(tcnt>=4){
                          clearInterval(setId);
                          clearInterval(setId2);
                          nextCountFn(); //다음슬라이드 즉시
                          autoSlideFn(); //계속진행 4초간격
                        }
                      },1000);
                }
                //6. 모든 a링크 클릭시 이벤트 삭제
                aBtn.on({
                  click:function(e){
                    e.preventDefault();
                  }
                });

        },
        section6Fn:function(){
           var $ul = $('#section6 .container > ul > li ul');
           var column0 = $('#section6 .container > ul > li').eq(0);
           var column1 = $('#section6 .container > ul > li').eq(1);
           var column2 = $('#section6 .container > ul > li').eq(2);
           var column3 = $('#section6 .container > ul > li').eq(3);
           
           var cnt1 = [0,0,0,0];
           var cnt2 = [0,0,0,0];
           var cnt3 = [0,0,0,0];
           var cnt4 = [0,0,0,0];

           var setId1 = [null,null,null,null];
           var setId2 = [null,null,null,null];
           var setId3 = [null,null,null,null];
           var setId4 = [null,null,null,null];
           var timer  = 2;
           var num1   = [];
           var num2   = [];
           var num3   = [];
           var num4   = [];
           var t = 0;

              

 
          // 페럴럭스 
          $(window).scroll(function(){

            if( $(window).scrollTop() >= $('#section6').offset().top-700  ){
              if(t==0){
                t=1; //변수를 수정해서 다음에 조건 만족못하게 변경                
                $('#section6 .wrap .gap .container > ul').addClass('addCounter');                
                
                  setTimeout(function(){
                    formatFn();
                    setTimeout(countFn,500);
                  },100);

              }                
            }

            if( $(window).scrollTop() === 0 ){
              t=0;
              cnt1 = [0,0,0,0];
              cnt2 = [0,0,0,0];
              cnt3 = [0,0,0,0];
              cnt4 = [0,0,0,0];         
              $('#section6 .wrap .gap .container > ul').removeClass('addCounter');         
            }

          });     







          //초기화함수
          function formatFn(){
            $ul.css({top:0});
            //객체 요소 내에 data-? 속성을 가져오기
            column0.find('.col').each(function(idx){
              num1[idx] =  $(this).data('number');
            }); 
            column1.find('.col').each(function(idx){
              num2[idx] =  $(this).data('number');
            }); 
            column2.find('.col').each(function(idx){
              num3[idx] =  $(this).data('number');
            }); 
            column3.find('.col').each(function(idx){
              num4[idx] =  $(this).data('number');
            });  

          }

          //카운트함수
          function countFn(){

              //1열 의 4열 2530
              setId1.forEach(function(el,idx){
                setId1[idx] = setInterval(function(){
                  cnt1[idx]++;
                  if( cnt1[idx] > 65*num1[idx] ){
                    clearInterval(setId1[idx]);
                  }
                  else{
                    column0.find('ul').eq(idx).css({ top: -cnt1[idx] });
                  }
                },timer);
              });
              


              //2열 의 4열 3200
               
                setId2.forEach(function(el,idx){

                  setId2[idx] = setInterval(function(){
                    cnt2[idx]+=1;
                    if( cnt2[idx] > 65*num2[idx] ){
                      clearInterval(setId2[idx]);
                    }
                    else{
                      column1.find('ul').eq(idx).css({ top: -cnt2[idx] });
                    }
                  },timer);
               
                });
              
              

              //3열 의 4열 2830
                        
                setId3.forEach(function(el,idx){
                  setId3[idx] = setInterval(function(){
                    cnt3[idx]+=1;
                    if( cnt3[idx] > 65*num3[idx] ){
                      clearInterval(setId3[idx]);
                    }
                    else{
                      column2.find('ul').eq(idx).css({ top: -cnt3[idx] });
                    }
                  },timer);               
                });


              //4열 의 4열 2060                        
              setId4.forEach(function(el,idx){
                setId4[idx] = setInterval(function(){
                  cnt4[idx]+=1;
                  if( cnt4[idx] > 65*num4[idx] ){
                    clearInterval(setId4[idx]);
                  }
                  else{
                    column3.find('ul').eq(idx).css({ top: -cnt4[idx] });
                  }
                },timer);
              });
            }

         },
        section7Fn:function(){
            var $bg = $('#section7 .bg');
            var $li = $('#section7 li');
            
              //해당하는 칸의 인덱스 번호 호출
              $li.each(function(idx){
                $(this).on({
                  mouseenter:function(){
                    $bg.stop().animate({opacity:0},300);
                    $bg.eq(idx).stop().animate({opacity:1},500);
                  }
                });
              });
              $li.each(function(idx){
                $(this).on({
                  mouseleave:function(){
                    $bg.stop().animate({opacity:0},300);
                    $bg.eq(0).stop().animate({opacity:1},500);
                  }
                });
              });

                            

        },
        section8Fn:function(){
         var $slideView = $('#section8 .slide-view');
         var $slideWrap = $('#section8 .slide-wrap');
         var $slide     = $('#section8 .slide');
         var slideW     = $('#section8 .slide').innerWidth();
         var n          = $('#section8 .slide').length;
         var touchStart = 0;
         var touchEnd   = 0;
         var cnt        = 0;
         var next       = [2,0,1]; //맨 마지막 슬라이드가 맨 앞으로 오고 나머지 순서대로 //5개인경우 [4,0,1,2,3] 10개인경우 [9,0,1,2,3,4,5,6,7,8]
         var prev       = [0,2,1]; //맨 첫번째 슬라이드가 맨 앞으로 오고 나머지 역순으로 //5개인경우 [0,4,3,2,1] 10개인경우 [0,9,8,7,6,5,4,3,2,1]
         var ismouseDown  = 0;


         mainSlideFn();   //cnt=1
         //mainSlideFn(); //cnt=2

            //1. 메인 다음 슬라이드 함수 - 배열 슬라이드
            function mainSlideFn(){
                //next 배열에 초기값 설정 방법
                //1. 슬라이드 전체 갯수(3) 만큼 반복문 처리 설정
                for(var i=0;i<n;i++){
                  next[i] = i; //next[0]=0,next[1]=1,next[2]=2
                }//next=[0,1,2]

                //팝핑작업
                //2. next = [0,1,2] 기억 된 마지막 배열값을 삭제(pop)한다. 그리고 임시 기억 시킨다.
                var imsi = next.pop(); //next=[0,1]
                //3. 삭제 시킨 값을 next 배열 맨 처음 위치에 삽입한다. unshift()
                next.unshift(imsi);  //next = [2,0,1]; 초기 설정 (기준값 반드시 사용)

                //배열 메서드
                //1. 맨 첫번째 배열값 삭제(shift<->unshift)
                //2. 삭제된 배열 값 임시 변수에 저장(기억)
                //3. 임시에 기억된 배열 값 맨 마지막 위치에 배열 삽입(push<->pop)
                
                for(var i=0; i<cnt; i++){
                    var imsi = next.shift();
                              next.push(imsi);
                }

                for(var i=0;i<n;i++){
                  $slide.eq(next[i]).stop().animate({left:(100*i) + '%'},0).animate({left:(100*(i-1)) + '%'},1000);
                }
                // $slide.eq(next[0]).stop().animate({left:(100*0) + '%'},0).animate({left:(100*-1) + '%'},1000);
                // $slide.eq(next[1]).stop().animate({left:(100*1) + '%'},0).animate({left:(100* 0) + '%'},1000);
                // $slide.eq(next[2]).stop().animate({left:(100*2) + '%'},0).animate({left:(100* 1) + '%'},1000);//이전으로 되돌려 놓는거므로 숫자가 1씩 많아져야함
            }

            //1-2. 메인 이전 슬라이드 함수 - 배열 슬라이드
            
            function mainPrevSlideFn(){
              //1.슬라이드 총 갯수 만큼 반복 배열값 삽입
              var j=n; //3
              for(var i=0;i<n;i++){
                j--; //2 1 0
                prev[i]=j; //prev[0]=2,prev[1]=1,prev[2]=0
              }
              //결과(Result) : prev = [2,1,0] 역순으로 기억
              //2. 맨 뒤 배열 값 삭제 후 임시 기억 변수에 저장한다.
              var imsi = prev.pop();
              //3. 임시기억변수에 기억된 배열 값 맨 마지막 위치에 배열 삽입
              prev.unshift(imsi); //prev = [0,2,1]

              for(var i=n-1;i>cnt;i--){ //cnt=2 인 경우 실행 안함, cnt=1인 경우 1회 반복, cnt=0인 경우 2회 반복
                var imsi = prev.shift();
                           prev.push(imsi);
              }
              for(var i=0;i<n;i++){
                $slide.eq(prev[i]).stop().animate({left:(100* (i*-1)) + '%'},0).animate({left:(100*((i*-1)+1)) + '%'},1000);
              }
              
              // $slide.eq(prev[0]).stop().animate({left:(100* 0) + '%'},0).animate({left:(100*  1) + '%'},1000);
              // $slide.eq(prev[1]).stop().animate({left:(100*-1) + '%'},0).animate({left:(100*  0) + '%'},1000);
              // $slide.eq(prev[2]).stop().animate({left:(100*-2) + '%'},0).animate({left:(100* -1) + '%'},1000);
            }

            //2. 다음 슬라이드 카운트 함수
            function nextSlideCountFn(){
              cnt++;
              if(cnt>2){cnt=0}
              mainSlideFn();
            }
            //2-1. 이전 슬라이드 카운트 함수
            function prevSlideCountFn(){
              cnt--;
              if(cnt<0){cnt=2}
              mainPrevSlideFn();
            }

            //3. 터치 이벤트 핸들러 등록
            $slideView.on({
              mousedown:function(e){
                ismouseDown = 1;
                e.preventDefault();
                touchStart = e.pageX;

              },
              touchstart:function(e){
                ismouseDown = 1;
                e.preventDefault();
                touchStart = e.originalEvent.changedTouches[0].pageX;
              },
              mouseup:function(e){
                ismouseDown = 0; //마우스 다운을 초기화 상태로 전환 >> 마우스 리브가 동작 안함
                e.preventDefault();
                touchEnd = e.pageX;
                //마우스를 놓는 지점에서 다음 슬라이드, 이전 슬라이드 이벤트 함수 호출
                touchCallFn();
              },
              touchend:function(e){
                ismouseDown = 0;
                e.preventDefault();
                touchEnd = e.originalEvent.changedTouches[0].pageX;
                touchCallFn();
              },
              mouseleave:function(e){ //마우스 업이 안된 상태(ismouseDown = 0;)에서만 수행
                if(ismouseDown == 1){ //마우스가 다운 상태에서만 동작
                  ismouseDown = 0; //초기화 시켜주지 않으면 마우스를 클릭 안해도 슬라이드 넘어감
                  touchEnd = e.pageX;
                  console.log('touchStart',touchStart);
                  console.log('touchEnd',touchEnd);
                  touchCallFn();
                }
               
              }
              // touchmove:function(e){ //마우스를 업(mouseup)이 안된상태에서만 수행
              //   if( mouseDown == 1 ){ //마우스가 다운상태에서만 동작 
              //     mouseDown = 0 ;     //1회만 수행 해야함 아니면 계속 마우스리브시 이벤트 발생
              //     touchEnd = e.originalEvent.changedTouches[0].pageX;
              //     console.log('touchStart ', touchStart );
              //     console.log('touchEnd ', touchEnd );
              //     touchCallFn();
              //   }
              // }
            });

            //4. 터치 시 호출 할 다음,이전 슬라이드 이벤트 함수
            function touchCallFn(){
              
              if(touchStart>touchEnd){
                nextSlideCountFn();
              }
              if(touchStart<touchEnd){
                prevSlideCountFn();
              }
            }

        },
        section9Fn:function(){
          var $section9Top    = $('#section9').offset().top-400;
          var $li             = $('#section9 .content > ul > li');
          var $ul             = $('#section9 .content-wrap ul');
          var $leftW          = $('#section9 .left').innerWidth();
          var $h3             = $('#section9 .right-wrap h3');
          var $p              = $('#section9 .right-wrap h6');
          var $h6             = $('#section9 .right-wrap p');
          //$ul 높이  = $left 박스의 너비 값 * 높이 비율 (1.385683076)
          var $ulH    =  $leftW * 1.385683076;
          var h3Size  =  $leftW * 0.069477146;// 폰트사이즈/박스너비값(269.094px)
          var pSize   =  $leftW * 0.057897622;
          var h6Size  =  $leftW * 0.046318097;
          var t = 0;    
          //페럴럭스
          function scrollFn(){
            setTimeout(function(){
              $li.eq(0).addClass('addAni');
              setTimeout(function(){
                $li.eq(1).addClass('addAni');
                setTimeout(function(){
                  $li.eq(2).addClass('addAni');
                },100);
              },100);
            },100);
          }
            $(window).scroll(function(){
              if($(this).scrollTop() == 0 ){
                t=0;
                $li.removeClass('addAni');
              }
              if($(this).scrollTop() >= $section9Top ){
                if(t==0){
                  t=1;
                  scrollFn();
                }
              }
            })
              //1. 반응형 함수
              function resizeFn(){
                   $leftW = $('#section9 .left').innerWidth();
                   $ulH =  $leftW*1.385683076;
                   h3Size  =  $leftW * 0.069477146;
                   pSize   =  $leftW * 0.057897622;
                   h6Size  =  $leftW * 0.046318097;

                   $ul.css({height: $ulH });
                   $h3.css({fontSize:h3Size});
                   $p.css({fontSize:pSize});
                   $h6.css({fontSize:h6Size});
              }
              //2. 반응형 resize() 메서드
              $(window).resize(function(){
                resizeFn();
              });
              //3. 실행
              setTimeout(resizeFn,100);
        },
        section10Fn:function(){
          var $section10 = $('#section10');
          var $section10Top = $('#section10').offset().top-400;
          var t = 0;

          //페럴럭스
          function scrollFn(){
            $section10.addClass('addAni');
          }
          $(window).scroll(function(){
            if($(this).scrollTop()==0){
              t=0;
              $section10.removeClass('addAni');
            }
            if($(this).scrollTop()>=$section10Top){
              if(t==0){
                t=1;
                scrollFn();

              }
            }
          })

        },
        footerFn:function(){
          //폼을 이용한 메일주소를 PHP(서버사이드 스크립트 언어)비동기 전송 AJAX
          var $submitBtn = $('#submitBtn');
          var $response = $('.response h3');
          var $frmEmail  = $('#frmEmail');
          var $msgWrap  = $('.msg-wrap');
          var $inputWrap  = $('.input-wrap');

              $submitBtn.on({
                click:function(event){
                  event.preventDefault(); //전송(submit)버튼 기능을 삭제
                  var emailValue  = $('#frmEmail').val(); //폼 입력상자 value
                  var frmCodeValue    = $('#frmCode').val();  //폼 입력상자 value
                      //유효성 검사
                      if(emailValue == ''){ //공백이면 버튼 누른 것을 취소시켜라
                        //alert('메일 주소를 입력하세요!');
                        $inputWrap.addClass('addAjax');
                        $frmEmail.focus(); //입력 대기상태로 이동 포커스
                        return false; //버튼 클릭 취소
                      }
                      else{
                        $inputWrap.removeClass('addAjax');
                        //AJAX 비동기전송 시작
                        $.ajax({
                            url : './response.php',//전송파일경로
                            type: 'POST',//전송방식
                            data:{
                                // 전송변수 : 입력값 변수, 
                                // 전송변수 : 입력값 변수 
                                     email : emailValue,
                                     code  : frmCodeValue
                            },
                            success:function( result ){ //성공했을 때
                              
                              $inputWrap.addClass('addAjax');
                              $response.html( result );

                              //성공메시지 띄우기
                              $msgWrap.fadeIn(1000);
                              setTimeout(msgFn,6000);
                              function msgFn(){
                                $frmEmail.val('');
                                //성공메시지 지우기
                                  $response.empty();
                                  //$response.children().remove();
                                  //$response.html('');
                                  
                                $inputWrap.removeClass('addAjax');
                                $msgWrap.fadeOut(1000);
                                $frmEmail.focus(); //다음 입력 대기상태 전환
                              }
                            },
                            error:function(msg){        //실패했을 때
                              console.log('AJAX 전송실패!!!');
                              console.log(msg);
                            }
                        });
                        
                      }
                }
              });
        },
        smoothScrollFn:function(){
          var $modalDemo = $('#modalDemo');
          var $smoothBtn = $('.smooothBtn');
          var $goTopBtnWrap = $('.goTopBtn-wrap');
          var t = 0;
              $smoothBtn.on({
                click:function(e){
                  e.preventDefault();
                  var url = $(this).attr('href');
                      $('html,body').stop().animate({scrollTop:$(url).offset().top},600);
                }
              });

              //창 너비가 1200초과이면 모달창 보이고
              //이하면 안보임
              function resizeFn(){
                if($(window).innerWidth()>1200){
                  $modalDemo.stop().fadeIn(1000);
                }
                else{
                  $modalDemo.stop().fadeOut(1000);
                }
              }
              resizeFn();
              setTimeout(resizeFn,100);
              $(window).resize(function(){
                resizeFn();
              });

              //최상단에서 100픽셀이상 아래로 스크롤하면
              //goTop 메뉴가 보이고
              //맨 위로 올라가면 안보인다
              $(window).scroll(function(){
                if($(this).scrollTop()>=100){ //100픽셀 미만이면 보여라
                  if(t==0){
                    t=1;
                    $goTopBtnWrap.stop().fadeIn(1000);
                    resizeFn();//모달창 반응형 실행
                  }
                   
                }
                else{
                  if(t==1){
                    t=0;
                    $goTopBtnWrap.stop().fadeOut(1000);
                  }
                  
                }
              });

        },
        demoModalFn:function(){
          //버튼.modal-btn 을 클릭하면
          //html 스크롤을 삭제하고 addClass(addModal);
          //#header 헤더를 위로 올려서 숨김. add('addHide');
          //데모 모달창#modalDemo 을 우측에서 좌측으로 부드럽게 슬라이딩 에니메이션 효과
          var $html      = $('html');
          var $header    = $('#header');
          var $modalDemo = $('#modalDemo');
          var $modalBtn  = $('.modal-btn');
          var $document  = $(document); //문서전체
              //target : 마우스 및 키보드 등 버튼 이벤트의 대상

              $modalBtn.on({
                click:function(event){
                  //event.currentTarget 클릭대상을 클릭한 상태에서 발생되는 자신의 이벤트 대상을 말한다. 즉 자기자신(현재의 타겟)
                  //모달 열기/닫기 버튼 클릭 시 부모에게로 전파되는 버튼이벤트를 차단시킨다.
                  //event.stopPropagation();
                  // console.log(event.currentTarget.nodeName);

                  $html     .toggleClass('addModal');
                  $header   .toggleClass('addHide');
                  $modalDemo.toggleClass('addModal');
                }
              });
              //모달창 전체 이벤트
              $modalDemo.on({
                click:function(event){
                  event.stopPropagation();
                  return false;
                }
              });
              //도큐먼트를 클릭대상으로 선택한 이유는
              //웹 문서의 전체 클릭 대상으로 선택자 선택
              //위에 클릭 이벤트 대상이 아닌 이벤트를 찾기 위해서 도큐먼트 사용
              $document.on({
                click:function(event){
                  
                 //닫고자하는 모달창 닫기버튼을 클릭해도 닫히고
                 //모든 클릭대상은 모달창을 닫게 해준다
                 //그래서 버튼 이벤트의 타겟과 현재 클릭한 이벤트 타겟이 다르면 창을 닫는다
                 //클릭하고자하는 버튼이 아닌 다른 것을 클릭하면 모달창을 닫는다.
                 if(event.target !== event.currentTarget){
                 //위에 클릭 이벤트 대상이 아닌 모든 것이 해당된다.
                  $html     .removeClass('addModal');
                  $header   .removeClass('addHide');
                  $modalDemo.removeClass('addModal');
                 }
                }
              });

        }
    } //객체 끝


    litho.init();

})(jQuery);