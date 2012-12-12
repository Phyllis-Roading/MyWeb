

//导航栏
        function Navigation_over()
        {
             
             var str=document.getElementById("navigation");
             str.style.display="block";
        }
       
        function Navigation_out()
        {
             var str=document.getElementById("navigation");
             str.style.display="none";
        }
//导航栏结束   
//*************************************************
//邮箱        
        function mail_Occur()
        {
             var mail_str=document.getElementById("mail");
             mail_str.style.borderTopColor="black";
             mail_str.style.borderLeftColor="black";
             document.getElementById("mail_check_div_Y").style.display="none";
             document.getElementById("mail_check_div_N").style.display="none";
             document.getElementById("mail_tip").style.display="block";
             if(mail_str.value!="")
             {
                  mail_box_a_follow();
             }
        }
        
        function mail_Hiding()
        {
             var mail_str=document.getElementById("mail");
             mail_str.style.borderColor="";
             document.getElementById("mail_tip").style.display="none";
             document.getElementById("mail_box").style.display="none";
             if(mail_str.value.indexOf("@qq.com")>0 || mail_str.value.indexOf("@126.com")>0 
             || mail_str.value.indexOf("@163.com")>0 || mail_str.value.indexOf("@sina.com")>0 
             || mail_str.value.indexOf("@sina.cn")>0 || mail_str.value.indexOf("@hotmail.com")>0 
             || mail_str.value.indexOf("@gmail.com")>0 || mail_str.value.indexOf("@sohu.cn")>0 
             || mail_str.value.indexOf("@yahoo.cn")>0 || mail_str.value.indexOf("@139.cn")>0)
             {
                   document.getElementById("mail_check_div_Y").style.display="block";
             }
             else if(mail_str.value==""){}
             else{document.getElementById("mail_check_div_N").style.display="block";}
        }
        function mail_box_a_follow()
        {
             document.getElementById("mail_box").style.display="block";
             var mail_txt=document.getElementById("mail").value;
             if( mail_txt.indexOf("@")<0 )
             {
                 document.getElementById("mail_qq").innerHTML=mail_txt+"@qq.com";
                 document.getElementById("mail_126").innerHTML=mail_txt+"@126.com";
                 document.getElementById("mail_163").innerHTML=mail_txt+"@163.com";
                 document.getElementById("mail_sinaM").innerHTML=mail_txt+"@sina.com";
                 document.getElementById("mail_sinaN").innerHTML=mail_txt+"@sina.cn";
                 document.getElementById("mail_hotmail").innerHTML=mail_txt+"@hotmail.com";
                 document.getElementById("mail_gmail").innerHTML=mail_txt+"@gmail.com";
                 document.getElementById("mail_sohu").innerHTML=mail_txt+"@sohu.cn";
                 document.getElementById("mail_yahoo").innerHTML=mail_txt+"@yahoo.cn";
                 document.getElementById("mail_139").innerHTML=mail_txt+"@139.cn";                 
             }
        }
        
        function choosemail()
        {
            document.getElementById("mail").value="asdfdsfdsfsdf";
        }
        
//邮箱结束 
//*****************************************
//密码      
        function pwd_Occur()
        {
             document.getElementById("pwd").style.borderTopColor="black";
             document.getElementById("pwd").style.borderLeftColor="black";
             document.getElementById("pwd_check_div_Y").style.display="none";
             document.getElementById("pwd_check_div_N").style.display="none";
             document.getElementById("pwd_tip").style.display="block";
        }
        
        function pwd_Hiding()
        {
             var pwd_str=document.getElementById("pwd");
             pwd_str.style.borderColor="";
             document.getElementById("pwd_tip").style.display="none";
             if(pwd_str.value.length>=6 && pwd_str.value.length<=20)
             {
                 document.getElementById("pwd_check_div_Y").style.display="block";
             }
             else if(pwd_str.value==""){}
             else{document.getElementById("pwd_check_div_N").style.display="block";}
        }
//密码结束
//*******************************************
//姓名
        function user_name_Occur()
        {
             document.getElementById("user_name").style.borderTopColor="black";
             document.getElementById("user_name").style.borderLeftColor="black";
             document.getElementById("user_name_tip").style.display="block";
             
        }
        
        function user_name_Hiding()
        {
             document.getElementById("user_name").style.borderColor="";
             document.getElementById("name_tip").style.display="none";
        }
//姓名结束
  //*********************************   
  //性别
       function sex_checkbox()
       {
            document.getElementById("sex_check_div_Y").style.display="block";
       }
 // 性别结束
 //**************************************
 //日期
function panduan()
{
    var year=document.getElementById("year").selectedIndex;
    var month=document.getElementById("month").selectedIndex;
    
    switch(month)
    {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
             document.getElementById("day29").style.display="inline";
             document.getElementById("day30").style.display="inline";
             document.getElementById("day31").style.display="inline";
             break;
        case 4:
        case 6:
        case 9:
        case 11:
             document.getElementById("day29").style.display="inline";
             document.getElementById("day30").style.display="inline";
             document.getElementById("day31").style.display="none";
             break;
        default:
            if(runnian(year))
            {
                document.getElementById("day29").style.display="inline";
                document.getElementById("day30").style.display="none";
                document.getElementById("day31").style.display="none";
            }
            else
            {
                document.getElementById("day29").style.display="none";
                document.getElementById("day30").style.display="none";
                document.getElementById("day31").style.display="none";
            }
            break;
        
    }
}
function runnian(year)//判断是否是闰年
{
    if((year%4==0&&year%100!=0)||(year%400==0))
        return true;
    else
        return false;
}
function date_select()
{
    if(document.getElementById("year").value1="请选择" && document.getElementById("month").value!="--" && document.getElementById("day").value!="--")
    {
          document.getElementById("birthday_check_div_Y").style.display="block";
    }
}
//日期结束
//**********************************
 //现状
      function state_checkbox()
      {
           document.getElementById("state_check_div_Y").style.display="block";
      }
 //现状结束
 //页面加载
 //城市选择
 
 function city_choose()
 {
     document.getElementById("city_box").style.display="block";
 }
 
 function city_close()
 {
     document.getElementById("city_box").style.display="none";
 }
 //
 //函数调用       
window.onload=function ()
{
    if(navigator.appName=="Microsoft Internet Explorer")
    {
         document.getElementById("daohang").attachEvent("onmouseover",Navigation_over);
         document.getElementById("daohang").attachEvent("onmouseout",Navigation_out );
         document.getElementById("navigation").attachEvent("onmouseover",Navigation_over );
         document.getElementById("navigation").attachEvent("onmouseout",Navigation_out );
         document.getElementById("mail").attachEvent("onfocus",mail_Occur );
         document.getElementById("mail").attachEvent("onblur",mail_Hiding );
         document.getElementById("mail").attachEvent("onkeyup",mail_box_a_follow );
         document.getElementById("pwd").attachEvent("onfocus",pwd_Occur );
         document.getElementById("pwd").attachEvent("onblur",pwd_Hiding );
         document.getElementById("user_name").attachEvent("onfocus",user_name_Occur );
         document.getElementById("user_name").attachEvent("onblur",user_name_Hiding );
          //选择邮箱类型
          
         document.getElementById("checkbox_M").attachEvent("onclick",sex_checkbox );
         document.getElementById("checkbox_W").attachEvent("onclick",sex_checkbox );
         document.getElementById("checkbox_working").attachEvent("onclick",state_checkbox );
         document.getElementById("checkbox_studying").attachEvent("onclick",state_checkbox );

    }
    else
    {
         document.getElementById("daohang").addEventListener("mouseover",Navigation_over,false);
         document.getElementById("daohang").addEventListener("mouseout",Navigation_out,false);
         document.getElementById("navigation").addEventListener("mouseover",Navigation_over,false);
         document.getElementById("navigation").addEventListener("mouseout",Navigation_out,false);
         document.getElementById("mail").addEventListener("focus",mail_Occur,false);
         document.getElementById("mail").addEventListener("blur",mail_Hiding,false);
         document.getElementById("mail").addEventListener("keyup",mail_box_a_follow,false);
         document.getElementById("pwd").addEventListener("focus",pwd_Occur,false);
         document.getElementById("pwd").addEventListener("blur",pwd_Hiding,false);
         document.getElementById("user_name").addEventListener("focus",user_name_Occur,false);
         document.getElementById("user_name").addEventListener("blur",user_name_Hiding,false);
         //选择邮箱类型
         document.getElementById("mail_qq").addEventListener("click",choosemail,false);
         document.getElementById("checkbox_M").addEventListener("click",sex_checkbox,false);
         document.getElementById("checkbox_W").addEventListener("click",sex_checkbox,false);
         document.getElementById("checkbox_working").addEventListener("click",state_checkbox,false);
         document.getElementById("checkbox_studying").addEventListener("click",state_checkbox,false);
         
         document.getElementById("month").addEventListener("change",panduan,false);
         document.getElementById("day").addEventListener("change",date_select,false);

    }

}