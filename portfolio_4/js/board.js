;(function($){
        var  board = { 
              init:function(){
                this.boardFn();
              },
              boardFn:function(){
                  var $tbody = $('.board tbody');
                  var $prevBtn = $('.prev-btn');
                  var $nextBtn = $('.next-btn');
                  var $pageNumberBox = $('.page-number-box ul'); 
                  var $pageBtn = $('.page-btn');
                  var $fisrtPrevBtn = $('.goprev');
                  var $lastNextBtn = $('.gonext');
  
                  var a = [];
                  var txt = '';
                  var list = 5; 
                  var total = 51; 
                  var totalPageNum = 11;
  
                  var pageNumList = 5;
                  var pageGroupNum = Math.ceil(totalPageNum / pageNumList);
  
                  var startNum = 0;
                  var endNum = list;
  
                  var groupCnt = 0; 
                  var groupStartNum = groupCnt * pageNumList;
                  var groupEndNum = groupStartNum + pageNumList;        
  
  
  
  
                      function ajaxRunFn(){
                         
                          //ajax
                          $.ajax({
                              url:'./data/board.json',
                              dataType:'JSON',
                              success:function(result){
  
                                $.each(result.notice, function(idx, obj){
                                    a[idx] = [];
  
                                    a[idx][0] = obj.NO;
                                    a[idx][1] = obj.Title;
                                    a[idx][2] = obj.Date;
                                    a[idx][3] = obj.View;
  
                                });
  
                                total = a.length; 
                                function listOutputFn(){  
                                    txt = ''; 
                                    $tbody.empty(); 
                                    
                                    for(var i=startNum; i<endNum; i++){
                                      txt += "<tr>";
                                      for(var j=0; j<=3; j++){
                                        txt += "<td>"+ a[i][j]  +"</td>";                                   
                                      } 
                                      txt += "</tr>"; 
                                    } 
                                    
                                    $tbody.html( txt ); 
  
                                    txt = '';
                                    totalPageNum = Math.ceil( total / list );                    
      
                                }                          

                                listOutputFn();

                                //페이지네이션
                                function pageNation(){
                                    
                                    $pageNumberBox.html('');
                                    txt = '';
  
                                    groupStartNum = groupCnt * pageNumList; 
                                    groupEndNum = groupStartNum + pageNumList; 
  
                                    if( groupEndNum > totalPageNum ){ 
                                      groupEndNum = totalPageNum;
                                    }
  
                                    for(var i=groupStartNum; i<groupEndNum; i++){
                                      if(i % pageNumList == 0){
                                        txt += '<li><a href="#" class="page-btn addPage">'+ (i+1) +'</a></li>'
                                      }
                                      else{
                                        txt += '<li><a href="#" class="page-btn">'+ (i+1) +'</a></li>'
                                      }                                  
                                    }
                                    $pageNumberBox.html( txt );
                                    $pageBtn = $('.page-btn');
                                    
                                    startNum = (parseInt($pageBtn.eq(0).text())-1) * list;
                                    endNum = startNum + list;
                                    if( endNum > total ){
                                        endNum = total; 
                                    }
                                    listOutputFn();
  
                                }
                               
                                setTimeout(pageNation, 10);
                                
  
                                //좌우 화살 그룹 버튼 클릭 이벤트
                                $prevBtn.on({
                                    click:function(event){
                                      event.preventDefault();
  
                                      groupCnt--; 
                                      if(groupCnt<0){
                                        groupCnt=0;
                                      }
                                      pageNation();
  
                                    }
                                });
                                $fisrtPrevBtn.on({
                                    click:function(event){
                                      event.preventDefault();
  
                                      groupCnt=0;
                                      pageNation();
  
                                    }
                                });
                                $nextBtn.on({
                                    click:function(event){
                                      event.preventDefault();
  
                                      groupCnt++;
                                      if(groupCnt>pageGroupNum-1){ 
                                        groupCnt=pageGroupNum-1; 
                                      }   
                                      pageNation();                                    
                                    }
                                });
                                $lastNextBtn.on({
                                    click:function(event){
                                      event.preventDefault();
    
                                      groupCnt=pageGroupNum-1; 
                                      pageNation();
    
                                    }
                                });
                        
                                $(document).on('mouseenter', '.page-btn', function(){
                                    $pageBtn.each(function(idx){
                                        $(this).on({
                                          click: function(event){
                                              event.preventDefault();
  
                                              $pageBtn.removeClass('addPage');
                                              $(this).addClass('addPage');
  
                                              startNum = (parseInt($(this).text())-1) * list;
                                              endNum = startNum + list;
                                              if( endNum > total ){
                                                  endNum = total;
                                              }
                                              listOutputFn();
  
                                          }
                                        });
                                    });
                                });
                              
                              },
                              error:function(){
                                  alert('AJAX Error!');
                              }
                          });
  
                      }
  
                      setTimeout(ajaxRunFn,100);
  
              }
        }
  
        board.init();
  
  
  })(jQuery);