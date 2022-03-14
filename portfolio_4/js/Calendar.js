;(function($){

    var timer = {      
        init: function(){
          
          this.calendarFn();
          this.calendar2Fn();

        },
        calendarFn: function(){
            var today   = null;

            var year    = null;
            var month   = null;
            var date    = null;
            var day     = null;

            var y       = 0;
            var m       = 0; 
            function timerFn(){
                today   = new Date()
                year    = today.getFullYear();
                month   = today.getMonth()+1;
                date    = today.getDate(); 
                day     = today.getDay();
                yoil    = ['日','月','火','水','木','金','土'];
                
                txt = year + '-' +  (month+1) + '-' + date +'-' + yoil[day];  

            }
            setInterval(function(){
                timerFn();
            }, 1000);
            timerFn();

            var firstDay = null;
            var lastDate = null;

            var col = null; 
            var prevLastDate = null;
            var cnt = 0;

            function calendarFn( y, m ){
                col = null;
                prevLastDate = null;
                cnt = 0;

                $('.calendar-box01 .date').html( y + '年 ' +  m + '月' );
                $('.calendar-box01 td').removeClass('now');
                var nowYear = new Date().getFullYear();
                var nowMonth = new Date().getMonth()+1;
                var nowDate  = new Date().getDate();

                firstDay = new Date( y + '-' + m + '-' + 1).getDay();
                col = firstDay; 
                prevLastDate = new Date( y, m-1, 0).getDate(); 
                lastDate = new Date( y, m, 0).getDate();
                
                for(var i=1; i<=lastDate; i++){ 
                    if( col !== null ){
                        $('.calendar-box01 td').eq(col).html( i );
                        if( nowYear == y && nowMonth == m  ){                                                        
                            if( nowDate == i ){
                                $('.calendar-box01 td').eq(col).addClass('now');    
                            }                                                    
                        }
                        else{
                            $('.calendar-box01 td').removeClass('now');
                        }

                        col++; 

                    }
                }

                //이전 빈칸채우기
                for(var i=firstDay-1; i>=0; i--){
                    $('.calendar-box01 td').eq(i).html(prevLastDate).addClass('color1');
                    prevLastDate--;
                }

                //다음 빈칸채우기
                for(var i=col; i<$('.calendar-box01 td').length; i++){
                    cnt++;
                    $('.calendar-box01 td').eq(i).html( cnt ).addClass('color1');
                }



            }
            calendarFn( year, month );

            y = year;
            m = month;

            //다음 달 버튼 클릭 
            $('.next-btn').on({
                click:  function(){
                    m++;
                    if(m>12){
                        m=1; 
                        y++; 
                    }
                    $('.calendar-box01 td').removeClass('color1');
                    calendarFn( y, m );

                }
            });

            //이전 달 버튼 클릭 
            $('.prev-btn').on({
                click:  function(){
                    m--;
                    if(m<1){
                        m=12;
                        y--;
                    }
                    $('.calendar-box01 td').removeClass('color1'); 
                    calendarFn( y, m );

                }
            });


        },
        calendar2Fn: function(){
            var today   = null;

            var year    = null;
            var month   = null;
            var date    = null;
            var day     = null;

            var y       = 0;
            var m       = 0; 
            function timerFn(){
                today   = new Date()
                year    = today.getFullYear();
                month   = today.getMonth()+1;
                date    = today.getDate(); 
                day     = today.getDay();
                yoil    = ['日','月','火','水','木','金','土'];
                
                txt = year + '-' +  (month+1) + '-' + date +'-' + yoil[day];  

            }
            setInterval(function(){
                timerFn();
            }, 1000);
            timerFn();

            var firstDay = null;
            var lastDate = null;

            var col = null; 
            var prevLastDate = null;
            var cnt = 0;

            function calendarFn( y, m ){
                col = null;
                prevLastDate = null;
                cnt = 0;

                $('.calendar-box02 .date').html( y + '年 ' +  m + '月' );
                $('.calendar-box02 td').removeClass('now');
                var nowYear = new Date().getFullYear();
                var nowMonth = new Date().getMonth()+1;
                var nowDate  = new Date().getDate();

                firstDay = new Date( y + '-' + m + '-' + 1).getDay();
                col = firstDay; 
                prevLastDate = new Date( y, m-1, 0).getDate(); 
                lastDate = new Date( y, m, 0).getDate();
                
                for(var i=1; i<=lastDate; i++){ 
                    if( col !== null ){
                        $('.calendar-box02 td').eq(col).html( i );
                        if( nowYear == y && nowMonth == m  ){                                                        
                            if( nowDate == i ){
                                $('.calendar-box02 td').eq(col).addClass('now');    
                            }                                                    
                        }
                        else{
                            $('.calendar-box02 td').removeClass('now');
                        }

                        col++; 

                    }
                }

                //이전 빈칸채우기
                for(var i=firstDay-1; i>=0; i--){
                    $('.calendar-box02 td').eq(i).html(prevLastDate).addClass('color1');
                    prevLastDate--;
                }

                //다음 빈칸채우기
                for(var i=col; i<$('.calendar-box02 td').length; i++){
                    cnt++;
                    $('.calendar-box02 td').eq(i).html( cnt ).addClass('color1');
                }



            }
            calendarFn( year, month );

            y = year;
            m = month;

            //다음 달 버튼 클릭 
            $('.next-btn2').on({
                click:  function(){
                    m++;
                    if(m>12){
                        m=1; 
                        y++; 
                    }
                    $('.calendar-box02 td').removeClass('color1');
                    calendarFn( y, m );

                }
            });

            //이전 달 버튼 클릭 
            $('.prev-btn2').on({
                click:  function(){
                    m--;
                    if(m<1){
                        m=12;
                        y--;
                    }
                    $('.calendar-box02 td').removeClass('color1'); 
                    calendarFn( y, m );

                }
            });


        }    
    } //객체 끝

    timer.init();


})(jQuery);