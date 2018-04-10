window.onload = function(){
    var hour_forward = document.getElementsByClassName('hour_forward');
    var hour_back = document.getElementsByClassName('hour_back');
    var min_forward = document.getElementsByClassName('min_forward');
    var min_back = document.getElementsByClassName('min_back');
    var sec_forward = document.getElementsByClassName('sec_forward');
    var sec_back = document.getElementsByClassName('sec_back');
    var getTimeFlag = true;

    initialList()

    function initialList(){
        var sec_f = 0 , sec_b = 0;
        var min_f = 0 , min_b = 0;
        var hour_f = 0 , hour_b = 0;
        var hour_str = ""
        var hour_f_flag = false;
        var hour_b_flag = false;
        var min_f_flag = false;
        var min_b_flag = false;
        var sec_f_flag = false;
        var sec_b_flag = false;
        var arr = [];        
        
        var timer = setInterval(function(){
            if(getTimeFlag){
                arr = getTime(hour_f,hour_b,min_f,min_b,sec_f,sec_b);
                hour_f = arr[0] ;
                hour_b = arr[1] ;
                min_f = arr[2] ;
                min_b = arr[3] ;
                sec_f = arr[4] ;
                sec_b = arr[5] ;
            }
            sec_b_flag=!sec_b_flag;
            sec_b++;
            if(sec_b==10){
                sec_f_flag=!sec_f_flag;
                sec_b=0;
                sec_f+=1
                ismove("s_f",sec_forward,sec_f_flag,sec_f)
                if(sec_f==6){
                    min_b_flag=!min_b_flag;
                    sec_f=0;
                    min_b+=1;
                    ismove("s_b",min_back,min_b_flag,min_b)
                    if(min_b==10){
                        min_f_flag=!min_f_flag;
                        min_b=0;
                        min_f+=1;
                        ismove("s_f",min_forward,min_f_flag,min_f)
                        if(min_f==6){
                            hour_b_flag=!hour_b_flag;
                            min_f=0;
                            hour_b+=1;
                            if(hour_b==10){
                                hour_b=0;
                                hour_f+=1;
                                ismove("h_f",hour_forward,hour_f_flag,hour_f)
                            }
                            hour_str=parseInt(hour_f+""+hour_b);
                            if(hour_str==24){
                                hour_b=0;
                                hour_f=0;
                                ismove("h_f",hour_forward,hour_f_flag,hour_f)
                            }
                            ismove("h_b",hour_back,hour_b_flag,hour_b)
                        }
                    }
                }
            }
            ismove("s_b",sec_back,sec_b_flag,sec_b)            
            // console.log(""+hour_f+hour_b+":"+min_f+min_b+":"+sec_f+sec_b)
        }, 1000)
    }

    

    function ismove(type,ele,flag,timeNum){ 
        for(let i=0;i<ele.length;i++){ 
            if(ele[i].classList.value.indexOf("move")>0){
                ele[i].classList.remove('move')
                ele[i].style.top=ele[i].offsetTop-100+"px";
            }   
        }
        for(let i=0;i<ele.length;i++){
            if(ele[i].offsetTop==-100){
                ele[i].style.top="100px"; 
                ele[i].classList.add("move");  
            }else{
                ele[i].classList.add("move");   
            }
        }
        setTimeout(function(){
            putTimeToList(type,ele,flag,timeNum)
        },999)
    }

    function putTimeToList(type,li,flag,timeNum){
        var num = flag?0:1;
        switch (type) {
            case "h_f":
                li[num].innerHTML=timeNum+1;
                break;
            case "h_b":
                li[num].innerHTML=(timeNum+1)%10;
                break;
            case "s_f":
                li[num].innerHTML=(timeNum+1)%6;
                break;

            case "s_b":                
                li[num].innerHTML=(timeNum+1)%10;                         
                break;

            default:
                // statements_def
                break;
        }
    }

    function getTime(h_f,h_b,m_f,m_b,s_f,s_b){
        var hour = new Date().getHours();
        var min = new Date().getMinutes();
        var sec = new Date().getSeconds();
        if(hour<10){
            h_f=0;
            h_b=hour;
            hour_forward[0].innerHTML = h_f
            hour_forward[1].innerHTML = (h_f+1)%6
            hour_back[0].innerHTML = h_b
            hour_back[1].innerHTML = (h_b+1)%10
        }else{
            h_f=Math.floor(hour/10)
            h_b=hour%10;
            hour_forward[0].innerHTML = h_f
            hour_forward[1].innerHTML = (h_f+1)%6
            hour_back[0].innerHTML = h_b
            hour_back[1].innerHTML = (h_b+1)%10
        }
        if(min<10){
            m_f=0;
            m_b=min;
            min_forward[0].innerHTML = m_f
            min_forward[1].innerHTML = (m_f+1)%6
            min_back[0].innerHTML = m_b
            min_back[1].innerHTML = (m_b+1)%10
        }else{
            m_f=Math.floor(min/10);
            m_b=min%10;
            min_forward[0].innerHTML = m_f
            min_forward[1].innerHTML = (m_f+1)%6
            min_back[0].innerHTML = m_b
            min_back[1].innerHTML = (m_b+1)%10
        }
        if(sec<10){
            s_f=0;
            s_b=sec;
            sec_forward[0].innerHTML = s_f
            sec_forward[1].innerHTML = (s_f+1)%6
            sec_back[0].innerHTML = s_b
            sec_back[1].innerHTML = (s_b+1)%10
        }else{
            s_f=Math.floor(sec/10);
            s_b=sec%10;
            sec_forward[0].innerHTML = s_f
            sec_forward[1].innerHTML = (s_f+1)%6
            sec_back[0].innerHTML = s_b
            sec_back[1].innerHTML = (s_b+1)%10
        }
        getTimeFlag = false;
        return [h_f,h_b,m_f,m_b,s_f,s_b]
    }
}
