function auth(){
    var mashupcloud = {} 
    $.ajax({
        type:'get',
        async:true,
        url:"http://v2.mashupcloud.cn/developer/auth.do",
        data:{
            appkey:'zrTlQJVObtgiOUAhfhruLlOVisfFVStn' ,
            appsecret: 'WHesWOyIfybHYEpKByEIkcsmkqyUsdMV'                                       
        },
        success: function(json){
            json = JSON.parse(json)     
            mashupcloud.token = json[1]    
            mashupcloud.appid = json[2]   
        },
        error: function(json){                                      
            console.log("err:"+json);                                       
        }
    });
    return mashupcloud
}

export default auth() 


